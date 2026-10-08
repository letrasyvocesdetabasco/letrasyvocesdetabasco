import { LECTURAS, type Lectura } from '../data/lecturas';
export { LECTURAS, type Lectura };
export const lecturasDe = (autorId: string) => LECTURAS.filter((l) => l.autorId === autorId);
export const lecturaPorId = (id: string) => LECTURAS.find((l) => l.id === id);
/** Texto del día: determinista por fecha (todos los visitantes ven el mismo). */
export function textoDelDia(fecha = new Date()) {
  if (!LECTURAS.length) return null;
  const d = Math.floor(Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate()) / 86400000);
  const liricas = LECTURAS.filter((l) => l.genero === 'lirica' && l.texto.length < 2200);
  const base = liricas.length ? liricas : LECTURAS;
  return base[d % base.length];
}
export const palabras = (t: string) => t.trim().split(/\s+/).length;
