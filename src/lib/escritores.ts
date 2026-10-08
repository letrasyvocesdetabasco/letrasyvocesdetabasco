// Escritores ilustres: modelo unificado (canon original 2025 + ampliación 2026) con citas verificadas y fuentes.
import fs from 'node:fs';
import path from 'node:path';
import { ESCRITORES_ILUSTRES, type EscritorIlustre } from '../data/escritores_ilustres';
import { ESCRITORES_NUEVOS, type EscritorNuevo } from '../data/escritores_nuevos';
import verificadas from '../data/citas_verificadas.json';

type Verif = { autor: string; citas: { texto: string; obra: string; url: string }[]; datos: { texto: string; url: string }[]; curiosidades?: { texto: string; url: string }[] };
const V = verificadas as Record<string, Verif>;

// Citas del sitio anterior que sí se pudieron confirmar como textuales (autores muy documentados).
const CONFIABLES = new Set(['juan-rulfo', 'sor-juana', 'octavio-paz', 'rosario-castellanos', 'jaime-sabines', 'pablo-neruda', 'julio-cortazar',
  'jorge-luis-borges', 'cesar-vallejo', 'federico-garcia-lorca', 'gabriel-garcia-marquez', 'gabriela-mistral', 'edgar-allan-poe', 'amado-nervo', 'jose-emilio-pacheco']);
// Alias id del sitio → clave del banco de citas
const ALIAS: Record<string, string> = { 'carlos-pellicer': 'carlos-pellicer-camara', 'sor-juana': 'sor-juana-ines-de-la-cruz' };

export type Bloque = 'tabasquenos' | 'mexicanos' | 'universales';
export interface Obra { titulo: string; anio: number | string; genero: string; descripcion: string }
export interface Cita { texto: string; obra: string; url?: string }
export interface Escritor {
  id: string; nombre: string; nombreCorto: string; anios: string; nacimiento: string; fallecimiento: string; municipioOrigen: string; movimiento: string;
  bloque: Bloque; tituloHonorifico: string; semblanza: string; biografia: string[]; obras: Obra[]; legado: string;
  citas: Cita[]; datos: { texto: string; url: string }[]; foto: string; fotoCredito?: string; dominioPublico: boolean; fuentes: string[];
  siglo: string; generos: string[]; nacDia?: number; nacMes?: number; anioNac?: number; anioMuerte?: number; vivo: boolean;
}

const PUBLICO = path.resolve('public');
const existe = (f?: string) => !!f && fs.existsSync(path.join(PUBLICO, decodeURI(f)));
const MESES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
function fecha(s: string) {
  const m = s.match(/(\d{1,2}) de ([a-zñ]+) de (\d{3,4})/i);
  if (!m) { const a = s.match(/\b(\d{4})\b/); return { anio: a ? Number(a[1]) : undefined }; }
  return { dia: Number(m[1]), mes: MESES.indexOf(m[2].toLowerCase()) + 1 || undefined, anio: Number(m[3]) };
}
function clave(id: string) {
  if (ALIAS[id]) return ALIAS[id];
  const ks = Object.keys(V);
  return ks.find((k) => k === id) || ks.find((k) => k.startsWith(id + '-') || id.startsWith(k)) || null;
}
function generosDe(obras: Obra[]) {
  const g = new Set<string>();
  for (const o of obras) { const t = o.genero.toLowerCase();
    if (/poe|lír|son|oda|verso|elegía/.test(t)) g.add('Poesía'); if (/nov|cuent|relat|narr|ficci|micro/.test(t)) g.add('Narrativa');
    if (/teat|dram|comed|traged/.test(t)) g.add('Teatro'); if (/ensay|crón|memori|diccion|histor|crít|prosa|carta|autobio/.test(t)) g.add('Ensayo y crónica'); }
  return [...g];
}
const sigloDe = (a?: number) => a ? `Siglo ${['', 'I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX','XXI'][Math.ceil(a / 100)]}` : '';
// Nombre con el que se conoce a cada autor (las fichas guardan el nombre civil completo)
const NOMBRE_USUAL: Record<string, string> = {
  'ruben-dario': 'Rubén Darío', 'gustavo-adolfo-becquer': 'Gustavo Adolfo Bécquer', 'lope-de-vega': 'Lope de Vega', 'francisco-de-quevedo': 'Francisco de Quevedo',
  'miguel-de-cervantes': 'Miguel de Cervantes', 'jose-marti': 'José Martí', 'antonio-machado': 'Antonio Machado', 'alejandra-pizarnik': 'Alejandra Pizarnik',
  'juan-carlos-onetti': 'Juan Carlos Onetti', 'mario-benedetti': 'Mario Benedetti', 'mariano-azuela': 'Mariano Azuela', 'nezahualcoyotl': 'Nezahualcóyotl',
  'juan-ruiz-de-alarcon': 'Juan Ruiz de Alarcón', 'andres-henestrosa': 'Andrés Henestrosa', 'jorge-ibarguengoitia': 'Jorge Ibargüengoitia', 'fernando-del-paso': 'Fernando del Paso',
  'antonio-mediz-bolio': 'Antonio Mediz Bolio', 'laura-esquivel': 'Laura Esquivel', 'alfonso-reyes': 'Alfonso Reyes', 'xavier-villaurrutia': 'Xavier Villaurrutia',
  'carlos-fuentes': 'Carlos Fuentes', 'augusto-monterroso': 'Augusto Monterroso', 'elena-poniatowska': 'Elena Poniatowska', 'efrain-huerta': 'Efraín Huerta',
  'amparo-davila': 'Amparo Dávila', 'carlos-monsivais': 'Carlos Monsiváis', 'ramon-lopez-velarde': 'Ramón López Velarde', 'sergio-pitol': 'Sergio Pitol',
  'nellie-campobello': 'Nellie Campobello', 'fernando-pessoa': 'Fernando Pessoa', 'virginia-woolf': 'Virginia Woolf', 'rainer-maria-rilke': 'Rainer Maria Rilke',
  'anton-chejov': 'Antón Chéjov', 'charles-baudelaire': 'Charles Baudelaire', 'wislawa-szymborska': 'Wisława Szymborska', 'michel-de-montaigne': 'Michel de Montaigne',
  'marcos-e-becerra': 'Marcos E. Becerra', 'francisco-j-santamaria': 'Francisco J. Santamaría', 'andres-iduarte-foucher': 'Andrés Iduarte', 'garcilaso-de-la-vega': 'Garcilaso de la Vega',
  'dolores-correa-zapata': 'Dolores Correa Zapata', 'jose-maria-pino-suarez': 'José María Pino Suárez', 'carlos-pellicer': 'Carlos Pellicer', 'jose-gorostiza': 'José Gorostiza',
  'celestino-gorostiza': 'Celestino Gorostiza', 'bruno-estanol': 'Bruno Estañol', 'juan-rulfo': 'Juan Rulfo', 'octavio-paz': 'Octavio Paz', 'rosario-castellanos': 'Rosario Castellanos',
  'jaime-sabines': 'Jaime Sabines', 'elena-garro': 'Elena Garro', 'juan-jose-arreola': 'Juan José Arreola', 'jose-emilio-pacheco': 'José Emilio Pacheco', 'ines-arredondo': 'Inés Arredondo',
  'cesar-vallejo': 'César Vallejo', 'julio-cortazar': 'Julio Cortázar',
};
const corto = (n: string, id?: string) => (id && NOMBRE_USUAL[id]) || n.replace(/\s*\(.*?\)/g, '').replace(/\s*«.*?»/g, '').trim();

function desdeOriginal(e: EscritorIlustre): Escritor {
  const k = clave(e.id);
  const citas: Cita[] = k ? V[k].citas.map((c) => ({ ...c })) : [];
  if (CONFIABLES.has(e.id)) for (const c of e.citasMemorables) if (!citas.some((o) => o.texto.slice(0, 25) === c.cita.slice(0, 25))) citas.push({ texto: c.cita, obra: c.obra });
  const foto = [e.foto, e.imagen, e.fotoFallback].find(existe) || '/assets/images/placeholder-autor.svg';
  const n = fecha(e.nacimiento), m = fecha(e.fallecimiento || '');
  const vivo = !e.fallecimiento || /presente/i.test(e.anios);
  return {
    id: e.id, nombre: e.nombre, nombreCorto: corto(e.nombre, e.id), anios: e.anios, nacimiento: e.nacimiento, fallecimiento: vivo ? '' : e.fallecimiento, municipioOrigen: e.municipioOrigen,
    movimiento: e.movimiento, bloque: e.bloqueCanon, tituloHonorifico: e.tituloHonorifico, semblanza: e.semblanzaSintetica, biografia: e.biografiaCompleta,
    obras: e.obrasCapitales, legado: e.legadoPatrimonial, citas, datos: k ? [...V[k].datos, ...(V[k].curiosidades || [])] : [], foto,
    dominioPublico: !!m.anio && m.anio < 1926, fuentes: k ? [...new Set([...V[k].citas, ...V[k].datos].map((x) => x.url))] : [],
    siglo: sigloDe(n.anio), generos: generosDe(e.obrasCapitales), nacDia: n.dia, nacMes: n.mes, anioNac: n.anio, anioMuerte: m.anio, vivo,
  };
}
function desdeNuevo(e: EscritorNuevo): Escritor {
  const k = clave(e.id);
  const citas: Cita[] = [...e.citas];
  if (k) for (const c of V[k].citas) if (!citas.some((o) => o.texto.slice(0, 25) === c.texto.slice(0, 25))) citas.push({ ...c });
  const webp = `/assets/ilustres/${e.id.replace(/-/g, '_')}.webp`;
  const foto = existe(webp) ? webp : '/assets/images/placeholder-autor.svg';
  const n = fecha(e.nacimiento), m = fecha(e.fallecimiento || '');
  return {
    id: e.id, nombre: e.nombre, nombreCorto: corto(e.nombre, e.id), anios: e.anios, nacimiento: e.nacimiento, fallecimiento: e.fallecimiento, municipioOrigen: e.municipioOrigen,
    movimiento: e.movimiento, bloque: e.bloqueCanon, tituloHonorifico: e.tituloHonorifico, semblanza: e.semblanzaSintetica, biografia: e.biografiaCompleta,
    obras: e.obrasCapitales, legado: e.legadoPatrimonial, citas, datos: k ? [...V[k].datos, ...(V[k].curiosidades || [])] : [], foto,
    fotoCredito: e.retrato?.url ? `${e.retrato.licencia}${e.retrato.autorFoto ? ' · ' + e.retrato.autorFoto : ''} · Wikimedia Commons` : undefined,
    dominioPublico: e.dominioPublico, fuentes: [...new Set([...e.fuentes, ...(k ? [...V[k].citas, ...V[k].datos].map((x) => x.url) : [])])],
    siglo: sigloDe(n.anio), generos: generosDe(e.obrasCapitales), nacDia: n.dia, nacMes: n.mes, anioNac: n.anio, anioMuerte: m.anio, vivo: !e.fallecimiento,
  };
}

export const BLOQUES = [
  { id: 'tabasquenos', nombre: 'Tabasco' },
  { id: 'mexicanos', nombre: 'México' },
  { id: 'universales', nombre: 'Universal' },
] as const;
const ORDEN: Record<Bloque, number> = { tabasquenos: 0, mexicanos: 1, universales: 2 };

const todos = [...ESCRITORES_ILUSTRES.map(desdeOriginal), ...ESCRITORES_NUEVOS.filter((n) => !ESCRITORES_ILUSTRES.some((o) => o.id === n.id)).map(desdeNuevo)];
export const ESCRITORES: Escritor[] = todos.sort((a, b) => ORDEN[a.bloque] - ORDEN[b.bloque] || (a.anioNac ?? 0) - (b.anioNac ?? 0));
export const porId = (id: string) => ESCRITORES.find((e) => e.id === id);
export const nombreBloque = (b: Bloque) => BLOQUES.find((x) => x.id === b)!.nombre;

/** Autores con los que conversa una ficha: mismo bloque o movimiento afín, excluyéndose a sí misma. */
export function relacionados(e: Escritor, n = 4) {
  const pal = new Set(e.movimiento.toLowerCase().split(/[^a-záéíóúñ]+/).filter((w) => w.length > 4));
  return ESCRITORES.filter((x) => x.id !== e.id)
    .map((x) => ({ x, p: (x.bloque === e.bloque ? 2 : 0) + x.movimiento.toLowerCase().split(/[^a-záéíóúñ]+/).filter((w) => pal.has(w)).length * 3 + (Math.abs((x.anioNac ?? 0) - (e.anioNac ?? 0)) < 30 ? 1 : 0) }))
    .sort((a, b) => b.p - a.p).slice(0, n).map((r) => r.x);
}

/** Efemérides: nacimientos del canon en una fecha (mes 1-12, día). */
export function efemerides(mes: number, dia: number) {
  return ESCRITORES.filter((e) => e.nacMes === mes && e.nacDia === dia);
}
export function efemeridesDelMes(mes: number) {
  return ESCRITORES.filter((e) => e.nacMes === mes).sort((a, b) => (a.nacDia ?? 0) - (b.nacDia ?? 0));
}
