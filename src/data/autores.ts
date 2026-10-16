// src/data/autores.ts - Padrón y Membresía Histórica de Letras y Voces de Tabasco, A.C.
// Depuración estatutaria y distinción rigurosa de funciones (Actualización 2026)

export interface Autor {
  id: string;
  nombre: string;
  tratamiento?: string;
  rolGremial: string;
  /** Retrato (archivo de LVT), 600×750 */
  foto?: string;
  esMesaDirectiva?: boolean;
  categoria: 'Mesa Directiva & Órganos Colegiados' | 'Socios Activos & Colaboradores' | 'Expresidentes & Fundadores Históricos';
  generoPrincipal: 'Poesía' | 'Narrativa' | 'Ensayo' | 'Dramaturgia' | 'Multidisciplinario';
  semblanza: string;
  obraRepresentativa: string;
  antologiasParticipadas: string[];
  destacado?: boolean;
}

export const PADRON_AUTORES: Autor[] = [
  // =========================================================================
  // 1. MESA DIRECTIVA CONSTITUCIONAL & COMISIÓN DE HONOR Y JUSTICIA (2026–2029)
  // =========================================================================
  {
    id: 'juan-david-perez-cabrera',
    foto: '/assets/personas/juan-david-perez-cabrera.webp',
    nombre: 'Juan David Pérez Cabrera',
    tratamiento: 'Lic.',
    rolGremial: 'Presidente LVT (2026–2029) · Compilador y Editor',
    esMesaDirectiva: true,
    categoria: 'Mesa Directiva & Órganos Colegiados',
    generoPrincipal: 'Narrativa',
    semblanza: 'Físico, escritor y editor. Presidente de la Sociedad de Escritores «Letras y Voces de Tabasco», A.C. Compilador y diseñador editorial general de «Animalia Literaria».',
    obraRepresentativa: '«Animalia Literaria» (Compilación & Cuento)',
    antologiasParticipadas: ['Animalia Literaria', 'Memoria Narrativa y Fotográfica LVT'],
    destacado: true
  },
  {
    id: 'eva-guadalupe-pineda-cruz',
    foto: '/assets/personas/eva-guadalupe-pineda-cruz.webp',
    nombre: 'Eva Guadalupe Pineda Cruz',
    tratamiento: 'Dra.',
    rolGremial: 'Secretaria General LVT (2026–2029) · Poeta y Docente',
    esMesaDirectiva: true,
    categoria: 'Mesa Directiva & Órganos Colegiados',
    generoPrincipal: 'Poesía',
    semblanza: 'Doctora en Educación y docente con 28 años de trayectoria pedagógica. Poeta de honda delicadeza lírica, colaboradora en antologías estatales y coeditora de memorias gremiales.',
    obraRepresentativa: '«La luna y el jaguar»',
    antologiasParticipadas: ['Animalia Literaria', 'Tardes Tabasqueñas de Ópalos y Topacios', 'La Mujer en el Siglo XXI', 'La Navidad que anhelo'],
    destacado: true
  },
  {
    id: 'ana-laura-hernandez-jimenez',
    foto: '/assets/personas/ana-laura-hernandez-jimenez.webp',
    nombre: 'Ana Laura Hernández Jiménez',
    tratamiento: 'Mtra.',
    rolGremial: 'Tesorera Institucional LVT (2026–2029) · Compiladora y Ensayista',
    esMesaDirectiva: true,
    categoria: 'Mesa Directiva & Órganos Colegiados',
    generoPrincipal: 'Ensayo',
    semblanza: 'Tesorera de la Sociedad de Escritores Letras y Voces de Tabasco, A.C., compiladora y revisora técnica de la antología «Tardes Tabasqueñas de Ópalos y Topacios».',
    obraRepresentativa: '«Nociones de feminidad»',
    antologiasParticipadas: ['Tardes Tabasqueñas de Ópalos y Topacios', 'La Mujer en el Siglo XXI'],
    destacado: true
  },
  {
    id: 'liliana-chuzeville-cordoba',
    foto: '/assets/personas/liliana-chuzeville-cordoba.webp',
    nombre: 'Liliana Chuzeville Córdoba',
    tratamiento: 'Dra.',
    rolGremial: 'Comisión de Honor y Justicia LVT · Delegada Emérita LVT · Dir. General EEJG',
    esMesaDirectiva: true,
    categoria: 'Mesa Directiva & Órganos Colegiados',
    generoPrincipal: 'Narrativa',
    semblanza: 'Doctora en Criminología, Expresidenta de LVT, titular de la Comisión de Honor y Justicia, Delegada Emérita de la Sociedad de Escritores y Directora General de la Escuela de Escritores «José Gorostiza». Distinguida con las «Palmas de Oro» y «México en tus manos».',
    obraRepresentativa: '«Viaje entre cuentos y canciones»',
    antologiasParticipadas: ['Animalia Literaria (Prólogo)', 'Amarellus', 'Tardes Tabasqueñas', 'La Mujer en el Siglo XXI'],
    destacado: true
  },
  {
    id: 'pragedis-hernandez-garcia',
    foto: '/assets/personas/pragedis-hernandez-garcia.webp',
    nombre: 'Pragedis Hernández García',
    tratamiento: 'Mtra.',
    rolGremial: 'Comisión de Honor y Justicia LVT · Expresidenta LVT · Poeta Yokot’an',
    esMesaDirectiva: true,
    categoria: 'Mesa Directiva & Órganos Colegiados',
    generoPrincipal: 'Multidisciplinario',
    semblanza: 'Originaria de Tamulté de las Sabanas. Expresidenta de LVT e integrante de la Comisión de Honor y Justicia. Maestra en Innovación Educativa, cuentacuentos y promotora cultural. Compiladora de «Tardes Tabasqueñas» y «La Mujer en el Siglo XXI».',
    obraRepresentativa: '«Oda a la mujer en el siglo XXI»',
    antologiasParticipadas: ['Tardes Tabasqueñas de Ópalos y Topacios', 'La Mujer en el Siglo XXI', 'Animalia Literaria', 'Escuela con sus plumas de ceiba'],
    destacado: true
  },

  // =========================================================================
  // 2. SOCIOS ACTIVOS, AUTORAS Y COLABORADORES PARTICIPANTES (NO MESA DIRECTIVA)
  // =========================================================================
  {
    id: 'juan-manuel-canepa-bertolini',
    foto: '/assets/personas/juan-manuel-canepa-bertolini.webp',
    nombre: 'Juan Manuel Cánepa Bertolini',
    tratamiento: 'Mtro.',
    rolGremial: 'Socio Activo LVT · Escritor, Compositor y Promotor Cultural',
    esMesaDirectiva: false,
    categoria: 'Socios Activos & Colaboradores',
    generoPrincipal: 'Poesía',
    semblanza: 'Compositor musical, conferencista, escritor y miembro activo de la Sociedad de Escritores Letras y Voces de Tabasco, A.C. Autor de tres libros de poesía y reflexiones con destacada presencia en encuentros de lectura.',
    obraRepresentativa: '«Playeros amantes»',
    antologiasParticipadas: ['Animalia Literaria', 'Tardes Tabasqueñas', 'La Mujer en el Siglo XXI'],
    destacado: true
  },
  {
    id: 'maria-de-los-angeles-cervantes',
    foto: '/assets/personas/maria-de-los-angeles-cervantes.webp',
    nombre: 'María de los Ángeles Cervantes Rosas',
    tratamiento: 'Dra.',
    rolGremial: 'Socia Activa LVT · Poeta y Pintora Plástica',
    esMesaDirectiva: false,
    categoria: 'Socios Activos & Colaboradores',
    generoPrincipal: 'Poesía',
    semblanza: 'Doctora en Ciencias Administrativas (SNI I), catedrática investigadora y socia de LVT. Autora del poemario «A corazón abierto», con cuyas pinturas al óleo ilustra sus propias publicaciones y exposiciones visuales.',
    obraRepresentativa: '«A corazón abierto» (Poemario)',
    antologiasParticipadas: ['A corazón abierto', 'Animalia Literaria', 'La Mujer en el Siglo XXI'],
    destacado: true
  },
  {
    id: 'paulina-pineda',
    nombre: 'Paulina Pineda',
    rolGremial: 'Socia Activa LVT · Escritora y Promotora Cultural',
    esMesaDirectiva: false,
    categoria: 'Socios Activos & Colaboradores',
    generoPrincipal: 'Poesía',
    semblanza: 'Escritora y colaboradora activa de la Sociedad de Escritores Letras y Voces de Tabasco, A.C., participante en recitales poéticos, talleres y proyectos colectivos del gremio.',
    obraRepresentativa: '«Voces del Agua»',
    antologiasParticipadas: ['Antologías y Muestras LVT'],
    destacado: true
  },

  // =========================================================================
  // 3. EXPRESIDENTES & REFERENTES HISTÓRICOS TUTELARES
  // =========================================================================
  {
    id: 'mario-de-lille',
    nombre: 'Mario de Lille Fuentes (†)',
    tratamiento: 'Arq.',
    rolGremial: 'Socio Fundador 1987 · Primer Presidente LVT · Fundador Escuela Gorostiza',
    esMesaDirectiva: false,
    categoria: 'Expresidentes & Fundadores Históricos',
    generoPrincipal: 'Ensayo',
    semblanza: 'Eminente arquitecto, catedrático, novelista, dramaturgo, poeta y pilar intelectual de Tabasco. Fundador y primer presidente de LVT en 1987, y creador de la Escuela de Escritores «José Gorostiza» en 2001.',
    obraRepresentativa: '«Nuestro mundo con Clau-dia»',
    antologiasParticipadas: ['Nuestro mundo con Clau-dia', 'Revista Letra Voz'],
    destacado: true
  },
  {
    id: 'guadalupe-azuara-forcelledo',
    nombre: 'Guadalupe Azuara Forcelledo',
    tratamiento: 'Mtra.',
    rolGremial: 'Expresidenta LVT (1994–2000) · Directora Histórica Escuela Gorostiza',
    esMesaDirectiva: false,
    categoria: 'Expresidentes & Fundadores Históricos',
    generoPrincipal: 'Narrativa',
    semblanza: 'Investigadora literaria, escritora y expresidenta de LVT. Impulsora de las magnas antologías estatales en coedición con la UJAT e ICT y figura tutelar de la formación docente.',
    obraRepresentativa: '«Antología de poesía contemporánea de Tabasco»',
    antologiasParticipadas: ['Primero la voz', 'Antología de poesía contemporánea de Tabasco'],
    destacado: true
  },
  {
    id: 'rebeca-diaz-suarez',
    foto: '/assets/personas/rebeca-diaz-suarez.webp',
    nombre: 'Rebeca Díaz Suárez',
    tratamiento: 'Dra.',
    rolGremial: 'Expresidenta LVT (2013–2016) · Coordinación de Admisiones EEJG',
    esMesaDirectiva: false,
    categoria: 'Expresidentes & Fundadores Históricos',
    generoPrincipal: 'Poesía',
    semblanza: 'Doctora, expresidenta de la Sociedad de Escritores Letras y Voces de Tabasco, A.C., Coordinadora de Admisiones de la Escuela de Escritores «José Gorostiza» (EEJG), catedrática y formadora de generaciones literarias en el Sureste de México.',
    obraRepresentativa: '«Mujer en 3D»',
    antologiasParticipadas: ['La Mujer en el Siglo XXI', 'Memorias Líricas LVT', 'Proyecto Babel', 'Animalia Literaria'],
    destacado: true
  },
  {
    id: 'eli-manuel-austria-hernandez',
    nombre: 'Elí Manuel Austria Hernández',
    tratamiento: 'Lic.',
    rolGremial: 'Expresidente LVT · Autor y Compilador',
    esMesaDirectiva: false,
    categoria: 'Expresidentes & Fundadores Históricos',
    generoPrincipal: 'Narrativa',
    semblanza: 'Expresidente de la Sociedad de Escritores «Letras y Voces de Tabasco», A.C. Compilador de la antología «Tardes Tabasqueñas de Ópalos y Topacios» y colaborador editorial.',
    obraRepresentativa: '«Tardes Tabasqueñas de Ópalos y Topacios» (Compilador)',
    antologiasParticipadas: ['Tardes Tabasqueñas de Ópalos y Topacios', 'Amarellus'],
    destacado: true
  },
  {
    id: 'vicente-gomez-montero',
    nombre: 'Vicente Gómez Montero (†)',
    tratamiento: 'Mtro.',
    rolGremial: 'Socio Fundador 1987 · Dramaturgo y Narrador Emérito',
    esMesaDirectiva: false,
    categoria: 'Expresidentes & Fundadores Históricos',
    generoPrincipal: 'Dramaturgia',
    semblanza: 'Uno de los fundadores primordiales de la Sociedad de Escritores en 1987. Dramaturgo, cronista y narrador fundamental con amplia trayectoria escénica y editorial en el sureste mexicano.',
    obraRepresentativa: '«Las puertas del infierno»',
    antologiasParticipadas: ['Las puertas del infierno', 'Amarellus (Prólogo)', 'Primero la voz'],
    destacado: true
  },
  {
    id: 'teodosio-garcia-ruiz',
    nombre: 'Teodosio García Ruiz (†)',
    tratamiento: 'Mtro.',
    rolGremial: 'Socio Fundador 1987 · Poeta y Ensayista',
    esMesaDirectiva: false,
    categoria: 'Expresidentes & Fundadores Históricos',
    generoPrincipal: 'Poesía',
    semblanza: 'Pilar formativo del taller literario inicial y socio fundador de LVT. Autor de «Sin lugar a dudas», voz lírica emblemática de las letras tabasqueñas.',
    obraRepresentativa: '«Sin lugar a dudas»',
    antologiasParticipadas: ['Primero la voz', 'Antología de poesía contemporánea de Tabasco'],
    destacado: true
  },
  {
    id: 'ciprian-cabrera-jasso',
    nombre: 'Ciprián Cabrera Jasso (†)',
    tratamiento: 'Mtro.',
    rolGremial: 'Fundador Emérito · Compilador Histórico',
    esMesaDirectiva: false,
    categoria: 'Expresidentes & Fundadores Históricos',
    generoPrincipal: 'Poesía',
    semblanza: 'Poeta y compilador señero de la literatura tabasqueña contemporánea. Coordinó la emblemática antología de narrativa «Primero la voz» (1995) en coedición con la UJAT.',
    obraRepresentativa: '«Primero la voz» (Compilación)',
    antologiasParticipadas: ['Primero la voz', 'Antología de poesía contemporánea de Tabasco'],
    destacado: true
  },
  {
    id: 'jesus-de-dios',
    nombre: 'Jesús de Dios («Chucho de Dios») (†)',
    tratamiento: 'Don',
    rolGremial: 'Socio Fundador 1987 · Promotor Cívico-Cultural',
    esMesaDirectiva: false,
    categoria: 'Expresidentes & Fundadores Históricos',
    generoPrincipal: 'Poesía',
    semblanza: 'Poeta y promotor cultural de entrañable memoria cívica en el gremio literario del Sureste; impulsor del movimiento de talleres autónomos.',
    obraRepresentativa: '«Cantos del Usumacinta»',
    antologiasParticipadas: ['Primero la voz', 'Memorias Fundacionales LVT'],
    destacado: false
  },
  {
    id: 'jorge-priego-martinez',
    nombre: 'Jorge Priego Martínez',
    tratamiento: 'Mtro.',
    rolGremial: 'Socio Fundador 1987 · Cronista Emérito de Villahermosa',
    esMesaDirectiva: false,
    categoria: 'Expresidentes & Fundadores Históricos',
    generoPrincipal: 'Ensayo',
    semblanza: 'Historiador, folclorista y cronista emérito de la ciudad de Villahermosa. Figura intelectual indispensable en la preservación de la tradición y el habla tabasqueña.',
    obraRepresentativa: '«El habla popular de Tabasco»',
    antologiasParticipadas: ['Primero la voz', 'Antología de narrativa tabasqueña'],
    destacado: true
  },
  {
    id: 'maria-del-carmen-luna-perez',
    nombre: 'María del Carmen Luna Pérez',
    tratamiento: 'Mtra.',
    rolGremial: 'Socia Fundadora 1987 · Docente e Investigadora',
    esMesaDirectiva: false,
    categoria: 'Expresidentes & Fundadores Históricos',
    generoPrincipal: 'Ensayo',
    semblanza: 'Escritora, docente e investigadora, impulsora clave de la vinculación y proyección académica fundacional de la asociación civil.',
    obraRepresentativa: '«Ensayos del Sureste»',
    antologiasParticipadas: ['Primero la voz', 'Antología de poesía contemporánea de Tabasco'],
    destacado: false
  },
  {
    id: 'margarito-palacios-maldonado',
    nombre: 'Margarito Palacios Maldonado',
    tratamiento: 'Lic.',
    rolGremial: 'Pionero Fundador Escuela de Escritores «José Gorostiza»',
    esMesaDirectiva: false,
    categoria: 'Expresidentes & Fundadores Históricos',
    generoPrincipal: 'Ensayo',
    semblanza: 'Intelectual y promotor cultural, partícipe indispensable en la gestación y primeros ciclos formativos de la Escuela de Escritores «José Gorostiza» (EEJG).',
    obraRepresentativa: '«Crónicas de formación literaria»',
    antologiasParticipadas: ['Escuela con sus plumas de ceiba', 'Revista Letra Voz'],
    destacado: false
  },
  {
    id: 'fernando-nieto-cadena',
    nombre: 'Fernando Nieto Cadena (†)',
    tratamiento: 'Mtro.',
    rolGremial: 'Catedrático Emérito Histórico EEJG',
    esMesaDirectiva: false,
    categoria: 'Expresidentes & Fundadores Históricos',
    generoPrincipal: 'Poesía',
    semblanza: 'Poeta y psicólogo ecuatoriano-mexicano; formador fundamental de la Escuela de Escritores en las cátedras de Periodismo Cultural y Taller de Ensayo.',
    obraRepresentativa: '«A la orilla del tiempo»',
    antologiasParticipadas: ['Antologías y Cátedras EEJG'],
    destacado: false
  }
];
