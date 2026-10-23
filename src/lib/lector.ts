// Tipos del lector en línea de libros (src/components/lector/LectorLibro.astro).
export interface EntradaLector { n?: number; titulo: string; autor?: string; pagina: number; paginaImpresa?: string; seccion?: boolean }
export interface ManifiestoLector { ancho: number; alto: number; cols: number; filas: number; pad: number; sal: number; base: string; paginas: (string | null)[] }
