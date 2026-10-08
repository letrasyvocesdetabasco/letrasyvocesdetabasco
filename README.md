# letrasyvocesdetabasco.org

Sitio oficial de la Sociedad de Escritores «Letras y Voces de Tabasco», A.C. Astro 5 + Tailwind, estático, publicado en GitHub Pages.

## Trabajar en local
```bash
npm install
npm run dev        # http://127.0.0.1:4321
npm run build      # genera dist/ e índice de búsqueda (Pagefind)
npm run preview
```

## Mapa del sitio (2026.2)
| Ruta | Qué es | Datos |
|---|---|---|
| `/` | Portada: texto del día, efeméride, audioteca, taller, canon | varios |
| `/escritores-ilustres`, `/escritores/[id]` | Canon de 82 autores con filtros y ficha individual (vida, obras, citas con fuente, leer, escuchar) | `src/data/escritores_ilustres.ts` (30 originales) + `src/data/escritores_nuevos.ts` (52 añadidos, con fuentes y notas) + `src/data/citas_verificadas.json` |
| `/sala-de-lectura`, `/sala-de-lectura/[id]` | Textos íntegros de dominio público (lírica y narrativa) con modo de lectura | `src/data/lecturas.ts` |
| `/audioteca` | Lírica y narrativa en voz alta; reproductor persistente entre páginas | `src/data/voces.ts`, `public/assets/audios/` |
| `/glosario` | Glosario literario (métrica, figuras, géneros, narrativa, oficio) | `src/data/glosario.ts` |
| `/taller-literario` | Taller sabatino gratuito y calendario | `src/data/taller_calendario.json` |
| `/publicaciones` | Fondo editorial | `src/data/libros.ts` |
| `/EEJG` | Escuela de Escritores «José Gorostiza» | `src/data/escuela.ts` |
| `/historia`, `/autores` | Nosotros, mesa directiva y padrón | `src/data/historia.ts`, `src/data/autores.ts` |
| `/descargas` | Convocatorias, socios, recursos y memoria gráfica | `src/data/convocatorias.ts`, `src/data/galeria.ts` |
| `/rifa` | Rifa cultural (tablero público) | `src/data/boletos_rifa.json` |
| `/contacto`, `/buscar`, `/privacidad` | Contacto y boletín, buscador Pagefind, aviso de privacidad | — |

## Añadir un autor
1. Agrega la ficha a `src/data/escritores_nuevos.ts` (mismo formato; al menos dos fuentes en `fuentes`, discrepancias en `notas`).
2. Guarda el retrato (solo licencia libre) como `public/assets/ilustres/<id_con_guiones_bajos>.webp` en 600×800.
3. `dominioPublico: true` solo si el autor murió antes de 1926 (ley mexicana: vida + 100 años). Solo entonces pueden añadirse textos íntegros a `src/data/lecturas.ts`, citando la fuente.

## Supabase (opcional)
Ver `docs/SUPABASE.md`. Sin credenciales, formularios y audioteca funcionan en modo básico.

## Identidad
Manual de marca: crema `#FDFBF7` (70 %), carbón `#222222` y grafito (20 %), naranja creador `#EF7B38` (10 %). Montserrat para titulares, EB Garamond para la voz literaria, Inter para lectura. Sin anglicismos.
