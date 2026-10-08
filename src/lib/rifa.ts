// Estado público de la rifa: solo números y estado (nunca nombres ni teléfonos)
import datos from '../data/boletos_rifa.json';
type Ocupado = { estado: string; num1: string; num2: string };
const D = datos as any;
export const RIFA = {
  precio: D.precio_boleto as number,
  totalBoletos: D.total_boletos_dobles as number,
  sorteo: D.sorteo_institucion as string,
  fecha: D.sorteo_fecha as string,
  mecanica: D.sorteo_mecanica as string,
  banco: D.datos_bancarios as { institucion: string; beneficiario: string; clabe: string; concepto_sugerido?: string },
  premios: (D.premios || []) as any[],
};
export function boletos() {
  const oc = (D.boletos_ocupados || {}) as Record<string, Ocupado>;
  return Array.from({ length: RIFA.totalBoletos }, (_, i) => {
    const n = i + 1;
    const o = oc[String(n)];
    const estado = !o ? 'disponible' : o.estado.toLowerCase().startsWith('pag') ? 'pagado' : 'apartado';
    return { n, a: String(n - 1).padStart(2, '0'), b: String(n + 49).padStart(2, '0'), estado };
  });
}
export function resumen() {
  const b = boletos();
  return { disponibles: b.filter((x) => x.estado === 'disponible').length, apartados: b.filter((x) => x.estado === 'apartado').length, pagados: b.filter((x) => x.estado === 'pagado').length, total: b.length };
}
