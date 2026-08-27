#!/usr/bin/env python3
"""
GESTOR AUTOMATIZADO DE BOLETOS DE RIFA LVT 2026
Integración con n8n, WhatsApp Cloud API (Facebook Business) y Hermes Agent.

Uso:
  python3 gestor_rifa_n8n.py status
  python3 gestor_rifa_n8n.py apartar <boleto_id> "<nombre_participante>"
  python3 gestor_rifa_n8n.py pagar <boleto_id> "<nombre_participante>"
  python3 gestor_rifa_n8n.py liberar <boleto_id>
  python3 gestor_rifa_n8n.py procesar-whatsapp "<mensaje_texto>"
  python3 gestor_rifa_n8n.py serve [puerto=8088]
"""

import sys
import os
import json
import re
import datetime
import subprocess
from http.server import HTTPServer, BaseHTTPRequestHandler

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JSON_PATH = os.path.join(BASE_DIR, "src", "data", "boletos_rifa.json")

def cargar_datos():
    if not os.path.exists(JSON_PATH):
        raise FileNotFoundError(f"No se encontró el archivo {JSON_PATH}")
    with open(JSON_PATH, "r", encoding="utf-8") as f:
        return json.load(f)

def guardar_datos(data, auto_commit=False, commit_msg=None):
    with open(JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"✓ Archivo {JSON_PATH} actualizado correctamente.")
    
    if auto_commit:
        try:
            msg = commit_msg or f"chore(rifa): actualizar estado de boletos {datetime.datetime.now().strftime('%Y-%m-%d %H:%M')}"
            subprocess.run(["git", "add", JSON_PATH], cwd=BASE_DIR, check=True)
            subprocess.run(["git", "commit", "-m", msg], cwd=BASE_DIR, check=True)
            print(f"✓ Git commit realizado: {msg}")
        except Exception as e:
            print(f"Nota: Git commit automático omitido o sin cambios ({e})")

def obtener_numeros_boleto(boleto_id: int):
    # Boleto 1: 00 y 50, ..., Boleto 50: 49 y 99
    idx = boleto_id - 1
    num1 = str(idx).zfill(2)
    num2 = str(idx + 50).zfill(2)
    return [num1, num2]

def apartar_boleto(boleto_id: int, participante: str):
    if boleto_id < 1 or boleto_id > 50:
        return {"ok": False, "error": "El ID de boleto debe ser entre 1 y 50."}
    
    data = cargar_datos()
    ocupados = data.get("boletos_ocupados", {})
    id_str = str(boleto_id)
    
    if id_str in ocupados and ocupados[id_str].get("estado") == "Pagado":
        return {"ok": False, "error": f"El boleto #{id_str} ya fue PAGADO por {ocupados[id_str].get('participante')}."}
    
    nums = obtener_numeros_boleto(boleto_id)
    ocupados[id_str] = {
        "estado": "Apartado",
        "numeros": nums,
        "participante": participante,
        "fecha": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }
    data["boletos_ocupados"] = ocupados
    guardar_datos(data, auto_commit=True, commit_msg=f"feat(rifa): apartar boleto #{id_str} para {participante}")
    return {"ok": True, "boleto_id": boleto_id, "numeros": nums, "participante": participante, "estado": "Apartado"}

def pagar_boleto(boleto_id: int, participante: str):
    if boleto_id < 1 or boleto_id > 50:
        return {"ok": False, "error": "El ID de boleto debe ser entre 1 y 50."}
    
    data = cargar_datos()
    ocupados = data.get("boletos_ocupados", {})
    id_str = str(boleto_id)
    
    nums = obtener_numeros_boleto(boleto_id)
    ocupados[id_str] = {
        "estado": "Pagado",
        "numeros": nums,
        "participante": participante,
        "fecha": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }
    data["boletos_ocupados"] = ocupados
    guardar_datos(data, auto_commit=True, commit_msg=f"feat(rifa): registrar pago boleto #{id_str} de {participante}")
    return {"ok": True, "boleto_id": boleto_id, "numeros": nums, "participante": participante, "estado": "Pagado"}

def liberar_boleto(boleto_id: int):
    data = cargar_datos()
    ocupados = data.get("boletos_ocupados", {})
    id_str = str(boleto_id)
    if id_str in ocupados:
        prev = ocupados.pop(id_str)
        data["boletos_ocupados"] = ocupados
        guardar_datos(data, auto_commit=True, commit_msg=f"feat(rifa): liberar boleto #{id_str}")
        return {"ok": True, "mensaje": f"Boleto #{id_str} liberado exitosamente.", "prev": prev}
    return {"ok": False, "error": f"El boleto #{id_str} no estaba ocupado."}

def procesar_mensaje_whatsapp(texto: str):
    """
    Parsea automáticamente el texto generado por la web de LVT o un mensaje de cliente:
    Extrae números de boletos, nombre del participante y folio.
    """
    # 1. Buscar patrón de boletos: Boleto #05, #12, etc.
    boletos_encontrados = re.findall(r'[Bb]oleto\s*#?(\d+)', texto)
    
    # 2. Buscar números de la suerte: Números: 04, 54 o números directos
    nums_directos = re.findall(r'\b(\d{2})\b', texto)
    
    # 3. Buscar nombre del participante
    nombre_match = re.search(r'\*?Participante:\*?\s*([^\n\r]+)', texto, re.IGNORECASE)
    if not nombre_match:
        nombre_match = re.search(r'\*?Comprador:\*?\s*([^\n\r]+)', texto, re.IGNORECASE)
    nombre = nombre_match.group(1).strip() if nombre_match else "Participante WhatsApp"
    
    # 4. Buscar Folio
    folio_match = re.search(r'\*?Folio[^:]*:\*?\s*([A-Z0-9\-]+)', texto, re.IGNORECASE)
    folio = folio_match.group(1).strip() if folio_match else "S/F"
    
    # Resolver IDs de boletos
    target_ids = set()
    for b in boletos_encontrados:
        val = int(b)
        if 1 <= val <= 50:
            target_ids.add(val)
            
    # Si no se encontraron por ID, resolver por números (00 a 99)
    if not target_ids and nums_directos:
        for n in nums_directos:
            n_val = int(n)
            if 0 <= n_val <= 99:
                target_ids.add((n_val % 50) + 1)
                
    if not target_ids:
        return {
            "ok": False,
            "error": "No se pudieron identificar boletos o números válidos en el mensaje.",
            "texto_analizado": texto
        }
        
    resultados = []
    for b_id in sorted(list(target_ids)):
        res = apartar_boleto(b_id, f"{nombre} (Folio: {folio})")
        resultados.append(res)
        
    return {
        "ok": True,
        "folio": folio,
        "participante": nombre,
        "boletos_procesados": resultados
    }

# Servidor Webhook Ligero para n8n
class RifaWebhookHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length)
        
        try:
            body = json.loads(post_data.decode('utf-8'))
        except:
            body = {"texto": post_data.decode('utf-8')}
            
        action = body.get("action", "procesar_whatsapp")
        
        if action == "procesar_whatsapp" or "texto" in body:
            res = procesar_mensaje_whatsapp(body.get("texto", ""))
        elif action == "apartar":
            res = apartar_boleto(int(body.get("boleto_id")), body.get("participante", "Reserva n8n"))
        elif action == "pagar":
            res = pagar_boleto(int(body.get("boleto_id")), body.get("participante", "Pago n8n"))
        elif action == "liberar":
            res = liberar_boleto(int(body.get("boleto_id")))
        elif action == "status":
            res = cargar_datos()
        else:
            res = {"ok": False, "error": f"Acción desconocida '{action}'"}
            
        self.send_response(200)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.end_headers()
        self.wfile.write(json.dumps(res, ensure_ascii=False, indent=2).encode('utf-8'))
        
    def do_GET(self):
        data = cargar_datos()
        self.send_response(200)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.end_headers()
        self.wfile.write(json.dumps(data, ensure_ascii=False, indent=2).encode('utf-8'))

def main():
    if len(sys.argv) < 2:
        print(__doc__)
        return

    cmd = sys.argv[1].lower()
    
    if cmd == "status":
        data = cargar_datos()
        total = data.get("total_boletos_dobles", 50)
        ocupados = data.get("boletos_ocupados", {})
        print(f"\n--- ESTADO DE LA GRAN RIFA CULTURAL LVT 2026 ---")
        print(f"Total Boletos: {total} (100 números: 00 al 99)")
        print(f"Boletos Ocupados: {len(ocupados)} / {total}")
        print(f"Progreso: {round((len(ocupados)/total)*100)}%")
        print("-" * 50)
        for k, v in sorted(ocupados.items(), key=lambda x: int(x[0])):
            print(f"Boleto #{k.zfill(2)} [{v['numeros'][0]} · {v['numeros'][1]}]: {v['estado'].upper()} - {v['participante']} ({v.get('fecha', 'N/A')})")
        print("-" * 50)
        
    elif cmd == "apartar":
        if len(sys.argv) < 4:
            print("Uso: gestor_rifa_n8n.py apartar <boleto_id> <participante>")
            return
        res = apartar_boleto(int(sys.argv[2]), sys.argv[3])
        print(json.dumps(res, indent=2, ensure_ascii=False))
        
    elif cmd == "pagar":
        if len(sys.argv) < 4:
            print("Uso: gestor_rifa_n8n.py pagar <boleto_id> <participante>")
            return
        res = pagar_boleto(int(sys.argv[2]), sys.argv[3])
        print(json.dumps(res, indent=2, ensure_ascii=False))
        
    elif cmd == "liberar":
        if len(sys.argv) < 3:
            print("Uso: gestor_rifa_n8n.py liberar <boleto_id>")
            return
        res = liberar_boleto(int(sys.argv[2]))
        print(json.dumps(res, indent=2, ensure_ascii=False))
        
    elif cmd == "procesar-whatsapp":
        if len(sys.argv) < 3:
            print("Uso: gestor_rifa_n8n.py procesar-whatsapp \"<texto_mensaje>\"")
            return
        res = procesar_mensaje_whatsapp(sys.argv[2])
        print(json.dumps(res, indent=2, ensure_ascii=False))
        
    elif cmd == "serve":
        port = int(sys.argv[2]) if len(sys.argv) > 2 else 8088
        server = HTTPServer(('127.0.0.1', port), RifaWebhookHandler)
        print(f"🚀 Servidor Webhook LVT para n8n escuchando en http://127.0.0.1:{port}")
        print(f"Endpoint POST para n8n: http://127.0.0.1:{port}/webhook")
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            print("\nServidor detenido.")
    else:
        print(f"Comando desconocido: {cmd}")
        print(__doc__)

if __name__ == "__main__":
    main()
