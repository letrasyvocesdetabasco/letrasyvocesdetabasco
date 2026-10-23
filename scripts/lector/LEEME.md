# Lector en línea de libros (solo lectura)

El lector (`src/components/lector/LectorLibro.astro`) no publica ningún PDF. Cada página se guarda como una imagen WebP
dividida en 32 piezas barajadas; el navegador las recompone en un lienzo (`canvas`) con la misma permutación
(mulberry32) que usa `barajar.py`. Un archivo descargado por separado es un rompecabezas ilegible.

Medidas adicionales: sin menú contextual ni arrastre sobre el libro, Ctrl+S / Ctrl+P / Ctrl+U bloqueados en el lector,
página de impresión vacía, marca de lectura en el margen inferior, nombres de archivo aleatorios y `robots.txt`
con `Disallow: /lectura/`. Ninguna página web puede impedir del todo una captura de pantalla; estas medidas
evitan la descarga directa del libro.

| Libro | Lector | Datos | Páginas protegidas | Estado |
|---|---|---|---|---|
| A corazón abierto | `/publicaciones/a-corazon-abierto/leer` | `src/data/a_corazon_abierto.ts` y `a_corazon_abierto_lector.json` | `public/lectura/ca/` | Abierto |
| Animalia Literaria | `/publicaciones/animalia-literaria/leer` | `src/data/animalia.ts` y `animalia_lector.json` | fuera del repositorio (ver abajo) | Cerrado hasta la presentación |

Cada libro tiene el interruptor `lecturaAbierta` en su archivo de datos.

## A corazón abierto

El PDF final trae dos páginas por hoja horizontal y la cubierta completa en la primera hoja.
`a_corazon_abierto.py` separa las páginas, recorta portada y contraportada y deja todo listo para barajar:
```bash
T=$(mktemp -d)
python3 scripts/lector/a_corazon_abierto.py "$HOME/Descargas/000 A corazón abierto FINAL - terminado sin logo.pdf" "$T"
mkdir "$T/png" && mv "$T"/p*.png "$T/png/"
python3 scripts/lector/barajar.py "$T/png" public/lectura/ca src/data/a_corazon_abierto_lector.json --ancho 1200 --alto 1856 --sal 0x6C0A2B
cp "$T/portada.webp" public/assets/portadas/a_corazon_abierto_portada.webp
cp "$T/portada_chica.webp" public/assets/portadas/web/a_corazon_abierto_portada.webp
```

## Animalia Literaria: lectura cerrada hasta la presentación

`lecturaAbierta: false` en `src/data/animalia.ts`. Mientras esté cerrada, `/publicaciones/animalia-literaria/leer`
muestra «Próximamente» y las páginas protegidas no se publican: están guardadas fuera del repositorio en
`~/Escritorio/ENTREGA_FINAL_IMPRENTA_ANIMALIA_LITERARIA/06_LECTOR_WEB_PAGINAS_PROTEGIDAS/al`.

### Abrir la lectura el día de la presentación
```bash
cp -a ~/Escritorio/ENTREGA_FINAL_IMPRENTA_ANIMALIA_LITERARIA/06_LECTOR_WEB_PAGINAS_PROTEGIDAS/al public/lectura/
# en src/data/animalia.ts: lecturaAbierta: true
npm run build && git add public/lectura src/data/animalia.ts && git commit -m "feat: abre la lectura en línea de Animalia Literaria" && git push
```

### Regenerar las páginas (si cambia el PDF)
```bash
D="$HOME/Escritorio/ENTREGA_FINAL_IMPRENTA_ANIMALIA_LITERARIA/01_ARCHIVOS_PARA_IMPRENTA_PDF_FINAL"
T=$(mktemp -d)
pdftoppm -png -scale-to-x 1200 -scale-to-y 1840 "$D/02_PORTADA_INDIVIDUAL_14x21.5.pdf" "$T/p000"
pdftoppm -png -scale-to-x 1200 -scale-to-y 1840 "$D/04_INTERIOR_PAGINAS_INDIVIDUALES_14x21.5_ALTA_RESOLUCION.pdf" "$T/p001"
pdftoppm -png -scale-to-x 1200 -scale-to-y 1840 "$D/03_CONTRAPORTADA_INDIVIDUAL_14x21.5.pdf" "$T/p999"
python3 scripts/lector/barajar.py "$T" public/lectura/al src/data/animalia_lector.json
```

## Agregar otro libro
1. Deja las páginas como PNG en una carpeta, en orden alfabético: `p000` portada, `p001`… interior, `p999` contraportada.
2. Ejecuta `barajar.py` con una carpeta nueva en `public/lectura/`, un manifiesto en `src/data/` y una `--sal` distinta.
   `--ancho` debe ser múltiplo de 4 y `--alto` de 8, con la proporción de la página.
3. Crea el archivo de datos con el índice (`EntradaLector[]` de `src/lib/lector.ts`) y la página `leer.astro` con `<LectorLibro />`.

Requiere `poppler` (pdftoppm, pdfimages), Python 3 con Pillow y NumPy.
