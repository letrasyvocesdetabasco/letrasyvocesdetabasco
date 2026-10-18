/**
 * Boletín «Entre ríos» · Letras y Voces de Tabasco, A.C.
 * Lista de suscriptores en Google Sheets + envío desde la cuenta de Gmail de la Sociedad.
 *
 * Qué hace:
 *  - Recibe suscripciones desde el sitio web (doPost) y envía un correo de doble confirmación.
 *  - Confirma y da de baja con enlaces personales (doGet ?accion=confirmar|baja&t=TOKEN).
 *  - Envía cada número publicado en el sitio (/boletin/<slug>/correo.html) a quienes confirmaron,
 *    con enlace de baja personal, registro de envíos y continuación automática si se agota la cuota diaria.
 *
 * Instalación paso a paso: docs/BOLETIN.md del repositorio del sitio.
 */

const CONFIG = {
  SITIO: 'https://letrasyvocesdetabasco.org',
  NOMBRE: 'Entre ríos',
  REMITENTE: 'Letras y Voces de Tabasco',
  RESPONDER_A: 'contacto@letrasyvocesdetabasco.org',
  HOJA_SUSCRIPTORES: 'Suscriptores',
  HOJA_ENVIOS: 'Envíos',
  VERSION_AVISO: 'Aviso de privacidad del 18-10-2026',
  MAX_CONFIRMACIONES_DIA: 60, // protege la cuota de correo ante abusos del formulario
};

const COLUMNAS = ['correo', 'nombre', 'estado', 'intereses', 'origen', 'pagina', 'alta', 'confirmacion', 'baja', 'ultimo_aviso', 'envios', 'ultimo_envio', 'consentimiento', 'token', 'notas'];
const ESTADOS = ['pendiente', 'confirmado', 'baja'];

// ======================================================================= Menú
function onOpen() {
  SpreadsheetApp.getUi().createMenu('Boletín Entre ríos')
    .addItem('1. Preparar hojas', 'prepararHojas')
    .addItem('Agregar suscriptor…', 'menuAgregarSuscriptor')
    .addSeparator()
    .addItem('Enviar prueba a mi correo…', 'menuEnviarPrueba')
    .addItem('Enviar número a suscriptores…', 'menuEnviarNumero')
    .addItem('Ver estado y cuota de hoy', 'menuEstado')
    .addSeparator()
    .addItem('Mostrar URL para el sitio web', 'menuMostrarUrl')
    .addToUi();
}

function prepararHojas() {
  const libro = SpreadsheetApp.getActiveSpreadsheet();
  PropertiesService.getScriptProperties().setProperty('ID_LIBRO', libro.getId());
  let s = libro.getSheetByName(CONFIG.HOJA_SUSCRIPTORES) || libro.insertSheet(CONFIG.HOJA_SUSCRIPTORES);
  if (s.getLastRow() === 0) s.appendRow(COLUMNAS);
  s.getRange(1, 1, 1, COLUMNAS.length).setFontWeight('bold').setBackground('#222222').setFontColor('#ffffff');
  s.setFrozenRows(1);
  s.setColumnWidth(1, 260); s.setColumnWidth(2, 160); s.setColumnWidth(4, 260); s.setColumnWidth(14, 120);
  const reglaEstado = SpreadsheetApp.newDataValidation().requireValueInList(ESTADOS, true).build();
  s.getRange(2, 3, 1000, 1).setDataValidation(reglaEstado);
  const rango = s.getRange(2, 1, 1000, COLUMNAS.length);
  s.setConditionalFormatRules([
    SpreadsheetApp.newConditionalFormatRule().whenFormulaSatisfied('=$C2="confirmado"').setBackground('#E8F4EA').setRanges([rango]).build(),
    SpreadsheetApp.newConditionalFormatRule().whenFormulaSatisfied('=$C2="pendiente"').setBackground('#FFF6E5').setRanges([rango]).build(),
    SpreadsheetApp.newConditionalFormatRule().whenFormulaSatisfied('=$C2="baja"').setFontColor('#999999').setRanges([rango]).build(),
  ]);
  let e = libro.getSheetByName(CONFIG.HOJA_ENVIOS) || libro.insertSheet(CONFIG.HOJA_ENVIOS);
  if (e.getLastRow() === 0) e.appendRow(['fecha', 'numero', 'correo', 'resultado', 'detalle']);
  e.getRange(1, 1, 1, 5).setFontWeight('bold').setBackground('#222222').setFontColor('#ffffff');
  e.setFrozenRows(1);
  const sobrante = libro.getSheetByName('Hoja 1') || libro.getSheetByName('Sheet1');
  if (sobrante && libro.getSheets().length > 2 && sobrante.getLastRow() === 0) libro.deleteSheet(sobrante);
  SpreadsheetApp.getUi && SpreadsheetApp.getActiveSpreadsheet().toast('Hojas listas.', CONFIG.NOMBRE, 5);
}

// ======================================================================= Sitio web
function doPost(e) {
  const p = (e && e.parameter) || {};
  if (p.sitio_web) return json_({ ok: true });
  const correo = String(p.correo || '').trim().toLowerCase();
  if (!correoValido_(correo)) return json_({ ok: false, error: 'correo' });
  const nombre = limpiar_(p.nombre, 80);
  const intereses = limpiar_(p.intereses, 200);
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const hoja = hojaSuscriptores_();
    const f = buscarPorCorreo_(hoja, correo);
    const ahora = new Date();
    if (f && f.d.estado === 'confirmado') return json_({ ok: true, estado: 'confirmado' });
    if (!puedeConfirmarHoy_()) return json_({ ok: false, error: 'limite' });
    let token;
    if (f) {
      token = f.d.token || Utilities.getUuid();
      const ultimo = f.d.ultimo_aviso ? new Date(f.d.ultimo_aviso) : null;
      escribir_(hoja, f.fila, { estado: 'pendiente', nombre: nombre || f.d.nombre, intereses: intereses || f.d.intereses, token, baja: '' });
      if (ultimo && ahora - ultimo < 10 * 60 * 1000) return json_({ ok: true, estado: 'pendiente' });
    } else {
      token = Utilities.getUuid();
      agregar_(hoja, { correo, nombre, estado: 'pendiente', intereses, origen: limpiar_(p.origen, 40) || 'web', pagina: limpiar_(p.pagina, 120), alta: ahora, envios: 0, consentimiento: 'Formulario web · ' + CONFIG.VERSION_AVISO, token });
    }
    enviarConfirmacion_(correo, nombre, token);
    const g = buscarPorCorreo_(hoja, correo);
    if (g) escribir_(hoja, g.fila, { ultimo_aviso: ahora });
    return json_({ ok: true, estado: 'pendiente' });
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  const p = (e && e.parameter) || {};
  const accion = p.accion, token = String(p.t || '');
  if (!accion) return json_({ ok: true, servicio: CONFIG.NOMBRE });
  const hoja = hojaSuscriptores_();
  const f = token ? buscarPorToken_(hoja, token) : null;
  if (!f) return pagina_('Enlace no válido', 'No encontramos esta suscripción. Es posible que el enlace esté incompleto. Si quieres recibir el boletín, suscríbete de nuevo en nuestro sitio.', [['Ir al boletín', CONFIG.SITIO + '/boletin']]);
  if (accion === 'confirmar') {
    if (f.d.estado !== 'confirmado') escribir_(hoja, f.fila, { estado: 'confirmado', confirmacion: new Date(), baja: '' });
    return pagina_('¡Suscripción confirmada!', 'Gracias por acompañarnos. Recibirás «' + CONFIG.NOMBRE + '» la primera semana de cada mes con la agenda del taller, novedades del fondo editorial y un texto para leer completo.', [['Leer números anteriores', CONFIG.SITIO + '/boletin'], ['Ir al sitio', CONFIG.SITIO]]);
  }
  if (accion === 'baja') {
    if (f.d.estado !== 'baja') escribir_(hoja, f.fila, { estado: 'baja', baja: new Date() });
    const volver = ScriptApp.getService().getUrl() + '?accion=confirmar&t=' + encodeURIComponent(token);
    return pagina_('Te diste de baja', 'Ya no te enviaremos el boletín. Gracias por el tiempo que nos leíste. Si fue un error, puedes volver a suscribirte con un clic.', [['Volver a suscribirme', volver], ['Ir al sitio', CONFIG.SITIO]]);
  }
  return pagina_('Acción no reconocida', 'Revisa el enlace que recibiste por correo.', [['Ir al sitio', CONFIG.SITIO]]);
}

// ======================================================================= Envío del boletín
function menuEnviarPrueba() {
  const ui = SpreadsheetApp.getUi();
  const n = elegirNumero_(ui); if (!n) return;
  const yo = Session.getEffectiveUser().getEmail();
  enviarNumeroA_(n, { correo: yo, nombre: '', token: 'PRUEBA' }, true);
  ui.alert('Prueba enviada', 'Enviamos el número ' + n.numero + ' a ' + yo + ' con el asunto marcado como [Prueba]. Revísalo en el celular y en la computadora antes de mandarlo a la lista.', ui.ButtonSet.OK);
}

function menuEnviarNumero() {
  const ui = SpreadsheetApp.getUi();
  const n = elegirNumero_(ui); if (!n) return;
  const pendientes = destinatariosPendientes_(n.slug);
  const cuota = MailApp.getRemainingDailyQuota();
  if (!pendientes.length) { ui.alert('No hay a quién enviar', 'Todas las personas confirmadas ya recibieron el número ' + n.numero + ', o aún no hay suscripciones confirmadas.', ui.ButtonSet.OK); return; }
  const r = ui.alert('Enviar número ' + n.numero, 'Se enviará «' + n.asunto + '» a ' + pendientes.length + ' personas confirmadas.\nCuota de correo disponible hoy: ' + cuota + '.\n' + (pendientes.length > cuota ? 'El resto se enviará automáticamente mañana.\n' : '') + '\n¿Continuar?', ui.ButtonSet.YES_NO);
  if (r !== ui.Button.YES) return;
  PropertiesService.getScriptProperties().setProperty('ENVIO_EN_CURSO', n.slug);
  continuarEnvio();
  ui.alert('Envío en marcha', 'Revisa la hoja «' + CONFIG.HOJA_ENVIOS + '» para ver el avance. Al terminar recibirás un resumen por correo.', ui.ButtonSet.OK);
}

function continuarEnvio() {
  const props = PropertiesService.getScriptProperties();
  const slug = props.getProperty('ENVIO_EN_CURSO'); if (!slug) return;
  const n = cargarNumero_(slug);
  const lista = destinatariosPendientes_(slug);
  let enviados = 0;
  for (const s of lista) {
    if (MailApp.getRemainingDailyQuota() < 2) { programarContinuacion_(); return; }
    try { enviarNumeroA_(n, s, false); registrarEnvio_(slug, s.correo, 'enviado', ''); marcarEnviado_(s.fila); enviados++; }
    catch (err) { registrarEnvio_(slug, s.correo, 'error', String(err).slice(0, 200)); }
    Utilities.sleep(400);
  }
  props.deleteProperty('ENVIO_EN_CURSO');
  borrarDisparadores_();
  MailApp.sendEmail(Session.getEffectiveUser().getEmail(), 'Boletín ' + CONFIG.NOMBRE + ': envío terminado (núm. ' + n.numero + ')', 'El número ' + n.numero + ' (' + n.mes + ') terminó de enviarse. En esta última tanda salieron ' + enviados + ' correos. Detalle en la hoja «' + CONFIG.HOJA_ENVIOS + '».');
}

function enviarNumeroA_(n, s, prueba) {
  const baja = s.token === 'PRUEBA' ? CONFIG.SITIO + '/boletin' : ScriptApp.getService().getUrl() + '?accion=baja&t=' + encodeURIComponent(s.token);
  const saludo = s.nombre ? 'Hola, ' + s.nombre.split(' ')[0] + ':' : null;
  let html = n.html.replace(/\{\{BAJA_URL\}\}/g, baja);
  let texto = n.texto.replace(/\{\{BAJA_URL\}\}/g, baja);
  if (saludo) { html = html.replace(/<!--SALUDO-->[\s\S]*?<!--\/SALUDO-->/, escapar_(saludo)); texto = texto.replace(/<!--SALUDO-->[\s\S]*?<!--\/SALUDO-->/, saludo); }
  else { texto = texto.replace(/<!--\/?SALUDO-->/g, ''); }
  MailApp.sendEmail({ to: s.correo, subject: (prueba ? '[Prueba] ' : '') + n.asunto, body: texto, htmlBody: html, name: CONFIG.REMITENTE, replyTo: CONFIG.RESPONDER_A });
}

function cargarNumero_(slug) {
  const indice = JSON.parse(obtener_(CONFIG.SITIO + '/boletin/numeros.json'));
  const meta = indice.numeros.filter(function (x) { return x.slug === slug; })[0];
  if (!meta) throw new Error('El número «' + slug + '» no está publicado en el sitio.');
  return { numero: meta.numero, slug: slug, mes: meta.mes, asunto: meta.asunto, html: obtener_(CONFIG.SITIO + '/boletin/' + slug + '/correo.html'), texto: obtener_(CONFIG.SITIO + '/boletin/' + slug + '/correo.txt') };
}

function elegirNumero_(ui) {
  let indice;
  try { indice = JSON.parse(obtener_(CONFIG.SITIO + '/boletin/numeros.json')); } catch (err) { ui.alert('No pudimos leer los números del sitio: ' + err); return null; }
  const lista = indice.numeros.map(function (x) { return '· ' + x.slug + ' (núm. ' + x.numero + ', ' + x.estado + ')'; }).join('\n');
  const sugerido = indice.numeros[indice.numeros.length - 1].slug;
  const r = ui.prompt('¿Qué número?', 'Escribe el identificador del número:\n' + lista + '\n\n(Deja vacío para usar «' + sugerido + '»)', ui.ButtonSet.OK_CANCEL);
  if (r.getSelectedButton() !== ui.Button.OK) return null;
  const slug = r.getResponseText().trim() || sugerido;
  try { return cargarNumero_(slug); } catch (err) { ui.alert(String(err)); return null; }
}

// ======================================================================= Alta manual y estado
function menuAgregarSuscriptor() {
  const ui = SpreadsheetApp.getUi();
  const r1 = ui.prompt('Agregar suscriptor', 'Correo electrónico:', ui.ButtonSet.OK_CANCEL);
  if (r1.getSelectedButton() !== ui.Button.OK) return;
  const correo = r1.getResponseText().trim().toLowerCase();
  if (!correoValido_(correo)) { ui.alert('Ese correo no parece válido.'); return; }
  const r2 = ui.prompt('Agregar suscriptor', 'Nombre (opcional):', ui.ButtonSet.OK_CANCEL);
  if (r2.getSelectedButton() !== ui.Button.OK) return;
  const nombre = limpiar_(r2.getResponseText(), 80);
  const r3 = ui.alert('¿Cómo confirmamos?', '«Sí»: enviar un correo para que la persona confirme (recomendado).\n«No»: marcarla como confirmada porque ya lo pidió por escrito desde ese mismo correo.', ui.ButtonSet.YES_NO_CANCEL);
  if (r3 === ui.Button.CANCEL) return;
  const hoja = hojaSuscriptores_();
  if (buscarPorCorreo_(hoja, correo)) { ui.alert('Ese correo ya está en la lista.'); return; }
  const token = Utilities.getUuid();
  const directo = r3 === ui.Button.NO;
  agregar_(hoja, { correo, nombre, estado: directo ? 'confirmado' : 'pendiente', origen: 'manual', alta: new Date(), confirmacion: directo ? new Date() : '', envios: 0, consentimiento: directo ? 'Solicitud escrita de la persona · ' + CONFIG.VERSION_AVISO : 'Alta manual con doble confirmación · ' + CONFIG.VERSION_AVISO, token });
  if (!directo) { enviarConfirmacion_(correo, nombre, token); const f = buscarPorCorreo_(hoja, correo); if (f) escribir_(hoja, f.fila, { ultimo_aviso: new Date() }); }
  ui.alert(directo ? 'Agregado como confirmado.' : 'Agregado. Le enviamos el correo de confirmación.');
}

function menuEstado() {
  const hoja = hojaSuscriptores_();
  const datos = leerTodo_(hoja);
  const c = { pendiente: 0, confirmado: 0, baja: 0 };
  datos.forEach(function (x) { if (c[x.d.estado] !== undefined) c[x.d.estado]++; });
  const enCurso = PropertiesService.getScriptProperties().getProperty('ENVIO_EN_CURSO');
  SpreadsheetApp.getUi().alert('Boletín ' + CONFIG.NOMBRE, 'Confirmados: ' + c.confirmado + '\nPendientes de confirmar: ' + c.pendiente + '\nBajas: ' + c.baja + '\n\nCuota de correo disponible hoy: ' + MailApp.getRemainingDailyQuota() + (enCurso ? '\nEnvío en curso: ' + enCurso : ''), SpreadsheetApp.getUi().ButtonSet.OK);
}

function menuMostrarUrl() {
  const url = ScriptApp.getService().getUrl();
  SpreadsheetApp.getUi().alert('URL de la aplicación web', url ? url + '\n\nCópiala en el campo «endpoint» de src/data/boletin.ts del sitio.' : 'Aún no hay una implementación. Ve a Implementar → Nueva implementación → Aplicación web.', SpreadsheetApp.getUi().ButtonSet.OK);
}

// ======================================================================= Correos auxiliares
function enviarConfirmacion_(correo, nombre, token) {
  const url = ScriptApp.getService().getUrl() + '?accion=confirmar&t=' + encodeURIComponent(token);
  const hola = nombre ? 'Hola, ' + escapar_(nombre.split(' ')[0]) + ':' : 'Hola:';
  const html = '<div style="margin:0;padding:24px 12px;background:#EFE8DC;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;margin:0 auto;background:#FDFBF7;border-radius:16px;overflow:hidden;font-family:Helvetica,Arial,sans-serif;">'
    + '<tr><td style="background:#1C1A18;padding:26px 32px;"><img src="' + CONFIG.SITIO + '/assets/boletin/logo_blanco.png" width="150" alt="Letras y Voces de Tabasco" style="display:block;width:150px;height:auto;border:0;"><p style="margin:18px 0 0;font:italic 34px/1 Georgia,serif;color:#ffffff;">' + CONFIG.NOMBRE + '</p></td></tr>'
    + '<tr><td style="height:4px;background:#EF7B38;font-size:0;line-height:4px;">&nbsp;</td></tr>'
    + '<tr><td style="padding:28px 32px;"><p style="margin:0;font:16px/1.6 Helvetica,Arial,sans-serif;color:#222222;">' + hola + '</p>'
    + '<p style="margin:12px 0 0;font:16px/1.6 Helvetica,Arial,sans-serif;color:#555555;">Recibimos una solicitud para enviar el boletín mensual de Letras y Voces de Tabasco a este correo. Para confirmarla, pulsa el botón:</p>'
    + '<table role="presentation" cellpadding="0" cellspacing="0" style="margin:22px 0;"><tr><td style="background:#EF7B38;border-radius:999px;"><a href="' + url + '" style="display:inline-block;padding:14px 26px;font:700 15px/1 Helvetica,Arial,sans-serif;color:#ffffff;text-decoration:none;">Confirmar mi suscripción</a></td></tr></table>'
    + '<p style="margin:0;font:13px/1.6 Helvetica,Arial,sans-serif;color:#8A8178;">Si no fuiste tú, ignora este mensaje: sin tu confirmación no te enviaremos nada. <a href="' + CONFIG.SITIO + '/privacidad" style="color:#8A8178;">Aviso de privacidad</a>.</p></td></tr>'
    + '</table></div>';
  const texto = (nombre ? 'Hola, ' + nombre.split(' ')[0] + ':' : 'Hola:') + '\n\nRecibimos una solicitud para enviar el boletín mensual de Letras y Voces de Tabasco a este correo. Para confirmarla, abre este enlace:\n' + url + '\n\nSi no fuiste tú, ignora este mensaje.';
  MailApp.sendEmail({ to: correo, subject: 'Confirma tu suscripción a «' + CONFIG.NOMBRE + '»', body: texto, htmlBody: html, name: CONFIG.REMITENTE, replyTo: CONFIG.RESPONDER_A });
  const cache = CacheService.getScriptCache(); const k = 'conf_' + Utilities.formatDate(new Date(), 'America/Mexico_City', 'yyyyMMdd');
  cache.put(k, String(Number(cache.get(k) || 0) + 1), 86400);
}

function puedeConfirmarHoy_() {
  const k = 'conf_' + Utilities.formatDate(new Date(), 'America/Mexico_City', 'yyyyMMdd');
  return Number(CacheService.getScriptCache().get(k) || 0) < CONFIG.MAX_CONFIRMACIONES_DIA && MailApp.getRemainingDailyQuota() > 5;
}

function pagina_(titulo, texto, botones) {
  const b = (botones || []).map(function (x, i) { return '<a href="' + x[1] + '" target="_top" style="display:inline-block;margin:6px 6px 0 0;padding:13px 22px;border-radius:999px;font:700 15px/1 Helvetica,Arial,sans-serif;text-decoration:none;' + (i === 0 ? 'background:#EF7B38;color:#fff;' : 'border:1px solid #E4DDD2;color:#222;') + '">' + escapar_(x[0]) + '</a>'; }).join('');
  const html = '<div style="min-height:100vh;margin:0;padding:48px 16px;background:#FDFBF7;font-family:Helvetica,Arial,sans-serif;color:#222;">'
    + '<div style="max-width:560px;margin:0 auto;"><img src="' + CONFIG.SITIO + '/assets/logos/LVT%20Logo%20Hor%201%20Original.png" alt="Letras y Voces de Tabasco" style="width:180px;height:auto;">'
    + '<p style="margin:40px 0 0;font:700 11px/1 Helvetica,Arial,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#B8521A;">Boletín ' + CONFIG.NOMBRE + '</p>'
    + '<h1 style="margin:14px 0 0;font:italic 44px/1.05 Georgia,serif;">' + escapar_(titulo) + '</h1>'
    + '<p style="margin:18px 0 26px;font:17px/1.6 Helvetica,Arial,sans-serif;color:#555;">' + escapar_(texto) + '</p>' + b + '</div></div>';
  return HtmlService.createHtmlOutput(html).setTitle(titulo + ' · ' + CONFIG.NOMBRE).addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

// ======================================================================= Hoja de cálculo
function libro_() {
  const id = PropertiesService.getScriptProperties().getProperty('ID_LIBRO');
  return id ? SpreadsheetApp.openById(id) : SpreadsheetApp.getActiveSpreadsheet();
}
function hojaSuscriptores_() {
  const h = libro_().getSheetByName(CONFIG.HOJA_SUSCRIPTORES);
  if (!h) throw new Error('Falta la hoja «' + CONFIG.HOJA_SUSCRIPTORES + '». Usa el menú: Boletín Entre ríos → Preparar hojas.');
  return h;
}
function encabezados_(hoja) { return hoja.getRange(1, 1, 1, hoja.getLastColumn()).getValues()[0]; }
function leerTodo_(hoja) {
  const filas = hoja.getLastRow(); if (filas < 2) return [];
  const enc = encabezados_(hoja);
  return hoja.getRange(2, 1, filas - 1, enc.length).getValues().map(function (v, i) {
    const d = {}; enc.forEach(function (k, j) { d[k] = v[j]; }); d.correo = String(d.correo || '').toLowerCase().trim(); return { fila: i + 2, d: d };
  });
}
function buscarPorCorreo_(hoja, correo) { return leerTodo_(hoja).filter(function (x) { return x.d.correo === correo; })[0] || null; }
function buscarPorToken_(hoja, token) { return leerTodo_(hoja).filter(function (x) { return String(x.d.token) === token; })[0] || null; }
function agregar_(hoja, datos) { const enc = encabezados_(hoja); hoja.appendRow(enc.map(function (k) { return datos[k] !== undefined ? datos[k] : ''; })); }
function escribir_(hoja, fila, cambios) {
  const enc = encabezados_(hoja);
  Object.keys(cambios).forEach(function (k) { const c = enc.indexOf(k); if (c >= 0) hoja.getRange(fila, c + 1).setValue(cambios[k]); });
}
function destinatariosPendientes_(slug) {
  const ya = {};
  const env = libro_().getSheetByName(CONFIG.HOJA_ENVIOS);
  if (env && env.getLastRow() > 1) env.getRange(2, 1, env.getLastRow() - 1, 4).getValues().forEach(function (r) { if (r[1] === slug && r[3] === 'enviado') ya[String(r[2]).toLowerCase()] = true; });
  return leerTodo_(hojaSuscriptores_()).filter(function (x) { return x.d.estado === 'confirmado' && !ya[x.d.correo]; })
    .map(function (x) { return { fila: x.fila, correo: x.d.correo, nombre: String(x.d.nombre || ''), token: String(x.d.token) }; });
}
function registrarEnvio_(slug, correo, resultado, detalle) { libro_().getSheetByName(CONFIG.HOJA_ENVIOS).appendRow([new Date(), slug, correo, resultado, detalle]); }
function marcarEnviado_(fila) {
  const hoja = hojaSuscriptores_(); const enc = encabezados_(hoja);
  const cEnv = enc.indexOf('envios') + 1, cUlt = enc.indexOf('ultimo_envio') + 1;
  hoja.getRange(fila, cEnv).setValue(Number(hoja.getRange(fila, cEnv).getValue() || 0) + 1);
  hoja.getRange(fila, cUlt).setValue(new Date());
}

// ======================================================================= Utilidades
function programarContinuacion_() {
  borrarDisparadores_();
  ScriptApp.newTrigger('continuarEnvio').timeBased().after(24 * 60 * 60 * 1000 + 10 * 60 * 1000).create();
}
function borrarDisparadores_() { ScriptApp.getProjectTriggers().forEach(function (t) { if (t.getHandlerFunction() === 'continuarEnvio') ScriptApp.deleteTrigger(t); }); }
function obtener_(url) {
  const r = UrlFetchApp.fetch(url + (url.indexOf('?') < 0 ? '?' : '&') + 'v=' + Date.now(), { muteHttpExceptions: true, followRedirects: true });
  if (r.getResponseCode() !== 200) throw new Error('No se pudo leer ' + url + ' (código ' + r.getResponseCode() + ')');
  return r.getContentText('UTF-8');
}
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
function correoValido_(c) { return c.length <= 160 && /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(c); }
function limpiar_(v, max) { return String(v || '').replace(/[<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, max); }
function escapar_(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
