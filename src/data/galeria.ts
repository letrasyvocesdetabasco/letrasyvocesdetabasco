// Extraído de GaleriaEventos.astro (rediseño 2026)
export interface FotoItem {
  src: string;
  titulo: string;
  descripcion: string;
  lugar: string;
  fecha: string;
}

export interface AlbumEvento {
  id: string;
  titulo: string;
  subtitulo: string;
  categoriaBadge: string;
  lugar: string;
  fecha: string;
  portada: string;
  resumen: string;
  fotos: FotoItem[];
}

export const ALBUMES_EVENTOS: AlbumEvento[] = [
  // Álbum 1
  {
    id: 'cacao',
    titulo: 'Presentación «A corazón abierto»',
    subtitulo: 'Poemario & Obra Plástica',
    categoriaBadge: 'Presentación Editorial',
    lugar: 'Casa Universitaria Cacao y Chocolate · Villahermosa',
    fecha: '30 de Mayo de 2026',
    portada: '/assets/galeria/evento_cacao_01.jpg',
    resumen: 'Ceremonia solemne de presentación de la obra lírica de María de los Ángeles Cervantes Rosas con la asistencia de la Mesa Directiva y comunidad cultural.',
    fotos: [
      {
        src: '/assets/galeria/evento_cacao_01.jpg',
        titulo: 'Presidium y Apertura Institucional',
        descripcion: 'Apertura solemne con la presencia de la Mesa Directiva, autoridades culturales y la autora.',
        lugar: 'Casa Universitaria Cacao y Chocolate',
        fecha: '30 de Mayo de 2026'
      },
      {
        src: '/assets/galeria/evento_cacao_02.jpg',
        titulo: 'Lectura Lírica y Declamación',
        descripcion: 'Declamación de poemas selectos a cargo de la autora y miembros del claustro literario.',
        lugar: 'Casa Universitaria Cacao y Chocolate',
        fecha: '30 de Mayo de 2026'
      },
      {
        src: '/assets/galeria/evento_cacao_03.jpg',
        titulo: 'Comentarios Editoriales & Crítica',
        descripcion: 'Análisis crítico de la obra poética y su inserción en el canon lírico tabasqueño.',
        lugar: 'Casa Universitaria Cacao y Chocolate',
        fecha: '30 de Mayo de 2026'
      },
      {
        src: '/assets/galeria/evento_cacao_04.jpg',
        titulo: 'Auditorio y Asistentes al Encuentro',
        descripcion: 'Comunidad de lectores, escritores colegiados y público general reunidos en el recinto cultural.',
        lugar: 'Casa Universitaria Cacao y Chocolate',
        fecha: '30 de Mayo de 2026'
      },
      {
        src: '/assets/galeria/evento_cacao_05.jpg',
        titulo: 'Firma de Ejemplares & Convivencia',
        descripcion: 'Dedicatoria de libros y diálogo fraterno entre la comunidad de escritores y asistentes.',
        lugar: 'Casa Universitaria Cacao y Chocolate',
        fecha: '30 de Mayo de 2026'
      }
    ]
  },

  // Álbum 2
  {
    id: 'escuela',
    titulo: 'Escuela de Escritores «José Gorostiza»',
    subtitulo: 'Presentación de Libro & Conversatorio',
    categoriaBadge: 'Ámbito Formativo',
    lugar: 'Librería Universitaria UJAT & Gabo Libros',
    fecha: 'Actividades Académicas 2026',
    portada: '/assets/escuela/galeria/plumas_ceiba_expositores_1.jpg',
    resumen: 'Presentación de libro en la Librería Universitaria UJAT con las directoras y egresadas, y conversatorio literario en Gabo Libros (Plaza Usuma).',
    fotos: [
      {
        src: '/assets/escuela/galeria/plumas_ceiba_expositores_1.jpg',
        titulo: 'Presentación de Libro en Librería Universitaria UJAT',
        descripcion: 'Mesa de lectura con las directoras de la Escuela de Escritores (Dra. Liliana Chuzeville y Dra. Rebeca Díaz) y las alumnas Rebeca D. Michel y Claudia S. Gerónimo.',
        lugar: 'Librería Universitaria UJAT',
        fecha: 'Presentación Editorial'
      },
      {
        src: '/assets/escuela/galeria/plumas_ceiba_expositores_2.jpg',
        titulo: 'Mesa de Honor en Librería Universitaria UJAT',
        descripcion: 'Directivas, formadoras y autoras participantes en el recinto universitario.',
        lugar: 'Librería Universitaria UJAT',
        fecha: 'Presentación Editorial'
      },
      {
        src: '/assets/escuela/galeria/conversatorio_portada.jpg',
        titulo: 'Cartel Oficial del Conversatorio',
        descripcion: 'Cartel del conversatorio «El planeta late y los libros también lo saben» organizado por la Escuela de Escritores y Gabolibros.',
        lugar: 'Gabo Libros (Plaza Usuma)',
        fecha: '5 de junio de 2026'
      },
      {
        src: '/assets/escuela/galeria/conversatorio_mesa.jpg',
        titulo: 'Conversatorio en Gabo Libros',
        descripcion: 'Expositores y ponentes en el conversatorio «El planeta late y los libros también lo saben».',
        lugar: 'Gabo Libros (Plaza Usuma)',
        fecha: '5 de junio de 2026'
      },
      {
        src: '/assets/escuela/galeria/conversatorio_publico_1.jpg',
        titulo: 'Asistentes al Conversatorio en Gabo Libros',
        descripcion: 'Público y comunidad lectora en las instalaciones de Gabo Libros.',
        lugar: 'Gabo Libros (Plaza Usuma)',
        fecha: '5 de junio de 2026'
      },
      {
        src: '/assets/escuela/galeria/conversatorio_publico_2.jpg',
        titulo: 'Foto Grupal al Cierre del Conversatorio',
        descripcion: 'Asistentes, directivas y expositores al término del conversatorio en Gabo Libros.',
        lugar: 'Gabo Libros (Plaza Usuma)',
        fecha: '5 de junio de 2026'
      }
    ]
  },

  // Álbum 3
  {
    id: 'tardes-opalos',
    titulo: '«Tardes Tabasqueñas de Ópalos y Topacios»',
    subtitulo: 'Antología Poética Colectiva LVT',
    categoriaBadge: 'Fondo Editorial',
    lugar: 'Foro Cultural de Tabasco',
    fecha: 'Edición Institucional LVT',
    portada: '/assets/galeria/eventos/presentacion_tardes_opalos_grupal.jpg',
    resumen: 'Encuentro conmemorativo y lectura de obra de la antología poética que agrupa las voces consagradas y contemporáneas del gremio.',
    fotos: [
      {
        src: '/assets/galeria/eventos/presentacion_tardes_opalos_grupal.jpg',
        titulo: 'Foto Grupal de Compiladores y Autores',
        descripcion: 'Fotografía conmemorativa de la Mesa Directiva y poetas participantes en la edición colectiva.',
        lugar: 'Foro Cultural de Tabasco',
        fecha: 'Edición Institucional LVT'
      },
      {
        src: '/assets/galeria/eventos/presentacion_tardes_opalos_autores.jpg',
        titulo: 'Mesa de Autores Antologados',
        descripcion: 'Intervención de poetas compartiendo sus textos y reflexiones sobre la lírica tabasqueña.',
        lugar: 'Foro Cultural de Tabasco',
        fecha: 'Edición Institucional LVT'
      }
    ]
  },

  // Álbum 4
  {
    id: 'leyendas-voces',
    titulo: '«Leyendas y Voces de Tabasco»',
    subtitulo: 'Antología de Narrativa & Memoria Oral',
    categoriaBadge: 'Fondo Editorial',
    lugar: 'Recinto Universitario UJAT',
    fecha: 'Presentación Editorial',
    portada: '/assets/galeria/eventos/presentacion_leyendas_voces_mesa.jpg',
    resumen: 'Acto de presentación de la antología dedicada al rescate de las leyendas, el misterio y la tradición oral del trópico tabasqueño.',
    fotos: [
      {
        src: '/assets/galeria/eventos/presentacion_leyendas_voces_mesa.jpg',
        titulo: 'Mesa de Honor «Leyendas y Voces»',
        descripcion: 'Comentarios al volumen de leyendas y rescate de la memoria popular tabasqueña.',
        lugar: 'Recinto Universitario UJAT',
        fecha: 'Presentación Editorial'
      },
      {
        src: '/assets/galeria/eventos/presentacion_leyendas_voces_grupal.jpg',
        titulo: 'Encuentro de Autores Antologados',
        descripcion: 'Foto grupal de las autoras y autores que dieron vida a las crónicas y narraciones del libro.',
        lugar: 'Recinto Universitario UJAT',
        fecha: 'Presentación Editorial'
      }
    ]
  },

  // Álbum 5
  {
    id: 'aniversarios',
    titulo: 'Aniversarios de Fundación LVT, A.C.',
    subtitulo: 'Sesiones Solemnes (38° y 37° Aniversario)',
    categoriaBadge: 'Acto Solemne',
    lugar: 'Sede Institucional · Villahermosa',
    fecha: '1987 – 2026 (39 Años de Historia)',
    portada: '/assets/galeria/eventos/aniversario_38_lvt.jpg',
    resumen: 'Conmemoraciones anuales de la fundación de la Sociedad de Escritores, entrega de reconocimientos y refrendo estatutario.',
    fotos: [
      {
        src: '/assets/galeria/eventos/aniversario_38_lvt.jpg',
        titulo: 'XXXVIII Aniversario de Fundación LVT, A.C.',
        descripcion: 'Conmemoración del 38° aniversario gremial con entrega de reconocimientos a la trayectoria.',
        lugar: 'Sede Institucional · Villahermosa',
        fecha: '38 Años de Trayectoria (1987-2025)'
      },
      {
        src: '/assets/galeria/eventos/aniversario_37_lvt.jpg',
        titulo: 'XXXVII Aniversario de Fundación LVT, A.C.',
        descripcion: 'Reunión de socios fundadores, activos y honorarios celebrando la permanencia del gremio.',
        lugar: 'Sede Institucional · Villahermosa',
        fecha: '37 Años de Trayectoria (1987-2024)'
      }
    ]
  }
];

// Cálculo de fotos totales
const totalFotosGlobal = ALBUMES_EVENTOS.reduce((acc, alb) => acc + alb.fotos.length, 0);
