// Videoteca de Letras y Voces de Tabasco.
// Producciones propias del canal https://www.youtube.com/@LetrasyVocesdeTabasco y videos recomendados
// de canales institucionales. Cada video se verificó con oEmbed y con su página de YouTube (incrustable).

export const CANAL_YOUTUBE = {
  nombre: 'Letras y Voces de Tabasco, A.C.',
  url: 'https://www.youtube.com/@LetrasyVocesdeTabasco',
  suscribirse: 'https://www.youtube.com/@LetrasyVocesdeTabasco?sub_confirmation=1',
  id: 'UCIaDOz4Yr8zvw4mYETbY05g',
};

export interface Capitulo { t: number; titulo: string }
export interface VideoLVT {
  id: string;
  titulo: string;
  serie: string;
  formato: 'Cuento animado' | 'Poema animado';
  genero: 'narrativa' | 'lirica';
  obra: string;
  autorObra: string;
  autorId?: string;
  duracionSegundos: number;
  publicado: string;
  realizacion: string;
  sinopsis: string;
  descripcion: string;
  capitulos?: Capitulo[];
  texto?: { titulo: string; libro: string; versos: string };
  miniatura: string;
  miniaturaChica: string;
}

export const VIDEOS_LVT: VideoLVT[] = [
  {
    id: '2DC8OTKaFss',
    titulo: 'La historia de una hora',
    serie: 'Literatura animada al óleo',
    formato: 'Cuento animado',
    genero: 'narrativa',
    obra: '«La historia de una hora» (The Story of an Hour, 1894)',
    autorObra: 'Kate Chopin',
    autorId: 'kate-chopin',
    duracionSegundos: 564,
    publicado: '2026-10-14',
    realizacion: 'Adaptación, animación y realización: Juan David Pérez Cabrera',
    sinopsis: 'Cuando le dan la noticia de la muerte de su esposo, Luisa Mallard llora en brazos de su hermana y sube sola a su habitación. Frente a la ventana abierta, entre la lluvia de primavera, los gorriones y los retazos de cielo azul, algo se acerca a ella… algo que todavía no sabe nombrar.',
    descripcion: 'El célebre cuento de Kate Chopin, de apenas mil palabras, adaptado como cortometraje animado con pinturas al óleo. Uno de los relatos más leídos y discutidos de la literatura universal, pionero en retratar la vida interior de las mujeres de su tiempo.',
    capitulos: [
      { t: 0, titulo: 'Presentación' },
      { t: 9, titulo: 'La historia de una hora' },
      { t: 14, titulo: 'La noticia' },
      { t: 91, titulo: 'La habitación' },
      { t: 117, titulo: 'La ventana abierta' },
      { t: 210, titulo: 'Algo se acerca' },
      { t: 258, titulo: '¡Libre!' },
      { t: 401, titulo: 'La puerta cerrada' },
      { t: 491, titulo: 'La llave' },
      { t: 544, titulo: 'Créditos' },
    ],
    miniatura: '/assets/videos/2DC8OTKaFss.webp',
    miniaturaChica: '/assets/videos/2DC8OTKaFss_640.webp',
  },
  {
    id: 'Fj39NDNk_h8',
    titulo: 'A Leonor',
    serie: 'Literatura animada al óleo',
    formato: 'Poema animado',
    genero: 'lirica',
    obra: '«A Leonor», de En voz baja (1909)',
    autorObra: 'Amado Nervo',
    autorId: 'amado-nervo',
    duracionSegundos: 125,
    publicado: '2026-10-14',
    realizacion: 'Animación y realización: Juan David Pérez Cabrera',
    sinopsis: '«Tu cabellera es negra como el ala del misterio…» Uno de los poemas de amor más bellos de Amado Nervo cobra vida verso a verso: la noche, el cuervo, las esfinges, el mar profundo y el ensueño.',
    descripcion: 'Poema de Amado Nervo (México, 1870–1919) animado con pinturas al óleo.',
    texto: {
      titulo: 'A Leonor',
      libro: 'En voz baja (1909)',
      versos: `Tu cabellera es negra como el ala
del misterio; tan negra como un lóbrego
jamás, como un adiós, como un «¡quién sabe!»
Pero hay algo más negro aún: ¡tus ojos!

Tus ojos son dos magos pensativos,
dos esfinges que duermen en la sombra,
dos enigmas muy bellos... Pero hay algo,
pero hay algo más bello aún: tu boca.

¡Tu boca! ¡oh, sí!; tu boca, hecha divina-
mente para el amor, para la cálida
comunión del amor, tu boca joven;
pero hay algo mejor aún: ¡tu alma!

Tu alma recogida, silenciosa,
de piedades tan hondas como el piélago,
de ternuras tan hondas...
Pero hay algo,
pero hay algo más hondo aún: ¡tu ensueño!`,
    },
    miniatura: '/assets/videos/Fj39NDNk_h8.webp',
    miniaturaChica: '/assets/videos/Fj39NDNk_h8_640.webp',
  },
];

export type CategoriaRecomendado = 'voz-del-autor' | 'tabasco' | 'documental' | 'conferencia';
export const CATEGORIAS_RECOMENDADOS: { id: CategoriaRecomendado; nombre: string; descripcion: string }[] = [
  { id: 'voz-del-autor', nombre: 'En voz del autor', descripcion: 'Poetas y narradores leyendo su propia obra.' },
  { id: 'tabasco', nombre: 'Tabasco literario', descripcion: 'Las voces y los lugares de la literatura tabasqueña.' },
  { id: 'documental', nombre: 'Documentales y entrevistas', descripcion: 'Para conocer la vida y el pensamiento de los autores.' },
  { id: 'conferencia', nombre: 'Clases y conferencias', descripcion: 'Lecciones para quien escribe y quien lee con atención.' },
];

export interface VideoRecomendado {
  id: string; titulo: string; tituloVisible: string; canal: string; canalVisible: string; canalUrl: string; categoria: CategoriaRecomendado; autorId: string;
  duracionSegundos: number; publicado: string; descripcion: string; verificado: string; notas?: string;
}

// Verificados el 15 de octubre de 2026: oEmbed 200, playableInEmbed true y descripción revisada.
export const VIDEOS_RECOMENDADOS: VideoRecomendado[] = [
 {
  "id": "VGqJfrt4mts",
  "titulo": "Episodio 28. José Emilio Pacheco en Voz Viva",
  "tituloVisible": "José Emilio Pacheco en Voz Viva",
  "canal": "Descarga Cultura UNAM",
  "canalVisible": "Descarga Cultura UNAM",
  "canalUrl": "https://www.youtube.com/@DESCARGACULTURA",
  "categoria": "voz-del-autor",
  "autorId": "jose-emilio-pacheco",
  "duracionSegundos": 1111,
  "publicado": "2021-11-25",
  "descripcion": "José Emilio Pacheco lee poemas de sus primeros libros, entre ellos un fragmento de «El reposo del fuego» y «Alta traición». La grabación se hizo en 1976 para la colección Voz Viva de la UNAM.",
  "verificado": "oEmbed 200 + playableInEmbed true + descripción revisada, 2026-10-15",
  "notas": ""
 },
 {
  "id": "IC0gvemVR-Q",
  "titulo": "Pablo Neruda en voz de Jaime Sabines",
  "tituloVisible": "Pablo Neruda en voz de Jaime Sabines",
  "canal": "Fonoteca Nacional de México",
  "canalVisible": "Fonoteca Nacional de México",
  "canalUrl": "https://www.youtube.com/@fonotecanacionalmex",
  "categoria": "voz-del-autor",
  "autorId": "pablo-neruda",
  "duracionSegundos": 394,
  "publicado": "2023-07-12",
  "descripcion": "Cápsula sonora de la Fonoteca Nacional por el natalicio de Neruda: datos de su vida, una anécdota contada por Jaime Sabines y fragmentos del poeta en su propia voz.",
  "verificado": "oEmbed 200 + playableInEmbed true + descripción revisada, 2026-10-15",
  "notas": "Cápsula breve (6 min). El título alude a la anécdota de Sabines; la voz de Neruda aparece en grabaciones de archivo según la descripción."
 },
 {
  "id": "lEQtQFmM2jo",
  "titulo": "Jaime Sabines en la Sala Nezahualcóyotl, 1997.",
  "tituloVisible": "Jaime Sabines en la Sala Nezahualcóyotl (1997)",
  "canal": "TV UNAM",
  "canalVisible": "TV UNAM",
  "canalUrl": "https://www.youtube.com/@tvunam",
  "categoria": "voz-del-autor",
  "autorId": "jaime-sabines",
  "duracionSegundos": 2952,
  "publicado": "2026-03-21",
  "descripcion": "Grabación de TV UNAM de la lectura de poemas que Jaime Sabines ofreció en la Sala Nezahualcóyotl en 1997.",
  "verificado": "oEmbed 200 + playableInEmbed true + fotogramas del video y Gaceta UNAM (descripción vacía), 2026-10-15",
  "notas": "El video no tiene descripción en YouTube. Verificado por el título, fotogramas del propio video (Sabines ante el micrófono, logotipo de TV UNAM) y por la Gaceta UNAM (27-03-2026), que fecha la lectura el 25 de septiembre de 1997."
 },
 {
  "id": "036yqajUDik",
  "titulo": "AV-2223 [Jorge Luis Borges en la conferencia sobre la ceguera]",
  "tituloVisible": "Borges: conferencia sobre la ceguera (1977)",
  "canal": "Archivo Prisma",
  "canalVisible": "Archivo Prisma · Radio y Televisión Argentina",
  "canalUrl": "https://www.youtube.com/@ArchivoPrismaRTA",
  "categoria": "voz-del-autor",
  "autorId": "jorge-luis-borges",
  "duracionSegundos": 2939,
  "publicado": "2016-06-14",
  "descripcion": "Borges dicta en 1977, en el teatro Coliseo, la conferencia sobre la ceguera que después recogió en «Siete noches». Habla de su lento crepúsculo, de Homero, Milton y Joyce, y de cómo la ceguera le sirvió de instrumento.",
  "verificado": "oEmbed 200 + playableInEmbed true + descripción revisada, 2026-10-15",
  "notas": "Canal del Archivo Histórico de Radio y Televisión Argentina (RTA). Ficha de catalogación en archivorta.com.ar."
 },
 {
  "id": "urnUujVeQnM",
  "titulo": "Carlos Pellicer, descubre al poeta tabasqueño",
  "tituloVisible": "Carlos Pellicer, descubre al poeta tabasqueño",
  "canal": "Canal22",
  "canalVisible": "Canal 22",
  "canalUrl": "https://www.youtube.com/@canal22",
  "categoria": "tabasco",
  "autorId": "carlos-pellicer",
  "duracionSegundos": 4661,
  "publicado": "2015-06-18",
  "descripcion": "Retrato del poeta tabasqueño como creador de museos, arqueólogo, aficionado a la pintura y promotor de la unión latinoamericana, que cantó a la selva, al mar, a los héroes y a Dios.",
  "verificado": "oEmbed 200 + playableInEmbed true + descripción revisada, 2026-10-15",
  "notas": ""
 },
 {
  "id": "uUbxkgrgDk8",
  "titulo": "El canto de Carlos Pellicer en la Fonoteca Nacional",
  "tituloVisible": "El canto de Carlos Pellicer",
  "canal": "Fonoteca Nacional de México",
  "canalVisible": "Fonoteca Nacional de México",
  "canalUrl": "https://www.youtube.com/@fonotecanacionalmex",
  "categoria": "tabasco",
  "autorId": "carlos-pellicer",
  "duracionSegundos": 3070,
  "publicado": "2021-05-01",
  "descripcion": "Sesión de escucha dedicada a la colección de Carlos Pellicer que resguarda la Fonoteca Nacional de México.",
  "verificado": "oEmbed 200 + playableInEmbed true + descripción revisada, 2026-10-15",
  "notas": "La descripción es de una sola línea; no detalla qué grabaciones se escuchan."
 },
 {
  "id": "AY5xjS528pU",
  "titulo": "Homenaje a José Gorostiza, a 50 años de su fallecimiento.",
  "tituloVisible": "Homenaje a José Gorostiza a 50 años de su muerte",
  "canal": "Academia Mexicana de la Lengua",
  "canalVisible": "Academia Mexicana de la Lengua",
  "canalUrl": "https://www.youtube.com/@AcademiaMexicanadelaLengua",
  "categoria": "tabasco",
  "autorId": "jose-gorostiza",
  "duracionSegundos": 2277,
  "publicado": "2023-03-16",
  "descripcion": "Homenaje de la Academia Mexicana de la Lengua a los 50 años de la muerte del autor de «Muerte sin fin». Vicente Quirarte, Jaime Labastida y Felipe Garrido conversan sobre su vida y su obra.",
  "verificado": "oEmbed 200 + playableInEmbed true + descripción revisada, 2026-10-15",
  "notas": ""
 },
 {
  "id": "-UzVyL6rOsU",
  "titulo": "Documental José Carlos Becerra \"El poeta Joven de Tabasco\" de Delfín Romero Tapia",
  "tituloVisible": "José Carlos Becerra, «El poeta joven de Tabasco»",
  "canal": "Cultura UJAT",
  "canalVisible": "Cultura UJAT",
  "canalUrl": "https://www.youtube.com/@culturaujat9222",
  "categoria": "tabasco",
  "autorId": "jose-carlos-becerra",
  "duracionSegundos": 1059,
  "publicado": "2022-02-02",
  "descripcion": "Documental de 2001 de Delfín Romero Tapia, profesor de la UJAT, sobre el poeta tabasqueño José Carlos Becerra; se proyectó en las Jornadas que la universidad le dedica cada año desde 2000.",
  "verificado": "oEmbed 200 + playableInEmbed true + descripción revisada, 2026-10-15",
  "notas": "Canal de difusión cultural de la UJAT; la página «Acerca de» está vacía, pero la descripción se identifica como de «esta Casa de estudios»."
 },
 {
  "id": "DhiWdfs-IEc",
  "titulo": "Clásicos mexicanos para el siglo XXI. El libro vacío de Josefina Vicens",
  "tituloVisible": "«El libro vacío» de Josefina Vicens",
  "canal": "ElClaustro TV",
  "canalVisible": "ElClaustro TV · Universidad del Claustro de Sor Juana",
  "canalUrl": "https://www.youtube.com/@SesionesClaustro",
  "categoria": "tabasco",
  "autorId": "josefina-vicens",
  "duracionSegundos": 3161,
  "publicado": "2022-09-28",
  "descripcion": "Del ciclo «Clásicos mexicanos para el siglo XXI»: Adán Ramírez Serret conversa con Daniel Rodríguez Barrón sobre «El libro vacío», novela de Josefina Vicens.",
  "verificado": "oEmbed 200 + playableInEmbed true + descripción revisada, 2026-10-15",
  "notas": "ElClaustro TV es la plataforma audiovisual de la Universidad del Claustro de Sor Juana (así lo dice la página del canal)."
 },
 {
  "id": "lpmDc1aNWRg",
  "titulo": "JUAN RULFO A FONDO/\"IN DEPTH\" - EDICIÓN COMPLETA y RESTAURADA, presentación de Joaquín Soler Serrano",
  "tituloVisible": "Juan Rulfo en «A fondo» (1977)",
  "canal": "CANAL A FONDO RTVE & EDITRAMA",
  "canalVisible": "A fondo (RTVE y Editrama)",
  "canalUrl": "https://www.youtube.com/@CANALAFONDO",
  "categoria": "documental",
  "autorId": "juan-rulfo",
  "duracionSegundos": 2887,
  "publicado": "2020-11-01",
  "descripcion": "Entrevista de Joaquín Soler Serrano a Juan Rulfo en «A fondo» (TVE, 17 de abril de 1977). Rulfo habla de su miedo a la gente, de «El llano en llamas» y de «Pedro Páramo», que llama una novela de fantasmas.",
  "verificado": "oEmbed 200 + playableInEmbed true + descripción revisada, 2026-10-15",
  "notas": "Canal «A fondo», que según su página es propiedad de RTVE y Editrama (la productora de Soler Serrano). No es el canal general de RTVE. Las entrevistas de Cortázar, Paz y Carlos Fuentes en ese canal no se pueden incrustar (oEmbed 401)."
 },
 {
  "id": "yjghRLBBBYU",
  "titulo": "Documental «El laberinto de Octavio Paz»",
  "tituloVisible": "El laberinto de Octavio Paz",
  "canal": "Instituto Cervantes",
  "canalVisible": "Instituto Cervantes",
  "canalUrl": "https://www.youtube.com/@InstitutoCervantesVideos",
  "categoria": "documental",
  "autorId": "octavio-paz",
  "duracionSegundos": 5135,
  "publicado": "2018-04-23",
  "descripcion": "Documental del Instituto Cervantes que recorre la obra de Paz y sus años en la India, su viaje a España en 1937 y su encuentro con Marie Jo, con testimonios de 25 especialistas, entre ellos Vargas Llosa, Poniatowska e Ida Vitale.",
  "verificado": "oEmbed 200 + playableInEmbed true + descripción revisada, 2026-10-15",
  "notas": ""
 },
 {
  "id": "20RZzo7QVbQ",
  "titulo": "Julio Cortázar: jugando con las letras | Biografía | Serie Memoria iluminada | Canal Encuentro",
  "tituloVisible": "Julio Cortázar: jugando con las letras",
  "canal": "Canal Encuentro",
  "canalVisible": "Canal Encuentro",
  "canalUrl": "https://www.youtube.com/@encuentro",
  "categoria": "documental",
  "autorId": "julio-cortazar",
  "duracionSegundos": 6380,
  "publicado": "2025-08-26",
  "descripcion": "Biografía de la serie «Memoria iluminada»: la infancia de Cortázar en Europa, su vida de maestro en Argentina, la mudanza a París en 1951, «Bestiario», «Rayuela» y su compromiso político.",
  "verificado": "oEmbed 200 + playableInEmbed true + descripción revisada, 2026-10-15",
  "notas": "Canal Encuentro es la señal educativa pública de Argentina."
 },
 {
  "id": "oq0iidaSWiU",
  "titulo": "Juan José Arreola. El actor del conocimiento",
  "tituloVisible": "Juan José Arreola. El actor del conocimiento",
  "canal": "TV UNAM",
  "canalVisible": "TV UNAM",
  "canalUrl": "https://www.youtube.com/@tvunam",
  "categoria": "documental",
  "autorId": "juan-jose-arreola",
  "duracionSegundos": 3260,
  "publicado": "2019-09-23",
  "descripcion": "Documental de TV UNAM y Canal 44 por el centenario de Arreola: el cuentista, el editor, el maestro de talleres, el fundador de la Casa del Lago y el animador cultural de la televisión, con testimonios de su familia y de especialistas.",
  "verificado": "oEmbed 200 + playableInEmbed true + descripción revisada, 2026-10-15",
  "notas": ""
 },
 {
  "id": "RNf-_nSwZO4",
  "titulo": "Gabriel García Márquez en Escritores Colombianos",
  "tituloVisible": "Gabriel García Márquez en «Escritores colombianos»",
  "canal": "Señal Memoria",
  "canalVisible": "Señal Memoria · RTVC Colombia",
  "canalUrl": "https://www.youtube.com/@Se%C3%B1alMemoria-k6z",
  "categoria": "documental",
  "autorId": "gabriel-garcia-marquez",
  "duracionSegundos": 755,
  "publicado": "2019-05-02",
  "descripcion": "García Márquez como invitado del programa «Escritores colombianos», que la televisión pública de Colombia (Cadena 3) emitió a comienzos de los años noventa.",
  "verificado": "oEmbed 200 + playableInEmbed true + descripción revisada, 2026-10-15",
  "notas": "Señal Memoria es el archivo audiovisual de RTVC, el sistema de medios públicos de Colombia."
 },
 {
  "id": "-dcVRfN0LfU",
  "titulo": "Conferencia: Lectura de El Arco y la Lira, de Octavio Paz",
  "tituloVisible": "Lectura de «El arco y la lira», de Octavio Paz",
  "canal": "elcolegionacionalmx",
  "canalVisible": "El Colegio Nacional",
  "canalUrl": "https://www.youtube.com/@elcolegionacionalmx",
  "categoria": "conferencia",
  "autorId": "octavio-paz",
  "duracionSegundos": 5002,
  "publicado": "2019-09-27",
  "descripcion": "Christopher Domínguez Michael, miembro de El Colegio Nacional, lee «El arco y la lira» y explica las dualidades del pensamiento de Paz: poesía y poema, metro y ritmo, poesía y prosa.",
  "verificado": "oEmbed 200 + playableInEmbed true + descripción revisada, 2026-10-15",
  "notas": ""
 },
 {
  "id": "02bI0NrmFHs",
  "titulo": "Taller de lectura de \"Casa tomada\" de Julio Cortázar",
  "tituloVisible": "Taller de lectura de «Casa tomada»",
  "canal": "Cátedra Alfonso Reyes",
  "canalVisible": "Cátedra Alfonso Reyes",
  "canalUrl": "https://www.youtube.com/@CatedraAR",
  "categoria": "conferencia",
  "autorId": "julio-cortazar",
  "duracionSegundos": 2818,
  "publicado": "2013-12-03",
  "descripcion": "Taller de lectura en el que Julio Ortega comenta con los asistentes el cuento «Casa tomada» y repasa sus muchas interpretaciones, de la relación incestuosa a la lectura sociopolítica.",
  "verificado": "oEmbed 200 + playableInEmbed true + descripción revisada, 2026-10-15",
  "notas": "Cátedra Alfonso Reyes del Tecnológico de Monterrey; el Tec enlaza este canal desde su sitio."
 },
 {
  "id": "DqO5qRiIeOA",
  "titulo": "Conferencia magistral: Otra posible autobiografía del Sor Juana Inés de la Cruz",
  "tituloVisible": "Margo Glantz: otra posible autobiografía de Sor Juana",
  "canal": "Canal INEHRM",
  "canalVisible": "INEHRM",
  "canalUrl": "https://www.youtube.com/@CanalINEHRM",
  "categoria": "conferencia",
  "autorId": "sor-juana",
  "duracionSegundos": 2906,
  "publicado": "2014-11-06",
  "descripcion": "Conferencia magistral de Margo Glantz, «Otra posible autobiografía de Sor Juana Inés de la Cruz», publicada por el Instituto Nacional de Estudios Históricos de las Revoluciones de México.",
  "verificado": "oEmbed 200 + playableInEmbed true + descripción revisada, 2026-10-15",
  "notas": "La descripción solo dice «Por: Margo Glantz»; el tema sale del título."
 },
 {
  "id": "_-36_QfONRA",
  "titulo": "Homenaje a Rosario Castellanos en el centenario de su natalicio",
  "tituloVisible": "Homenaje a Rosario Castellanos en su centenario",
  "canal": "elcolegionacionalmx",
  "canalVisible": "El Colegio Nacional",
  "canalUrl": "https://www.youtube.com/@elcolegionacionalmx",
  "categoria": "conferencia",
  "autorId": "rosario-castellanos",
  "duracionSegundos": 6675,
  "publicado": "2025-06-21",
  "descripcion": "Homenaje en El Colegio Nacional por el centenario de Rosario Castellanos, coordinado por Juan Villoro, con Ana Laura Santamaría, Silvia Molina, Sara Uribe y Gabriel Guerra Castellanos.",
  "verificado": "oEmbed 200 + playableInEmbed true + descripción revisada, 2026-10-15",
  "notas": "Transmisión en vivo del Aula Mayor (1 h 51 min)."
 }
];

export const duracion = (s: number) => {
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), x = s % 60;
  return h ? `${h}:${String(m).padStart(2, '0')}:${String(x).padStart(2, '0')}` : `${m}:${String(x).padStart(2, '0')}`;
};
export const duracionISO = (s: number) => `PT${Math.floor(s / 60)}M${s % 60}S`;
export const miniaturaYT = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
