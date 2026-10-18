// Prueba local del script del boletín con imitaciones de los servicios de Google.
// Uso (desde la raíz del sitio, después de npm run build): node boletin/apps-script/prueba-local.cjs .
const fs = require('fs'), path = require('path');
const R = process.argv[2];
const src = fs.readFileSync(path.join(R, 'boletin/apps-script/Codigo.gs'), 'utf8');
const dist = path.join(R, 'dist');
// ---- imitaciones mínimas de los servicios de Google ----
class Hoja { constructor(n) { this.n = n; this.f = []; }
  getLastRow() { return this.f.length; } getLastColumn() { return Math.max(0, ...this.f.map((r) => r.length)); }
  appendRow(r) { this.f.push([...r]); }
  getRange(r, c, nr = 1, nc = 1) { const h = this; return {
    getValues() { const o = []; for (let i = 0; i < nr; i++) { o.push([]); for (let j = 0; j < nc; j++) o[i].push((h.f[r - 1 + i] || [])[c - 1 + j] ?? ''); } return o; },
    getValue() { return (h.f[r - 1] || [])[c - 1] ?? ''; },
    setValue(v) { while (h.f.length < r) h.f.push([]); h.f[r - 1][c - 1] = v; return this; },
    setFontWeight() { return this; }, setBackground() { return this; }, setFontColor() { return this; }, setDataValidation() { return this; } }; }
  setFrozenRows() {} setColumnWidth() {} setConditionalFormatRules() {} }
const hojas = {}; const correos = []; const props = {}; let cuota = 100;
const libro = { getId: () => 'ID', getSheetByName: (n) => hojas[n] || null, insertSheet: (n) => (hojas[n] = new Hoja(n)), getSheets: () => Object.values(hojas), deleteSheet() {}, toast() {} };
const regla = () => { const o = { requireValueInList: () => o, whenFormulaSatisfied: () => o, setBackground: () => o, setFontColor: () => o, setRanges: () => o, build: () => ({}) }; return o; };
global.SpreadsheetApp = { getActiveSpreadsheet: () => libro, openById: () => libro, getUi: () => ({}), newDataValidation: regla, newConditionalFormatRule: regla };
global.PropertiesService = { getScriptProperties: () => ({ getProperty: (k) => props[k] ?? null, setProperty: (k, v) => (props[k] = v), deleteProperty: (k) => delete props[k] }) };
global.LockService = { getScriptLock: () => ({ waitLock() {}, releaseLock() {} }) };
let uuid = 0; global.Utilities = { getUuid: () => 'tok-' + (++uuid), sleep() {}, formatDate: () => '20261018' };
global.MailApp = { sendEmail: (o, s, b) => { correos.push(typeof o === 'string' ? { to: o, subject: s, body: b } : o); cuota--; }, getRemainingDailyQuota: () => cuota };
const cache = {}; global.CacheService = { getScriptCache: () => ({ get: (k) => cache[k] ?? null, put: (k, v) => (cache[k] = v) }) };
global.ScriptApp = { getService: () => ({ getUrl: () => 'https://script.google.com/macros/s/APP/exec' }), getProjectTriggers: () => [], deleteTrigger() {}, newTrigger: () => ({ timeBased: () => ({ after: () => ({ create() {} }) }) }) };
global.Session = { getEffectiveUser: () => ({ getEmail: () => 'lvt.correo@gmail.com' }) };
global.ContentService = { MimeType: { JSON: 'json' }, createTextOutput: (t) => ({ t, setMimeType() { return this; } }) };
global.HtmlService = { createHtmlOutput: (h) => ({ h, setTitle(t) { this.titulo = t; return this; }, addMetaTag() { return this; } }) };
global.UrlFetchApp = { fetch: (url) => { const p = new URL(url).pathname; const f = p.endsWith('.json') || p.endsWith('.html') || p.endsWith('.txt') ? path.join(dist, p) : path.join(dist, p, 'index.html'); const ok = fs.existsSync(f); return { getResponseCode: () => (ok ? 200 : 404), getContentText: () => (ok ? fs.readFileSync(f, 'utf8') : '') }; } };
// ---- carga del script ----
const api = new Function(src + '\nreturn { prepararHojas, doPost, doGet, continuarEnvio, cargarNumero_, destinatariosPendientes_ };')();
const J = (o) => JSON.parse(o.t);
const ok = (c, m) => { console.log((c ? '✔ ' : '✘ ') + m); if (!c) process.exitCode = 1; };
api.prepararHojas();
ok(hojas['Suscriptores'].f[0][0] === 'correo', 'hojas preparadas con encabezados');
let r = J(api.doPost({ parameter: { correo: 'Ana@Ejemplo.com ', nombre: 'Ana Laura', intereses: 'Taller literario', origen: 'boletin' } }));
ok(r.ok && r.estado === 'pendiente', 'alta queda pendiente');
ok(correos.length === 1 && /Confirma tu suscripción/.test(correos[0].subject) && correos[0].to === 'ana@ejemplo.com', 'se envía correo de confirmación');
const enlace = correos[0].htmlBody.match(/href="([^"]+accion=confirmar[^"]+)"/)[1];
r = J(api.doPost({ parameter: { correo: 'ana@ejemplo.com' } }));
ok(correos.length === 1, 'no reenvía confirmación antes de 10 minutos');
ok(J(api.doPost({ parameter: { correo: 'no-es-correo' } })).ok === false, 'rechaza correo inválido');
ok(J(api.doPost({ parameter: { correo: 'bot@x.com', sitio_web: 'spam' } })).ok === true && hojas['Suscriptores'].f.length === 2, 'trampa anti-spam no guarda nada');
const t = new URL(enlace).searchParams.get('t');
let p = api.doGet({ parameter: { accion: 'confirmar', t } });
ok(/confirmada/.test(p.titulo) && hojas['Suscriptores'].f[1][2] === 'confirmado', 'confirmación por enlace');
ok(J(api.doPost({ parameter: { correo: 'ana@ejemplo.com' } })).estado === 'confirmado', 'reintento de alguien confirmado responde «confirmado»');
ok(/no válido/.test(api.doGet({ parameter: { accion: 'confirmar', t: 'falso' } }).titulo), 'token falso rechazado');
// segunda persona confirmada, tercera pendiente
api.doPost({ parameter: { correo: 'beto@ejemplo.com' } }); api.doGet({ parameter: { accion: 'confirmar', t: 'tok-2' } });
api.doPost({ parameter: { correo: 'caro@ejemplo.com' } });
const n = api.cargarNumero_('noviembre-2026');
ok(/Entre ríos, núm\. 1/.test(n.asunto) && n.html.includes('{{BAJA_URL}}'), 'lee el número publicado en el sitio');
ok(api.destinatariosPendientes_('noviembre-2026').length === 2, 'solo destinatarios confirmados (2)');
const antes = correos.length; props.ENVIO_EN_CURSO = 'noviembre-2026'; api.continuarEnvio();
const envs = correos.slice(antes, antes + 2);
ok(envs.length === 2 && envs.every((c) => !c.htmlBody.includes('{{BAJA_URL}}') && /accion=baja&t=tok-/.test(c.htmlBody)), 'envío con enlace de baja personal');
ok(/Hola, Ana:/.test(envs.find((c) => c.to === 'ana@ejemplo.com').htmlBody), 'saludo personalizado cuando hay nombre');
ok(/Querida lectora, querido lector:/.test(envs.find((c) => c.to === 'beto@ejemplo.com').htmlBody), 'saludo general sin nombre');
ok(!envs[0].body.includes('<!--SALUDO'), 'texto plano sin marcas internas');
ok(correos[correos.length - 1].subject.includes('envío terminado'), 'resumen al terminar');
const antes2 = correos.length; props.ENVIO_EN_CURSO = 'noviembre-2026'; api.continuarEnvio();
ok(correos.length === antes2 + 1, 'no repite el envío a quien ya lo recibió');
const baja = envs[1].htmlBody.match(/href="([^"]+accion=baja[^"]+)"/)[1];
p = api.doGet({ parameter: { accion: 'baja', t: new URL(baja.replace(/&amp;/g, '&')).searchParams.get('t') } });
ok(/baja/.test(p.titulo) && hojas['Suscriptores'].f.some((f) => f[0] === 'beto@ejemplo.com' && f[2] === 'baja'), 'baja con un clic');
console.log('\nFilas finales:'); hojas['Suscriptores'].f.forEach((f) => console.log('  ' + f.slice(0, 5).join(' | ')));
console.log('Envíos registrados:', hojas['Envíos'].f.length - 1);
