// Personas de Letras y Voces: retratos del archivo de la Sociedad y búsqueda por nombre.
import { PADRON_AUTORES, type Autor } from '../data/autores';

const norm = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\(.*?\)|†/g, '').replace(/\b(dra|dr|mtra|mtro|lic|arq|don)\.\s*/g, '').replace(/\s+/g, ' ').trim();

/** Busca a un socio del padrón por su nombre (tolera acentos y apellidos parciales). */
export function personaPorNombre(nombre: string): Autor | undefined {
  const n = norm(nombre);
  const exacto = PADRON_AUTORES.find((a) => norm(a.nombre) === n);
  if (exacto) return exacto;
  const palabras = n.split(' ').filter((w) => w.length > 2);
  return PADRON_AUTORES.find((a) => { const an = norm(a.nombre); return palabras.length >= 2 && palabras.every((w) => an.includes(w)); });
}

export const iniciales = (n: string) => n.replace(/\(.*?\)|†/g, '').split(' ').filter((w) => w.length > 2 && !/^(de|la|del|los|las)$/i.test(w)).slice(0, 2).map((p) => p[0]).join('');

export const MESA_DIRECTIVA = PADRON_AUTORES.filter((a) => a.esMesaDirectiva);
export const CON_FOTO = PADRON_AUTORES.filter((a) => a.foto);
/** Cargo corto (antes del primer «·») */
export const cargo = (a: Autor) => a.rolGremial.split('·')[0].trim();
/** Nombre de pila y primer apellido: «María de los Ángeles Cervantes Rosas» → «María Cervantes». */
export function nombreBreve(n: string) {
  const w = n.replace(/\(.*?\)|†/g, '').split(' ').filter((x) => x && !/^(de|la|del|los|las|y)$/i.test(x));
  return w.length >= 3 ? `${w[0]} ${w[w.length - 2]}` : w.join(' ');
}
