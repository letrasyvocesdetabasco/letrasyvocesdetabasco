// Ensambla cada número del boletín con datos vivos del sitio y genera su versión para correo.
import { BOLETIN, type NumeroBoletin } from '../data/boletin';
import { SESIONES, TALLER, fechaLarga, lecturas as lecturasSesion, motivoReceso } from './taller';
import { LECTURAS } from './lecturas';
import { GLOSARIO } from '../data/glosario';
import { VIDEOS_LVT, VIDEOS_RECOMENDADOS } from '../data/videos';
import { PISTAS } from './voces';
import { ESCRITORES, porId } from './escritores';
import { SITIO, CONTACTO } from './sitio';

const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const MESC = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
const abs = (p: string) => new URL(p, SITIO).href;

export type EntradaAgenda = { fecha: string; dia: string; mes: string; tipo: string; titulo: string; detalle: string; enlace?: string };

export function ensamblar(n: NumeroBoletin) {
  const sesiones: EntradaAgenda[] = TALLER.calendario
    .filter((s) => s.fecha >= n.desde && s.fecha <= n.hasta)
    .map((s) => s.sesion
      ? { fecha: s.fecha, dia: String(Number(s.fecha.slice(8))), mes: MESC[Number(s.fecha.slice(5, 7)) - 1], tipo: `Taller · sesión ${s.sesion}`, titulo: s.titulo!, detalle: lecturasSesion(s).map((x) => x.autor).join(' · '), enlace: `/taller-literario#sesion-${s.sesion}` }
      : { fecha: s.fecha, dia: String(Number(s.fecha.slice(8))), mes: MESC[Number(s.fecha.slice(5, 7)) - 1], tipo: 'Sin taller', titulo: 'No hay sesión este sábado', detalle: `Sin sesión ${motivoReceso(s)}.` });
  const eventos: EntradaAgenda[] = n.eventos.map((e) => ({ fecha: e.fecha, dia: String(Number(e.fecha.slice(8))), mes: MESC[Number(e.fecha.slice(5, 7)) - 1], tipo: 'Fecha especial', titulo: e.titulo, detalle: e.detalle, enlace: e.enlace }));
  const agenda = [...sesiones, ...eventos].sort((a, b) => a.fecha.localeCompare(b.fecha));
  const texto = LECTURAS.find((l) => l.id === n.textoDelMes);
  const autorTexto = texto ? porId(texto.autorId) : undefined;
  const palabra = GLOSARIO.find((g) => g.id === n.palabra);
  const vLVT = VIDEOS_LVT.find((v) => v.id === n.video);
  const vRec = VIDEOS_RECOMENDADOS.find((v) => v.id === n.video);
  const video = vLVT
    ? { id: vLVT.id, titulo: vLVT.titulo, autor: vLVT.autorObra, descripcion: vLVT.sinopsis, etiqueta: `${vLVT.formato} · producción de Letras y Voces`, enlace: `/videos#${vLVT.id}`, miniatura: vLVT.miniaturaChica }
    : vRec ? { id: vRec.id, titulo: vRec.tituloVisible, autor: vRec.canalVisible, descripcion: vRec.descripcion, etiqueta: 'Recomendado por LVT', enlace: '/videos#recomendados', miniatura: `https://i.ytimg.com/vi/${vRec.id}/hqdefault.jpg` } : undefined;
  const pista = PISTAS.find((p) => p.id === n.pista);
  const efemerides = ESCRITORES.filter((e) => e.nacMes === n.mesEfemerides && e.nacDia).sort((a, b) => a.nacDia! - b.nacDia!)
    .map((e) => ({ id: e.id, nombre: e.nombreCorto, dia: e.nacDia!, anio: e.anioNac, titulo: e.tituloHonorifico, foto: e.foto }));
  const proximaSesion = SESIONES.find((s) => s.fecha >= n.desde);
  return { n, agenda, texto, autorTexto, palabra, video, pista, efemerides, proximaSesion, web: `/boletin/${n.slug}` };
}
export type Ensamblado = ReturnType<typeof ensamblar>;

// ---------------------------------------------------------------- Correo HTML
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const C = { crema: '#FDFBF7', papel: '#FFFFFF', fondo: '#EFE8DC', tinta: '#222222', grafito: '#555555', tenue: '#8A8178', linea: '#E4DDD2', naranja: '#EF7B38', naranjaTinta: '#B8521A', noche: '#1C1A18' };
const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "'Helvetica Neue', Helvetica, Arial, sans-serif";
const eti = (t: string, color = C.naranjaTinta) => `<p style="margin:0 0 10px;font:700 11px/1.2 ${SANS};letter-spacing:.16em;text-transform:uppercase;color:${color};">${esc(t)}</p>`;
const boton = (href: string, texto: string, fondo = C.tinta) => `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:18px;"><tr><td style="border-radius:999px;background:${fondo};"><a href="${href}" style="display:inline-block;padding:12px 22px;font:700 14px/1 ${SANS};color:#ffffff;text-decoration:none;border-radius:999px;">${esc(texto)}</a></td></tr></table>`;
const bloque = (contenido: string, extra = '') => `<tr><td style="padding:34px 40px 0;${extra}" class="pad">${contenido}</td></tr>`;
const separador = `<tr><td style="padding:34px 40px 0;" class="pad"><div style="height:1px;line-height:1px;background:${C.linea};">&nbsp;</div></td></tr>`;

export function correoHTML(x: Ensamblado) {
  const { n } = x;
  const utm = (p: string) => abs(p) + (p.includes('?') ? '&' : '?') + `utm_source=boletin&utm_medium=correo&utm_campaign=${n.slug}`;
  const agenda = x.agenda.map((a) => `
    <tr>
      <td width="64" valign="top" style="padding:14px 0;border-top:1px solid ${C.linea};text-align:center;">
        <div style="font:800 28px/1 ${SANS};color:${a.tipo === 'Sin taller' ? C.tenue : C.naranja};">${a.dia}</div>
        <div style="font:700 10px/1.6 ${SANS};letter-spacing:.12em;color:${C.tenue};">${a.mes}</div>
      </td>
      <td valign="top" style="padding:14px 0 14px 14px;border-top:1px solid ${C.linea};">
        <div style="font:700 10px/1.4 ${SANS};letter-spacing:.12em;text-transform:uppercase;color:${C.tenue};">${esc(a.tipo)}</div>
        <div style="margin-top:3px;font:italic 19px/1.25 ${SERIF};color:${C.tinta};">${a.enlace ? `<a href="${utm(a.enlace)}" style="color:${C.tinta};text-decoration:none;">${esc(a.titulo)}</a>` : esc(a.titulo)}</div>
        ${a.detalle ? `<div style="margin-top:4px;font:14px/1.5 ${SANS};color:${C.grafito};">${esc(a.detalle)}</div>` : ''}
      </td>
    </tr>`).join('');
  const texto = x.texto ? `
    ${eti('Texto del mes')}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${C.papel};border:1px solid ${C.linea};border-radius:14px;">
      <tr><td style="padding:28px 30px;" class="pad-int">
        <h2 style="margin:0;font:italic 26px/1.2 ${SERIF};color:${C.tinta};">${esc(x.texto.titulo)}</h2>
        <p style="margin:6px 0 18px;font:14px/1.4 ${SANS};color:${C.grafito};">${esc(x.texto.autor)} · ${esc(x.texto.obra)}</p>
        <p style="margin:0;font:17px/1.65 ${SERIF};color:${C.tinta};">${esc(x.texto.texto).replace(/\n\n/g, '</p><p style="margin:16px 0 0;font:17px/1.65 ' + SERIF + ';color:' + C.tinta + ';">').replace(/\n/g, '<br>')}</p>
        <p style="margin:18px 0 0;font:12px/1.5 ${SANS};color:${C.tenue};">Obra en dominio público. <a href="${utm('/sala-de-lectura/' + x.texto.id)}" style="color:${C.naranjaTinta};">Leer en la Sala de lectura</a>${x.autorTexto ? ` · <a href="${utm('/escritores/' + x.autorTexto.id)}" style="color:${C.naranjaTinta};">Sobre ${esc(x.autorTexto.nombreCorto)}</a>` : ''}</p>
      </td></tr>
    </table>` : '';
  const palabra = x.palabra ? `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${C.noche};border-radius:14px;">
      <tr><td style="padding:26px 30px;" class="pad-int">
        ${eti('Palabra del oficio', '#F5A372')}
        <h3 style="margin:0;font:800 24px/1.2 ${SANS};color:#ffffff;">${esc(x.palabra.termino)}</h3>
        <p style="margin:10px 0 0;font:15px/1.6 ${SANS};color:#E8E2D9;">${esc(x.palabra.definicion)}</p>
        ${x.palabra.ejemplo ? `<p style="margin:14px 0 0;padding-left:14px;border-left:3px solid ${C.naranja};font:italic 17px/1.5 ${SERIF};color:#ffffff;">${esc(x.palabra.ejemplo).replace(/\s*\/\s*/g, '<br>')}<br><span style="font:12px/1.6 ${SANS};font-style:normal;color:#B9B1A6;">${esc(x.palabra.autorEjemplo || '')}</span></p>` : ''}
        <p style="margin:14px 0 0;font:13px/1.4 ${SANS};"><a href="${utm('/glosario#' + x.palabra.id)}" style="color:#F5A372;">Más términos en el glosario literario</a></p>
      </td></tr>
    </table>` : '';
  const efem = x.efemerides.length ? `
    ${eti('Efemérides literarias de ' + MESES[n.mesEfemerides - 1])}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      ${x.efemerides.map((e) => `<tr><td width="54" valign="top" style="padding:8px 0;font:800 20px/1.2 ${SANS};color:${C.naranja};">${e.dia}</td><td style="padding:8px 0;font:15px/1.45 ${SANS};color:${C.grafito};"><a href="${utm('/escritores/' + e.id)}" style="font-weight:700;color:${C.tinta};text-decoration:none;">${esc(e.nombre)}</a>${e.anio ? ` <span style="color:${C.tenue};">(${e.anio})</span>` : ''}<br><span style="font:italic 15px/1.4 ${SERIF};">${esc(e.titulo)}</span></td></tr>`).join('')}
    </table>` : '';
  const verEscuchar = `
    ${eti('Para ver y escuchar')}
    ${x.video ? `
    <a href="${utm(x.video.enlace)}" style="display:block;text-decoration:none;"><img src="${abs('/assets/boletin/video_' + x.video.id + '.jpg')}" width="520" alt="Ver el video «${esc(x.video.titulo)}»" style="display:block;width:100%;max-width:520px;height:auto;border:0;border-radius:12px;"></a>
    <p style="margin:12px 0 0;font:700 10px/1.4 ${SANS};letter-spacing:.12em;text-transform:uppercase;color:${C.tenue};">${esc(x.video.etiqueta)}</p>
    <h3 style="margin:4px 0 0;font:italic 22px/1.25 ${SERIF};color:${C.tinta};"><a href="${utm(x.video.enlace)}" style="color:${C.tinta};text-decoration:none;">${esc(x.video.titulo)}</a> <span style="font:15px ${SANS};font-style:normal;color:${C.grafito};">· ${esc(x.video.autor)}</span></h3>
    <p style="margin:6px 0 0;font:15px/1.55 ${SANS};color:${C.grafito};">${esc(x.video.descripcion)}</p>` : ''}
    ${x.pista ? `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:22px;background:${C.papel};border:1px solid ${C.linea};border-radius:14px;"><tr>
      <td width="56" style="padding:16px 0 16px 18px;"><a href="${utm('/audioteca#' + x.pista.id)}" style="display:block;width:40px;height:40px;border-radius:20px;background:${C.naranja};color:#ffffff;text-align:center;font:18px/40px ${SANS};text-decoration:none;">&#9654;</a></td>
      <td style="padding:16px 18px 16px 10px;"><div style="font:700 10px/1.4 ${SANS};letter-spacing:.12em;text-transform:uppercase;color:${C.tenue};">Audioteca</div><div style="font:italic 18px/1.3 ${SERIF};color:${C.tinta};"><a href="${utm('/audioteca#' + x.pista.id)}" style="color:${C.tinta};text-decoration:none;">${esc(x.pista.titulo)}</a></div><div style="font:13px/1.4 ${SANS};color:${C.grafito};">${esc(x.pista.autor)} · ${esc(x.pista.declamador)}</div></td>
    </tr></table>` : ''}`;
  const participa = `
    ${eti('Participa')}
    ${n.participa.map((p) => `<h3 style="margin:16px 0 0;font:800 18px/1.3 ${SANS};color:${C.tinta};">${esc(p.titulo)}</h3><p style="margin:6px 0 0;font:15px/1.55 ${SANS};color:${C.grafito};">${esc(p.texto)} <a href="${utm(p.enlace)}" style="color:${C.naranjaTinta};font-weight:700;">${esc(p.textoEnlace)}</a></p>`).join('')}
    ${n.gracias ? `<p style="margin:22px 0 0;padding:16px 18px;background:#FBEFE6;border-radius:12px;font:15px/1.55 ${SANS};color:${C.tinta};">${esc(n.gracias)}</p>` : ''}`;
  const ed = n.editorial;
  const editorial = `
    ${eti('Fondo editorial')}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#0B3B47;border-radius:14px;"><tr>
      ${ed.imagen ? `<td width="150" valign="top" style="padding:24px 0 24px 24px;" class="ocultar-movil"><a href="${utm(ed.enlace)}"><img src="${abs('/assets/boletin/portada_' + n.slug + '.jpg')}" width="120" alt="Portada" style="display:block;width:120px;height:auto;border:0;border-radius:3px;"></a></td>` : ''}
      <td valign="top" style="padding:24px 26px;">
        <h3 style="margin:0;font:800 21px/1.25 ${SANS};color:#ffffff;">${esc(ed.titulo)}</h3>
        <p style="margin:10px 0 0;font:15px/1.55 ${SANS};color:#D8E2E4;">${esc(ed.texto)}</p>
        ${boton(utm(ed.enlace), ed.textoEnlace, C.naranja)}
      </td>
    </tr></table>`;

  return `<!doctype html>
<html lang="es-MX" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="light only"><meta name="supported-color-schemes" content="light"><meta name="robots" content="noindex">
<title>${esc(BOLETIN.nombre)} · núm. ${n.numero} · ${esc(n.mes)}</title>
<style>
  body{margin:0;padding:0;background:${C.fondo};} a{color:${C.naranjaTinta};} img{border:0;}
  @media (max-width:620px){ .contenedor{width:100% !important;} .pad{padding-left:22px !important;padding-right:22px !important;} .pad-int{padding:22px !important;} .ocultar-movil{display:none !important;} .titulo{font-size:40px !important;} }
</style>
</head>
<body style="margin:0;padding:0;background:${C.fondo};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${esc(n.preencabezado)}&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${C.fondo};"><tr><td align="center" style="padding:24px 12px;">
  <p style="margin:0 0 12px;font:12px/1.4 ${SANS};color:${C.tenue};">¿No se ve bien? <a href="${utm(x.web)}" style="color:${C.tenue};">Léelo en el navegador</a></p>
  <table role="presentation" class="contenedor" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background:${C.crema};border-radius:18px;overflow:hidden;">
    <tr><td style="background:${C.noche};padding:30px 40px 34px;" class="pad">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
        <td><a href="${utm('/')}"><img src="${abs('/assets/boletin/logo_blanco.png')}" width="170" alt="Letras y Voces de Tabasco, A.C." style="display:block;width:170px;height:auto;"></a></td>
        <td align="right" style="font:700 11px/1.4 ${SANS};letter-spacing:.14em;text-transform:uppercase;color:#B9B1A6;">Núm. ${n.numero}<br>${esc(n.mes)}</td>
      </tr></table>
      <h1 class="titulo" style="margin:30px 0 0;font:italic 52px/1 ${SERIF};color:#ffffff;">${esc(BOLETIN.nombre)}</h1>
      <p style="margin:10px 0 0;font:15px/1.5 ${SANS};color:#CFC8BE;">${esc(BOLETIN.subtitulo)}</p>
    </td></tr>
    <tr><td style="height:5px;line-height:5px;background:${C.naranja};font-size:0;">&nbsp;</td></tr>
    ${bloque(`
      <p style="margin:0;font:italic 20px/1.4 ${SERIF};color:${C.tinta};"><!--SALUDO-->${esc(n.carta.saludo)}<!--/SALUDO--></p>
      ${n.carta.parrafos.map((p) => `<p style="margin:14px 0 0;font:16px/1.65 ${SANS};color:${C.grafito};">${esc(p)}</p>`).join('')}
      <p style="margin:20px 0 0;font:700 15px/1.4 ${SANS};color:${C.tinta};">${esc(n.carta.firma)}<br><span style="font-weight:400;font-size:13px;color:${C.tenue};">${esc(n.carta.cargo)}</span></p>`)}
    ${separador}
    ${bloque(`${eti('Agenda')}<h2 style="margin:0 0 8px;font:800 26px/1.2 ${SANS};color:${C.tinta};">Lo que viene</h2>
      <p style="margin:0 0 10px;font:15px/1.5 ${SANS};color:${C.grafito};">Taller literario gratuito, sábados de 11:00 a 13:00 h · ${esc(CONTACTO.sedeTaller)}.</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${agenda}</table>
      ${boton(utm('/taller-literario#calendario'), 'Calendario completo del taller')}`)}
    ${bloque(editorial)}
    ${bloque(texto)}
    ${bloque(palabra)}
    ${efem ? bloque(efem) : ''}
    ${separador}
    ${bloque(verEscuchar)}
    ${separador}
    ${bloque(participa)}
    <tr><td style="padding:40px 40px 34px;" class="pad">
      <div style="height:1px;line-height:1px;background:${C.linea};">&nbsp;</div>
      <p style="margin:22px 0 0;font:13px/1.6 ${SANS};color:${C.grafito};"><a href="${CONTACTO.facebook}" style="color:${C.tinta};font-weight:700;">Facebook</a> &nbsp;·&nbsp; <a href="${CONTACTO.instagram}" style="color:${C.tinta};font-weight:700;">Instagram</a> &nbsp;·&nbsp; <a href="${CONTACTO.youtube}" style="color:${C.tinta};font-weight:700;">YouTube</a> &nbsp;·&nbsp; <a href="${utm('/')}" style="color:${C.tinta};font-weight:700;">letrasyvocesdetabasco.org</a></p>
      <p style="margin:12px 0 0;font:12px/1.6 ${SANS};color:${C.tenue};">Sociedad de Escritores Letras y Voces de Tabasco, A.C. · Asociación civil sin fines de lucro · ${esc(CONTACTO.ciudad)} · ${esc(CONTACTO.correo)} · WhatsApp ${esc(CONTACTO.whatsappVisible)}</p>
      <p style="margin:12px 0 0;font:12px/1.6 ${SANS};color:${C.tenue};">Recibes «${esc(BOLETIN.nombre)}» porque te suscribiste en nuestro sitio. Puedes <a href="{{BAJA_URL}}" style="color:${C.tenue};">darte de baja con un clic</a> en cualquier momento. <a href="${utm(BOLETIN.avisoPrivacidad)}" style="color:${C.tenue};">Aviso de privacidad</a>.</p>
    </td></tr>
  </table>
</td></tr></table>
</body>
</html>`;
}

// ---------------------------------------------------------------- Correo en texto plano
export function correoTexto(x: Ensamblado) {
  const { n } = x; const L: string[] = [];
  const w = (s = '') => L.push(s);
  w(`${BOLETIN.nombre.toUpperCase()} · Núm. ${n.numero} · ${n.mes}`); w(BOLETIN.subtitulo); w(`Léelo en el navegador: ${abs(x.web)}`); w();
  w('<!--SALUDO-->' + n.carta.saludo + '<!--/SALUDO-->'); n.carta.parrafos.forEach((p) => { w(); w(p); }); w(); w(`${n.carta.firma}`); w(n.carta.cargo); w();
  w('— AGENDA —'); w(`Taller gratuito, sábados de 11:00 a 13:00 h · ${CONTACTO.sedeTaller}`);
  x.agenda.forEach((a) => w(`· ${fechaLarga(a.fecha)}: ${a.titulo}${a.detalle ? ' — ' + a.detalle : ''}`)); w(`Calendario: ${abs('/taller-literario#calendario')}`); w();
  w('— FONDO EDITORIAL —'); w(n.editorial.titulo); w(n.editorial.texto); w(abs(n.editorial.enlace)); w();
  if (x.texto) { w('— TEXTO DEL MES —'); w(`${x.texto.titulo}, de ${x.texto.autor} (${x.texto.obra})`); w(); w(x.texto.texto); w(); w(abs('/sala-de-lectura/' + x.texto.id)); w(); }
  if (x.palabra) { w('— PALABRA DEL OFICIO —'); w(`${x.palabra.termino}: ${x.palabra.definicion}`); w(); }
  if (x.efemerides.length) { w(`— EFEMÉRIDES DE ${MESES[n.mesEfemerides - 1].toUpperCase()} —`); x.efemerides.forEach((e) => w(`· ${e.dia}: ${e.nombre}${e.anio ? ' (' + e.anio + ')' : ''}`)); w(); }
  if (x.video) { w('— PARA VER —'); w(`${x.video.titulo} · ${x.video.autor}: ${abs(x.video.enlace)}`); }
  if (x.pista) { w(`Para escuchar: ${x.pista.titulo} (${x.pista.autor}): ${abs('/audioteca#' + x.pista.id)}`); } w();
  w('— PARTICIPA —'); n.participa.forEach((p) => w(`· ${p.titulo}: ${p.texto} ${abs(p.enlace)}`)); if (n.gracias) { w(); w(n.gracias); } w();
  w(`Sociedad de Escritores Letras y Voces de Tabasco, A.C. · ${CONTACTO.correo} · WhatsApp ${CONTACTO.whatsappVisible}`);
  w('Darte de baja: {{BAJA_URL}}'); w(`Aviso de privacidad: ${abs(BOLETIN.avisoPrivacidad)}`);
  return L.join('\n');
}
