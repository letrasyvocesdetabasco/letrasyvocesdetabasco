// Versión en texto plano del número (alternativa para lectores de correo sin HTML).
import type { APIRoute } from 'astro';
import { NUMEROS_BOLETIN, numeroPorSlug } from '../../../data/boletin';
import { ensamblar, correoTexto } from '../../../lib/boletin';
export function getStaticPaths() { return NUMEROS_BOLETIN.map((n) => ({ params: { slug: n.slug } })); }
export const GET: APIRoute = ({ params }) => new Response(correoTexto(ensamblar(numeroPorSlug(params.slug!)!)), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
