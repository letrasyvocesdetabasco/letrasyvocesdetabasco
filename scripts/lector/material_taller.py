"""Publica en la web (solo lectura, sin descarga) el material PARA ALUMNOS de una sesión del taller.

Toma de ~/Documentos/Taller Literario/sesion_NN/ únicamente:
  03_Diapositivas_*.pdf, 04_Ficha_Trabajo_Alumnos.pdf, 05_Cuaderno_Lecturas_*.pdf
(nunca 02_Consola_Laptop_Docente ni 06_Guia_Maestra_Docente). Cada página se rasteriza, se trocea y se
baraja igual que en barajar.py; el visor (src/components/lector/VisorMaterial.astro) la recompone en un canvas.

Uso: python3 scripts/lector/material_taller.py 10 11 [--origen "~/Documentos/Taller Literario"]
Actualiza src/data/material_taller.json (conserva las demás sesiones).
"""
import argparse
import hashlib
import json
import secrets
import shutil
import subprocess
import tempfile
from pathlib import Path

import numpy as np
from PIL import Image

from barajar import COLS, FILAS, PAD, CALIDAD, barajar, es_blanca

RAIZ = Path(__file__).resolve().parents[2]
PUB = RAIZ / "public" / "lectura" / "taller"
DATOS = RAIZ / "src" / "data" / "material_taller.json"
CAL = RAIZ / "src" / "data" / "taller_calendario.json"

# (patrón, slug, título, ancho, alto) — ancho múltiplo de 4 y alto de 8, con la proporción de la página
DOCS = [
    ("03_Diapositivas_*.pdf", "diapositivas", "Diapositivas", 1536, 864),
    ("04_Ficha_Trabajo_Alumnos.pdf", "ficha", "Ficha de trabajo", 1224, 1584),
    ("05_Cuaderno_Lecturas_*.pdf", "lecturas", "Cuaderno de lecturas", 1224, 1584),
]


def publicar_doc(pdf: Path, sesion: int, slug: str, ancho: int, alto: int) -> dict:
    sal = int(hashlib.sha256(f"lvt-taller-{sesion}-{slug}".encode()).hexdigest()[:6], 16)
    carpeta = PUB / hashlib.sha256(f"s{sesion}-{slug}-{secrets.token_hex(4)}".encode()).hexdigest()[:10]
    carpeta.mkdir(parents=True, exist_ok=True)
    tw, th = ancho // COLS, alto // FILAS
    with tempfile.TemporaryDirectory() as t:
        subprocess.run(["pdftoppm", "-png", "-scale-to-x", str(ancho), "-scale-to-y", str(alto), str(pdf), f"{t}/p"], check=True)
        paginas = []
        for i, ruta in enumerate(sorted(Path(t).glob("p*.png"))):
            im = Image.open(ruta).convert("RGB")
            if im.size != (ancho, alto):
                im = im.resize((ancho, alto), Image.LANCZOS)
            arr = np.asarray(im)
            if es_blanca(arr):
                paginas.append(None)
                continue
            nombre = secrets.token_hex(8) + ".webp"
            barajar(arr, i, sal, tw, th).save(carpeta / nombre, "WEBP", quality=CALIDAD + 8, method=6)
            paginas.append(nombre)
    return {"ancho": ancho, "alto": alto, "cols": COLS, "filas": FILAS, "pad": PAD, "sal": sal,
            "base": f"/lectura/taller/{carpeta.name}/", "paginas": paginas}


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("sesiones", nargs="+", type=int)
    ap.add_argument("--origen", default=str(Path.home() / "Documentos" / "Taller Literario"))
    a = ap.parse_args()
    cal = {s["sesion"]: s for s in json.loads(CAL.read_text())["calendario"] if s.get("sesion")}
    datos = json.loads(DATOS.read_text()) if DATOS.exists() else {"sesiones": []}
    for n in a.sesiones:
        origen = Path(a.origen) / f"sesion_{n:02d}"
        previo = next((s for s in datos["sesiones"] if s["sesion"] == n), None)
        if previo:  # borrar las páginas de una publicación anterior de esta sesión
            for d in previo["documentos"]:
                shutil.rmtree(RAIZ / "public" / d["base"].strip("/"), ignore_errors=True)
            datos["sesiones"].remove(previo)
        docs = []
        for patron, slug, titulo, w, h in DOCS:
            pdfs = sorted(origen.glob(patron))
            if not pdfs:
                print(f"  sesión {n}: falta {patron}")
                continue
            m = publicar_doc(pdfs[0], n, slug, w, h)
            docs.append({"slug": slug, "titulo": titulo, **m})
            print(f"  sesión {n}: {titulo} · {len(m['paginas'])} págs. → {m['base']}")
        s = cal.get(n, {})
        datos["sesiones"].append({"sesion": n, "titulo": s.get("titulo", ""), "modulo": s.get("modulo", ""),
                                  "modulo_nombre": s.get("modulo_nombre", ""), "fecha": s.get("fecha", ""),
                                  "lecturas": s.get("lecturas", ""), "documentos": docs})
    datos["sesiones"].sort(key=lambda s: s["sesion"])
    DATOS.write_text(json.dumps(datos, ensure_ascii=False, indent=1), encoding="utf-8")


if __name__ == "__main__":
    main()
