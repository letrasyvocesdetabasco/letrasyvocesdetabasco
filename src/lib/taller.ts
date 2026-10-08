// Calendario del Taller Literario (mismo archivo que usa el bot: taller_calendario.json)
import cal from '../data/taller_calendario.json';

export interface Sesion {
  fecha: string; sesion?: number; modulo?: string; modulo_nombre?: string; titulo?: string;
  eje?: string; lecturas?: string; ejercicio?: string; nota?: string;
}
export const TALLER = cal as { nombre: string; horario: string; sede: string; acceso: string; calendario_base: string; calendario: Sesion[] };
export const SESIONES = TALLER.calendario.filter((s) => s.sesion);
export const TOTAL_SESIONES = 24;

const MESES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
const DIAS = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
export function fechaLarga(iso: string, conDia = true) {
  const [y, m, d] = iso.split('-').map(Number);
  const f = new Date(Date.UTC(y, m - 1, d, 12));
  return `${conDia ? DIAS[f.getUTCDay()] + ' ' : ''}${d} de ${MESES[m - 1]}${y !== 2026 ? ' de ' + y : ''}`;
}
export function hoyMx(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Mexico_City' }).format(new Date());
}
/** Próxima sesión (o la de hoy hasta las 13:00) y si hay receso de por medio. */
export function sesionVigente(hoy = hoyMx()) {
  const proxima = SESIONES.find((s) => s.fecha >= hoy) ?? null;
  const anterior = [...SESIONES].reverse().find((s) => s.fecha < hoy) ?? null;
  const recesos = TALLER.calendario.filter((s) => !s.sesion && s.fecha >= hoy && (!proxima || s.fecha < proxima.fecha));
  return { proxima, anterior, recesos, esHoy: proxima?.fecha === hoy };
}
export function modulos() {
  const m = new Map<string, { modulo: string; nombre: string; sesiones: Sesion[] }>();
  for (const s of SESIONES) {
    const k = s.modulo!;
    if (!m.has(k)) m.set(k, { modulo: k, nombre: s.modulo_nombre!, sesiones: [] });
    m.get(k)!.sesiones.push(s);
  }
  return [...m.values()];
}
export function lecturas(s: Sesion) {
  return (s.lecturas || '').split(';').map((x) => x.trim().replace(/\.$/, '')).filter(Boolean).map((x) => {
    const i = x.indexOf(',');
    return i > 0 ? { autor: x.slice(0, i).trim(), obra: x.slice(i + 1).trim() } : { autor: x, obra: '' };
  });
}
