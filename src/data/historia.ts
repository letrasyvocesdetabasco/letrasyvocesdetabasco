export interface GestionHistorica {
  periodo: string;
  liderazgo: string;
  descripcion: string;
  hitos: string[];
}

export const CRONOLOGIA_DIRECTIVA: GestionHistorica[] = [
  {
    periodo: '1987 – 1994',
    liderazgo: 'Mesa Directiva Fundacional (Arq. Mario de Lille Fuentes (†), Teodosio García Ruiz (†), Carmen Luna Pérez, Jorge Priego Martínez, Vicente Gómez Montero (†), Jesús de Dios (†))',
    descripcion: 'Constitución legal de la asociación civil en Villahermosa, formalizando el espacio autónomo para el gremio, estructurando la red estatal de talleres y consolidando la representatividad de los escritores.',
    hitos: [
      'Constitución legal de la asociación civil en 1987, encabezada por el Arq. Mario de Lille Fuentes (†) y el núcleo de escritores pioneros.',
      'Estructuración de talleres literarios municipales autónomos y espacios de debate estético.',
      'Primeras gestiones de coedición con la Universidad Juárez Autónoma de Tabasco (UJAT) y el ICT.'
    ]
  },
  {
    periodo: '1994 – 2000',
    liderazgo: 'Presidencia de Guadalupe Azuara Forcelledo',
    descripcion: 'Consolidación de la presencia institucional en los comités de planeación cultural del estado y edición de antologías fundacionales.',
    hitos: [
      'Publicación monumental de "Primero la voz" (1995) y "Antología de poesía contemporánea de Tabasco" (487 págs.).',
      'Integración formal al Consejo Editorial del ICT y al FECA.',
      'Publicación de obras clave en la serie Opera Prima ("La pluma en el blanco", 1996).'
    ]
  },
  {
    periodo: '2001 – 2003',
    liderazgo: 'Presidencia de la Mesa Directiva y Dirección Académica del Arq. Mario de Lille Fuentes',
    descripcion: 'Hito histórico con la creación del brazo formativo académico formal y del órgano de difusión periodística de la asociación.',
    hitos: [
      'Fundación de la Escuela de Escritores "José Gorostiza" (Septiembre de 2001), diseñada y dirigida por el Arq. Mario de Lille Fuentes.',
      'Lanzamiento y circulación de la Revista Cultural "Letra Voz".',
      'Firma de convenios académicos de validez curricular con la UJAT en la sede DACSyH.'
    ]
  },
  {
    periodo: '2003 – 2012',
    liderazgo: 'Gestiones Directivas e inclusión de liderazgos como María Eugenia Torres Arias ("Maru Lozano")',
    descripcion: 'Proyección interinstitucional a nivel nacional, producción de radio cultural y articulación de diplomados especializados.',
    hitos: [
      'Diplomados con el auspicio conjunto de ICT, SOGEM y UJAT.',
      'Fomento a la dramaturgia y monólogos independientes ("Consumatum est").',
      'Publicación de literatura infantil de fomento a la lectura ("Nuestro mundo con Clau-dia", 2005, por el Arq. Mario de Lille Fuentes).'
    ]
  },
  {
    periodo: '2013 – 2016',
    liderazgo: 'Presidencia de Rebeca Díaz Suárez',
    descripcion: 'Descentralización cultural hacia los municipios y magnos encuentros conmemorativos de alcance estatal.',
    hitos: [
      'XXVIII Encuentro de Escritores "Así Habla Mi Ciudad" en homenaje póstumo a Gabriela Gutiérrez Lomasto.',
      'Extensión de actividades y talleres de crónica a 7 municipios (Centro, Centla, Cárdenas, Tacotalpa, Jalpa de Méndez, Paraíso, Nacajuca).',
      'Edición del libro colectivo "Proyecto Babel" (2014) con el Instituto Estatal de Cultura (IEC).'
    ]
  },
  {
    periodo: '2016 – 2025',
    liderazgo: 'Presidencias de Elí Manuel Austria Hernández y Mtra. Pragedis Hernández García',
    descripcion: 'Consolidación de proyectos editoriales, fortalecimiento de la equidad de género, rescate de lenguas originarias y preservación del fondo bibliográfico.',
    hitos: [
      'Gestión directiva de Elí Manuel Austria Hernández y posterior presidencia de la Mtra. Pragedis Hernández García.',
      'Celebración del 32º Aniversario (2019) en la Sala Antonio Ocampo (Magno homenaje al Arq. Mario de Lille Fuentes).',
      'Celebración del 36º Aniversario (2023) en Galería Jaguar Despertado con "La Mujer del Siglo XXI" y mesas sobre lenguas originarias.',
      'Edición de antologías colectivas «Tardes Tabasqueñas de Ópalos y Topacios» (2025) y «Animalia Literaria» (2026).'
    ]
  },
  {
    periodo: '2026 – 2029',
    liderazgo: 'Mesa Directiva 2026–2029 (Presidencia del Lic. Juan David Pérez Cabrera)',
    descripcion: 'Periodo estatutario actual: Transformación digital del gremio, lanzamiento del portal institucional, reactivación editorial de «Animalia Literaria» y «Plantae Literaria», e impulso a la Escuela de Escritores «José Gorostiza» (EEJG).',
    hitos: [
      'Presidencia y representación legal del Lic. Juan David Pérez Cabrera.',
      'Secretaría General a cargo de Eva Guadalupe Pineda Cruz y Tesorería por Ana Laura Hernández Jiménez.',
      'Comisión de Honor y Justicia a cargo de la Mtra. Liliana Chuzeville Córdoba y la Mtra. Pragedis Hernández García.',
      'Fondo editorial activo: «Animalia Literaria» impresa en agosto de 2026, disponible para lectura en línea, y convocatoria de «Plantae Literaria».',
      'Apertura del canal de YouTube con la serie «Literatura animada al óleo» (octubre de 2026).'
    ]
  }
];

export const CUADRO_FUNDADORES = [
  { 
    nombre: 'Arq. Mario de Lille Fuentes (†)', 
    rol: 'Pilar Fundador & Primer Director', 
    detalle: 'Arquitecto, novelista, cuentista, poeta y dramaturgo. Figura tutelar de la asociación y fundador de la Escuela de Escritores "José Gorostiza".' 
  },
  { 
    nombre: 'Teodosio García Ruiz (†)', 
    rol: 'Miembro Fundador', 
    detalle: 'Poeta y ensayista, autor de "Sin lugar a dudas", pilar formativo del taller literario inicial.' 
  },
  { 
    nombre: 'María del Carmen Luna Pérez', 
    rol: 'Miembro Fundadora', 
    detalle: 'Escritora, docente e investigadora, impulsora clave de la vinculación y proyección académica.' 
  },
  { 
    nombre: 'Jorge Priego Martínez', 
    rol: 'Miembro Fundador', 
    detalle: 'Historiador, cronista emérito de Villahermosa e intelectual fundamental de las tradiciones tabasqueñas.' 
  },
  { 
    nombre: 'Vicente Gómez Montero (†)', 
    rol: 'Miembro Fundador', 
    detalle: 'Narrador, dramaturgo y ensayista, autor de "Las puertas del infierno" y baluarte escénico.' 
  },
  { 
    nombre: 'Jesús de Dios («Chucho de Dios») (†)', 
    rol: 'Miembro Fundador', 
    detalle: 'Poeta y promotor cultural de entrañable memoria cívica en el gremio literario del Sureste.' 
  },
  { 
    nombre: 'Guadalupe Azuara Forcelledo', 
    rol: 'Expresidenta & Fundadora', 
    detalle: 'Investigadora y escritora, editora de las magnas antologías de narrativa y poesía en coedición UJAT/ICT.' 
  },
  { 
    nombre: 'Margarita Orrico', 
    rol: 'Pionera Institucional', 
    detalle: 'Promotora cultural y figura clave en la cohesión y vinculación inicial de la asociación civil.' 
  },
  { 
    nombre: 'Juan Torres Calcáneo', 
    rol: 'Pionero Institucional', 
    detalle: 'Poeta y gestor de amplia trayectoria en la difusión de las letras y publicaciones estatales.' 
  },
  { 
    nombre: 'Norma Navarro & Norma Domínguez', 
    rol: 'Pioneras Institucionales', 
    detalle: 'Impulsoras de la difusión cultural, el periodismo literario y las artes plásticas en Tabasco.' 
  },
  { 
    nombre: 'Perla Estrada & Carlos González', 
    rol: 'Pioneros Institucionales', 
    detalle: 'Participantes activos en los primeros ciclos de lectura, tertulias y talleres de creación.' 
  },
  { 
    nombre: 'Eduardo Broca & Gonzalo Manzanilla', 
    rol: 'Pioneros Institucionales', 
    detalle: 'Coordinadores de los primeros proyectos de coedición y vinculación con la Universidad Juárez Autónoma de Tabasco.' 
  },
  { 
    nombre: 'Hermanas Rives Robles & Aurora Alday', 
    rol: 'Pioneras Institucionales', 
    detalle: 'Alma, Paloma y Xóchil Rives junto a Aurora Alday y Cárdenas Zurita en la consolidación civil del gremio.' 
  }
];
