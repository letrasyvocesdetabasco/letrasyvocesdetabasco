// Audioteca: pistas con enlace al escritor del canon cuando existe.
import { CATALOGO_VOCES_HISTORICAS, type GrabacionSonora } from '../data/voces';
import { ESCRITORES } from './escritores';
const norm = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
export interface Pista extends GrabacionSonora { autorId?: string; href: string; esLirica: boolean; portada?: string }
export const PISTAS: Pista[] = CATALOGO_VOCES_HISTORICAS.map((p) => {
  const a = ESCRITORES.find((e) => norm(e.nombreCorto).split(' ').filter((w) => w.length > 3).every((w) => norm(p.autor).includes(w)) || norm(p.autor).includes(norm(e.nombreCorto)));
  return { ...p, autorId: a?.id, portada: a?.foto, href: `/audioteca#${p.id}`, esLirica: p.genero.startsWith('Lírica') };
});
export const pistasDe = (autorId: string) => PISTAS.filter((p) => p.autorId === autorId);
export const aPistaJSON = (p: Pista) => ({ id: p.id, src: p.audioUrl, titulo: p.titulo, autor: p.autor, declamador: p.declamador, portada: p.portada, href: p.href });
