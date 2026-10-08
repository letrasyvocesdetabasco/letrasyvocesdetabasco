// Cliente de Supabase para el navegador (opcional).
// Si no hay credenciales públicas configuradas, cada función devuelve null y el sitio
// sigue funcionando con WhatsApp y correo como vía de contacto.
// Variables: PUBLIC_SUPABASE_URL y PUBLIC_SUPABASE_ANON_KEY (ver .env.example y docs/SUPABASE.md)
import type { SupabaseClient } from '@supabase/supabase-js';

export const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL as string | undefined;
export const SUPABASE_ANON_KEY = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as string | undefined;
export const SUPABASE_ACTIVO = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

let cliente: SupabaseClient | null = null;
export async function supabase(): Promise<SupabaseClient | null> {
  if (!SUPABASE_ACTIVO) return null;
  if (cliente) return cliente;
  const { createClient } = await import('@supabase/supabase-js');
  cliente = createClient(SUPABASE_URL!, SUPABASE_ANON_KEY!, { auth: { persistSession: false } });
  return cliente;
}

/** Registra una reproducción de la audioteca (anónima; solo el id de la pista). */
export async function registrarReproduccion(pistaId: string) {
  const sb = await supabase(); if (!sb) return;
  try { await sb.from('audioteca_reproducciones').insert({ pista_id: pistaId }); } catch { /* silencioso */ }
}

/** Conteo de reproducciones por pista (vista pública). */
export async function conteoReproducciones(): Promise<Record<string, number>> {
  const sb = await supabase(); if (!sb) return {};
  const { data } = await sb.from('audioteca_conteo').select('pista_id, total');
  const out: Record<string, number> = {};
  for (const r of data || []) out[r.pista_id] = Number(r.total);
  return out;
}

export type Resultado = { ok: true } | { ok: false; error: string };

export async function suscribirBoletin(correo: string, nombre = '', origen = 'web'): Promise<Resultado> {
  const sb = await supabase(); if (!sb) return { ok: false, error: 'sin-conexion' };
  const { error } = await sb.from('boletin_suscriptores').insert({ correo: correo.trim().toLowerCase(), nombre: nombre.trim(), origen });
  if (error) return { ok: false, error: error.code === '23505' ? 'duplicado' : error.message };
  return { ok: true };
}

export async function enviarMensaje(d: { nombre: string; correo: string; telefono?: string; asunto: string; mensaje: string }): Promise<Resultado> {
  const sb = await supabase(); if (!sb) return { ok: false, error: 'sin-conexion' };
  const { error } = await sb.from('mensajes_contacto').insert(d);
  return error ? { ok: false, error: error.message } : { ok: true };
}

export async function inscribirTaller(d: { nombre: string; whatsapp: string; correo?: string; interes?: string }): Promise<Resultado> {
  const sb = await supabase(); if (!sb) return { ok: false, error: 'sin-conexion' };
  const { error } = await sb.from('taller_inscripciones').insert(d);
  return error ? { ok: false, error: error.message } : { ok: true };
}

/** Estado de la rifa en tiempo real: devuelve { numero: estado } y permite suscribirse a cambios. */
export async function estadoRifa(onCambio?: (b: { numero: number; estado: string }) => void) {
  const sb = await supabase(); if (!sb) return null;
  const { data } = await sb.from('rifa_boletos').select('numero, estado');
  if (onCambio) {
    sb.channel('rifa').on('postgres_changes', { event: '*', schema: 'public', table: 'rifa_boletos' }, (p: any) => { if (p.new) onCambio(p.new); }).subscribe();
  }
  const out: Record<number, string> = {};
  for (const r of data || []) out[r.numero] = r.estado;
  return out;
}
