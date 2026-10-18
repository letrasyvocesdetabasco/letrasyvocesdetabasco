// Índice de números para el script de envío: slug, asunto y estado de cada número.
import type { APIRoute } from 'astro';
import { NUMEROS_BOLETIN, BOLETIN } from '../../data/boletin';
export const GET: APIRoute = () => new Response(JSON.stringify({ boletin: BOLETIN.nombre, numeros: NUMEROS_BOLETIN.map((n) => ({ numero: n.numero, slug: n.slug, mes: n.mes, asunto: n.asunto, estado: n.estado, fechaEnvio: n.fechaEnvio })) }, null, 1), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
