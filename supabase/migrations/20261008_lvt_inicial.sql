-- =============================================================================
-- Letras y Voces de Tabasco, A.C. · Esquema inicial para Supabase
-- Ejecutar en: Supabase → SQL Editor (o `supabase db push`)
-- Principio: el sitio es estático; el navegador usa la clave anon y SOLO puede
-- insertar en formularios y leer vistas públicas. Todo lo demás requiere service_role.
-- =============================================================================

create extension if not exists pgcrypto;

-- 1) Boletín -------------------------------------------------------------------
create table if not exists public.boletin_suscriptores (
  id uuid primary key default gen_random_uuid(),
  correo text not null unique check (correo ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  nombre text default '',
  origen text default 'web',
  confirmado boolean default false,
  creado_en timestamptz default now()
);
alter table public.boletin_suscriptores enable row level security;
drop policy if exists "anon inserta boletin" on public.boletin_suscriptores;
create policy "anon inserta boletin" on public.boletin_suscriptores for insert to anon with check (length(correo) < 200 and length(nombre) < 120);

-- 2) Mensajes de contacto ------------------------------------------------------
create table if not exists public.mensajes_contacto (
  id uuid primary key default gen_random_uuid(),
  nombre text not null check (length(nombre) between 2 and 120),
  correo text not null check (correo ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  telefono text default '',
  asunto text not null check (length(asunto) between 2 and 140),
  mensaje text not null check (length(mensaje) between 5 and 4000),
  atendido boolean default false,
  creado_en timestamptz default now()
);
alter table public.mensajes_contacto enable row level security;
drop policy if exists "anon inserta contacto" on public.mensajes_contacto;
create policy "anon inserta contacto" on public.mensajes_contacto for insert to anon with check (true);

-- 3) Inscripciones al taller ---------------------------------------------------
create table if not exists public.taller_inscripciones (
  id uuid primary key default gen_random_uuid(),
  nombre text not null check (length(nombre) between 2 and 120),
  whatsapp text not null check (length(whatsapp) between 8 and 20),
  correo text default '',
  interes text default '',
  creado_en timestamptz default now()
);
alter table public.taller_inscripciones enable row level security;
drop policy if exists "anon inserta taller" on public.taller_inscripciones;
create policy "anon inserta taller" on public.taller_inscripciones for insert to anon with check (true);

-- 4) Audioteca: reproducciones anónimas y conteo público ----------------------
create table if not exists public.audioteca_reproducciones (
  id bigint generated always as identity primary key,
  pista_id text not null check (length(pista_id) < 80),
  creado_en timestamptz default now()
);
alter table public.audioteca_reproducciones enable row level security;
drop policy if exists "anon inserta reproduccion" on public.audioteca_reproducciones;
create policy "anon inserta reproduccion" on public.audioteca_reproducciones for insert to anon with check (true);
create or replace view public.audioteca_conteo with (security_invoker = false) as
  select pista_id, count(*)::bigint as total from public.audioteca_reproducciones group by pista_id;
grant select on public.audioteca_conteo to anon, authenticated;

-- 5) Rifa: tablero público en tiempo real -------------------------------------
create table if not exists public.rifa_boletos (
  numero int primary key check (numero between 1 and 100),
  estado text not null default 'disponible' check (estado in ('disponible','apartado','pagado')),
  actualizado_en timestamptz default now()
);
alter table public.rifa_boletos enable row level security;
drop policy if exists "todos leen rifa" on public.rifa_boletos;
create policy "todos leen rifa" on public.rifa_boletos for select to anon, authenticated using (true);
insert into public.rifa_boletos (numero) select generate_series(1, 50) on conflict do nothing;
-- Realtime (el panel de Supabase también permite activarlo desde Database → Replication)
do $$ begin
  if not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and tablename = 'rifa_boletos') then
    alter publication supabase_realtime add table public.rifa_boletos;
  end if;
end $$;

-- 6) Mantenimiento: marca de actualización -------------------------------------
create or replace function public.tocar_actualizado() returns trigger language plpgsql as $$
begin new.actualizado_en = now(); return new; end $$;
drop trigger if exists rifa_tocar on public.rifa_boletos;
create trigger rifa_tocar before update on public.rifa_boletos for each row execute function public.tocar_actualizado();
