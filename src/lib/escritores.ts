// Escritores ilustres + citas verificadas (banco de contenido con fuente, 2026)
import fs from 'node:fs';
import path from 'node:path';
import { ESCRITORES_ILUSTRES, type EscritorIlustre } from '../data/escritores_ilustres';
import verificadas from '../data/citas_verificadas.json';

type Verif = { autor: string; citas: { texto: string; obra: string; url: string }[]; datos: { texto: string; url: string }[]; curiosidades?: { texto: string; url: string }[] };
const V = verificadas as Record<string, Verif>;

// Citas del sitio anterior que sí se pudieron confirmar como textuales (autores muy documentados).
// Para los demás autores solo se muestran las citas del banco verificado, con su fuente.
const CONFIABLES = new Set(['juan-rulfo', 'sor-juana', 'octavio-paz', 'rosario-castellanos', 'jaime-sabines', 'pablo-neruda', 'julio-cortazar',
  'jorge-luis-borges', 'cesar-vallejo', 'federico-garcia-lorca', 'gabriel-garcia-marquez', 'gabriela-mistral', 'edgar-allan-poe', 'amado-nervo', 'jose-emilio-pacheco']);

function clave(e: EscritorIlustre) {
  const ks = Object.keys(V);
  return ks.find((k) => k === e.id) || ks.find((k) => k.startsWith(e.id + '-') || e.id.startsWith(k)) || null;
}
const PUBLICO = path.resolve('public');
export function fotoDe(e: EscritorIlustre) {
  for (const f of [e.foto, e.imagen, e.fotoFallback]) if (f && fs.existsSync(path.join(PUBLICO, decodeURI(f)))) return f;
  return '/assets/images/placeholder-autor.svg';
}
export interface Cita { texto: string; obra: string; url?: string; }
export function citasDe(e: EscritorIlustre): Cita[] {
  const k = clave(e);
  const out: Cita[] = k ? V[k].citas.map((c) => ({ ...c })) : [];
  if (CONFIABLES.has(e.id)) {
    for (const c of e.citasMemorables) if (!out.some((o) => o.texto.slice(0, 25) === c.cita.slice(0, 25))) out.push({ texto: c.cita, obra: c.obra });
  }
  return out;
}
export function datosVerificados(e: EscritorIlustre) {
  const k = clave(e);
  return k ? [...V[k].datos, ...(V[k].curiosidades || [])] : [];
}
export const BLOQUES = [
  { id: 'tabasquenos', nombre: 'Tabasco' },
  { id: 'mexicanos', nombre: 'México' },
  { id: 'universales', nombre: 'Universal' },
] as const;
export const ESCRITORES = ESCRITORES_ILUSTRES.map((e) => ({ e, foto: fotoDe(e), citas: citasDe(e), verificados: datosVerificados(e) }));
