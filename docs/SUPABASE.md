# Supabase en el sitio de Letras y Voces de Tabasco

El sitio es estático (Astro + GitHub Pages). Supabase añade cuatro capacidades opcionales sin servidor propio:

| Función | Tabla / vista | Dónde se usa |
|---|---|---|
| Boletín por correo | `boletin_suscriptores` | Pie de página y /contacto |
| Mensajes de contacto | `mensajes_contacto` | /contacto |
| Inscripciones al taller | `taller_inscripciones` | /taller-literario#inscripcion |
| Conteo de reproducciones | `audioteca_reproducciones` → vista `audioteca_conteo` | /audioteca («más escuchadas») |
| Tablero de la rifa en tiempo real | `rifa_boletos` (Realtime) | /rifa |

Si las variables no existen, cada formulario cae de manera transparente a WhatsApp o correo. Nada se rompe.

## 1. Crear el esquema
1. Entra a tu proyecto en https://supabase.com → **SQL Editor**.
2. Pega y ejecuta `supabase/migrations/20261008_lvt_inicial.sql`.
3. Verifica en **Database → Replication** que `rifa_boletos` esté en la publicación `supabase_realtime`.

## 2. Credenciales públicas
En **Project Settings → API** copia *Project URL* y la clave *anon public*. Son públicas por diseño: las políticas RLS del esquema solo permiten **insertar** en formularios y **leer** la vista de conteos y el tablero de la rifa.

- Local: crea `.env` a partir de `.env.example`.
- GitHub Actions: en el repositorio → *Settings → Secrets and variables → Actions* crea `PUBLIC_SUPABASE_URL` y `PUBLIC_SUPABASE_ANON_KEY`. El flujo `deploy.yml` ya los inyecta al compilar.

## 3. Sincronizar la rifa desde n8n (opcional)
El bot que hoy edita `boletos_rifa.json` puede además hacer `PATCH` a `rifa_boletos` con la clave *service_role* (nunca en el navegador):

```
PATCH https://TU-PROYECTO.supabase.co/rest/v1/rifa_boletos?numero=eq.21
apikey: <service_role>   Authorization: Bearer <service_role>
Content-Type: application/json   Prefer: return=minimal
{"estado":"pagado"}
```
Todos los visitantes verán el cambio al instante.

## 4. Leer los mensajes y suscriptores
Desde el panel **Table Editor** o con una vista de Notion/n8n conectada por la API REST con `service_role`. Los datos personales no salen nunca al sitio público.
