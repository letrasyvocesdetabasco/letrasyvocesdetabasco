"""Genera las páginas protegidas del lector en línea de un libro.

Cada página se divide en una rejilla de COLS x FILAS piezas con un margen
replicado (PAD) para evitar costuras, y las piezas se guardan barajadas con una
permutación determinista (mulberry32) que el lector reconstruye en un canvas.
El archivo de imagen por sí solo es un rompecabezas ilegible.

Uso: python3 barajar.py <dir_png> <dir_salida_publica> <manifiesto.json> [--ancho 1200] [--alto 1840] [--sal 0x1F2E3D]
Las páginas se toman de <dir_png>/*.png en orden alfabético (p000 = portada, ..., p999 = contraportada).
"""
import argparse
import json
import secrets
from pathlib import Path

import numpy as np
from PIL import Image

COLS, FILAS, PAD = 4, 8, 6
CALIDAD = 74


def imul(x: int, y: int) -> int:
    return (x * y) & 0xFFFFFFFF


def mulberry32(a: int):
    estado = a & 0xFFFFFFFF

    def siguiente() -> float:
        nonlocal estado
        estado = (estado + 0x6D2B79F5) & 0xFFFFFFFF
        t = imul(estado ^ (estado >> 15), 1 | estado)
        t = ((t + imul(t ^ (t >> 7), 61 | t)) & 0xFFFFFFFF) ^ t
        return ((t ^ (t >> 14)) & 0xFFFFFFFF) / 4294967296

    return siguiente


def permutacion(indice: int, sal: int) -> list[int]:
    r = mulberry32((indice * 2654435761 + sal) & 0xFFFFFFFF)
    p = list(range(COLS * FILAS))
    for i in range(len(p) - 1, 0, -1):
        j = int(r() * (i + 1))
        p[i], p[j] = p[j], p[i]
    return p


def es_blanca(arr: np.ndarray) -> bool:
    return arr.min() >= 245


def barajar(arr: np.ndarray, indice: int, sal: int, tw: int, th: int) -> Image.Image:
    rel = np.pad(arr, ((PAD, PAD), (PAD, PAD), (0, 0)), mode="edge")
    cw, ch = tw + 2 * PAD, th + 2 * PAD
    salida = np.zeros((FILAS * ch, COLS * cw, 3), dtype=np.uint8)
    for j, k in enumerate(permutacion(indice, sal)):
        ox, oy = (k % COLS) * tw, (k // COLS) * th
        pieza = rel[oy:oy + ch, ox:ox + cw]
        dx, dy = (j % COLS) * cw, (j // COLS) * ch
        salida[dy:dy + ch, dx:dx + cw] = pieza
    return Image.fromarray(salida)


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("dir_png", type=Path)
    ap.add_argument("dir_pub", type=Path)
    ap.add_argument("manifiesto", type=Path)
    ap.add_argument("--ancho", type=int, default=1200)
    ap.add_argument("--alto", type=int, default=1840)
    ap.add_argument("--sal", type=lambda s: int(s, 0), default=0x1F2E3D)
    a = ap.parse_args()
    if a.ancho % COLS or a.alto % FILAS:
        raise SystemExit(f"--ancho debe ser múltiplo de {COLS} y --alto de {FILAS}")
    tw, th = a.ancho // COLS, a.alto // FILAS
    a.dir_pub.mkdir(parents=True, exist_ok=True)
    for viejo in a.dir_pub.glob("*.webp"):
        viejo.unlink()
    orden = sorted(a.dir_png.glob("*.png"))
    paginas = []
    total = 0
    for indice, ruta in enumerate(orden):
        im = Image.open(ruta).convert("RGB")
        if im.size != (a.ancho, a.alto):
            im = im.resize((a.ancho, a.alto), Image.LANCZOS)
        arr = np.asarray(im)
        if es_blanca(arr):
            paginas.append(None)
            continue
        nombre = secrets.token_hex(8) + ".webp"
        barajar(arr, indice, a.sal, tw, th).save(a.dir_pub / nombre, "WEBP", quality=CALIDAD, method=6)
        total += (a.dir_pub / nombre).stat().st_size
        paginas.append(nombre)
    manifiesto = {
        "ancho": a.ancho, "alto": a.alto, "cols": COLS, "filas": FILAS, "pad": PAD, "sal": a.sal,
        "base": "/" + a.dir_pub.resolve().as_posix().split("/public/", 1)[1] + "/",
        "paginas": paginas,
    }
    a.manifiesto.write_text(json.dumps(manifiesto, ensure_ascii=False), encoding="utf-8")
    blancas = sum(1 for p in paginas if p is None)
    print(f"{len(paginas)} páginas, {blancas} en blanco, {total / 1e6:.1f} MB")


if __name__ == "__main__":
    main()
