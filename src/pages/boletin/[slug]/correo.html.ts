// Versión del número para correo (HTML con estilos en línea). La toma el script de envío del boletín.
import type { APIRoute } from 'astro';
import { NUMEROS_BOLETIN, numeroPorSlug } from '../../../data/boletin';
import { ensamblar, correoHTML } from '../../../lib/boletin';
export function getStaticPaths() { return NUMEROS_BOLETIN.map((n) => ({ params: { slug: n.slug } })); }
export const GET: APIRoute = ({ params }) => new Response(correoHTML(ensamblar(numeroPorSlug(params.slug!)!)), { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
