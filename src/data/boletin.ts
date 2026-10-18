// Boletín mensual «Entre ríos» de Letras y Voces de Tabasco.
// Cada número se escribe aquí; el sitio genera su edición web (/boletin/<slug>) y la versión para correo
// (/boletin/<slug>/correo.html y correo.txt), que el script de envío (boletin/apps-script) toma para mandarlo.

export const BOLETIN = {
  nombre: 'Entre ríos',
  subtitulo: 'Carta mensual de la Sociedad de Escritores Letras y Voces de Tabasco',
  periodicidad: 'Una vez al mes, la primera semana',
  remitente: 'Letras y Voces de Tabasco',
  responderA: 'contacto@letrasyvocesdetabasco.org',
  /**
   * URL de la aplicación web de Google Apps Script que recibe las suscripciones
   * (ver docs/BOLETIN.md). Mientras esté vacía, el formulario abre un correo de solicitud.
   */
  endpoint: '',
  avisoPrivacidad: '/privacidad',
};

/** Secciones fijas: dan forma a cada número y se explican en /boletin. */
export const SECCIONES_BOLETIN = [
  { id: 'carta', titulo: 'Carta de la Sociedad', descripcion: 'Unas líneas de la mesa directiva sobre lo que estamos haciendo y lo que viene.' },
  { id: 'agenda', titulo: 'Agenda del mes', descripcion: 'Las sesiones del taller gratuito de los sábados, con su tema y sus lecturas, y las fechas de presentaciones y encuentros.' },
  { id: 'editorial', titulo: 'Fondo editorial', descripcion: 'Novedades de nuestras antologías: presentaciones, ejemplares disponibles y convocatorias para publicar.' },
  { id: 'texto', titulo: 'Texto del mes', descripcion: 'Un poema o un relato de dominio público para leer completo, elegido de la Sala de lectura.' },
  { id: 'palabra', titulo: 'Palabra del oficio', descripcion: 'Un término de métrica, retórica o técnica narrativa, explicado con un ejemplo.' },
  { id: 'efemerides', titulo: 'Efemérides literarias', descripcion: 'Natalicios del mes de los escritores de nuestro canon, de Tabasco, México y el mundo.' },
  { id: 'ver-escuchar', titulo: 'Para ver y escuchar', descripcion: 'Un video de nuestra serie de literatura animada o de la videoteca, y una lectura de la audioteca.' },
  { id: 'participa', titulo: 'Participa', descripcion: 'Convocatorias abiertas, cómo sumarte como socio y maneras de apoyar a la Sociedad.' },
] as const;

export interface NumeroBoletin {
  numero: number;
  slug: string;
  mes: string;                // «noviembre de 2026»
  desde: string;              // rango de la agenda (AAAA-MM-DD)
  hasta: string;
  mesEfemerides: number;      // 1-12
  estado: 'borrador' | 'listo' | 'enviado';
  fechaEnvio?: string;        // AAAA-MM-DD sugerida o real
  asunto: string;
  preencabezado: string;      // texto que el correo muestra junto al asunto
  carta: { saludo: string; parrafos: string[]; firma: string; cargo: string };
  eventos: { fecha: string; titulo: string; detalle: string; enlace?: string }[];
  editorial: { titulo: string; texto: string; enlace: string; textoEnlace: string; imagen?: string };
  textoDelMes: string;        // id en src/data/lecturas.ts
  palabra: string;            // id en src/data/glosario.ts
  video: string;              // id de YouTube en src/data/videos.ts
  pista: string;              // id en src/data/voces.ts
  participa: { titulo: string; texto: string; enlace: string; textoEnlace: string }[];
  gracias?: string;
}

export const NUMEROS_BOLETIN: NumeroBoletin[] = [
  {
    numero: 1,
    slug: 'noviembre-2026',
    mes: 'noviembre de 2026',
    desde: '2026-10-24',
    hasta: '2026-11-30',
    mesEfemerides: 11,
    estado: 'borrador',
    fechaEnvio: '2026-11-03',
    asunto: 'Entre ríos, núm. 1: un libro en camino, Sor Juana y el taller de noviembre',
    preencabezado: 'El taller gratuito de cada sábado, la próxima presentación de «Animalia Literaria» y un soneto de Sor Juana para leer completo.',
    carta: {
      saludo: 'Querida lectora, querido lector:',
      parrafos: [
        'Este es el primer número de «Entre ríos», la carta con la que queremos acompañarte cada mes. Aquí te contaremos qué leeremos en el taller de los sábados, qué prepara nuestro fondo editorial y qué voces de Tabasco, de México y del mundo vale la pena descubrir.',
        'Llegamos a este número con una alegría: «Animalia Literaria» ya está impresa y muy pronto la presentaremos con sus dieciséis autores. Tú serás de los primeros en saber la fecha.',
        'Gracias por abrir esta carta. Tu lectura es lo que sostiene a esta casa de la palabra.',
      ],
      firma: 'Juan David Pérez Cabrera',
      cargo: 'Presidente de la Sociedad de Escritores Letras y Voces de Tabasco',
    },
    eventos: [
      { fecha: '2026-11-12', titulo: 'Día Nacional del Libro', detalle: 'Natalicio de Sor Juana Inés de la Cruz. Lo celebraremos con una lectura en el taller del sábado 14.', enlace: '/escritores/sor-juana' },
    ],
    editorial: {
      titulo: '«Animalia Literaria», impresa y en camino',
      texto: 'Diecinueve textos de narrativa y lírica de dieciséis autores sobre el jaguar, el manatí, el coyote y los animales que nos acompañan. El libro ya está impreso; en las próximas semanas anunciaremos la fecha y la sede de su primera presentación.',
      enlace: '/publicaciones/animalia-literaria',
      textoEnlace: 'Conocer el libro',
      imagen: '/assets/portadas/web/animalia_literaria_portada_oficial.webp',
    },
    textoDelMes: 'sor-juana-detente-sombra',
    palabra: 'soneto',
    video: 'Fj39NDNk_h8',
    pista: 'girondo-espantapajaros',
    participa: [
      { titulo: 'Ven al taller', texto: 'Sábados de 11:00 a 13:00 h en la Librería Universitaria UJAT. Es gratuito y no necesitas inscribirte: trae tu libreta.', enlace: '/taller-literario', textoEnlace: 'Ver el calendario' },
      { titulo: 'Plantae Literaria', texto: 'Nuestra próxima antología rendirá homenaje a la flora del sureste. Escríbenos y te avisamos cuando abra la convocatoria.', enlace: '/descargas#antologias', textoEnlace: 'Más información' },
    ],
    gracias: 'La Gran Rifa Cultural concluyó el 16 de octubre. Gracias a todas las personas que compraron un boleto: su aportación sostiene el taller gratuito y la impresión de nuestros libros.',
  },
];

export const numeroPorSlug = (slug: string) => NUMEROS_BOLETIN.find((n) => n.slug === slug);
/** Números visibles en el archivo público (los borradores también se publican como vista previa sin indexar). */
export const NUMEROS_PUBLICOS = NUMEROS_BOLETIN.filter((n) => n.estado !== 'borrador');
