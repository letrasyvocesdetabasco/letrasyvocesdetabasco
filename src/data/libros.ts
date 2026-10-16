export interface Libro {
  id: string;
  titulo: string;
  subtitulo?: string;
  anio: number;
  genero: 'Narrativa' | 'Poesía' | 'Ensayo' | 'Dramaturgia' | 'Literatura Infantil' | 'Multigénero' | 'Revista';
  autores: string;
  compiladores?: string;
  prologo?: string;
  ilustracionPortada?: string;
  coeditores: string;
  paginas: number;
  isbn?: string;
  indautor?: string;
  clasificacion?: string;
  sinopsis: string;
  fondo: 'Patrimonial Histórico' | 'Contemporáneo' | 'Formativo Gorostiza';
  disponibilidad: 'Consulta / Archivo' | 'Digitalización PDF' | 'Venta / Distribución' | 'En Imprenta' | 'Recién impreso';
  portadaImg?: string;
  portadaColor: string;
  fragmentoMuestra: string;
  autoresDetallados?: string[];
  /** Página del libro con ficha completa */
  fichaUrl?: string;
  /** Lector en línea (solo lectura, sin descarga) */
  lecturaEnLinea?: string;
  /** Nota de estado editorial visible en la ficha */
  nota?: string;
}

export const CATALOGO_EDITORIAL: Libro[] = [
  {
    id: 'animalia-literaria',
    titulo: 'Animalia Literaria',
    subtitulo: 'Antología de Narrativa y Lírica',
    anio: 2026,
    genero: 'Multigénero',
    autores: '16 autores · compilación y edición general de Juan David Pérez Cabrera',
    compiladores: 'Juan David Pérez Cabrera',
    prologo: 'Liliana Chuzeville Córdoba (Delegada Emérita LVT)',
    ilustracionPortada: 'Diseño editorial, maquetación y arte de cubierta por Juan David Pérez Cabrera (Tipografía EB Garamond)',
    coeditores: 'Sociedad de Escritores «Letras y Voces de Tabasco», A.C.',
    paginas: 131,
    fondo: 'Contemporáneo',
    disponibilidad: 'Recién impreso',
    portadaImg: '/assets/portadas/web/animalia_literaria_portada_oficial.webp',
    portadaColor: 'from-amber-950 to-stone-900',
    fichaUrl: '/publicaciones/animalia-literaria',
    lecturaEnLinea: '/publicaciones/animalia-literaria/leer',
    nota: 'Impreso en agosto de 2026. Su primera presentación pública se anunciará muy pronto.',
    sinopsis: 'Una travesía íntima hacia el pulso secreto de la naturaleza. A través del mito, la lírica y la memoria viva, diecinueve textos de dieciséis autores trazan un puente entre el ser humano y el reino animal: del rugido ancestral del jaguar y el misterio del coyote en el semidesierto, al canto del manatí en los ríos tabasqueños y la noble lealtad del perro guardián.',
    autoresDetallados: [
      'Juan David Pérez Cabrera',
      'Víctor Manuel Ameca Mena',
      'Marlene de la Cruz de la O',
      'Arlette Alana Pérez Ruiz',
      'María de los Ángeles Cervantes Rosas',
      'Francis Vestali Romero Alcántara',
      'Natalia Morales Sosa',
      'Pragedis Hernández García',
      'María de los Ángeles Muñoz Sánchez',
      'Juan Manuel Canepa Bertolini',
      'Liliana Chuzeville Córdoba',
      'Nadya Vanessa Ortiz Moya',
      'Israel Mendoza Vázquez',
      'Eva Guadalupe Pineda Cruz',
      'Flor de Liz Marín Hernández',
      'Ana Luisa Mosqueda Caraveo'
    ],
    fragmentoMuestra: 'Desde antes de que tus ojos rozaran estas páginas, este libro ya te estaba esperando. Hay un pacto secreto e invisible entre quien busca y quien es hallado; una memoria antigua escrita con la luz del agua, el susurro del viento y la pisada silenciosa de las criaturas.'
  },
  {
    id: 'a-corazon-abierto',
    titulo: 'A corazón abierto',
    subtitulo: 'Poemario',
    anio: 2026,
    genero: 'Poesía',
    autores: 'María de los Ángeles Cervantes Rosas',
    ilustracionPortada: 'Óleo sobre tela (60x60 cm) por María de los Ángeles Cervantes Rosas',
    isbn: '978-607-29-8439-4',
    indautor: '03-2026-012017574600-14',
    coeditores: 'Sociedad de Escritores «Letras y Voces de Tabasco», A.C.',
    paginas: 88,
    fondo: 'Contemporáneo',
    disponibilidad: 'Venta / Distribución',
    portadaImg: '/assets/portadas/portada_acorazonabierto.png',
    portadaColor: 'from-rose-950 to-neutral-900',
    sinopsis: 'Obra testimonial y lírica estructurada en seis secciones temáticas: Susurros que gritan, Cicatrices colectivas, Vínculos y puentes, Latidos del corazón, Quimeras del querer y Horizonte de esperanzas. Presentada en la Casa Universitaria Cacao y Chocolate.',
    fragmentoMuestra: '¿Cuándo se acorta la distancia del amor? En cualquier momento y yendo por la vida con metas y proyectos retadores... María de los Ángeles Cervantes Rosas retrata con precisión esas heridas y esperanzas del corazón.'
  },
  {
    id: 'tardes-tabasquenas',
    titulo: 'Tardes Tabasqueñas de Ópalos y Topacios',
    subtitulo: 'Antología de Cuento y Poesía',
    anio: 2025,
    genero: 'Multigénero',
    autores: 'Pragedis Hernández García, Karla Ivonne Alejandro Gómez, Ana Laura Hernández Jiménez (Comp.)',
    compiladores: 'Pragedis Hernández García, Karla Ivonne Alejandro Gómez, Ana Laura Hernández Jiménez',
    prologo: 'Dr. Elí Manuel Austria Hernández',
    ilustracionPortada: 'Joel Tosca',
    indautor: '03-2025-021011275600-14',
    coeditores: 'Sociedad de Escritores «Letras y Voces de Tabasco», A.C.',
    paginas: 148,
    fondo: 'Contemporáneo',
    disponibilidad: 'Venta / Distribución',
    portadaImg: '/assets/portadas/portada_tardes_tabasquenas.jpg',
    portadaColor: 'from-amber-900 to-amber-950',
    sinopsis: 'Homenaje literario a la cotidianidad, el color y la sensibilidad de Tabasco. Reúne la producción narrativa y poética de 21 socios y socias en una obra de honda resonancia comunitaria.',
    autoresDetallados: [
      'Anais Guadalupe Arias Pérez',
      'Ana Laura Hernández Jiménez',
      'Ana Luisa Mosqueda Caraveo',
      'Cristi Guadalupe Morales Osorio',
      'Elena Guzmán Ramón',
      'Eva Guadalupe Pineda Cruz',
      'Gian Franco López Contreras',
      'Hugo Hernández Cutiño',
      'Israel Mendoza Vázquez',
      'Javier Curiel González',
      'Jorge Ignacio Islas Miranda',
      'José Heriberto Castro',
      'Juan Manuel Canepa Bertolini',
      'Karla Ivonne Alejandro Gómez',
      'Liliana Chuzeville Córdoba',
      'Marisol Lendechy Cerrillo',
      'Natalia Morales Sosa',
      'Pragedis Hernández García',
      'Samuel Morales Morales',
      'Wilber Jiménez Naranjo',
      'Yamile Cabrera Salomón'
    ],
    fragmentoMuestra: 'Tardes Tabasqueñas de Ópalos y Topacios es un homenaje a lo bello, lo sutil y lo eterno; un tributo a la magia cotidiana que habita en las esquinas de Tabasco. Custodiar su esencia a través de la poesía y la narrativa.'
  },
  {
    id: 'la-mujer-en-el-siglo-xxi',
    titulo: 'La Mujer en el Siglo XXI',
    subtitulo: 'Antología de Poesía y Prosa',
    anio: 2023,
    genero: 'Multigénero',
    autores: 'Pragedis Hernández García y Elí Manuel Austria Hernández (Comp.) / 23 Plumas LVT',
    compiladores: 'Pragedis Hernández García y Elí Manuel Austria Hernández',
    ilustracionPortada: 'Karla Ivonne Alejandro Gómez',
    indautor: '03-2023-050808364800-01',
    coeditores: 'Sociedad de Escritores «Letras y Voces de Tabasco», A.C.',
    paginas: 116,
    fondo: 'Contemporáneo',
    disponibilidad: 'Venta / Distribución',
    portadaImg: '/assets/portadas/portada_mujer_siglo21.jpg',
    portadaColor: 'from-stone-900 to-neutral-900',
    sinopsis: 'Antología fundamental que aborda el papel protagónico, los desafíos y las victorias de la mujer contemporánea desde la óptica plural de 23 creadores tabasqueños.',
    autoresDetallados: [
      'Alberto García Mejía',
      'Ana Laura Hernández Jiménez',
      'Anaís Guadalupe Arias Pérez',
      'Cristi Guadalupe Morales Osorio',
      'Dalia Beatriz Velázquez Cruz',
      'Elena Guzmán Ramón',
      'Elí Manuel Austria Hernández',
      'Esperanza Quijada Mendoza',
      'Eva Guadalupe Pineda Cruz',
      'Fabiola Blancas Madrid',
      'Isabel Pérez Chablé',
      'Israel Mendoza Vázquez',
      'Juan Manuel Canepa Bertolini',
      'Julián Suárez Perera',
      'Karla Alejandro Gómez',
      'Liliana Chuzeville Córdoba',
      'Luis Alberto Gómez Romero',
      'María de los Ángeles Cervantes Rosas',
      'Marina Lugo Martínez',
      'Pragedis Hernández García',
      'Rebeca Díaz Suárez',
      'Rocío de la Vega Folgarolas',
      'Tita Muñoz Sánchez'
    ],
    fragmentoMuestra: 'Nuestra voz no es un eco prestado: es la raíz que fractura el pavimento de los silencios impuestos por siglos. En cada página florece el testimonio libre de las letras tabasqueñas.'
  },
  {
    id: 'amarellus',
    titulo: 'Amarellus',
    subtitulo: 'Antología Narrativa',
    anio: 2020,
    genero: 'Narrativa',
    autores: 'Edmundo Juárez (Ed.) / Vicente Gómez Montero (Pról.) / Varios Autores',
    prologo: 'Vicente Gómez Montero',
    ilustracionPortada: 'María Pinto Madera (Merry Pinto) - Guayacán en flor',
    isbn: '978-85-65949-29-2',
    coeditores: 'Inspira Profundo / Sociedad de Escritores Letras y Voces de Tabasco, A.C. / Aval UJAT',
    paginas: 120,
    fondo: 'Contemporáneo',
    disponibilidad: 'Consulta / Archivo',
    portadaImg: '/assets/portadas/portada_amarellus.jpg',
    portadaColor: 'from-amber-700 to-yellow-900',
    sinopsis: 'Volumen narrativo nacido bajo el signo del guayacán amarillo en flor. Reúne cuentos de ciencia ficción, corte intimista y exploración urbana con el aval académico de la UJAT.',
    autoresDetallados: [
      'Elí Manuel Austria Hernández',
      'Emma Cornejo Porras',
      'Liliana Chuzeville Córdoba',
      'Alberto García Mejía',
      'Laura Virginia Ocaña Zurita',
      'Edison Suárez'
    ],
    fragmentoMuestra: 'La ingeniosa delectación de los textos en esta antología nos dice que hay un avance en la narrativa tabasqueña. Por eso, la Sociedad de Escritores Tabasqueños Letras y Voces de Tabasco, A.C., con fe en la calidad de sus socios, ha realizado varias antologías.'
  },
  {
    id: 'escuela-con-sus-plumas-de-ceiba',
    titulo: 'Escuela con sus plumas de ceiba',
    subtitulo: 'Generación Guadalupe Azuara',
    anio: 2024,
    genero: 'Multigénero',
    autores: 'Egresados de la Escuela de Escritores "José Gorostiza"',
    isbn: '978-607-606-668-3',
    coeditores: 'Universidad Juárez Autónoma de Tabasco (UJAT) / Escuela de Escritores Gorostiza / LVT',
    paginas: 198,
    fondo: 'Formativo Gorostiza',
    disponibilidad: 'Venta / Distribución',
    portadaColor: 'from-amber-900 to-yellow-950',
    sinopsis: 'Compilación académica estructurada en cuatro secciones (Poesía, Cuento, Ensayo e Investigación) con las obras de titulación de los diplomados formados bajo el amparo de la ceiba universitaria.',
    fragmentoMuestra: 'Bajo el follaje de la ceiba universitaria aprendimos que el oficio de escribir no es un pasatiempo, sino una profesión de fe y rigor formal.'
  },
  {
    id: 'primero-la-voz',
    titulo: 'Primero la voz',
    subtitulo: 'Antología de narrativa contemporánea de Tabasco',
    anio: 1995,
    genero: 'Narrativa',
    autores: 'Ciprián Cabrera Jasso (Compilador) / Varios Autores',
    coeditores: 'Universidad Juárez Autónoma de Tabasco (UJAT) / SET Letras y Voces de Tabasco, A.C.',
    paginas: 240,
    sinopsis: 'Compilación monumental de la narrativa tabasqueña de finales del siglo XX. Reúne los relatos y cuentos de la generación que consolidó la transición literaria contemporánea en el sureste mexicano.',
    fondo: 'Patrimonial Histórico',
    disponibilidad: 'Consulta / Archivo',
    portadaColor: 'from-amber-800 to-stone-900',
    fragmentoMuestra: 'El agua y la memoria discurren con la misma cadencia en los márgenes del Grijalva. Nombrar el trópico es reconstruir la estirpe de quienes aprendieron a contar el mundo antes de que cayera la noche sobre los playones.'
  },
  {
    id: 'antologia-poesia-contemporanea',
    titulo: 'Antología de poesía contemporánea de Tabasco',
    anio: 1995,
    genero: 'Poesía',
    autores: 'Varios Autores (Compilación Gremial LVT)',
    coeditores: 'UJAT / Sociedad de Escritores Tabasqueños Letras y Voces de Tabasco, A.C.',
    paginas: 487,
    sinopsis: 'Magna obra de 487 páginas que compendia la producción lírica en activo al cierre del siglo, recogiendo la herencia estilística de Carlos Pellicer, José Gorostiza y José Carlos Becerra.',
    fondo: 'Patrimonial Histórico',
    disponibilidad: 'Digitalización PDF',
    portadaColor: 'from-orange-900 to-neutral-900',
    fragmentoMuestra: 'En el verde absoluto la palabra no calla: se vuelve árbol, fango, relámpago contenido. Cantar en Tabasco es dialogar con la lluvia perpetua y con el cauce interminable de la lumbre.'
  },
  {
    id: 'la-pluma-en-el-blanco',
    titulo: 'La pluma en el blanco',
    anio: 1996,
    genero: 'Ensayo',
    autores: 'Gonzalo J. González Calzada',
    coeditores: 'Instituto de Cultura de Tabasco (ICT) / FECA / UJAT / SET LVT',
    paginas: 104,
    isbn: '968-889-272-6',
    sinopsis: 'Ensayo crítico publicado dentro de la prestigiosa serie Opera Prima. Análisis riguroso sobre la mecánica de la creación estética, la disciplina autoral y la poética regional.',
    fondo: 'Patrimonial Histórico',
    disponibilidad: 'Consulta / Archivo',
    portadaColor: 'from-stone-800 to-stone-950',
    fragmentoMuestra: 'Escribir exige la precisión del arquero frente a la diana blanca: no basta con pulsar la cuerda, es imperativo que el pensamiento vuele sin titubeos hasta hendir el silencio.'
  },
  {
    id: 'las-puertas-del-infierno',
    titulo: 'Las puertas del infierno',
    anio: 1996,
    genero: 'Narrativa',
    autores: 'Vicente Gómez Montero',
    coeditores: 'Gobierno del Estado de Tabasco / SET Letras y Voces de Tabasco',
    paginas: 112,
    sinopsis: 'Volumen individual de relatos breves de corte fantástico y costumbrista por uno de los fundadores esenciales de la asociación y pilar de la dramaturgia local.',
    fondo: 'Patrimonial Histórico',
    disponibilidad: 'Consulta / Archivo',
    portadaColor: 'from-red-950 to-stone-900',
    fragmentoMuestra: 'Las sombras en la provincia no se disipan al mediodía; se guarecen tras los postigos de madera, esperando el rumor de quien se atreva a cruzar el umbral sin persignarse.'
  },
  {
    id: 'puras-mentiras-y-algo-mas',
    titulo: 'Puras mentiras y algo más',
    anio: 1999,
    genero: 'Narrativa',
    autores: 'Varios Autores (Colectivo LVT)',
    coeditores: 'Sociedad de Escritores Letras y Voces de Tabasco, A.C.',
    paginas: 129,
    clasificacion: 'PQ7298.17',
    sinopsis: 'Colección de cuentos donde los socios exploran la ficción urbana, la ironía y los mitos contemporáneos del trópico tabasqueño.',
    fondo: 'Patrimonial Histórico',
    disponibilidad: 'Consulta / Archivo',
    portadaColor: 'from-amber-950 to-neutral-900',
    fragmentoMuestra: 'La verdad es apenas una de las tantas formas que toma la mentira cuando se viste de domingo para salir al parque Juárez.'
  },
  {
    id: 'consumatum-est',
    titulo: 'Consumatum est',
    anio: 1999,
    genero: 'Dramaturgia',
    autores: 'María Eugenia Torres Arias ("Maru Lozano")',
    coeditores: 'FECA / UJAT / ICT / SET Letras y Voces de Tabasco',
    paginas: 64,
    sinopsis: 'Monólogo dramático de alta tensión psicológica producido en el marco de la red de talleres literarios universitarios y proyectos escénicos independientes.',
    fondo: 'Patrimonial Histórico',
    disponibilidad: 'Consulta / Archivo',
    portadaColor: 'from-zinc-900 to-black',
    fragmentoMuestra: 'Basta una sola palabra pronunciada a oscuras para desmoronar el castillo de cristal de nuestras certezas. Todo está consumado.'
  },
  {
    id: 'nuestro-mundo-con-claudia',
    titulo: 'Nuestro mundo con Clau-dia',
    anio: 2005,
    genero: 'Literatura Infantil',
    autores: 'Mario de Lille Fuentes (Texto) / Claudia García Silva (Ilustraciones)',
    coeditores: 'Gobierno del Estado de Tabasco / UJAT / SET LVT',
    paginas: 77,
    sinopsis: 'Cuentos infantiles ilustrados creados por el Arq. Mario de Lille Fuentes, fundador y primer director de la Escuela Gorostiza, para estimular el descubrimiento del lenguaje y la imaginación temprana.',
    fondo: 'Contemporáneo',
    disponibilidad: 'Venta / Distribución',
    portadaColor: 'from-emerald-900 to-teal-950',
    fragmentoMuestra: 'Claudia descubrió que las ceibas no son árboles comunes: son escaleras secretas que los pájaros usan para pintar las nubes al amanecer.'
  },
  {
    id: 'proyecto-babel',
    titulo: 'Proyecto Babel: antología de cuentos',
    anio: 2014,
    genero: 'Narrativa',
    autores: 'Francisco Payró, Laura Ocaña y Varios Autores',
    coeditores: 'Instituto Estatal de Cultura de Tabasco (IEC) / SET LVT',
    paginas: 172,
    sinopsis: 'Antología colectiva de 172 páginas que reúne a voces contemporáneas en una polifonía de relatos urbanos y reflexiones existenciales.',
    fondo: 'Contemporáneo',
    disponibilidad: 'Venta / Distribución',
    portadaColor: 'from-blue-950 to-slate-900',
    fragmentoMuestra: 'Construimos torres con vocablos rotos, esperando que alguien allá arriba descifre el dialecto de nuestras soledades compartidas.'
  },
  {
    id: 'revista-letra-voz',
    titulo: 'Revista Cultural "Letra Voz"',
    subtitulo: 'Órgano Periódico de Difusión Literaria',
    anio: 2026,
    genero: 'Revista',
    autores: 'Consejo Editorial LVT y Plumas Invitadas',
    coeditores: 'Sociedad de Escritores "Letras y Voces de Tabasco", A.C.',
    paginas: 48,
    sinopsis: 'Publicación periódica fundada en 2001. Difunde ensayos críticos, crónicas, poesía inédita, entrevistas y debates estéticos del gremio.',
    fondo: 'Contemporáneo',
    disponibilidad: 'Venta / Distribución',
    portadaColor: 'from-orange-950 to-stone-900',
    fragmentoMuestra: 'La letra es testimonio insobornable de la época; la voz, el instrumento que le devuelve su latido humano ante la comunidad.'
  }
];
