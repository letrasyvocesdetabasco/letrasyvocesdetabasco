// Escritores añadidos en la ampliación 2026 del canon. Fichas verificadas con al menos dos fuentes documentales
// (Wikipedia, Enciclopedia de la Literatura en México, Academia Mexicana de la Lengua, Cervantes Virtual, INBA, etc.);
// las discrepancias entre fuentes quedan registradas en «notas». Generado el 2026-10-08.
export interface EscritorNuevo {
  id: string; nombre: string; anios: string; nacimiento: string; fallecimiento: string; municipioOrigen: string; movimiento: string;
  bloqueCanon: 'tabasquenos' | 'mexicanos' | 'universales'; tituloHonorifico: string; semblanzaSintetica: string; biografiaCompleta: string[];
  obrasCapitales: { titulo: string; anio: number | string; genero: string; descripcion: string }[]; legadoPatrimonial: string; dominioPublico: boolean;
  citas: { texto: string; obra: string; url: string }[];
  retrato: { url: string; licencia: string; autorFoto: string; paginaCommons: string }; fuentes: string[]; notas?: string;
}
export const ESCRITORES_NUEVOS: EscritorNuevo[] = [
 {
  "id": "arcadio-zentella-priego",
  "nombre": "Arcadio Zentella Priego",
  "anios": "1844 – 1920",
  "nacimiento": "12 de enero de 1844 · Cunduacán, Tabasco",
  "fallecimiento": "12 de julio de 1920 · Ciudad de México",
  "municipioOrigen": "Cunduacán",
  "movimiento": "Realismo y liberalismo decimonónico",
  "bloqueCanon": "tabasquenos",
  "tituloHonorifico": "Autor de «Perico», una de las primeras novelas realistas de México",
  "semblanzaSintetica": "Poeta, periodista y narrador nacido en Cunduacán, formado en el Seminario Conciliar de San Ildefonso de Mérida. Cofundó con Manuel Sánchez Mármol y Justo Santa Anna el periódico El Radical y publicó por entregas en el semanario La Idea de San Juan Bautista la novela corta Perico, denuncia del derecho de pernada en las haciendas tabasqueñas.",
  "biografiaCompleta": [
   "Arcadio Zentella Priego nació en Cunduacán, Tabasco, el 12 de enero de 1844. Estudió en el Seminario Conciliar de San Ildefonso, en Mérida, donde obtuvo el grado de bachiller en 1862; de Yucatán fue expulsado como estudiante por el gobernador Felipe Navarrete a causa de sus ideas liberales. Durante la Intervención francesa tomó partido por Benito Juárez contra el Imperio de Maximiliano, una posición que marcaría toda su actividad pública y periodística posterior.",
   "De regreso en Tabasco colaboró en periódicos liberales como La Idea, Correo del Comercio y La Revista, y fundó junto con Manuel Sánchez Mármol, su cuñado, y Justo Santa Anna el periódico El Radical. En 1872 publicó el poemario Preludios. Hacia 1885 el semanario La Idea de San Juan Bautista dio a conocer por entregas su única novela, En esta tierra (esbozos a la brocha), conocida como Perico, que Sánchez Mármol apadrinó con una carta fechada el 30 de julio de 1885.",
   "Perico narra la historia de un adolescente nacido del derecho de pernada que trabaja en una hacienda tabasqueña y, al defender a su amada Casilda del hacendado, lo mata y huye. La crítica, desde John S. Brushwood hasta Carlos Martínez Assad, la considera una de las primeras novelas realistas y de denuncia social escritas en México. La falta de reconocimiento inmediato parece haber alejado a Zentella de la literatura: se desempeñó después como administrador de aduanas en Piedras Negras, Frontera y Campeche y como director de instrucción pública en Cunduacán.",
   "Tras la Decena Trágica de 1913 se exilió en La Habana; entre 1915 y 1916 colaboró con el general Salvador Alvarado en Yucatán y en 1915 publicó Criterios revolucionarios. Murió el 12 de julio de 1920. En 1982 Premiá Editora reeditó Perico con prólogo de Hilda Bautista, la única edición moderna conocida de la novela, que hoy se lee como testimonio pionero sobre la explotación campesina en el Tabasco del siglo XIX."
  ],
  "obrasCapitales": [
   {
    "titulo": "Preludios",
    "anio": 1872,
    "genero": "Poesía",
    "descripcion": "Primer libro de versos del autor, publicado en su etapa de periodista liberal en Tabasco."
   },
   {
    "titulo": "Perico (En esta tierra, esbozos a la brocha)",
    "anio": 1885,
    "genero": "Novela corta",
    "descripcion": "Publicada por entregas en el semanario La Idea de San Juan Bautista; relata la vida de un peón nacido del derecho de pernada y es considerada una de las primeras novelas realistas mexicanas."
   },
   {
    "titulo": "Criterios revolucionarios",
    "anio": 1915,
    "genero": "Ensayo político",
    "descripcion": "Reflexiones escritas durante la Revolución, en los años de su colaboración con Salvador Alvarado en Yucatán."
   }
  ],
  "legadoPatrimonial": "Perico inaugura en Tabasco la narrativa de denuncia social y figura en las historias de la novela mexicana del siglo XIX como antecedente del realismo. Su reedición de 1982 y los estudios de Brushwood, Schmidt y Laguna Correa la han devuelto al canon regional.",
  "dominioPublico": true,
  "citas": [],
  "retrato": {
   "url": "",
   "licencia": "",
   "autorFoto": "",
   "paginaCommons": ""
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Arcadio_Zentella_Priego",
   "https://acontracorriente.chass.ncsu.edu/index.php/acontracorriente/article/view/576",
   "https://acontracorriente.chass.ncsu.edu/index.php/acontracorriente/article/download/576/1198/2639"
  ],
  "notas": "Año de Perico: Wikipedia en español lo fecha en 1918 (probable reedición), mientras que el estudio de F. Laguna Correa (A Contracorriente) recoge 1884 (Schmidt), 1885 y 1886 (Brushwood) y 1886 (Martínez Assad); la carta-prólogo de Sánchez Mármol está fechada el 30 de julio de 1885, por lo que se adopta 1885. Lugar de muerte: Hilda Bautista (prólogo de 1982) y Wikipedia indican Ciudad de México; un artículo de La verdad del sureste (2012) afirma que murió en Mérida. No se localizó retrato en Wikimedia Commons. No confundir con su homónimo Arcadio Zentella y Sánchez Mármol (1872–1950)."
 },
 {
  "id": "jose-maria-pino-suarez",
  "nombre": "José María Pino Suárez",
  "anios": "1869 – 1913",
  "nacimiento": "8 de septiembre de 1869 · Tenosique, Tabasco",
  "fallecimiento": "22 de febrero de 1913 · Ciudad de México",
  "municipioOrigen": "Tenosique",
  "movimiento": "Poesía romántica tardía y modernismo de fin de siglo",
  "bloqueCanon": "tabasquenos",
  "tituloHonorifico": "Poeta de «Melancolías» y «Procelarias», periodista y vicepresidente de México",
  "semblanzaSintetica": "Abogado, poeta y periodista nacido en Tenosique y formado en Mérida, publicó los poemarios Melancolías y Procelarias y fundó en 1904 el diario El Peninsular, desde el que denunció la explotación de los peones henequeneros. Colaborador cercano de Francisco I. Madero, fue gobernador de Yucatán y vicepresidente de la República; murió asesinado junto a Madero tras el golpe de Victoriano Huerta.",
  "biografiaCompleta": [
   "José María Pino Suárez nació en Tenosique, Tabasco, el 8 de septiembre de 1869. Muy joven fue llevado a Mérida, donde estudió en el Colegio de San Ildefonso y se recibió de abogado en el Instituto Literario de Yucatán en 1894. Según la biografía publicada por el INEHRM, la separación temprana de su pueblo natal le dejó una nostalgia duradera que aflora en su poesía, en particular en un poema dedicado al río Usumacinta.",
   "En Mérida participó en una academia literaria juvenil que leía a Víctor Hugo, Balzac, Dickens y Poe, y publicó versos en la pequeña revista Pimienta y Mostaza. Reunió su poesía en dos libros: Melancolías (1896) y Procelarias, de tono intimista y sensibilidad finisecular. Tras una breve estancia en la Ciudad de México regresó a Mérida, donde se dedicó al comercio y conoció de cerca las condiciones de los jornaleros de las haciendas henequeneras.",
   "Esa preocupación social lo llevó al periodismo: en 1904 fundó El Peninsular, diario que circuló en todo Yucatán y criticó tanto a los hacendados como al gobierno por la situación de los peones. A partir de 1909 se sumó al movimiento antirreeleccionista de Francisco I. Madero, de quien fue estrecho colaborador. Fue secretario de Justicia (1910–1911), gobernador de Yucatán (1911) y presidente del Senado.",
   "Elegido vicepresidente de la República en 1911, ocupó además la Secretaría de Instrucción Pública y Bellas Artes entre 1912 y 1913. Durante la Decena Trágica fue obligado a renunciar junto con Madero y ambos fueron asesinados el 22 de febrero de 1913 en las inmediaciones de la Penitenciaría de Lecumberri. Su nombre figura con letras de oro en el Congreso de la Unión y da nombre a la Biblioteca Pública del Estado de Tabasco."
  ],
  "obrasCapitales": [
   {
    "titulo": "Melancolías",
    "anio": 1896,
    "genero": "Poesía",
    "descripcion": "Primer poemario del autor, reunido en su juventud meridana; recoge una lírica intimista de raíz romántica."
   },
   {
    "titulo": "Procelarias",
    "anio": 1903,
    "genero": "Poesía",
    "descripcion": "Segundo libro de versos, de tono más tempestuoso, como sugiere el título tomado de las aves de las borrascas."
   },
   {
    "titulo": "El Peninsular",
    "anio": 1904,
    "genero": "Periodismo",
    "descripcion": "Diario fundado y dirigido por Pino Suárez en Mérida, tribuna de denuncia contra la explotación en las haciendas henequeneras."
   }
  ],
  "legadoPatrimonial": "Aunque la historia lo recuerda sobre todo como vicepresidente mártir del maderismo, su obra poética y periodística lo sitúa entre los escritores tabasqueños de fin de siglo. La Biblioteca Pública del Estado de Tabasco lleva su nombre.",
  "dominioPublico": true,
  "citas": [
   {
    "texto": "Besando pasa la risueña falda / de mi pueblo tranquilo y venturoso",
    "obra": "«El Usumacinta» (poema, citado en la biografía del INEHRM)",
    "url": "https://inehrm.gob.mx/recursos/Libros/JoseMariaPinoSuarez_BiografiaNinos.pdf"
   }
  ],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/7/74/Vicepresidente_Jos%C3%A9_Mar%C3%ADa_Pino_Su%C3%A1rez_crop.jpg",
   "licencia": "CC BY-SA 4.0",
   "autorFoto": "Instituto Nacional de Antropología e Historia (INAH), fotografía de 1911",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Vicepresidente_Jos%C3%A9_Mar%C3%ADa_Pino_Su%C3%A1rez_crop.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Jos%C3%A9_Mar%C3%ADa_Pino_Su%C3%A1rez",
   "https://en.wikipedia.org/wiki/Jos%C3%A9_Mar%C3%ADa_Pino_Su%C3%A1rez",
   "https://inehrm.gob.mx/recursos/Libros/JoseMariaPinoSuarez_BiografiaNinos.pdf",
   "https://www.buscabiografias.com/biografia/verDetalle/10501/Jose%20Maria%20Pino%20Suarez"
  ],
  "notas": "Año de Procelarias: Wikipedia (es/en) indica 1903; Buscabiografías indica 1908; la biografía del INEHRM no fecha el libro. Se adopta 1903 con reserva. La fotografía de Commons es una obra de 1911 catalogada por el INAH; la etiqueta CC BY-SA 4.0 corresponde a la publicación del INAH, aunque por antigüedad la imagen está en dominio público."
 },
 {
  "id": "dolores-correa-zapata",
  "nombre": "Dolores Correa Zapata",
  "anios": "1853 – 1924",
  "nacimiento": "23 de febrero de 1853 · Teapa, Tabasco",
  "fallecimiento": "24 de mayo de 1924 · Ciudad de México",
  "municipioOrigen": "Teapa",
  "movimiento": "Romanticismo tardío y primera literatura feminista mexicana",
  "bloqueCanon": "tabasquenos",
  "tituloHonorifico": "Poeta y pedagoga, pionera del feminismo en las letras mexicanas",
  "semblanzaSintetica": "Maestra, poeta y periodista nacida en Teapa, hija del educador liberal Juan Correa Torres. Publicó en 1886 Estelas y bosquejos, que incluye el poema en dos cantos «La mujer científica», y fue cofundadora de la revista La Mujer Mexicana (1902–1907). Sus libros de texto, como La mujer en el hogar, circularon ampliamente en las escuelas de niñas del país.",
  "biografiaCompleta": [
   "Dolores Correa Zapata nació en Teapa, Tabasco, el 23 de febrero de 1853, en una familia de educadores: su padre, Juan Correa Torres (1825–1892), fue político liberal y maestro, y su madre, María de Jesús Zapata Roig, también se dedicó a la enseñanza. Su hermano Alberto Correa Zapata fue autor de textos escolares de amplia difusión. Desde joven ejerció el magisterio y colaboró en periódicos de Tabasco antes de establecerse en la capital de la República.",
   "En 1886 publicó en México, en la imprenta de Eduardo Dublán, su primer libro, Estelas y bosquejos, dedicado a su madre. En él se incluye «La mujer científica», poema en dos cantos que presenta a María, una joven entregada al conocimiento y pagada con burlas por su condición de mujer, y que reclama abiertamente el derecho femenino a la ciencia. El poema volvió a aparecer por entregas en la prensa en 1888 y es hoy objeto de ediciones anotadas y estudios de género.",
   "Correa Zapata hizo carrera en la Escuela Normal para Profesoras de la Ciudad de México, donde fue profesora titular de economía doméstica, bibliotecaria y subdirectora. Escribió manuales escolares como La mujer en el hogar (1896), premiado en la exposición de Búfalo, Nociones de instrucción cívica, de derecho usual y de economía política y Moral e instrucción cívica, además de Memorias de una maestra.",
   "Entre 1902 y 1907 fundó y dirigió con Columba Rivera la revista La Mujer Mexicana, una de las primeras publicaciones periódicas hechas por mujeres en el país, y fue de las primeras escritoras mexicanas en usar y defender en letra impresa la palabra «feminismo». En 1917 reunió nuevos versos en Mis liras. Murió en la Ciudad de México el 24 de mayo de 1924."
  ],
  "obrasCapitales": [
   {
    "titulo": "Estelas y bosquejos",
    "anio": 1886,
    "genero": "Poesía",
    "descripcion": "Primer poemario, impreso por Eduardo Dublán y Cía.; contiene «La mujer científica», alegato en verso por el acceso de las mujeres al saber."
   },
   {
    "titulo": "La mujer en el hogar",
    "anio": 1896,
    "genero": "Libro de texto",
    "descripcion": "Manual de economía doméstica para escuelas de niñas, premiado en la exposición de Búfalo y de amplia circulación."
   },
   {
    "titulo": "La Mujer Mexicana",
    "anio": 1902,
    "genero": "Revista",
    "descripcion": "Publicación mensual cofundada con Columba Rivera (1902–1907), escrita y dirigida por mujeres."
   },
   {
    "titulo": "Mis liras",
    "anio": 1917,
    "genero": "Poesía",
    "descripcion": "Segundo libro de versos, publicado en la madurez de la autora."
   }
  ],
  "legadoPatrimonial": "Es reconocida como una de las primeras feministas mexicanas y como la voz poética que reclamó en 1886 el derecho de la mujer a la ciencia. Su obra ha sido rescatada por la historiografía de la educación y por ediciones críticas recientes.",
  "dominioPublico": true,
  "citas": [
   {
    "texto": "¿Quién ha dicho que al hombre solo es dado / Cruzar la senda de la ciencia vasta",
    "obra": "«La mujer científica», en Estelas y bosquejos (1886), p. 82",
    "url": "https://www.jovenesenlaciencia.ugto.mx/index.php/jovenesenlaciencia/article/download/3503/2999/11628"
   }
  ],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Dolores_correra_y_zapata.jpg",
   "licencia": "Dominio público (retrato del siglo XIX)",
   "autorFoto": "Autor desconocido, reproducido de un libro",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Dolores_correra_y_zapata.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Dolores_Correa_Zapata",
   "https://en.wikipedia.org/wiki/Dolores_Correa_Zapata",
   "https://www.jovenesenlaciencia.ugto.mx/index.php/jovenesenlaciencia/article/download/3503/2999/11628",
   "https://www.infinite-women.com/women/dolores-correa-zapata/"
  ],
  "notas": "La licencia CC BY 2.5 que declara Commons es la que asignó quien subió el archivo; tratándose de un retrato decimonónico, la imagen está en dominio público. Su hermana Teutila Correa de Carter (1863–1938), considerada la primera narradora tabasqueña, se descartó por no haberse podido verificar su lugar de nacimiento ni títulos de obras en dos fuentes fiables."
 },
 {
  "id": "marcos-e-becerra",
  "nombre": "Marcos Enrique Becerra",
  "anios": "1870 – 1940",
  "nacimiento": "25 de abril de 1870 · Teapa, Tabasco",
  "fallecimiento": "7 de enero de 1940 · Ciudad de México",
  "municipioOrigen": "Teapa",
  "movimiento": "Poesía modernista y erudición filológica e histórica",
  "bloqueCanon": "tabasquenos",
  "tituloHonorifico": "Poeta, filólogo e historiador, miembro de la Academia Mexicana de la Historia",
  "semblanzaSintetica": "Maestro, poeta y estudioso nacido en Teapa, autor del poemario Musa breve (1907) y de obras pioneras sobre toponimia indígena, lenguas mayenses y la ruta de Cortés en Tabasco. Fue secretario general de gobierno de Tabasco con Manuel Mestre Ghigliazza, director de educación en Chiapas y ocupó el sillón 21 de la Academia Mexicana de la Historia de 1930 a 1940.",
  "biografiaCompleta": [
   "Marcos Enrique Becerra nació en Teapa, Tabasco, el 25 de abril de 1870. Hizo sus primeros estudios en su pueblo natal y en la juventud trabajó como encuadernador, escribiente, dependiente de comercio y apuntador de teatro. En 1900, tras estudiar por su cuenta, obtuvo el título de profesor en el Instituto Juárez de San Juan Bautista, hoy Villahermosa. Al año siguiente publicó su primera obra, Guía del lenguaje usual para hablar con propiedad, pureza y corrección (1901).",
   "Como poeta reunió sus sonetos en Musa breve (1907), y sus versos aparecieron de manera esporádica en periódicos de provincia. Al mismo tiempo inició la investigación histórica y lingüística que lo distinguiría: Nombres geográficos de Tabasco (1909), Itinerario de Hernán Cortés en Tabasco (1910) y Los nombres del Palenque (1911) anticipan su interés por el pasado prehispánico y colonial del sureste.",
   "Durante el maderismo fue secretario general de gobierno de Tabasco en el gabinete del gobernador Manuel Mestre Ghigliazza (1911–1913) y director de instrucción pública del estado; luego fue diputado federal por Tabasco y director general de educación en Chiapas durante cerca de una década a partir de 1914. En el ámbito federal dirigió la educación secundaria en la Secretaría de Educación Pública y en sus últimos años fue investigador del Museo Nacional.",
   "Publicó La nueva gramática castellana (1921), Breve noticia sobre la lengua e indios tsoques (1925), Vocabulario de la lengua chol (1927) y Nombres geográficos indígenas del Estado de Chiapas (Tuxtla Gutiérrez, 1932). Miembro de número de la Academia Mexicana de la Historia desde 1930, ocupó el sillón 21 hasta su muerte en la Ciudad de México el 7 de enero de 1940. Sus Rectificaciones y adiciones al Diccionario de la Real Academia Española aparecieron póstumamente en 1954."
  ],
  "obrasCapitales": [
   {
    "titulo": "Musa breve; sonetos",
    "anio": 1907,
    "genero": "Poesía",
    "descripcion": "Colección de sonetos que recoge la obra lírica del autor en la estela del modernismo."
   },
   {
    "titulo": "Itinerario de Hernán Cortés en Tabasco",
    "anio": 1910,
    "genero": "Historia",
    "descripcion": "Reconstrucción documental del paso del conquistador por el territorio tabasqueño."
   },
   {
    "titulo": "Nombres geográficos indígenas del Estado de Chiapas",
    "anio": 1932,
    "genero": "Lingüística y toponimia",
    "descripcion": "Estudio de los topónimos mayenses y zoques de Chiapas, editado por el gobierno del estado en Tuxtla Gutiérrez."
   },
   {
    "titulo": "Rectificaciones y adiciones al Diccionario de la Real Academia Española",
    "anio": 1954,
    "genero": "Lexicografía",
    "descripcion": "Obra póstuma que propone enmiendas y voces mexicanas al diccionario académico."
   }
  ],
  "legadoPatrimonial": "Sus estudios de toponimia y lenguas indígenas del sureste siguen siendo referencia para historiadores y lingüistas, y su figura une la poesía tabasqueña de principios del siglo XX con la erudición de la Academia Mexicana de la Historia.",
  "dominioPublico": false,
  "citas": [],
  "retrato": {
   "url": "",
   "licencia": "",
   "autorFoto": "",
   "paginaCommons": ""
  },
  "fuentes": [
   "https://en.wikipedia.org/wiki/Marcos_E._Becerra",
   "https://es.wikipedia.org/wiki/Marcos_E._Becerra",
   "https://www.academiamh.com.mx/miembros/marcos-becerra/",
   "https://fjsantamaria.ujat.mx/Publication/Details/1669",
   "https://detabascosoy.com/marcos-enrique-becerra/"
  ],
  "notas": "La ficha de la Academia Mexicana de la Historia confirma su ingreso en 1930 pero no especifica el sillón; el número 21 procede de Wikipedia (en/es). No se localizó retrato en Wikimedia Commons."
 },
 {
  "id": "francisco-j-santamaria",
  "nombre": "Francisco Javier Santamaría",
  "anios": "1886 – 1963",
  "nacimiento": "10 de septiembre de 1886 · Cacaos, municipio de Jalapa, Tabasco",
  "fallecimiento": "1 de marzo de 1963 · Veracruz, Veracruz",
  "municipioOrigen": "Jalapa",
  "movimiento": "Lexicografía y ensayo del siglo XX",
  "bloqueCanon": "tabasquenos",
  "tituloHonorifico": "Padre de la lexicografía mexicana moderna, autor del «Diccionario de mejicanismos»",
  "semblanzaSintetica": "Abogado, maestro, bibliógrafo y lexicógrafo nacido en Cacaos, Jalapa. Único sobreviviente de la matanza de Huitzilac (1927), fue senador por Tabasco (1940–1946) y gobernador del estado (1947–1952). Su Diccionario general de americanismos (1942) y su Diccionario de mejicanismos (1959) lo convirtieron en referencia obligada del español de América; ocupó la silla XXIII de la Academia Mexicana de la Lengua desde 1954.",
  "biografiaCompleta": [
   "Francisco Javier Santamaría nació el 10 de septiembre de 1886 en la ranchería de Cacaos, municipio de Jalapa, Tabasco. Se tituló de profesor normalista en el Instituto Juárez, donde enseñó matemáticas, geografía y español, y más tarde se recibió de abogado. Desde joven alternó la docencia y la judicatura con el periodismo y el estudio del habla popular de su tierra, interés que cristalizó en El provincialismo tabasqueño (México, Andrés Botas e hijo, 1921), ensayo de vocabulario comprobado con citas.",
   "En 1927 acompañó la campaña presidencial del general Francisco R. Serrano y fue el único de la comitiva que escapó con vida de la matanza de Huitzilac, el 3 de octubre de ese año. Se exilió en Nueva York, experiencia que narró en Crónicas del destierro: desde la ciudad de hierro (1933). De vuelta en México publicó la Bibliografía general de Tabasco (1930), La poesía tabasqueña (1940) y El movimiento cultural en Tabasco (1946), obras que fundaron la bibliografía y la historia literaria de su estado.",
   "Su obra mayor es la lexicográfica: el Diccionario general de americanismos, en tres tomos (1942), y el Diccionario de mejicanismos (1959), que sigue siendo consulta imprescindible y ha sido reeditado en numerosas ocasiones. Por ello se le reconoce como padre de la lexicografía mexicana moderna. Fue senador de la República por Tabasco entre 1940 y 1946 y gobernador constitucional del estado de 1947 a 1952.",
   "El 2 de abril de 1954 leyó su discurso de ingreso como miembro de número de la Academia Mexicana de la Lengua, en la silla XXIII. Murió en el puerto de Veracruz el 1 de marzo de 1963. La biblioteca central de la Universidad Juárez Autónoma de Tabasco y el premio de lexicografía que otorga la Academia llevan su nombre."
  ],
  "obrasCapitales": [
   {
    "titulo": "El provincialismo tabasqueño",
    "anio": 1921,
    "genero": "Lexicografía",
    "descripcion": "Ensayo de un vocabulario del lenguaje popular de Tabasco, comprobado con citas y comparado con el de otros países hispanoamericanos."
   },
   {
    "titulo": "Bibliografía general de Tabasco",
    "anio": 1930,
    "genero": "Bibliografía",
    "descripcion": "Primer repertorio sistemático de los impresos sobre el estado, base de la historiografía regional."
   },
   {
    "titulo": "Crónicas del destierro: desde la ciudad de hierro",
    "anio": 1933,
    "genero": "Crónica",
    "descripcion": "Relato de su exilio en Nueva York tras sobrevivir a la matanza de Huitzilac."
   },
   {
    "titulo": "Diccionario general de americanismos",
    "anio": 1942,
    "genero": "Lexicografía",
    "descripcion": "Obra en tres tomos que registra el léxico del español de América, celebrada por los estudios dialectales."
   },
   {
    "titulo": "Diccionario de mejicanismos",
    "anio": 1959,
    "genero": "Lexicografía",
    "descripcion": "Su obra más conocida, inventario razonado de las voces propias del español de México, con numerosas reediciones."
   }
  ],
  "legadoPatrimonial": "Sus diccionarios fijaron el estudio del español de México y de América; la UJAT bautizó con su nombre su biblioteca central y la Academia Mexicana de la Lengua otorga el premio Francisco J. Santamaría a obras lexicográficas.",
  "dominioPublico": false,
  "citas": [],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/8/88/FJ_Santamaria_en_1948_CUPPT.jpg",
   "licencia": "CC BY-SA 4.0",
   "autorFoto": "Sofía García Broca (archivo del boletín CUPPT), fotografía de 1948",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:FJ_Santamaria_en_1948_CUPPT.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Francisco_Javier_Santamar%C3%ADa",
   "https://en.wikipedia.org/wiki/Francisco_J._Santamar%C3%ADa",
   "https://www.academia.org.mx/academicos-1956/item/francisco-javier-santamaria-2",
   "https://commons.wikimedia.org/wiki/File:El_provincialismo_tabasque%C3%B1o.djvu"
  ],
  "notas": "Fecha de Huitzilac: la fecha histórica aceptada es la noche del 3 de octubre de 1927. Periodo de gobierno: Wikipedia indica 1947–1952; la ficha de la Academia Mexicana de la Lengua dice 1947–1953."
 },
 {
  "id": "andres-iduarte-foucher",
  "nombre": "Andrés Iduarte Foucher",
  "anios": "1907 – 1984",
  "nacimiento": "1 de mayo de 1907 · San Juan Bautista (hoy Villahermosa), Tabasco",
  "fallecimiento": "16 de abril de 1984 · Ciudad de México",
  "municipioOrigen": "Centro (Villahermosa)",
  "movimiento": "Ensayo y memoria de la Revolución; hispanoamericanismo",
  "bloqueCanon": "tabasquenos",
  "tituloHonorifico": "Autor de «Un niño en la Revolución mexicana», ensayista y catedrático de Columbia",
  "semblanzaSintetica": "Ensayista, biógrafo y profesor nacido en San Juan Bautista. Fue catedrático de literatura hispanoamericana en la Universidad de Columbia, director general del Instituto Nacional de Bellas Artes (1952–1954) y miembro correspondiente de la Academia Mexicana de la Lengua. Su libro de memorias Un niño en la Revolución mexicana (1951) es un clásico de la narrativa sobre la epopeya revolucionaria.",
  "biografiaCompleta": [
   "Andrés Iduarte Foucher nació el 1 de mayo de 1907 en San Juan Bautista, hoy Villahermosa. La llegada de la Revolución a Tabasco en 1914 obligó a su familia a trasladarse temporalmente a Ciudad del Carmen y a Mérida, experiencia que décadas después daría materia a su libro más célebre. Cursó la Escuela Nacional Preparatoria entre 1922 y 1925 e ingresó en 1926 a la Facultad de Derecho de la Universidad Nacional.",
   "Entre 1928 y 1930 vivió en París, donde participó en la Asociación de Estudiantes Latinoamericanos. A los veintitrés años ya era profesor de historia en la Preparatoria y director de la revista Universidad de México (1930–1932). Se trasladó luego a Madrid, estudió en la Universidad Central y fue secretario de la sección iberoamericana del Ateneo (1933–1938); vivió la Guerra Civil del lado republicano, de donde nació En el fuego de España.",
   "Desde 1939 enseñó literatura hispanoamericana en la Universidad de Columbia, en Nueva York, donde se doctoró con Martí, escritor (1944) y fue profesor hasta su jubilación como emérito. En 1952 volvió a México como director general del Instituto Nacional de Bellas Artes; fue destituido en 1954 tras permitir que el féretro de Frida Kahlo se cubriera con la bandera soviética en el Palacio de Bellas Artes. Presidió el Instituto Internacional de Literatura Iberoamericana (1957–1959).",
   "Un niño en la Revolución mexicana, publicado en 1951 en la colección Temas Mexicanos de Editorial Ruta, cuenta en primera persona su infancia tabasqueña durante la guerra civil y se ha convertido en lectura canónica sobre el periodo. Escribió además Gabriela Mistral, santa a la jineta (1958), Alfonso Reyes, el hombre y su mundo (1956) e Hispanismo e hispanoamericanismo (1983). Fue elegido miembro correspondiente de la Academia Mexicana de la Lengua el 14 de noviembre de 1969 y recibió el Juchimán de Plata en 1978. Murió en la Ciudad de México el 16 de abril de 1984."
  ],
  "obrasCapitales": [
   {
    "titulo": "El libertador Simón Bolívar",
    "anio": 1931,
    "genero": "Biografía",
    "descripcion": "Primer libro del autor, dedicado a la figura bolivariana que marcó su hispanoamericanismo."
   },
   {
    "titulo": "Martí, escritor",
    "anio": 1944,
    "genero": "Ensayo",
    "descripcion": "Tesis doctoral en Columbia sobre la prosa y el verso de José Martí; obtuvo en 1951 el primer premio de la Comisión Pro Centenario de Martí."
   },
   {
    "titulo": "Un niño en la Revolución mexicana",
    "anio": 1951,
    "genero": "Memorias",
    "descripcion": "Relato autobiográfico de su infancia en Tabasco durante la Revolución, considerado un clásico de la narrativa sobre el periodo."
   },
   {
    "titulo": "Gabriela Mistral, santa a la jineta",
    "anio": 1958,
    "genero": "Ensayo biográfico",
    "descripcion": "Semblanza de la poeta chilena, a quien trató en Nueva York."
   },
   {
    "titulo": "Hispanismo e hispanoamericanismo",
    "anio": 1983,
    "genero": "Ensayo",
    "descripcion": "Recopilación tardía de sus ideas sobre la comunidad cultural de los pueblos de lengua española."
   }
  ],
  "legadoPatrimonial": "Un niño en la Revolución mexicana es el testimonio literario más leído de la Revolución en Tabasco; su magisterio en Columbia formó a generaciones de hispanistas y la UJAT lo distinguió con el Juchimán de Plata.",
  "dominioPublico": false,
  "citas": [],
  "retrato": {
   "url": "",
   "licencia": "",
   "autorFoto": "",
   "paginaCommons": ""
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Andr%C3%A9s_Iduarte",
   "https://en.wikipedia.org/wiki/Andr%C3%A9s_Iduarte",
   "https://www.academia.org.mx/academicos-1974/item/andres-iduarte",
   "https://www.cervantesvirtual.com/portales/academia_de_las_artes_escenicas/obra/andres-iduarte-biografia/"
  ],
  "notas": "Periodo al frente del INBA: Wikipedia indica 1952–1955; la Academia Mexicana de la Lengua, 1952–1954 (la destitución ocurrió en julio de 1954). Año de El libertador Simón Bolívar: 1931 (Wikipedia) frente a 1930 (AML). No se localizó retrato en Wikimedia Commons."
 },
 {
  "id": "ciprian-cabrera-jasso",
  "nombre": "Ciprián Cabrera Jasso",
  "anios": "1950 – 2012",
  "nacimiento": "2 de julio de 1950 · Emiliano Zapata (antes Montecristo), Tabasco",
  "fallecimiento": "11 de marzo de 2012 · Villahermosa, Tabasco",
  "municipioOrigen": "Emiliano Zapata",
  "movimiento": "Poesía tabasqueña contemporánea",
  "bloqueCanon": "tabasquenos",
  "tituloHonorifico": "Premio Nacional de Poesía Carlos Pellicer 2006 y académico de la lengua",
  "semblanzaSintetica": "Poeta, narrador, dramaturgo y ensayista nacido en Emiliano Zapata, psicólogo por la UNAM. Publicó desde Trilogía de sombras (1985) una obra poética reunida en tres volúmenes, obtuvo en 2006 el Premio Nacional de Poesía Carlos Pellicer para obra publicada y en diciembre de 2011 fue elegido miembro correspondiente de la Academia Mexicana de la Lengua.",
  "biografiaCompleta": [
   "Ciprián Cabrera Jasso nació el 2 de julio de 1950 en Emiliano Zapata, Tabasco, la antigua Montecristo. Estudió la licenciatura en psicología en la Universidad Nacional Autónoma de México y cursos de literatura inglesa en la Universidad de Michigan. Fue maestro de educación especial y rehabilitación infantil en la UNAM antes de volver a Tabasco, donde desarrolló una larga carrera en la administración cultural y educativa del estado.",
   "Dirigió la Galería de Arte de Tabasco y la Biblioteca Pública del Estado José María Pino Suárez, fue jefe del área de investigación del Centro de Investigación de las Culturas Olmeca y Maya, director editorial del Instituto de Cultura de Tabasco y director de educación, cultura y recreación del municipio de Centro. Editó la revista Expresión y colaboró en Ámbar, Avance, Clarín, Cultura Sur, Graffiti, Manglar, Nexos y la Revista de la UJAT.",
   "Su obra poética, iniciada con Trilogía de sombras (1985), Nadie detendrá el viaje (1986), Kasandra (1988) y Diario de muertos (1989), fue reunida en Obra poética I, II y III (2005–2011). Cultivó también la narrativa (Las once fantasías y un viaje al país de la noche, 1992; Onishi y la fiesta de infierno, 1994; Celia y la oscura esperanza, 1998), el teatro (El retrato, 1999) y el ensayo (Escudriños, 1991; El uno y la otredad, 1993). Dio lecturas y conferencias en universidades del país y del extranjero, entre ellas la de Amberes.",
   "En 2006 recibió el Premio Nacional de Poesía Carlos Pellicer para obra publicada por Obra poética I, y el 8 de diciembre de 2011 la Academia Mexicana de la Lengua lo eligió miembro correspondiente en Tabasco. Murió en Villahermosa el 11 de marzo de 2012. La Academia le rindió homenaje luctuoso junto con Francisco J. Santamaría, y su poesía, de tono elegíaco y luminoso, sigue siendo leída como una de las voces centrales de Tabasco en el cambio de siglo."
  ],
  "obrasCapitales": [
   {
    "titulo": "Trilogía de sombras",
    "anio": 1985,
    "genero": "Poesía",
    "descripcion": "Primer poemario del autor, inicio de una obra lírica sostenida durante más de veinticinco años."
   },
   {
    "titulo": "Las once fantasías y un viaje al país de la noche",
    "anio": 1992,
    "genero": "Narrativa",
    "descripcion": "Libro de relatos de atmósfera onírica, muestra de su vertiente narrativa."
   },
   {
    "titulo": "El retrato",
    "anio": 1999,
    "genero": "Teatro",
    "descripcion": "Pieza dramática publicada tras aparecer en forma narrativa en Entre la luz de la luna y El retrato (1988)."
   },
   {
    "titulo": "Obra poética I",
    "anio": 2005,
    "genero": "Poesía reunida",
    "descripcion": "Primer volumen de su poesía reunida, distinguido con el Premio Nacional de Poesía Carlos Pellicer 2006; le siguieron Obra poética II (2007) y III (2011)."
   }
  ],
  "legadoPatrimonial": "Fue el primer poeta tabasqueño de su generación en recibir el Premio Carlos Pellicer y en ingresar a la Academia Mexicana de la Lengua; su obra reunida en tres volúmenes es referencia de la lírica tabasqueña contemporánea.",
  "dominioPublico": false,
  "citas": [
   {
    "texto": "Soy una tumba donde el amor ha resucitado varias veces / Y sucumbe de nuevo.",
    "obra": "«Ha caído la tarde» (poema reproducido en Círculo de Poesía, 2012)",
    "url": "https://circulodepoesia.com/2012/03/en-recuerdo-de-ciprian-cabrera-jasso/"
   }
  ],
  "retrato": {
   "url": "",
   "licencia": "",
   "autorFoto": "",
   "paginaCommons": ""
  },
  "fuentes": [
   "https://literatura.inba.gob.mx/tabasco/4728-cabrera-jasso-ciprian.html",
   "https://academia.org.mx/academicos-2012/item/ciprian-cabrera-jasso",
   "https://circulodepoesia.com/2012/03/en-recuerdo-de-ciprian-cabrera-jasso/",
   "https://www.proceso.com.mx/cultura/2012/3/11/hallan-muerto-al-poeta-tabasqueno-ciprian-cabrera-jasso-99912.html"
  ],
  "notas": "INBA, la Academia Mexicana de la Lengua y la prensa coinciden en el 11 de marzo de 2012 como fecha de muerte. Año de Obra poética I: INBA indica 2005 y la AML 2006. No se localizó retrato en Wikimedia Commons."
 },
 {
  "id": "mariano-azuela",
  "nombre": "Mariano Azuela González",
  "anios": "1873 – 1952",
  "nacimiento": "1 de enero de 1873 · Lagos de Moreno, Jalisco",
  "fallecimiento": "1 de marzo de 1952 · Ciudad de México",
  "municipioOrigen": "Lagos de Moreno, Jalisco",
  "movimiento": "Novela de la Revolución mexicana",
  "bloqueCanon": "mexicanos",
  "tituloHonorifico": "Médico y fundador de la novela de la Revolución",
  "semblanzaSintetica": "Médico cirujano formado en Guadalajara, sirvió como médico militar en las filas revolucionarias y escribió Los de abajo (1915-1916), la novela que inauguró el ciclo narrativo de la Revolución mexicana. Fue miembro fundador de El Colegio Nacional y recibió el Premio Nacional de Ciencias y Artes en 1949.",
  "biografiaCompleta": [
   "Mariano Azuela nació en Lagos de Moreno, Jalisco, el 1 de enero de 1873. Estudió medicina en Guadalajara y se tituló como médico cirujano en 1898. Al año siguiente se casó con Carmen Rivera Torre, con quien tuvo diez hijos. Ejerció la medicina en su ciudad natal, donde también fue jefe político, y dirigió brevemente la instrucción pública de Jalisco durante el gobierno maderista. Desde joven alternó la práctica médica con la escritura: Mala yerba, novela de ambiente rural, apareció en 1909, antes del estallido revolucionario.",
   "Al caer el gobierno de Madero se incorporó como médico militar a las fuerzas de Julián C. Medina, afines a Francisco Villa. Esa experiencia directa nutrió Los de abajo, que publicó por entregas en el periódico El Paso del Norte, de El Paso, Texas, entre octubre y diciembre de 1915, durante su exilio tras la derrota de villistas y zapatistas. La edición en libro apareció en 1916 y la versión ampliada y definitiva, con nuevos personajes y mejor estructura, en 1920. Siguieron Las moscas (1918) y, más tarde, La luciérnaga (1932), donde ensayó técnicas narrativas modernas.",
   "De regreso en la Ciudad de México continuó ejerciendo la medicina entre los pobres mientras publicaba novelas, ensayos y teatro. Fue miembro fundador del Seminario de Cultura Mexicana y de El Colegio Nacional (1943). Recibió el Premio de Literatura de la Sociedad Arte y Letras de México (1942) y el Premio Nacional de Ciencias y Artes en Lingüística y Literatura (1949). Murió en la Ciudad de México el 1 de marzo de 1952 y sus restos reposan en la Rotonda de las Personas Ilustres del Panteón Civil de Dolores."
  ],
  "obrasCapitales": [
   {
    "titulo": "Mala yerba",
    "anio": 1909,
    "genero": "Novela",
    "descripcion": "Novela de ambiente rural sobre el cacicazgo y la violencia en una hacienda de los Altos de Jalisco, escrita antes de la Revolución."
   },
   {
    "titulo": "Los de abajo",
    "anio": 1915,
    "genero": "Novela",
    "descripcion": "Publicada por entregas en El Paso del Norte (1915), en libro en 1916 y en versión definitiva en 1920. Narra el ascenso y la caída del guerrillero Demetrio Macías y es la obra fundadora de la novela de la Revolución."
   },
   {
    "titulo": "Las moscas",
    "anio": 1918,
    "genero": "Novela",
    "descripcion": "Retrato satírico de los oportunistas que huyen en tren tras la derrota villista."
   },
   {
    "titulo": "La luciérnaga",
    "anio": 1932,
    "genero": "Novela",
    "descripcion": "Novela urbana de técnica experimental sobre la degradación de una familia provinciana en la capital."
   }
  ],
  "legadoPatrimonial": "Los de abajo se convirtió en el modelo de la narrativa de la Revolución y en lectura obligada en las escuelas mexicanas. Azuela representa la mirada crítica del médico que vivió la guerra desde dentro y la contó sin heroísmos.",
  "dominioPublico": false,
  "citas": [
   {
    "texto": "¡Qué hermosa es la revolución, aun en su misma barbarie!",
    "obra": "Los de abajo (1915)",
    "url": "https://hispadoc.es/descarga/articulo/6027246.pdf"
   }
  ],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Azuela_mariano.jpg",
   "licencia": "CC BY-SA 4.0",
   "autorFoto": "Tomjc.55 (según Commons)",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Azuela_mariano.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Mariano_Azuela",
   "https://es.wikipedia.org/wiki/Los_de_abajo_(novela)",
   "https://commons.wikimedia.org/wiki/File:Azuela_mariano.jpg"
  ],
  "notas": "Fechas de Los de abajo: folletín en El Paso del Norte (oct.-dic. 1915), primera edición en libro 1916, versión revisada y hoy canónica 1920; en la ficha se usa 1915 como año de primera aparición. Wikipedia atribuye la edición de 1916 al Fondo de Cultura Económica, dato imposible (el FCE se fundó en 1934), por lo que se omitió la editorial. La cita de Solís se verificó en un artículo académico (Hispadoc) que la toma de la edición de 2004 de la novela. La imagen de Commons está declarada como «obra propia» de 2015 con licencia CC BY-SA 4.0, aunque reproduce un retrato antiguo; conviene revisar su procedencia antes de usarla. Falleció en 1952, por lo que su obra no está en dominio público en México."
 },
 {
  "id": "nezahualcoyotl",
  "nombre": "Nezahualcóyotl Acolmiztli",
  "anios": "1402 – 1472",
  "nacimiento": "28 de abril de 1402 · Texcoco (hoy Estado de México)",
  "fallecimiento": "4 de junio de 1472 · Texcoco",
  "municipioOrigen": "Texcoco, Estado de México",
  "movimiento": "Poesía náhuatl prehispánica (cuícatl)",
  "bloqueCanon": "mexicanos",
  "tituloHonorifico": "El rey poeta de Texcoco",
  "semblanzaSintetica": "Tlatoani de Texcoco entre 1431 y 1472, fue legislador, constructor y uno de los artífices de la Triple Alianza. La tradición le atribuye un corpus de cantos filosóficos en náhuatl conservados en manuscritos coloniales del siglo XVI.",
  "biografiaCompleta": [
   "Nezahualcóyotl («coyote hambriento» o «coyote que ayuna»), llamado también Acolmiztli, nació en Texcoco en 1402, hijo del tlatoani Ixtlilxóchitl I y de Matlalcihuatzin. Las fechas tradicionales de su vida (28 de abril de 1402 y 4 de junio de 1472) proceden de las crónicas coloniales, en especial de su descendiente Fernando de Alva Ixtlilxóchitl. Tras el asesinato de su padre en 1418, a manos de los tepanecas de Azcapotzalco, pasó más de una década en el exilio, protegido en distintas ciudades del Valle de México.",
   "A la muerte de Tezozómoc y tras la guerra contra Azcapotzalco, recuperó el señorío de Texcoco hacia 1428-1431 y, junto con Itzcóatl de Tenochtitlan y Totoquihuatzin de Tlacopan, formó la Triple Alianza que dominó el centro de México. Su gobierno se recuerda por la promulgación de un código de leyes, por la construcción del albarradón que separaba las aguas dulces y saladas del lago de Texcoco, por el acueducto que llevó agua potable desde Chapultepec a Tenochtitlan y por los jardines y baños de Tetzcotzingo. Su palacio albergó una colección de códices y un espacio de reunión para sabios y cantores.",
   "La fama literaria de Nezahualcóyotl descansa en los cantos que le atribuyen dos manuscritos del siglo XVI: los Cantares mexicanos y los Romances de los señores de la Nueva España, este último vinculado a Juan Bautista Pomar, autor de la Relación de Texcoco (1582). Unos treinta poemas sobre la fugacidad de la vida, la flor y el canto y la búsqueda del «Dador de la vida» circulan bajo su nombre. La investigación reciente discute la autoría individual de varios de ellos, pues fueron recogidos por informantes indígenas y frailes décadas después de su muerte."
  ],
  "obrasCapitales": [
   {
    "titulo": "Cantares mexicanos",
    "anio": "s. XVI",
    "genero": "Poesía náhuatl (manuscrito colonial)",
    "descripcion": "Colección de cantos en náhuatl recogida en el siglo XVI; varios de los poemas atribuidos a Nezahualcóyotl proceden de este manuscrito."
   },
   {
    "titulo": "Romances de los señores de la Nueva España",
    "anio": 1582,
    "genero": "Poesía náhuatl (manuscrito colonial)",
    "descripcion": "Manuscrito asociado a Juan Bautista Pomar y a su Relación de Texcoco; conserva cantos atribuidos al señor de Texcoco."
   },
   {
    "titulo": "Relación de Texcoco",
    "anio": 1582,
    "genero": "Crónica (fuente)",
    "descripcion": "Obra de Juan Bautista Pomar, descendiente de Nezahualcóyotl, que describe la vida, el gobierno y los cantos del señorío texcocano."
   },
   {
    "titulo": "Código de leyes de Texcoco",
    "anio": "s. XV",
    "genero": "Legislación",
    "descripcion": "Conjunto de ordenanzas (las llamadas «ochenta leyes») sobre materias civiles, penales, comerciales y de uso de los recursos naturales, descrito por los cronistas coloniales."
   }
  ],
  "legadoPatrimonial": "Símbolo del pensamiento y la poesía del México antiguo, su figura dio nombre a un municipio del Estado de México y su efigie apareció en el billete de cien pesos. Los cantos que se le atribuyen son el punto de partida de la literatura en lengua náhuatl tal como hoy se enseña.",
  "dominioPublico": true,
  "citas": [],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Nezahualcoyotl.jpg",
   "licencia": "Dominio público",
   "autorFoto": "Anónimo, Códice Ixtlilxóchitl (siglo XVI)",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Nezahualcoyotl.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Nezahualc%C3%B3yotl",
   "https://commons.wikimedia.org/wiki/File:Nezahualcoyotl.jpg"
  ],
  "notas": "Las fechas exactas de nacimiento y muerte proceden de la tradición cronística colonial (Alva Ixtlilxóchitl) y deben tomarse como convencionales. Los poemas que se le atribuyen no se conservan en manuscritos de su época: provienen de los Cantares mexicanos y de los Romances de los señores de la Nueva España, compilados en el siglo XVI; la crítica reciente cuestiona la autoría de varios de ellos (incluido el reproducido en el billete de cien pesos). Los textos originales en náhuatl están en dominio público, pero las traducciones modernas al español (Ángel María Garibay, Miguel León-Portilla y otros) tienen derechos de autor vigentes y no deben reproducirse sin permiso; por eso no se incluyen citas. El año de los Cantares mexicanos se indica solo como siglo XVI por no haberse verificado una fecha precisa. En la página de Wikipedia la imagen principal es una estatua moderna; aquí se eligió el retrato del Códice Ixtlilxóchitl, en dominio público."
 },
 {
  "id": "juan-ruiz-de-alarcon",
  "nombre": "Juan Ruiz de Alarcón y Mendoza",
  "anios": "c. 1581 – 1639",
  "nacimiento": "c. 1581 (fecha exacta no documentada) · Taxco o Ciudad de México, Nueva España",
  "fallecimiento": "4 de agosto de 1639 · Madrid",
  "municipioOrigen": "Taxco de Alarcón, Guerrero",
  "movimiento": "Teatro del Siglo de Oro; comedia barroca",
  "bloqueCanon": "mexicanos",
  "tituloHonorifico": "Dramaturgo novohispano del Siglo de Oro",
  "semblanzaSintetica": "Nacido en la Nueva España en una familia vinculada a la minería de Taxco, se formó en leyes en México y Salamanca y se estableció en Madrid, donde fue relator del Consejo de Indias. Sus comedias, reunidas en dos Partes (1628 y 1634), lo convirtieron en el creador de la comedia de carácter en lengua española.",
  "biografiaCompleta": [
   "Juan Ruiz de Alarcón nació hacia 1580 o 1581 en la Nueva España, tercero de al menos cinco hermanos, hijo de Pedro Ruiz de Alarcón y Leonor de Mendoza; la familia residió en Taxco, cuya minería de plata le dio prosperidad, aunque el propio dramaturgo se declaró natural de la Ciudad de México. Estudió con los jesuitas y cursó cánones y leyes en la Real y Pontificia Universidad de México entre 1596 y 1600. Después pasó a Salamanca, donde obtuvo los grados de bachiller en cánones (1600) y en leyes (1602).",
   "Trabajó como abogado en Sevilla entre 1606 y 1608 y regresó a México, donde se licenció en ambos derechos en 1609 y desempeñó cargos judiciales hasta 1613. En 1614 se instaló definitivamente en Madrid. Allí alternó la pretensión de un cargo en la corte con la escritura teatral y sufrió las burlas de contemporáneos como Lope de Vega y Quevedo por su condición de indiano y por su deformidad física. En 1626 obtuvo plaza de relator interino del Real Consejo de Indias, cargo que le dio estabilidad y lo alejó de la escena.",
   "Publicó la Parte primera de sus comedias en Madrid en 1628, con ocho obras, entre ellas Las paredes oyen, y la Parte segunda en Barcelona en 1634, con doce, entre ellas La verdad sospechosa, Los pechos privilegiados, El examen de maridos y Ganar amigos. Frente a la comedia de enredo, construyó personajes de psicología definida y un teatro de intención moral, centrado en la censura de la mentira, la murmuración y la hipocresía. Murió en Madrid el 4 de agosto de 1639."
  ],
  "obrasCapitales": [
   {
    "titulo": "Las paredes oyen",
    "anio": 1628,
    "genero": "Comedia",
    "descripcion": "Incluida en la Parte primera; comedia contra la maledicencia, en la que el galán murmurador pierde el amor de la dama."
   },
   {
    "titulo": "La verdad sospechosa",
    "anio": 1634,
    "genero": "Comedia",
    "descripcion": "Obra maestra sobre don García, mentiroso habitual que acaba víctima de sus propias invenciones; recogida en la Parte segunda."
   },
   {
    "titulo": "Los pechos privilegiados",
    "anio": 1634,
    "genero": "Comedia",
    "descripcion": "Comedia de tema histórico-legendario incluida en la Parte segunda."
   },
   {
    "titulo": "El examen de maridos",
    "anio": 1634,
    "genero": "Comedia",
    "descripcion": "Comedia en la que una dama somete a prueba a sus pretendientes antes de elegir esposo."
   },
   {
    "titulo": "Ganar amigos",
    "anio": 1634,
    "genero": "Comedia",
    "descripcion": "Comedia de intención ética sobre la lealtad y la amistad, publicada en la Parte segunda."
   }
  ],
  "legadoPatrimonial": "Es el primer gran dramaturgo nacido en lo que hoy es México y figura mayor del teatro del Siglo de Oro. Su nombre lo llevan Taxco de Alarcón, el teatro universitario de la UNAM y el Premio Nacional de Dramaturgia de la Universidad de Guadalajara.",
  "dominioPublico": true,
  "citas": [
   {
    "texto": "De aquí, si lo consideras, / conocerás claramente, / que quien en las burlas miente / pierde el crédito en las veras.",
    "obra": "La verdad sospechosa (1634), acto III",
    "url": "https://www.gutenberg.org/ebooks/57590"
   }
  ],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/8/8b/Juan_Ruiz_de_Alarcon.jpg",
   "licencia": "Dominio público",
   "autorFoto": "Retrato anónimo del siglo XVII",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Juan_Ruiz_de_Alarcon.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Juan_Ruiz_de_Alarc%C3%B3n",
   "https://dbe.rah.es/biografias/5415/juan-ruiz-de-alarcon-y-mendoza",
   "https://www.cervantesvirtual.com/portales/juan_ruiz_de_alarcon/autor_biografia/",
   "https://www.gutenberg.org/ebooks/57590"
  ],
  "notas": "Año y lugar de nacimiento en disputa: Wikipedia y la Real Academia de la Historia sitúan el nacimiento hacia 1580-1581 (Taxco o Ciudad de México); la biografía de la Biblioteca Virtual Miguel de Cervantes recoge la hipótesis de una partida de bautizo de Taxco del 30 de diciembre de 1572. Fecha de muerte: Wikipedia y la RAH dan 4 de agosto de 1639; Cervantes Virtual indica 4 de julio de 1639. Se adoptó la versión mayoritaria (4 de agosto). Las fechas de las obras corresponden a su impresión en las Partes de 1628 y 1634, no a su estreno. Las menciones a Taxco en 'municipioOrigen' siguen la tradición más extendida; si el sitio prefiere la declaración del propio autor, úsese Ciudad de México."
 },
 {
  "id": "andres-henestrosa",
  "nombre": "Andrés Henestrosa Morales",
  "anios": "1906 – 2008",
  "nacimiento": "30 de noviembre de 1906 · San Francisco Ixhuatán, Oaxaca",
  "fallecimiento": "10 de enero de 2008 · Ciudad de México",
  "municipioOrigen": "San Francisco Ixhuatán, Oaxaca",
  "movimiento": "Narrativa y ensayo de raíz zapoteca",
  "bloqueCanon": "mexicanos",
  "tituloHonorifico": "Escritor zapoteco, bibliófilo y académico",
  "semblanzaSintetica": "Hablante de zapoteco hasta los quince años, llegó a la Ciudad de México para estudiar y publicó a los veintidós Los hombres que dispersó la danza (1929), recreación de las leyendas del Istmo. Fue senador, académico de la lengua y receptor de la Medalla Belisario Domínguez; vivió ciento un años.",
  "biografiaCompleta": [
   "Andrés Henestrosa nació el 30 de noviembre de 1906 en San Francisco Ixhuatán, en el Istmo de Tehuantepec, Oaxaca. Su lengua materna fue el zapoteco y solo aprendió español al trasladarse, a los quince años, a la Ciudad de México para continuar sus estudios. En 1927, alentado por el filósofo Antonio Caso, comenzó a escribir las narraciones que reunió en Los hombres que dispersó la danza (1929), libro que recoge mitos y leyendas de su pueblo. En 1929 participó activamente en la campaña presidencial de José Vasconcelos.",
   "En 1936 obtuvo una beca de la Fundación Guggenheim, con el apoyo del poeta Langston Hughes, para estudiar la cultura y el alfabeto zapotecos en Estados Unidos. Durante ese viaje, en Nueva Orleans, escribió en 1937 su célebre Retrato de mi madre, publicado en 1940. Dedicó buena parte de su vida al periodismo, la bibliofilia y el ensayo histórico y literario, con obras como Cuatro siglos de literatura mexicana (1946), Los cuatro abuelos (1960) y Los hispanismos en el idioma zapoteco (1964).",
   "Fue elegido miembro de número de la Academia Mexicana de la Lengua el 24 de enero de 1964, ocupó la silla XXIII y fue su bibliotecario entre 1965 y 2000. Ejerció como senador por Oaxaca (1982-1988) y diputado federal (1988-1991). Recibió el Premio Nacional de Periodismo (1983), el Premio Internacional Alfonso Reyes (1991), la Medalla Belisario Domínguez del Senado (1993) y el Premio Nacional de Ciencias y Artes en Lingüística y Literatura (1994). Murió en la Ciudad de México el 10 de enero de 2008, a los ciento un años."
  ],
  "obrasCapitales": [
   {
    "titulo": "Los hombres que dispersó la danza",
    "anio": 1929,
    "genero": "Narrativa (leyendas)",
    "descripcion": "Recreación literaria de los mitos y leyendas zapotecas del Istmo de Tehuantepec; su libro más reeditado."
   },
   {
    "titulo": "Retrato de mi madre",
    "anio": 1940,
    "genero": "Prosa autobiográfica",
    "descripcion": "Breve y celebrada evocación de su madre, escrita en Nueva Orleans en 1937."
   },
   {
    "titulo": "Cuatro siglos de literatura mexicana",
    "anio": 1946,
    "genero": "Ensayo y antología",
    "descripcion": "Panorama de la literatura mexicana desde la Conquista hasta el siglo XX."
   },
   {
    "titulo": "Los cuatro abuelos",
    "anio": 1960,
    "genero": "Ensayo",
    "descripcion": "Reflexión sobre las raíces culturales de México."
   },
   {
    "titulo": "Los hispanismos en el idioma zapoteco",
    "anio": 1964,
    "genero": "Ensayo lingüístico",
    "descripcion": "Discurso de ingreso a la Academia Mexicana de la Lengua sobre la influencia del español en el zapoteco."
   }
  ],
  "legadoPatrimonial": "Llevó la memoria oral zapoteca a la literatura en español y dedicó su vida a la defensa del libro y de las lenguas indígenas. Su biblioteca personal dio origen a la Biblioteca Andrés Henestrosa en la ciudad de Oaxaca.",
  "dominioPublico": false,
  "citas": [],
  "retrato": {
   "url": "",
   "licencia": "",
   "autorFoto": "",
   "paginaCommons": ""
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Andr%C3%A9s_Henestrosa",
   "https://academia.org.mx/academicos-2018/item/andres-henestrosa",
   "https://es.wikipedia.org/wiki/Medalla_Belisario_Dom%C3%ADnguez"
  ],
  "notas": "No se localizó ningún retrato con licencia libre en Wikimedia Commons (la página de Wikipedia en español no tiene imagen y la búsqueda en Commons solo devuelve una fotografía de un acto en la Biblioteca Henestrosa). La Medalla Belisario Domínguez le fue otorgada en 1993 (lista oficial en Wikipedia); en 2003 recibió, de la Cámara de Diputados, la Medalla al Mérito Cívico Eduardo Neri. La mención a la Biblioteca Andrés Henestrosa en Oaxaca procede de resultados de búsqueda y no de una fuente primaria consultada."
 },
 {
  "id": "efrain-bartolome",
  "nombre": "Efraín Bartolomé",
  "anios": "1950 –",
  "nacimiento": "15 de diciembre de 1950 · Ocosingo, Chiapas",
  "fallecimiento": "",
  "municipioOrigen": "Ocosingo, Chiapas",
  "movimiento": "Poesía mexicana contemporánea",
  "bloqueCanon": "mexicanos",
  "tituloHonorifico": "Poeta de la selva Lacandona",
  "semblanzaSintetica": "Poeta y psicoterapeuta nacido en Ocosingo, Chiapas, autor de más de veinte libros de poesía desde Ojo de jaguar (1982). Ha recibido el Premio Nacional de Poesía Aguascalientes (1984), el Carlos Pellicer (1992) y el Jaime Sabines (1996), y su obra se ha traducido a una decena de lenguas.",
  "biografiaCompleta": [
   "Efraín Bartolomé nació el 15 de diciembre de 1950 en Ocosingo, Chiapas, en la entrada de la selva Lacandona, paisaje que atraviesa toda su obra. Estudió psicología en la Universidad Nacional Autónoma de México, donde también ha impartido clases, y desde 1975 ejerce la psicoterapia en consulta privada en la Ciudad de México. Su primer libro, Ojo de jaguar (1982), obtuvo el Premio Ciudad de México y lo situó de inmediato entre las voces nuevas de la poesía mexicana.",
   "Con Música solar ganó en 1984 el Premio Nacional de Poesía Aguascalientes, el más importante del país en su género. Siguieron Cuadernos contra el ángel (1987), Música lunar (1991) y las reuniones de su obra Agua lustral: poesía 1982-1987 (1994) y Oficio: arder. Obra poética 1982-1997 (1999). En 1992 recibió el Premio Nacional de Poesía Carlos Pellicer, en 1993 el Premio Nacional de Literatura Gilberto Owen, en 1996 el Premio Internacional de Poesía Jaime Sabines y en 1998 el Premio Chiapas de Arte.",
   "En enero de 1994, el levantamiento zapatista lo sorprendió en Ocosingo; de aquellas jornadas nació Ocosingo: diario de guerra y algunas voces (1995), testimonio en prosa traducido al inglés. Ha publicado también El ser que somos (2006) y numerosos títulos posteriores; su poesía ha sido vertida al francés, inglés, alemán, italiano, japonés y portugués, entre otras lenguas. Defensor del entorno natural de su región, ha recibido reconocimientos por su activismo ambiental y continúa en activo."
  ],
  "obrasCapitales": [
   {
    "titulo": "Ojo de jaguar",
    "anio": 1982,
    "genero": "Poesía",
    "descripcion": "Primer libro, celebración del paisaje de la selva chiapaneca; Premio Ciudad de México."
   },
   {
    "titulo": "Música solar",
    "anio": 1984,
    "genero": "Poesía",
    "descripcion": "Premio Nacional de Poesía Aguascalientes 1984."
   },
   {
    "titulo": "Cuadernos contra el ángel",
    "anio": 1987,
    "genero": "Poesía",
    "descripcion": "Libro de tono íntimo y reflexivo, continuación de su primera etapa."
   },
   {
    "titulo": "Ocosingo: diario de guerra y algunas voces",
    "anio": 1995,
    "genero": "Testimonio",
    "descripcion": "Diario de los días del alzamiento zapatista de enero de 1994 en su ciudad natal."
   },
   {
    "titulo": "Oficio: arder. Obra poética 1982-1997",
    "anio": 1999,
    "genero": "Poesía reunida",
    "descripcion": "Recopilación de quince años de trabajo poético."
   }
  ],
  "legadoPatrimonial": "Es la voz poética más reconocida de Chiapas después de Jaime Sabines y uno de los grandes cantores de la selva y del río en la poesía mexicana reciente.",
  "dominioPublico": false,
  "citas": [],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/5/52/Efra%C3%ADn_Bartolom%C3%A9_en_Berna%2C_1999.jpg",
   "licencia": "CC BY-SA 4.0",
   "autorFoto": "El tecnomago (Wikimedia Commons)",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Efra%C3%ADn_Bartolom%C3%A9_en_Berna,_1999.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Efra%C3%ADn_Bartolom%C3%A9",
   "https://latinamericanliteraturetoday.org/es/lal_author/efrain-bartolome-es/",
   "https://commons.wikimedia.org/wiki/File:Efra%C3%ADn_Bartolom%C3%A9_en_Berna,_1999.jpg"
  ],
  "notas": "Autor vivo (no se encontró noticia de fallecimiento a la fecha). No se confirmó que haya recibido el Premio Nacional de Ciencias y Artes, por lo que se omite. La fotografía de Commons fue tomada en Berna en 1999 y subida en 2012 por un usuario que la declara obra propia."
 },
 {
  "id": "jorge-ibarguengoitia",
  "nombre": "Jorge Ibargüengoitia Antillón",
  "anios": "1928 – 1983",
  "nacimiento": "22 de enero de 1928 · Guanajuato, Guanajuato",
  "fallecimiento": "27 de noviembre de 1983 · Mejorada del Campo, Madrid",
  "municipioOrigen": "Guanajuato, Guanajuato",
  "movimiento": "Narrativa satírica; Generación de Medio Siglo",
  "bloqueCanon": "mexicanos",
  "tituloHonorifico": "Maestro de la sátira mexicana",
  "semblanzaSintetica": "Narrador, dramaturgo y periodista guanajuatense que desmontó con humor la solemnidad de la historia y la política mexicanas en novelas como Los relámpagos de agosto (1964) y Las muertas (1977). Murió en 1983 en el accidente del vuelo de Avianca que se estrelló cerca de Madrid.",
  "biografiaCompleta": [
   "Jorge Ibargüengoitia nació en la ciudad de Guanajuato el 22 de enero de 1928. Abandonó la carrera de ingeniería para estudiar en la Facultad de Filosofía y Letras de la UNAM (1951-1954), donde se formó en arte dramático con Rodolfo Usigli. Comenzó como autor teatral y recibió becas del Centro Mexicano de Escritores y de las fundaciones Rockefeller, Fairfield y Guggenheim. Su pieza El atentado obtuvo el Premio Casa de las Américas de teatro en 1963.",
   "El desencanto con la escena lo llevó a la narrativa. Los relámpagos de agosto (1964), parodia de las memorias de un general revolucionario, ganó el Premio Casa de las Américas de novela ese mismo año. Siguieron los cuentos de La ley de Herodes (1967), Maten al león (1969), sobre un dictador caribeño, y Estas ruinas que ves (1975), que mereció el Premio Internacional de Novela México. Desde 1969 publicó en Excélsior artículos que lo convirtieron en uno de los columnistas más leídos del país; después colaboró en Proceso y Vuelta.",
   "Las muertas (1977), basada en el caso criminal de las hermanas González Valenzuela, Dos crímenes (1979) y Los pasos de López (1982), relectura irónica de la conspiración de Hidalgo, completan su ciclo novelesco, ambientado en la imaginaria ciudad de Cuévano, trasunto de Guanajuato. Casado con la pintora Joy Laville, se instaló en París a finales de los años setenta. Murió el 27 de noviembre de 1983, junto con otros escritores latinoamericanos, al estrellarse en Mejorada del Campo el vuelo 011 de Avianca que se dirigía a Bogotá. Su archivo se conserva en la Universidad de Princeton."
  ],
  "obrasCapitales": [
   {
    "titulo": "Los relámpagos de agosto",
    "anio": 1964,
    "genero": "Novela",
    "descripcion": "Memorias apócrifas de un general revolucionario; Premio Casa de las Américas 1964."
   },
   {
    "titulo": "La ley de Herodes",
    "anio": 1967,
    "genero": "Cuento",
    "descripcion": "Relatos de corte autobiográfico y humorístico."
   },
   {
    "titulo": "Estas ruinas que ves",
    "anio": 1975,
    "genero": "Novela",
    "descripcion": "Comedia provinciana ambientada en Cuévano; Premio Internacional de Novela México."
   },
   {
    "titulo": "Las muertas",
    "anio": 1977,
    "genero": "Novela",
    "descripcion": "Reconstrucción novelada del caso de las «Poquianchis», con técnica de reportaje."
   },
   {
    "titulo": "Los pasos de López",
    "anio": 1982,
    "genero": "Novela",
    "descripcion": "Versión satírica de la conspiración de 1810 y del cura Hidalgo, su última novela."
   }
  ],
  "legadoPatrimonial": "Liberó a la literatura mexicana del tono solemne y creó una forma de humor crítico que sigue vigente. Guanajuato lo recuerda con el Centro Cultural que lleva su nombre y sus novelas se reeditan de manera constante.",
  "dominioPublico": false,
  "citas": [],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Jorge_Ibarg%C3%BCengoitia.jpg",
   "licencia": "CC BY-SA 4.0",
   "autorFoto": "Archivo Joy Laville / CNL-INBA (fotografía de 1965, San Miguel de Allende)",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Jorge_Ibarg%C3%BCengoitia.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Jorge_Ibarg%C3%BCengoitia",
   "https://www.elem.mx/autor/datos/534",
   "https://commons.wikimedia.org/wiki/File:Jorge_Ibarg%C3%BCengoitia.jpg"
  ],
  "notas": "El año del Premio Internacional de Novela México por Estas ruinas que ves aparece como 1974 en Wikipedia y como 1975 en otras reseñas; la novela se publicó en 1975. La mención al Centro Cultural que lleva su nombre no fue verificada en fuente primaria. Las menciones a la ingeniería abandonada y a Joy Laville son datos de amplia circulación consignados en Wikipedia."
 },
 {
  "id": "fernando-del-paso",
  "nombre": "Fernando del Paso Morante",
  "anios": "1935 – 2018",
  "nacimiento": "1 de abril de 1935 · Ciudad de México",
  "fallecimiento": "14 de noviembre de 2018 · Guadalajara, Jalisco",
  "municipioOrigen": "Ciudad de México",
  "movimiento": "Novela histórica y experimental; Generación de Medio Siglo",
  "bloqueCanon": "mexicanos",
  "tituloHonorifico": "Autor de Noticias del Imperio y Premio Cervantes",
  "semblanzaSintetica": "Novelista, poeta, pintor y diplomático, autor de tres novelas monumentales: José Trigo (1966), Palinuro de México (1977) y Noticias del Imperio (1987). Recibió el Premio Rómulo Gallegos (1982), el Premio FIL de Literatura (2007) y el Premio Cervantes (2015).",
  "biografiaCompleta": [
   "Fernando del Paso nació en la Ciudad de México el 1 de abril de 1935. Estudió economía y medicina sin concluir y trabajó durante años como redactor publicitario, oficio que compaginó con la escritura y la pintura. Su primera novela, José Trigo (1966), ambientada entre los ferrocarrileros de Nonoalco-Tlatelolco y de estructura compleja, con influencias de James Joyce, obtuvo el Premio Xavier Villaurrutia ese mismo año y anunció una obra de ambición poco común en la narrativa mexicana.",
   "Entre 1971 y 1985 vivió en Londres, donde trabajó como productor y locutor en la BBC. Allí concluyó Palinuro de México (1977), novela desbordante sobre un estudiante de medicina en los días del movimiento de 1968, que ganó el Premio Rómulo Gallegos en 1982. Trasladado a París, fue consejero cultural de la embajada mexicana (1985-1988) y cónsul general (1989-1992). En 1987 publicó Noticias del Imperio, recreación del Segundo Imperio a través del monólogo de la emperatriz Carlota, considerada por muchos críticos la mejor novela mexicana de las últimas décadas.",
   "A su regreso a México, en 1992, se instaló en Guadalajara para dirigir la Biblioteca Iberoamericana Octavio Paz de la Universidad de Guadalajara. Recibió el Premio Nacional de Ciencias y Artes (1991), ingresó en El Colegio Nacional (1996) y obtuvo el Premio FIL de Literatura en Lenguas Romances (2007) y el Premio Cervantes (2015). Publicó además la novela policiaca Linda 67 (1995), poesía, ensayos y teatro, y expuso su obra plástica en varios países. Murió en Guadalajara el 14 de noviembre de 2018."
  ],
  "obrasCapitales": [
   {
    "titulo": "José Trigo",
    "anio": 1966,
    "genero": "Novela",
    "descripcion": "Novela experimental sobre el mundo ferrocarrilero de Nonoalco; Premio Xavier Villaurrutia 1966."
   },
   {
    "titulo": "Palinuro de México",
    "anio": 1977,
    "genero": "Novela",
    "descripcion": "Vasta novela sobre un estudiante de medicina y el 68 mexicano; Premio Rómulo Gallegos 1982."
   },
   {
    "titulo": "Noticias del Imperio",
    "anio": 1987,
    "genero": "Novela histórica",
    "descripcion": "Reconstrucción del Imperio de Maximiliano y Carlota, alternando el monólogo de la emperatriz con capítulos documentales."
   },
   {
    "titulo": "Linda 67. Historia de un crimen",
    "anio": 1995,
    "genero": "Novela policiaca",
    "descripcion": "Incursión en el género negro ambientada en San Francisco."
   }
  ],
  "legadoPatrimonial": "Sus tres grandes novelas forman una de las cumbres de la narrativa en español del siglo XX. Es uno de los seis escritores mexicanos distinguidos con el Premio Cervantes.",
  "dominioPublico": false,
  "citas": [],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Fernando_del_Paso.jpg",
   "licencia": "Dominio público (Presidencia de la República, 2004)",
   "autorFoto": "Gustavo Benítez / Presidencia de la República",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Fernando_del_Paso.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Fernando_del_Paso",
   "https://www.fil.com.mx/ingles/premiofil/2007.asp",
   "https://commons.wikimedia.org/wiki/File:Fernando_del_Paso.jpg"
  ],
  "notas": "Los estudios inconclusos de economía y medicina y la ambientación de Linda 67 en San Francisco son datos de amplia circulación que no se verificaron en la fuente consultada; pueden omitirse si se desea mayor rigor. El dato de ser uno de seis mexicanos con el Premio Cervantes (Paz, Fuentes, Pitol, Pacheco, Elena Poniatowska y Del Paso) procede del conocimiento general sobre la lista de premiados."
 },
 {
  "id": "guadalupe-duenas",
  "nombre": "Guadalupe Dueñas",
  "anios": "1910 – 2002",
  "nacimiento": "19 de octubre de 1910 · Guadalajara, Jalisco",
  "fallecimiento": "13 de enero de 2002 · Ciudad de México",
  "municipioOrigen": "Guadalajara, Jalisco",
  "movimiento": "Cuento fantástico y de lo cotidiano siniestro; narrativa de medio siglo",
  "bloqueCanon": "mexicanos",
  "tituloHonorifico": "Cuentista de lo extraño cotidiano",
  "semblanzaSintetica": "Cuentista y ensayista jalisciense, autora de Tiene la noche un árbol (1958), uno de los libros de relatos más singulares de la literatura mexicana del siglo XX. Su obra, breve y de atmósfera inquietante, fue rescatada con la publicación de sus Obras completas en 2017.",
  "biografiaCompleta": [
   "Guadalupe Dueñas nació en Guadalajara, Jalisco, el 19 de octubre de 1910, aunque ella nunca hizo pública su edad y los investigadores han propuesto fechas entre 1907 y 1920. Hija de Miguel Dueñas Padilla y Guadalupe de la Madrid García, emparentada con el futuro presidente Miguel de la Madrid, pasó la infancia como interna en colegios teresianos de la Ciudad de México y Morelia, experiencia que dejó huella en el tono claustral de muchos de sus relatos. Estudió letras en la UNAM y fue alumna de Emma Godoy.",
   "Su primer libro, Las ratas y otros cuentos, apareció en 1954. Con Tiene la noche un árbol (1958) obtuvo el Premio José María Vigil y el reconocimiento de la crítica: son relatos breves en los que lo doméstico se vuelve perturbador. Fue becaria del Centro Mexicano de Escritores en los años sesenta, condujo talleres literarios y trabajó como guionista y adaptadora de telenovelas para la televisión, además de colaborar en la supervisión cinematográfica y en proyectos teatrales del Instituto Mexicano del Seguro Social.",
   "Publicó después No moriré del todo (1976), las prosas de Imaginaciones (1977) y Antes del silencio (1991). Al margen de los grupos literarios, su obra quedó durante décadas en un relativo olvido hasta que nuevas ediciones y estudios la devolvieron al canon; en 2017 aparecieron sus Obras completas. Murió en la Ciudad de México en enero de 2002."
  ],
  "obrasCapitales": [
   {
    "titulo": "Las ratas y otros cuentos",
    "anio": 1954,
    "genero": "Cuento",
    "descripcion": "Primer libro, edición de corta tirada que anticipa su universo de lo cotidiano inquietante."
   },
   {
    "titulo": "Tiene la noche un árbol",
    "anio": 1958,
    "genero": "Cuento",
    "descripcion": "Su libro mayor: relatos breves de infancia, encierro y muerte; Premio José María Vigil."
   },
   {
    "titulo": "No moriré del todo",
    "anio": 1976,
    "genero": "Cuento",
    "descripcion": "Segunda colección de relatos, de tono irónico y fantástico."
   },
   {
    "titulo": "Imaginaciones",
    "anio": 1977,
    "genero": "Prosa breve",
    "descripcion": "Textos breves entre el ensayo y la ficción."
   },
   {
    "titulo": "Antes del silencio",
    "anio": 1991,
    "genero": "Cuento y prosa",
    "descripcion": "Último libro publicado en vida."
   }
  ],
  "legadoPatrimonial": "Está considerada una de las grandes cuentistas mexicanas del siglo XX y precursora de la narrativa de lo insólito escrita por mujeres en México.",
  "dominioPublico": false,
  "citas": [],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Guadalupe_Due%C3%B1as%2C_en_la_contraportada_de_No_morir%C3%A9_del_todo.jpg",
   "licencia": "CC BY-SA 3.0",
   "autorFoto": "CNL-INBA (Coordinación Nacional de Literatura)",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Guadalupe_Due%C3%B1as,_en_la_contraportada_de_No_morir%C3%A9_del_todo.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Guadalupe_Due%C3%B1as",
   "https://commons.wikimedia.org/wiki/File:Guadalupe_Due%C3%B1as,_en_la_contraportada_de_No_morir%C3%A9_del_todo.jpg",
   "https://www.te.gob.mx/fil/front/ponentes/select/250"
  ],
  "notas": "Fecha de nacimiento en disputa: Wikipedia da 19 de octubre de 1910 y advierte estimaciones entre 1907 y 1920; la ficha de Commons (CNL-INBA) indica 1920 y un artículo de Excélsior la fecha en 1907. Fecha de muerte: Wikipedia señala 13 de enero de 2002; una ficha del Tribunal Electoral (te.gob.mx) indica 10 de enero de 2002. El Premio José María Vigil (1959) y la editorial de las Obras completas (2017) proceden de resultados de búsqueda y no se verificaron en fuente primaria."
 },
 {
  "id": "juan-banuelos",
  "nombre": "Juan Bañuelos",
  "anios": "1932 – 2017",
  "nacimiento": "6 de octubre de 1932 · Tuxtla Gutiérrez, Chiapas",
  "fallecimiento": "29 de marzo de 2017 · Ciudad de México",
  "municipioOrigen": "Tuxtla Gutiérrez, Chiapas",
  "movimiento": "La Espiga Amotinada; poesía social",
  "bloqueCanon": "mexicanos",
  "tituloHonorifico": "Poeta de La Espiga Amotinada y voz de los pueblos indígenas",
  "semblanzaSintetica": "Poeta chiapaneco, integrante del grupo La Espiga Amotinada (1960), ganó el Premio Nacional de Poesía Aguascalientes en 1968 con Espejo humeante. Comprometido con la causa indígena, formó parte de la Comisión Nacional de Intermediación en el conflicto de Chiapas en 1994.",
  "biografiaCompleta": [
   "Juan Bañuelos nació en Tuxtla Gutiérrez, Chiapas, el 6 de octubre de 1932. Estudió en la UNAM en las facultades de Derecho, de Filosofía y Letras y de Ciencias Políticas y Sociales, y fue cofundador del Ateneo de Chiapas. En 1960 publicó Puertas del mundo dentro del volumen colectivo La espiga amotinada, junto con Jaime Labastida, Jaime Augusto Shelley, Óscar Oliva y Eraclio Zepeda; el grupo, de clara vocación social, volvió a reunirse en Ocupación de la palabra (1965), donde apareció su libro Escribo en las paredes.",
   "Con Espejo humeante obtuvo en 1968 el Premio Nacional de Poesía Aguascalientes. Siguieron No consta en actas (1971), libro marcado por la represión de 1968, Destino arbitrario (1982) y las antologías Poesía de Juan Bañuelos (1988) y Donde muere la lluvia (1992). Su poesía, de fuerte raíz chiapaneca y vocación de denuncia, defendió los derechos de los pueblos indígenas, y una selección de su obra fue difundida por la BBC en ocho lenguas europeas.",
   "En 1994, tras el levantamiento zapatista, integró la Comisión Nacional de Intermediación (CONAI) que facilitó el diálogo entre el gobierno y el EZLN. Recibió el Premio Bellas Artes de Poesía Carlos Pellicer (2001) por El traje que vestí mañana, el Premio Xavier Villaurrutia y el Premio de Poesía José Lezama Lima de Casa de las Américas (2004) por A paso de hierba. Su último libro fue Vivo, eso sucede (2012). Dirigió talleres de poesía durante décadas y murió en la Ciudad de México a finales de marzo de 2017."
  ],
  "obrasCapitales": [
   {
    "titulo": "Puertas del mundo",
    "anio": 1960,
    "genero": "Poesía",
    "descripcion": "Primer libro, incluido en el volumen colectivo La espiga amotinada."
   },
   {
    "titulo": "Escribo en las paredes",
    "anio": 1965,
    "genero": "Poesía",
    "descripcion": "Publicado en Ocupación de la palabra, segunda entrega del grupo."
   },
   {
    "titulo": "Espejo humeante",
    "anio": 1968,
    "genero": "Poesía",
    "descripcion": "Premio Nacional de Poesía Aguascalientes 1968; su libro más reconocido."
   },
   {
    "titulo": "No consta en actas",
    "anio": 1971,
    "genero": "Poesía",
    "descripcion": "Poemas de denuncia nacidos de la represión de 1968."
   },
   {
    "titulo": "Vivo, eso sucede",
    "anio": 2012,
    "genero": "Poesía",
    "descripcion": "Último libro publicado en vida."
   }
  ],
  "legadoPatrimonial": "Referente de la poesía social mexicana de la segunda mitad del siglo XX y maestro de varias generaciones de poetas a través de sus talleres.",
  "dominioPublico": false,
  "citas": [],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Juan_Ba%C3%B1uelos_-_FILZ.jpg",
   "licencia": "CC BY-SA 2.0",
   "autorFoto": "Octavio Nava / Secretaría de Cultura de la Ciudad de México",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Juan_Ba%C3%B1uelos_-_FILZ.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Juan_Ba%C3%B1uelos",
   "https://www.elfinanciero.com.mx/after-office/fallece-el-poeta-juan-banuelos/",
   "https://commons.wikimedia.org/wiki/File:Juan_Ba%C3%B1uelos_-_FILZ.jpg"
  ],
  "notas": "Fecha de muerte: Wikipedia indica 29 de marzo de 2017; El Financiero informó el fallecimiento la tarde del 30 de marzo; La Jornada dio su edad como 86 años, incompatible con el nacimiento en 1932 (84 años). Año del Premio Xavier Villaurrutia: Wikipedia lo sitúa en 2002 por A paso de hierba; no se pudo confirmar en fuente primaria, por lo que se omite el año. Fechas de obras con discrepancia: Espejo humeante (1968 en Wikipedia, 1969 en El Financiero) y No consta en actas (1971 en El Financiero, 1978 en Wikipedia). No se confirmó el Premio Nacional de Ciencias y Artes."
 },
 {
  "id": "antonio-mediz-bolio",
  "nombre": "Antonio Mediz Bolio Cantarell",
  "anios": "1884 – 1957",
  "nacimiento": "13 de octubre de 1884 · Mérida, Yucatán",
  "fallecimiento": "15 de septiembre de 1957 · Ciudad de México",
  "municipioOrigen": "Mérida, Yucatán",
  "movimiento": "Mayanismo literario; modernismo yucateco",
  "bloqueCanon": "mexicanos",
  "tituloHonorifico": "Poeta de la tierra del faisán y del venado",
  "semblanzaSintetica": "Abogado, diplomático y escritor yucateco, hablante de maya, autor de La tierra del faisán y del venado (1922) y traductor del Libro de Chilam Balam de Chumayel (1930). Fue senador por Yucatán y miembro de la Academia Mexicana de la Lengua.",
  "biografiaCompleta": [
   "Antonio Mediz Bolio nació en Mérida, Yucatán, el 13 de octubre de 1884. Publicó su primer libro de versos, Evocaciones, en 1903, y en 1907 se recibió de abogado con una tesis sobre el derecho de huelga. Desde joven cultivó la poesía, el teatro y el periodismo, y aprendió la lengua maya, que llegó a dominar. Ingresó en el servicio exterior, en el que fue primer secretario de legación en España, donde coincidió con Alfonso Reyes, y en Suecia, Argentina y Colombia, y más tarde ministro en Costa Rica y Nicaragua.",
   "Durante su estancia en el extranjero escribió La tierra del faisán y del venado (1922), libro de prosa poética en el que recrea mitos y leyendas mayas con un lenguaje inspirado en la cadencia de esa lengua; es su obra más leída. En 1930 publicó en San José de Costa Rica su traducción del Libro de Chilam Balam de Chumayel, el principal texto profético y sagrado de los mayas yucatecos, que la UNAM reeditó en 1941. Fue diputado federal (1928-1930) y, entre otros trabajos, redactó argumentos y guiones para el cine.",
   "Impartió la cátedra de literatura maya en la Facultad de Filosofía y Letras de la UNAM y publicó Introducción al estudio de la lengua maya (1943) e Interinfluencia de la lengua maya con el español de Yucatán (1951). Ingresó en la Academia Mexicana de la Lengua el 23 de mayo de 1951, en la silla III, y la Universidad de Yucatán le otorgó el doctorado honoris causa. Fue senador por Yucatán desde 1952 hasta su muerte, ocurrida en la Ciudad de México el 15 de septiembre de 1957. Un año antes había reunido sus ensayos en A la sombra de mi ceiba."
  ],
  "obrasCapitales": [
   {
    "titulo": "Evocaciones",
    "anio": 1903,
    "genero": "Poesía",
    "descripcion": "Primer libro de versos, de filiación modernista."
   },
   {
    "titulo": "La tierra del faisán y del venado",
    "anio": 1922,
    "genero": "Prosa poética",
    "descripcion": "Recreación de leyendas y mitos mayas en una prosa que imita el ritmo de la lengua maya; su obra maestra."
   },
   {
    "titulo": "Libro de Chilam Balam de Chumayel",
    "anio": 1930,
    "genero": "Traducción",
    "descripcion": "Versión al español del texto maya, publicada en San José de Costa Rica y reeditada por la UNAM en 1941."
   },
   {
    "titulo": "Introducción al estudio de la lengua maya",
    "anio": 1943,
    "genero": "Ensayo lingüístico",
    "descripcion": "Estudio sobre la lengua maya destinado a la enseñanza."
   },
   {
    "titulo": "A la sombra de mi ceiba",
    "anio": 1956,
    "genero": "Ensayo",
    "descripcion": "Reunión de ensayos y prosas sobre Yucatán publicada un año antes de su muerte."
   }
  ],
  "legadoPatrimonial": "Su versión del Chilam Balam y La tierra del faisán y del venado acercaron la tradición maya al público de habla española y fundaron el mayanismo literario en Yucatán.",
  "dominioPublico": false,
  "citas": [],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/7/70/Busto_de_Antonio_Mediz_Bolio%2C_M%C3%A9rida%2C_Yucat%C3%A1n_%2801a%29.jpg",
   "licencia": "CC0 1.0 (dominio público)",
   "autorFoto": "Inri (Wikimedia Commons)",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Busto_de_Antonio_Mediz_Bolio,_M%C3%A9rida,_Yucat%C3%A1n_(01a).jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Antonio_Mediz_Bolio",
   "https://academia.org.mx/academicos-2018/item/antonio-mediz-bolio",
   "https://commons.wikimedia.org/wiki/File:Busto_de_Antonio_Mediz_Bolio,_M%C3%A9rida,_Yucat%C3%A1n_(01a).jpg"
  ],
  "notas": "No se localizó en Commons una fotografía libre del autor; la imagen disponible es la de su busto en la avenida Campestre de Mérida (CC0). Falleció en 1957, por lo que su obra no está en dominio público en México. Wikipedia lo llama embajador en Costa Rica y la Academia menciona misiones en Costa Rica y Nicaragua; se usó el término genérico «ministro»."
 },
 {
  "id": "laura-esquivel",
  "nombre": "Laura Beatriz Esquivel Valdés",
  "anios": "1950 –",
  "nacimiento": "30 de septiembre de 1950 · Ciudad de México",
  "fallecimiento": "",
  "municipioOrigen": "Ciudad de México",
  "movimiento": "Narrativa contemporánea; realismo mágico",
  "bloqueCanon": "mexicanos",
  "tituloHonorifico": "Autora de Como agua para chocolate",
  "semblanzaSintetica": "Maestra, guionista y novelista, alcanzó fama internacional con Como agua para chocolate (1989), novela traducida a decenas de lenguas y llevada al cine en 1992 por Alfonso Arau. Fue diputada federal entre 2015 y 2018.",
  "biografiaCompleta": [
   "Laura Esquivel nació en la Ciudad de México el 30 de septiembre de 1950. Se formó como maestra de educación preescolar y, en los años setenta, escribió y dirigió obras de teatro infantil y programas de televisión para niños. Estuvo casada con el actor y director Alfonso Arau entre 1975 y 1995, y con él se inició en el cine: su guion de Chido Guan, el Tacos de Oro fue nominado al premio Ariel en 1985.",
   "En 1989 publicó Como agua para chocolate, novela de entregas mensuales en la que cada capítulo se abre con una receta; la historia de Tita, Pedro y la cocina de la hacienda De la Garza se convirtió en un éxito mundial. La versión cinematográfica, dirigida por Arau en 1992 con guion de la propia autora, obtuvo diez premios Ariel. En 1994 la novela recibió el premio ABBY de los libreros de Estados Unidos, otorgado por primera vez a una autora extranjera.",
   "Publicó después La ley del amor (1995), novela acompañada de un disco, el libro de ensayos y recetas Íntimas suculencias (1998), Tan veloz como el deseo (2001), inspirada en la figura de su padre, y Malinche (2006), sobre la intérprete de Cortés. En 2016 y 2017 cerró la trilogía de Como agua para chocolate con El diario de Tita y Mi negro pasado. Fue diputada federal por Morena en la LXIII Legislatura (2015-2018), donde promovió temas de cultura y alimentación."
  ],
  "obrasCapitales": [
   {
    "titulo": "Como agua para chocolate",
    "anio": 1989,
    "genero": "Novela",
    "descripcion": "Novela de amor y cocina en la Revolución mexicana, traducida a más de treinta lenguas y adaptada al cine en 1992."
   },
   {
    "titulo": "La ley del amor",
    "anio": 1995,
    "genero": "Novela",
    "descripcion": "Novela futurista que combina texto, ilustraciones y música."
   },
   {
    "titulo": "Tan veloz como el deseo",
    "anio": 2001,
    "genero": "Novela",
    "descripcion": "Historia de un telegrafista inspirada en el padre de la autora."
   },
   {
    "titulo": "Malinche",
    "anio": 2006,
    "genero": "Novela histórica",
    "descripcion": "Recreación de la vida de Malinalli, intérprete de Hernán Cortés."
   },
   {
    "titulo": "El diario de Tita",
    "anio": 2016,
    "genero": "Novela",
    "descripcion": "Segunda parte de Como agua para chocolate, seguida por Mi negro pasado (2017)."
   }
  ],
  "legadoPatrimonial": "Como agua para chocolate es una de las novelas mexicanas más leídas en el mundo y abrió un espacio propio a la narrativa que une cocina, memoria femenina y realismo mágico.",
  "dominioPublico": false,
  "citas": [],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/7/74/Laura_Esquivel_October_2013_%282%29.jpg",
   "licencia": "CC BY-SA 2.0",
   "autorFoto": "Abril Cabrera / Secretaría de Cultura de la Ciudad de México",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Laura_Esquivel_October_2013_(2).jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Laura_Esquivel_(escritora)",
   "https://commons.wikimedia.org/wiki/File:Laura_Esquivel_October_2013_(2).jpg"
  ],
  "notas": "Autora viva. Atención: en Wikimedia Commons la categoría «Laura Esquivel» y la mayoría de los archivos con ese nombre corresponden a la actriz argentina homónima (nacida en 1994); la fotografía elegida fue verificada como la de la escritora mexicana (charla en la XIII Feria Internacional del Libro del Zócalo, 2013). La cifra de más de treinta lenguas de traducción es un dato de amplia circulación no verificado en fuente primaria; puede sustituirse por «decenas de lenguas». No se verificó el nombre de la hacienda ni el detalle del disco de La ley del amor en fuente primaria."
 },
 {
  "id": "alfonso-reyes",
  "nombre": "Alfonso Reyes Ochoa",
  "anios": "1889 – 1959",
  "nacimiento": "17 de mayo de 1889 · Monterrey, Nuevo León",
  "fallecimiento": "27 de diciembre de 1959 · Ciudad de México",
  "municipioOrigen": "Monterrey, Nuevo León",
  "movimiento": "Ateneo de la Juventud",
  "bloqueCanon": "mexicanos",
  "tituloHonorifico": "Humanista universal y fundador de instituciones",
  "semblanzaSintetica": "Ensayista, poeta, narrador, traductor y diplomático nacido en Monterrey en 1889. Miembro fundador del Ateneo de la Juventud, presidió El Colegio de México y dirigió la Academia Mexicana de la Lengua. Su obra abarca el mundo clásico, el Siglo de Oro español y la teoría literaria.",
  "biografiaCompleta": [
   "Alfonso Reyes nació en Monterrey, Nuevo León, el 17 de mayo de 1889. Estudió en la Ciudad de México, donde en 1909 participó en la fundación del Ateneo de la Juventud junto a José Vasconcelos, Pedro Henríquez Ureña y Antonio Caso. Su primer libro, Cuestiones estéticas (1911), ya contenía los temas que ocuparían su vida intelectual: la cultura clásica, la literatura española del Siglo de Oro, el simbolismo francés y la obra de Goethe. En 1912 fue secretario de la Escuela Nacional de Altos Estudios.",
   "Pasó largos años en Europa y América del Sur. En Madrid escribió Visión de Anáhuac (1917) y Cartones de Madrid (1917), y preparó sus estudios sobre Góngora, reunidos en Cuestiones gongorinas (1927). Como diplomático representó a México en Francia, en Argentina (1927-1929) y en Brasil (1930-1936). Su poema dramático Ifigenia cruel y sus ensayos de teoría literaria, entre ellos El deslinde, consolidaron su prestigio en todo el ámbito hispánico.",
   "De regreso en México dirigió la Casa de España, que se transformó en El Colegio de México, institución que presidió entre 1940 y 1958. Fue miembro de El Colegio Nacional y dirigió la Academia Mexicana de la Lengua entre 1957 y 1959. Recibió el Premio Nacional de Ciencias y Artes en el área de Literatura y Lingüística. Murió en la Ciudad de México el 27 de diciembre de 1959, víctima de una afección cardiaca. Su biblioteca personal se conserva en la Capilla Alfonsina."
  ],
  "obrasCapitales": [
   {
    "titulo": "Cuestiones estéticas",
    "anio": 1911,
    "genero": "Ensayo",
    "descripcion": "Primer libro del autor, publicado en París. Reúne estudios sobre el mundo clásico, el Siglo de Oro, el simbolismo francés y Goethe."
   },
   {
    "titulo": "Visión de Anáhuac (1519)",
    "anio": 1917,
    "genero": "Ensayo",
    "descripcion": "Evocación en prosa del Valle de México tal como lo vieron los conquistadores. Uno de los textos más citados de la prosa mexicana."
   },
   {
    "titulo": "Cuestiones gongorinas",
    "anio": 1927,
    "genero": "Crítica literaria",
    "descripcion": "Estudios sobre Luis de Góngora que anticiparon la revaloración del poeta cordobés por la generación del 27 en España."
   },
   {
    "titulo": "Ifigenia cruel",
    "anio": 1924,
    "genero": "Poema dramático",
    "descripcion": "Reescritura del mito griego en la que Ifigenia renuncia a la memoria y al destino familiar. Pieza central de su obra poética."
   },
   {
    "titulo": "El deslinde",
    "anio": 1944,
    "genero": "Teoría literaria",
    "descripcion": "Tratado que busca delimitar la literatura frente a la historia, la ciencia y la filosofía. Cumbre de su reflexión teórica."
   }
  ],
  "legadoPatrimonial": "Su biblioteca y archivo se conservan en la Capilla Alfonsina de la Ciudad de México. Como presidente de El Colegio de México y director de la Academia Mexicana de la Lengua dejó una impronta institucional que perdura.",
  "dominioPublico": false,
  "citas": [],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/4/41/Alfonsoreyes1924.jpg",
   "licencia": "CC BY-SA 4.0",
   "autorFoto": "Archivo Casasola (Mediateca INAH)",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Alfonsoreyes1924.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Alfonso_Reyes_Ochoa",
   "http://www.elem.mx/autor/datos/914",
   "https://commons.wikimedia.org/wiki/File:Alfonsoreyes1924.jpg"
  ],
  "notas": "Wikipedia fecha Ifigenia cruel en 1923; las ediciones habituales la datan en 1924 (Madrid). El año de El deslinde (1944) procede de las ediciones del FCE y no pudo contrastarse en elem.mx. El año del Premio Nacional no aparece en las fuentes consultadas, por lo que se omite."
 },
 {
  "id": "xavier-villaurrutia",
  "nombre": "Xavier Villaurrutia González",
  "anios": "1903 – 1950",
  "nacimiento": "27 de marzo de 1903 · Ciudad de México",
  "fallecimiento": "25 de diciembre de 1950 · Ciudad de México",
  "municipioOrigen": "Ciudad de México",
  "movimiento": "Contemporáneos",
  "bloqueCanon": "mexicanos",
  "tituloHonorifico": "Poeta de los nocturnos y renovador del teatro",
  "semblanzaSintetica": "Poeta, dramaturgo, crítico y traductor nacido en la Ciudad de México en 1903. Figura central del grupo Contemporáneos, dirigió con Salvador Novo las revistas Ulises y Contemporáneos. Su libro Nostalgia de la muerte es una de las cumbres de la poesía mexicana del siglo XX.",
  "biografiaCompleta": [
   "Xavier Villaurrutia nació en la Ciudad de México el 27 de marzo de 1903. Formó parte del grupo Contemporáneos, junto con Salvador Novo, Jaime Torres Bodet, Gilberto Owen y Jorge Cuesta, que renovó la literatura mexicana en las décadas de 1920 y 1930. Con Novo fundó y dirigió las revistas Ulises (1927-1928) y Contemporáneos (1928-1931), y participó en el teatro experimental de Ulises. Su primer libro de poemas, Reflejos, apareció en 1926, y en 1928 publicó la novela breve Dama de corazones.",
   "En 1935 y 1936 estudió arte dramático en la Universidad de Yale con una beca de la Fundación Rockefeller. A su regreso impulsó el teatro mexicano como autor, director y jefe de la sección de teatro del Departamento de Bellas Artes. Escribió piezas como La hiedra (1941), los Autos profanos (1943) e Invitación a la muerte (1944). Fue también profesor en la UNAM, crítico de cine y literatura, y traductor de Gide, Blake y Chéjov, entre otros.",
   "Su obra poética culmina en Nostalgia de la muerte (Buenos Aires, 1938; edición ampliada en 1946), donde reúne sus célebres nocturnos, y en Canto a la primavera y otros poemas (1948), premiado en las Fiestas de Primavera. Fue maestro de Octavio Paz. Murió en la Ciudad de México el 25 de diciembre de 1950, a los 47 años. En 1955 se instituyó en su memoria el Premio Xavier Villaurrutia, que otorgan escritores a escritores; su obra se recogió en el volumen Obras (FCE, 1953)."
  ],
  "obrasCapitales": [
   {
    "titulo": "Reflejos",
    "anio": 1926,
    "genero": "Poesía",
    "descripcion": "Primer poemario, de tono visual y contenido, que anuncia la precisión formal del autor."
   },
   {
    "titulo": "Dama de corazones",
    "anio": 1928,
    "genero": "Novela breve",
    "descripcion": "Relato de corte vanguardista, de atmósfera onírica y monólogo interior."
   },
   {
    "titulo": "Nostalgia de la muerte",
    "anio": 1938,
    "genero": "Poesía",
    "descripcion": "Reúne los nocturnos, poemas sobre el insomnio, el deseo y la muerte. Edición ampliada en 1946."
   },
   {
    "titulo": "Invitación a la muerte",
    "anio": 1944,
    "genero": "Teatro",
    "descripcion": "Drama que reelabora el Hamlet de Shakespeare en un ambiente mexicano contemporáneo."
   },
   {
    "titulo": "Canto a la primavera y otros poemas",
    "anio": 1948,
    "genero": "Poesía",
    "descripcion": "Último libro publicado en vida, premiado en el concurso de las Fiestas de Primavera de 1948."
   }
  ],
  "legadoPatrimonial": "El Premio Xavier Villaurrutia, creado en 1955, es uno de los reconocimientos literarios más prestigiosos de México. Su obra reunida fue publicada por el Fondo de Cultura Económica en 1953.",
  "dominioPublico": false,
  "citas": [],
  "retrato": {
   "url": "",
   "licencia": "",
   "autorFoto": "",
   "paginaCommons": ""
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Xavier_Villaurrutia",
   "http://www.elem.mx/autor/datos/2020",
   "https://commons.wikimedia.org/wiki/File:Xavier_Villaurritua.jpg"
  ],
  "notas": "La licencia CC BY-SA 4.0 declarada en Commons para el retrato es dudosa: se trata de una fotografía de época reproducida en un libro del FCE. Se recomienda verificar antes de usarla. El nombre del archivo en Commons contiene una errata (Villaurritua)."
 },
 {
  "id": "carlos-fuentes",
  "nombre": "Carlos Fuentes Macías",
  "anios": "1928 – 2012",
  "nacimiento": "11 de noviembre de 1928 · Ciudad de Panamá, Panamá",
  "fallecimiento": "15 de mayo de 2012 · Ciudad de México",
  "municipioOrigen": "Ciudad de Panamá, Panamá",
  "movimiento": "Boom latinoamericano",
  "bloqueCanon": "mexicanos",
  "tituloHonorifico": "Novelista del Boom y cronista de la nación",
  "semblanzaSintetica": "Narrador y ensayista mexicano nacido en Panamá en 1928, hijo de un diplomático. Con La región más transparente (1958) y La muerte de Artemio Cruz (1962) se situó en el centro del Boom latinoamericano. Recibió el Premio Cervantes en 1987.",
  "biografiaCompleta": [
   "Carlos Fuentes nació en la Ciudad de Panamá el 11 de noviembre de 1928, donde su padre, Rafael Fuentes, servía en la embajada de México. Pasó la infancia en varias capitales americanas por la carrera diplomática paterna, lo que le dio una formación cosmopolita y bilingüe. De nacionalidad mexicana, se estableció en México en la adolescencia y estudió Derecho en la UNAM. Su primer libro de cuentos, Los días enmascarados, apareció en 1954.",
   "La publicación de La región más transparente en 1958 llamó la atención de la crítica por su retrato coral de la Ciudad de México. El año 1962 fue especialmente fecundo: aparecieron La muerte de Artemio Cruz, novela sobre la Revolución y sus herederos, y la polémica novela corta Aura. Siguieron Cambio de piel (1967) y Terra Nostra (1975), ambiciosa recreación de la historia hispánica que obtuvo el Premio Rómulo Gallegos en 1977.",
   "Fue embajador de México en Francia en la década de 1970 y profesor en universidades como Princeton, Columbia y Harvard. Gringo viejo (1985) fue llevada al cine. Recibió el Premio Cervantes en 1987 y el Premio Príncipe de Asturias de las Letras en 1994. Colaborador habitual de la prensa internacional, cultivó también el teatro, el guion y el ensayo. Murió en la Ciudad de México el 15 de mayo de 2012."
  ],
  "obrasCapitales": [
   {
    "titulo": "La región más transparente",
    "anio": 1958,
    "genero": "Novela",
    "descripcion": "Fresco coral de la Ciudad de México posrevolucionaria, con técnicas narrativas renovadoras."
   },
   {
    "titulo": "Aura",
    "anio": 1962,
    "genero": "Novela corta",
    "descripcion": "Relato fantástico en segunda persona sobre un historiador atrapado en una casa del centro de la ciudad."
   },
   {
    "titulo": "La muerte de Artemio Cruz",
    "anio": 1962,
    "genero": "Novela",
    "descripcion": "Agonía y memoria de un cacique surgido de la Revolución; balance moral del México del siglo XX."
   },
   {
    "titulo": "Terra Nostra",
    "anio": 1975,
    "genero": "Novela",
    "descripcion": "Vasta recreación de la historia y los mitos hispánicos. Premio Rómulo Gallegos 1977."
   },
   {
    "titulo": "Gringo viejo",
    "anio": 1985,
    "genero": "Novela",
    "descripcion": "Ficción sobre la desaparición de Ambrose Bierce en el México revolucionario; adaptada al cine."
   }
  ],
  "legadoPatrimonial": "Su obra, traducida a numerosas lenguas, es referencia obligada del Boom latinoamericano. Fue el primer escritor mexicano en recibir el Premio Cervantes (1987).",
  "dominioPublico": false,
  "citas": [],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/0/03/Carlos_Fuentes_1987.jpg",
   "licencia": "Dominio público",
   "autorFoto": "Bernard Gotfryd (Library of Congress)",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Carlos_Fuentes_1987.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Carlos_Fuentes",
   "http://www.elem.mx/autor/datos/1162",
   "https://commons.wikimedia.org/wiki/File:Carlos_Fuentes_1987.jpg"
  ],
  "notas": "Nació en Panamá por el cargo diplomático de su padre; su nacionalidad fue siempre mexicana. Wikipedia fecha la embajada en Francia en 1974-1977; otras fuentes dan 1975-1977, por lo que se indica solo la década."
 },
 {
  "id": "augusto-monterroso",
  "nombre": "Augusto Monterroso Bonilla",
  "anios": "1921 – 2003",
  "nacimiento": "21 de diciembre de 1921 · Tegucigalpa, Honduras",
  "fallecimiento": "7 de febrero de 2003 · Ciudad de México",
  "municipioOrigen": "Tegucigalpa, Honduras",
  "movimiento": "Narrativa breve y fábula contemporánea",
  "bloqueCanon": "mexicanos",
  "tituloHonorifico": "Maestro de la brevedad y la fábula moderna",
  "semblanzaSintetica": "Narrador y ensayista guatemalteco, nacido en Tegucigalpa en 1921 y radicado en México desde su exilio en 1944. Renovó la fábula y el relato brevísimo con libros como Obras completas (y otros cuentos) y La oveja negra y demás fábulas. Recibió el Premio Príncipe de Asturias de las Letras en 2000.",
  "biografiaCompleta": [
   "Augusto Monterroso nació en Tegucigalpa, Honduras, el 21 de diciembre de 1921, de madre hondureña y padre guatemalteco, y adoptó la nacionalidad guatemalteca. En 1944, por su oposición a la dictadura de Jorge Ubico, se exilió en México, donde estudió filología con una beca de El Colegio de México. Fue vicecónsul de Guatemala en México y, tras la caída del gobierno de Jacobo Árbenz en 1954, residió un tiempo en Chile antes de volver definitivamente a la Ciudad de México en 1956.",
   "En México trabajó como editor en distintas dependencias de la UNAM, dirigió la colección Nuestros Clásicos y coordinó talleres de narrativa en el Instituto Nacional de Bellas Artes. Su primer libro, Obras completas (y otros cuentos) (1959), contiene El dinosaurio, considerado uno de los relatos más breves de la literatura universal. Con La oveja negra y demás fábulas (1969) adaptó la tradición de la fábula a la sátira y la parodia modernas.",
   "Siguieron Movimiento perpetuo (1972), la novela Lo demás es silencio (1978), La palabra mágica (1983) y el diario La letra e (1987). Recibió el Premio Xavier Villaurrutia en 1975, el Premio Juan Rulfo (hoy FIL de Literatura en Lenguas Romances) en 1996 y el Premio Príncipe de Asturias de las Letras en 2000. Fue creador emérito del Sistema Nacional de Creadores de Arte. Murió en la Ciudad de México el 7 de febrero de 2003."
  ],
  "obrasCapitales": [
   {
    "titulo": "Obras completas (y otros cuentos)",
    "anio": 1959,
    "genero": "Cuento",
    "descripcion": "Primer libro del autor; incluye El dinosaurio, microrrelato de siete palabras que se volvió emblema del género."
   },
   {
    "titulo": "La oveja negra y demás fábulas",
    "anio": 1969,
    "genero": "Fábula",
    "descripcion": "Colección de fábulas irónicas que renueva el género clásico con humor y escepticismo."
   },
   {
    "titulo": "Movimiento perpetuo",
    "anio": 1972,
    "genero": "Miscelánea",
    "descripcion": "Libro híbrido de ensayos, cuentos y aforismos en torno a la mosca y a la escritura misma."
   },
   {
    "titulo": "Lo demás es silencio",
    "anio": 1978,
    "genero": "Novela",
    "descripcion": "Biografía ficticia y paródica del erudito provinciano Eduardo Torres."
   },
   {
    "titulo": "La letra e. Fragmentos de un diario",
    "anio": 1987,
    "genero": "Diario",
    "descripcion": "Anotaciones sobre lecturas, viajes y vida literaria en México."
   }
  ],
  "legadoPatrimonial": "Su microrrelato El dinosaurio es una de las piezas más citadas de la literatura en español y su obra es referencia obligada de la narrativa breve hispanoamericana.",
  "dominioPublico": false,
  "citas": [
   {
    "texto": "Cuando despertó, el dinosaurio todavía estaba allí.",
    "obra": "Obras completas (y otros cuentos) (1959)",
    "url": "https://es.wikipedia.org/wiki/El_dinosaurio"
   }
  ],
  "retrato": {
   "url": "",
   "licencia": "",
   "autorFoto": "",
   "paginaCommons": ""
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Augusto_Monterroso",
   "https://en.wikipedia.org/wiki/Augusto_Monterroso",
   "https://www.elem.mx/autor/datos/729"
  ],
  "notas": "Escritor guatemalteco radicado en México; se incluye en el bloque «mexicanos» por indicación del encargo. elem.mx sitúa el nacimiento en «Guatemala»; Wikipedia (es/en) en Tegucigalpa, Honduras. Fecha de muerte: 7 de febrero de 2003 (es.wikipedia, elem) frente a 8 de febrero (en.wikipedia). No se localizó imagen libre en Wikimedia Commons."
 },
 {
  "id": "elena-poniatowska",
  "nombre": "Elena Poniatowska Amor",
  "anios": "1932 –",
  "nacimiento": "19 de mayo de 1932 · París, Francia",
  "fallecimiento": "",
  "municipioOrigen": "París, Francia",
  "movimiento": "Crónica y testimonio; narrativa contemporánea",
  "bloqueCanon": "mexicanos",
  "tituloHonorifico": "Cronista del México de a pie",
  "semblanzaSintetica": "Periodista y escritora nacida en París en 1932 y radicada en México desde 1942. Autora de La noche de Tlatelolco y Hasta no verte Jesús mío, ha unido periodismo, testimonio y novela. En 2013 fue la primera mexicana en recibir el Premio Cervantes.",
  "biografiaCompleta": [
   "Elena Poniatowska nació en París el 19 de mayo de 1932, con el nombre de Hélène Elizabeth Louise Amélie Paula Dolores Poniatowska Amor. Llegó a México en 1942, durante la Segunda Guerra Mundial, y obtuvo la nacionalidad mexicana en 1969. Se inició en el periodismo en la década de 1950 con entrevistas y crónicas, y publicó su primer libro, Lilus Kikus, en 1954.",
   "Su novela Hasta no verte Jesús mío (1969), construida a partir de las conversaciones con una lavandera que vivió la Revolución, inauguró una forma propia de narrativa testimonial. La noche de Tlatelolco (1971) reunió voces de testigos de la matanza del 2 de octubre de 1968 y se convirtió en un documento fundamental de la historia reciente. Querido Diego, te abraza Quiela (1978), La Flor de Lis (1988) y Tinísima (1992), sobre la fotógrafa Tina Modotti, consolidaron su prestigio.",
   "En 2001 obtuvo el Premio Alfaguara de Novela por La piel del cielo y en 2007 el Premio Rómulo Gallegos por El tren pasa primero. Leonora (2011), sobre la pintora Leonora Carrington, amplió su galería de biografías noveladas. En 2013 recibió el Premio Cervantes y en 2022 el Senado le otorgó la Medalla Belisario Domínguez. Su obra, traducida a más de una decena de lenguas, se ha puesto con frecuencia al servicio de causas sociales."
  ],
  "obrasCapitales": [
   {
    "titulo": "Lilus Kikus",
    "anio": 1954,
    "genero": "Narrativa",
    "descripcion": "Primer libro de la autora: relatos sobre una niña curiosa, de tono poético."
   },
   {
    "titulo": "Hasta no verte Jesús mío",
    "anio": 1969,
    "genero": "Novela testimonial",
    "descripcion": "Vida de Jesusa Palancares, soldadera y trabajadora, reconstruida a partir de entrevistas."
   },
   {
    "titulo": "La noche de Tlatelolco",
    "anio": 1971,
    "genero": "Crónica / testimonio",
    "descripcion": "Collage de voces sobre el movimiento estudiantil de 1968 y la matanza del 2 de octubre."
   },
   {
    "titulo": "Tinísima",
    "anio": 1992,
    "genero": "Novela biográfica",
    "descripcion": "Recreación de la vida de la fotógrafa y militante Tina Modotti."
   },
   {
    "titulo": "La piel del cielo",
    "anio": 2001,
    "genero": "Novela",
    "descripcion": "Historia de un astrónomo mexicano y de la ciencia en el país. Premio Alfaguara 2001."
   }
  ],
  "legadoPatrimonial": "Primera escritora mexicana en recibir el Premio Cervantes (2013). Sus libros de testimonio son referencia para la historia social y política del México contemporáneo.",
  "dominioPublico": false,
  "citas": [],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Elena_Poniatowska_Amor.jpg",
   "licencia": "CC BY-SA 4.0",
   "autorFoto": "EneasMx (Wikimedia Commons, 2022)",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Elena_Poniatowska_Amor.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Elena_Poniatowska",
   "https://www.elem.mx/obra/datos/2359",
   "https://commons.wikimedia.org/wiki/File:Elena_Poniatowska_Amor.jpg"
  ],
  "notas": "Autora viva (94 años en 2026). Nacida en Francia; nacionalidad mexicana desde 1969. La Medalla Belisario Domínguez corresponde a 2022 y se entregó en 2023."
 },
 {
  "id": "efrain-huerta",
  "nombre": "Efraín Huerta Romo",
  "anios": "1914 – 1982",
  "nacimiento": "18 de junio de 1914 · Silao, Guanajuato",
  "fallecimiento": "3 de febrero de 1982 · Ciudad de México",
  "municipioOrigen": "Silao, Guanajuato",
  "movimiento": "Generación de Taller",
  "bloqueCanon": "mexicanos",
  "tituloHonorifico": "El gran cocodrilo, poeta de la ciudad y del alba",
  "semblanzaSintetica": "Poeta y periodista nacido en Silao, Guanajuato, en 1914. Miembro fundador de la revista Taller, escribió Los hombres del alba (1944), una de las cumbres de la poesía mexicana, e inventó los poemínimos. Recibió el Premio Nacional en 1976.",
  "biografiaCompleta": [
   "Efraín Huerta nació en Silao, Guanajuato, el 18 de junio de 1914, el menor de cinco hermanos, hijo del abogado José Mercedes Huerta y de Sara Romo. Cursó la preparatoria y los primeros años de Derecho en la Ciudad de México. Desde 1936 ejerció el periodismo profesional, primero en El Nacional y después en el semanario El Fígaro, con crítica de teatro y cine, actividad que mantuvo hasta la madurez. Su primer poemario, Absoluto amor, apareció en 1935.",
   "Fue miembro fundador de la revista Taller (1938-1941), junto con Octavio Paz y Rafael Solana, que dio nombre a su generación. En 1944 publicó Los hombres del alba, libro de poesía urbana, grave y vehemente, considerado uno de los puntos más altos de la lírica mexicana. Su obra temprana, de tono surrealista y combativo, incluye también Línea del alba y La rosa primitiva. Recibió las Palmas Académicas de Francia en la década de 1940.",
   "En su etapa de madurez publicó Poemas prohibidos y de amor (1973), Circuito interior (1977) y Transa poética (1980), y creó los poemínimos, versos brevísimos de humor y crítica social reunidos en Estampida de poemínimos. Obtuvo el Premio Xavier Villaurrutia en 1975, el Premio Nacional de Lingüística y Literatura en 1976 y el Premio Nacional de Periodismo en 1978. Murió en la Ciudad de México el 3 de febrero de 1982."
  ],
  "obrasCapitales": [
   {
    "titulo": "Absoluto amor",
    "anio": 1935,
    "genero": "Poesía",
    "descripcion": "Primer libro del poeta, de acento amoroso y ya con la vehemencia que lo caracterizaría."
   },
   {
    "titulo": "Los hombres del alba",
    "anio": 1944,
    "genero": "Poesía",
    "descripcion": "Poemas sobre la Ciudad de México y sus habitantes nocturnos; obra central de su producción."
   },
   {
    "titulo": "Poemas prohibidos y de amor",
    "anio": 1973,
    "genero": "Poesía",
    "descripcion": "Reúne textos eróticos y políticos de distintas épocas."
   },
   {
    "titulo": "Transa poética",
    "anio": 1980,
    "genero": "Poesía",
    "descripcion": "Antología preparada por el autor que recorre toda su trayectoria."
   },
   {
    "titulo": "Estampida de poemínimos",
    "anio": 1980,
    "genero": "Poesía breve",
    "descripcion": "Colección de poemínimos: textos mínimos de humor, ironía y crítica."
   }
  ],
  "legadoPatrimonial": "Los poemínimos son una forma poética reconocida como invención suya. Su obra se difunde en colecciones como Material de Lectura de la UNAM y en homenajes del INBA.",
  "dominioPublico": false,
  "citas": [],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/5/54/EFRAIN_HUERTA_%2813451334545%29.jpg",
   "licencia": "Sin restricciones conocidas (Flickr Commons)",
   "autorFoto": "Archivo Histórico de Sinaloa (Flickr)",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:EFRAIN_HUERTA_(13451334545).jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Efra%C3%ADn_Huerta",
   "https://literatura.inba.gob.mx/guanajuato/4283-huerta-efrain.html",
   "http://www.elem.mx/autor/datos/1843",
   "https://commons.wikimedia.org/wiki/File:EFRAIN_HUERTA_(13451334545).jpg"
  ],
  "notas": "El INBA indica que su nombre de registro fue Efrén Huerta Romo; Wikipedia da Efraín Huerta Romo. Estampida de poemínimos: 1980 según INBA, 1981 según Wikipedia. Las Palmas Académicas: 1948 (INBA) o 1949 (Wikipedia)."
 },
 {
  "id": "amparo-davila",
  "nombre": "María Amparo Dávila Robledo",
  "anios": "1928 – 2020",
  "nacimiento": "21 de febrero de 1928 · Pinos, Zacatecas",
  "fallecimiento": "18 de abril de 2020 · Ciudad de México",
  "municipioOrigen": "Pinos, Zacatecas",
  "movimiento": "Cuento fantástico; Generación de Medio Siglo",
  "bloqueCanon": "mexicanos",
  "tituloHonorifico": "Pionera del cuento fantástico mexicano",
  "semblanzaSintetica": "Cuentista y poeta nacida en Pinos, Zacatecas. Sus relatos de Tiempo destrozado, Música concreta y Árboles petrificados exploran la locura, el miedo y la vida en provincia desde protagonistas femeninas. Recibió el Premio Xavier Villaurrutia en 1977.",
  "biografiaCompleta": [
   "Amparo Dávila nació en Pinos, Zacatecas, el 21 de febrero de 1928. Pasó la infancia en ese pueblo minero y estudió en San Luis Potosí, donde publicó sus primeros libros de poesía: Salmos bajo la luna (1950) y Meditaciones a la orilla del sueño (1954). Se trasladó a la Ciudad de México y entre 1956 y 1958 fue secretaria de Alfonso Reyes, quien la alentó en su vocación literaria.",
   "Su primer libro de cuentos, Tiempo destrozado (1959), reúne doce relatos en los que la crítica ha señalado la influencia de Kafka, Poe, Bioy Casares y Cortázar, con una mezcla de lo racional y lo irracional que recrea el ámbito espiritual de la provincia mexicana. Julio Cortázar elogió la madurez y el rigor literario de ese volumen. Fue becaria del Centro Mexicano de Escritores en 1966 y publicó Música concreta en 1964.",
   "Con Árboles petrificados (1977) obtuvo el Premio Xavier Villaurrutia. Su narrativa, reunida en Cuentos reunidos (2009) por el Fondo de Cultura Económica, fue redescubierta por nuevas generaciones de lectores y traducida a otras lenguas. En 2015 recibió la Medalla Bellas Artes. Murió en la Ciudad de México el 18 de abril de 2020. Sostenía que practicaba una «literatura vivencial», más que puramente intelectual."
  ],
  "obrasCapitales": [
   {
    "titulo": "Salmos bajo la luna",
    "anio": 1950,
    "genero": "Poesía",
    "descripcion": "Primer libro de la autora, publicado en San Luis Potosí."
   },
   {
    "titulo": "Tiempo destrozado",
    "anio": 1959,
    "genero": "Cuento",
    "descripcion": "Doce relatos de atmósfera inquietante; incluye El huésped, su cuento más difundido."
   },
   {
    "titulo": "Música concreta",
    "anio": 1964,
    "genero": "Cuento",
    "descripcion": "Segundo volumen de relatos, con el miedo y la locura como ejes."
   },
   {
    "titulo": "Árboles petrificados",
    "anio": 1977,
    "genero": "Cuento",
    "descripcion": "Libro galardonado con el Premio Xavier Villaurrutia 1977."
   },
   {
    "titulo": "Cuentos reunidos",
    "anio": 2009,
    "genero": "Cuento",
    "descripcion": "Edición del FCE que recoge toda su narrativa breve y propició su redescubrimiento."
   }
  ],
  "legadoPatrimonial": "Su obra es considerada una de las más singulares del cuento mexicano del siglo XX y figura en las principales antologías del género fantástico.",
  "dominioPublico": false,
  "citas": [],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Amparo_D%C3%A1vila_%28cropped%29.jpg",
   "licencia": "CC BY-SA 2.0",
   "autorFoto": "Vianey Lozada / Secretaría de Cultura de la Ciudad de México",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Amparo_D%C3%A1vila_(cropped).jpg"
  },
  "fuentes": [
   "https://literatura.inba.gob.mx/zacatecas/5075-davila-amparo.html",
   "https://www.elem.mx/autor/datos/284",
   "https://es.wikipedia.org/wiki/Amparo_D%C3%A1vila",
   "https://en.wikipedia.org/wiki/Amparo_D%C3%A1vila",
   "https://commons.wikimedia.org/wiki/File:Amparo_D%C3%A1vila_(cropped).jpg"
  ],
  "notas": "Año de nacimiento en disputa: es.wikipedia indica 1923; elem.mx, INBA y en.wikipedia indican 1928 (se adopta 1928, fecha de las fuentes institucionales). INBA escribe el lugar como «Pinos Altos, Zacatecas». en.wikipedia sitúa el fallecimiento en Zacatecas; las demás fuentes en la Ciudad de México."
 },
 {
  "id": "carlos-monsivais",
  "nombre": "Carlos Monsiváis Aceves",
  "anios": "1938 – 2010",
  "nacimiento": "4 de mayo de 1938 · Ciudad de México",
  "fallecimiento": "19 de junio de 2010 · Ciudad de México",
  "municipioOrigen": "Ciudad de México",
  "movimiento": "Crónica urbana; Generación de Medio Siglo",
  "bloqueCanon": "mexicanos",
  "tituloHonorifico": "Cronista mayor de la cultura popular mexicana",
  "semblanzaSintetica": "Cronista, ensayista y coleccionista nacido en la Ciudad de México en 1938. Con Días de guardar, Amor perdido y Los rituales del caos redefinió la crónica como género literario. Recibió los premios Xavier Villaurrutia, Nacional de Ciencias y Artes y FIL de Literatura.",
  "biografiaCompleta": [
   "Carlos Monsiváis nació en la Ciudad de México el 4 de mayo de 1938. Formado en una familia protestante, estudió en la Facultad de Filosofía y Letras y en la de Economía de la UNAM, y se inició muy joven en el periodismo cultural. Fue figura omnipresente de la vida pública mexicana durante medio siglo, presente en foros periodísticos, académicos y de la sociedad civil, desde los que construyó una de las obras más copiosas y heterogéneas de la literatura mexicana contemporánea.",
   "El núcleo de su obra es la crónica urbana, o crónica-ensayo, con la que amplió las posibilidades de la escritura literaria en México al integrar formas tenidas por menores: el periodismo, los medios, los registros populares y el humor. Días de guardar (1970) retrató el México de 1968; Amor perdido (1977) y Escenas de pudor y liviandad (1988) examinaron ídolos y mitos de la cultura de masas; Entrada libre (1987) documentó la organización ciudadana tras el sismo de 1985.",
   "Los rituales del caos (1995) le valió el Premio Xavier Villaurrutia, y Aires de familia (2000) el Premio Anagrama de Ensayo. En 2005 recibió el Premio Nacional de Ciencias y Artes y en 2006 el Premio FIL de Literatura en Lenguas Romances. Defendió a las minorías sexuales y estudió la cultura protestante en México. Donó su colección de arte y objetos populares al Museo del Estanquillo. Murió en la Ciudad de México el 19 de junio de 2010."
  ],
  "obrasCapitales": [
   {
    "titulo": "Días de guardar",
    "anio": 1970,
    "genero": "Crónica",
    "descripcion": "Crónicas del México de finales de los sesenta, con el movimiento estudiantil de 1968 al centro."
   },
   {
    "titulo": "Amor perdido",
    "anio": 1977,
    "genero": "Crónica / ensayo",
    "descripcion": "Retratos de figuras públicas y mitos populares del siglo XX mexicano."
   },
   {
    "titulo": "Entrada libre",
    "anio": 1987,
    "genero": "Crónica",
    "descripcion": "Crónicas de la sociedad que se organiza, entre ellas las del sismo de 1985."
   },
   {
    "titulo": "Los rituales del caos",
    "anio": 1995,
    "genero": "Crónica",
    "descripcion": "Escenas de la vida masiva en la Ciudad de México. Premio Xavier Villaurrutia."
   },
   {
    "titulo": "Aires de familia",
    "anio": 2000,
    "genero": "Ensayo",
    "descripcion": "Ensayos sobre cultura y sociedad en América Latina. Premio Anagrama de Ensayo 2000."
   }
  ],
  "legadoPatrimonial": "Su colección personal de pintura, fotografía, juguetes y objetos populares dio origen al Museo del Estanquillo, en el centro de la Ciudad de México; su biblioteca de unos 24 000 volúmenes se conserva en la Biblioteca de México.",
  "dominioPublico": false,
  "citas": [],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/d/d6/Carlos_monsivais.jpg",
   "licencia": "CC BY-SA 2.5",
   "autorFoto": "Lourdesalmeida (Wikimedia Commons)",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Carlos_monsivais.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Carlos_Monsiv%C3%A1is",
   "http://www.elem.mx/autor/datos/720",
   "https://commons.wikimedia.org/wiki/File:Carlos_monsivais.jpg"
  ],
  "notas": "Wikipedia fecha la fotografía de Commons en 1990 y Commons en 2007; se mantiene el crédito que declara Commons."
 },
 {
  "id": "ramon-lopez-velarde",
  "nombre": "Ramón Modesto López Velarde Berumen",
  "anios": "1888 – 1921",
  "nacimiento": "15 de junio de 1888 · Jerez de García Salinas, Zacatecas",
  "fallecimiento": "19 de junio de 1921 · Ciudad de México",
  "municipioOrigen": "Jerez de García Salinas, Zacatecas",
  "movimiento": "Posmodernismo; transición del modernismo a la vanguardia",
  "bloqueCanon": "mexicanos",
  "tituloHonorifico": "El poeta nacional, autor de La suave Patria",
  "semblanzaSintetica": "Poeta nacido en Jerez, Zacatecas, en 1888 y muerto en la Ciudad de México a los 33 años. Publicó en vida La sangre devota (1916) y Zozobra (1919); su poema La suave Patria (1921) se convirtió en expresión de la nueva mexicanidad surgida de la Revolución.",
  "biografiaCompleta": [
   "Ramón López Velarde nació en Jerez de García Salinas, Zacatecas, el 15 de junio de 1888. Estudió en los seminarios de Zacatecas y Aguascalientes, y después Derecho en San Luis Potosí. Se estableció en la Ciudad de México en 1914, donde ejerció como abogado, profesor y periodista. Su obra reveló desde el principio un dilema del espíritu que persiguió hasta sus últimas consecuencias sin renunciar a sus dos polos: la religiosidad y el erotismo.",
   "En vida publicó solo dos libros de poesía: La sangre devota (1916), de tono provinciano y amoroso, y Zozobra (1919), más angustiado y de lenguaje audaz. Su escritura, llena de imágenes y de un idioma continuamente renovado, colocó a la poesía mexicana en la antesala de la vanguardia; con él, los poetas mexicanos entraron en la modernidad literaria. Escribió también prosas y crónicas que se recogerían póstumamente en El minutero (1923) y Don de febrero y otras prosas (1952).",
   "Con motivo del centenario de la consumación de la Independencia escribió en 1921 La suave Patria, que apareció en la revista El Maestro y se recogió después en el volumen póstumo El son del corazón (1932). Murió en la Ciudad de México el 19 de junio de 1921, a los 33 años, de bronconeumonía. Su prestigio no ha dejado de crecer desde entonces: de poeta de minorías ha pasado a ser leído y celebrado por el público común."
  ],
  "obrasCapitales": [
   {
    "titulo": "La sangre devota",
    "anio": 1916,
    "genero": "Poesía",
    "descripcion": "Primer libro; evoca la provincia, la fe y el amor por Fuensanta."
   },
   {
    "titulo": "Zozobra",
    "anio": 1919,
    "genero": "Poesía",
    "descripcion": "Libro de madurez, tenso entre el deseo y la culpa, con un lenguaje de gran novedad."
   },
   {
    "titulo": "La suave Patria",
    "anio": 1921,
    "genero": "Poema",
    "descripcion": "Poema cívico escrito para el centenario de la Independencia; apareció en la revista El Maestro."
   },
   {
    "titulo": "El minutero",
    "anio": 1923,
    "genero": "Prosa",
    "descripcion": "Recopilación póstuma de prosas breves y crónicas."
   },
   {
    "titulo": "El son del corazón",
    "anio": 1932,
    "genero": "Poesía",
    "descripcion": "Volumen póstumo que reúne sus últimos poemas, entre ellos La suave Patria."
   }
  ],
  "legadoPatrimonial": "Su obra está en dominio público. Es considerado el poeta nacional de México; su casa natal en Jerez es museo y el 19 de junio se conmemora su muerte en Zacatecas y en todo el país.",
  "dominioPublico": true,
  "citas": [
   {
    "texto": "Suave Patria: permite que te envuelva / en la más honda música de selva / con que me modelaste por entero",
    "obra": "La suave Patria (1921)",
    "url": "https://es.wikisource.org/wiki/Suave_patria"
   },
   {
    "texto": "Patria: tu superficie es el maíz, / tus minas el palacio del Rey de Oros, / y tu cielo las garzas en desliz",
    "obra": "La suave Patria (1921)",
    "url": "https://es.wikisource.org/wiki/Suave_patria"
   }
  ],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Lvelarde.jpg",
   "licencia": "Dominio público",
   "autorFoto": "Anónimo (fotografía de 1918)",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Lvelarde.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Ram%C3%B3n_L%C3%B3pez_Velarde",
   "http://www.elem.mx/autor/datos/612",
   "https://es.wikisource.org/wiki/Suave_patria",
   "https://commons.wikimedia.org/wiki/File:Lvelarde.jpg"
  ],
  "notas": "Wikipedia añade que la bronconeumonía se complicó con sífilis; elem.mx no menciona causa. Wikipedia lo adscribe al modernismo tardío; otras fuentes hablan de posmodernismo."
 },
 {
  "id": "manuel-gutierrez-najera",
  "nombre": "Manuel Gutiérrez Nájera",
  "anios": "1859 – 1895",
  "nacimiento": "22 de diciembre de 1859 · Ciudad de México",
  "fallecimiento": "3 de febrero de 1895 · Ciudad de México",
  "municipioOrigen": "Ciudad de México",
  "movimiento": "Modernismo (iniciador en México)",
  "bloqueCanon": "mexicanos",
  "tituloHonorifico": "El Duque Job, iniciador del modernismo mexicano",
  "semblanzaSintetica": "Poeta, cronista y periodista nacido en la Ciudad de México en 1859. Conocido como El Duque Job, publicó en vida un solo libro, Cuentos frágiles (1883), y fundó en 1894 la Revista Azul, órgano del modernismo. Murió a los 35 años.",
  "biografiaCompleta": [
   "Manuel Gutiérrez Nájera nació en la Ciudad de México el 22 de diciembre de 1859. Comenzó a publicar a los dieciséis años: su primer poema, Serenata, y su primer ensayo aparecieron en 1875. Durante veinte años de vida productiva colaboró en una cuarentena de periódicos con una veintena de seudónimos, entre ellos El Duque Job, Recamier y Puck, en una lucha constante por conseguir un espacio propio para su verdadera vocación de poeta frente a las limitaciones del periodismo diario.",
   "En 1882 publicó por entregas en El Noticioso su única novela, Por donde se sube al cielo, y en 1883 reunió quince relatos en Cuentos frágiles, el único volumen que publicó entre dos cubiertas en vida. Sus crónicas, de estilo elegante y delicado, abordaron la vida social y cultural de la capital porfiriana. Cultivó casi todos los géneros, y en su poesía conviven la religiosidad, el amor y la duda existencial provocada por las ideas positivistas.",
   "En mayo de 1894 fundó con Carlos Díaz Dufoo la Revista Azul, suplemento literario de El Partido Liberal, que dirigió hasta su muerte y que fue el órgano del modernismo en México. Murió en la Ciudad de México el 3 de febrero de 1895, a los 35 años. Sus poemas, entre ellos Para entonces, La duquesa Job y Non omnis moriar, se publicaron póstumamente, y hoy se le considera el iniciador del movimiento modernista en la literatura mexicana."
  ],
  "obrasCapitales": [
   {
    "titulo": "Por donde se sube al cielo",
    "anio": 1882,
    "genero": "Novela",
    "descripcion": "Su única novela, publicada por entregas en el periódico El Noticioso."
   },
   {
    "titulo": "Cuentos frágiles",
    "anio": 1883,
    "genero": "Cuento",
    "descripcion": "Quince relatos; único libro que publicó en vida."
   },
   {
    "titulo": "Revista Azul",
    "anio": 1894,
    "genero": "Revista literaria",
    "descripcion": "Fundada con Carlos Díaz Dufoo; órgano del modernismo hispanoamericano."
   },
   {
    "titulo": "Cuentos color de humo",
    "anio": 1917,
    "genero": "Cuento",
    "descripcion": "Recopilación póstuma de relatos y crónicas."
   }
  ],
  "legadoPatrimonial": "Su obra está en dominio público. Se le reconoce como iniciador del modernismo en México; poemas como Para entonces y La duquesa Job forman parte del canon escolar.",
  "dominioPublico": true,
  "citas": [
   {
    "texto": "Quiero morir cuando decline el día, / en alta mar y con la cara al cielo, / donde parezca sueño la agonía, / y el alma, un ave que remonta el vuelo.",
    "obra": "Para entonces (poema póstumo)",
    "url": "https://es.wikisource.org/wiki/Para_Entonces"
   }
  ],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/9/97/MANUEL_GUTI%C3%89RREZ_NAJERA.jpg",
   "licencia": "CC BY-SA 2.0",
   "autorFoto": "Sergio Zaragoza Sicre (Flickr)",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:MANUEL_GUTI%C3%89RREZ_NAJERA.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Manuel_Guti%C3%A9rrez_N%C3%A1jera",
   "http://www.elem.mx/autor/datos/3044",
   "https://es.wikisource.org/wiki/Para_Entonces",
   "https://commons.wikimedia.org/wiki/File:MANUEL_GUTI%C3%89RREZ_NAJERA.jpg"
  ],
  "notas": "Wikipedia registra el nombre de pila completo (Manuel Demetrio Francisco de Paula de la Santísima Trinidad...). El año de Cuentos color de humo (1917) procede de Wikipedia; elem.mx no lo consigna. El retrato de Commons es una reproducción fotográfica de una imagen histórica, subida con licencia CC BY-SA 2.0."
 },
 {
  "id": "sergio-pitol",
  "nombre": "Sergio Pitol Deméneghi",
  "anios": "1933 – 2018",
  "nacimiento": "18 de marzo de 1933 · Puebla, Puebla",
  "fallecimiento": "12 de abril de 2018 · Xalapa, Veracruz",
  "municipioOrigen": "Puebla, Puebla",
  "movimiento": "Generación de Medio Siglo; narrativa contemporánea",
  "bloqueCanon": "mexicanos",
  "tituloHonorifico": "Narrador, traductor y viajero; Premio Cervantes 2005",
  "semblanzaSintetica": "Narrador, ensayista, traductor y diplomático nacido en Puebla en 1933. Autor de El desfile del amor (Premio Herralde 1984) y de El arte de la fuga (1996), recibió el Premio Cervantes en 2005. Vivió sus últimos años en Xalapa.",
  "biografiaCompleta": [
   "Sergio Pitol nació en Puebla el 18 de marzo de 1933. Estudió Derecho y Letras en la UNAM, donde se formó junto a escritores como José Emilio Pacheco y Carlos Monsiváis. Durante décadas vivió fuera de México, en Roma, Varsovia, Barcelona, Moscú y Praga, en el servicio diplomático y como traductor. Sus versiones de literatura rusa, inglesa, polaca y checa abrieron nuevos horizontes a los lectores hispanoamericanos.",
   "Tras los primeros libros de cuentos, publicó la novela El tañido de una flauta (1972). Con Nocturno de Bujara obtuvo el Premio Xavier Villaurrutia en 1981. Su llamado Tríptico del Carnaval, formado por El desfile del amor (1984, Premio Herralde de Novela), Domar a la divina garza (1988) y La vida conyugal (1991), consolidó una narrativa paródica y cosmopolita de gran inventiva.",
   "En El arte de la fuga (1996), El viaje (2000) y El mago de Viena (2005), reunidos como Trilogía de la memoria, fundió autobiografía, ensayo y relato. Recibió el Premio Nacional de Ciencias y Artes en 1993, el Premio Juan Rulfo en 1999 y el Premio Cervantes en 2005, el más importante de la lengua española. Creador emérito del Sistema Nacional de Creadores, murió en Xalapa, Veracruz, el 12 de abril de 2018."
  ],
  "obrasCapitales": [
   {
    "titulo": "El tañido de una flauta",
    "anio": 1972,
    "genero": "Novela",
    "descripcion": "Primera novela del autor, sobre el cine, el arte y la identidad, ambientada en Venecia y Oriente."
   },
   {
    "titulo": "El desfile del amor",
    "anio": 1984,
    "genero": "Novela",
    "descripcion": "Investigación de un crimen en el México de 1942; Premio Herralde de Novela 1984."
   },
   {
    "titulo": "Domar a la divina garza",
    "anio": 1988,
    "genero": "Novela",
    "descripcion": "Segunda parte del Tríptico del Carnaval, de tono grotesco y paródico."
   },
   {
    "titulo": "El arte de la fuga",
    "anio": 1996,
    "genero": "Memoria / ensayo",
    "descripcion": "Libro híbrido de memorias, viajes y lecturas; inicio de la Trilogía de la memoria."
   },
   {
    "titulo": "El mago de Viena",
    "anio": 2005,
    "genero": "Memoria / ensayo",
    "descripcion": "Cierre de la Trilogía de la memoria, publicado el año en que recibió el Cervantes."
   }
  ],
  "legadoPatrimonial": "Su labor como traductor de literatura centroeuropea y rusa y su Trilogía de la memoria son referencia de la prosa mexicana contemporánea. Fue Premio Cervantes 2005.",
  "dominioPublico": false,
  "citas": [],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Sergio_Pitol_on_Charlando_con_Cervantes_%281996%29.jpg",
   "licencia": "CC BY-SA 4.0",
   "autorFoto": "CUNY TV, programa Charlando con Cervantes (1996)",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Sergio_Pitol_on_Charlando_con_Cervantes_(1996).jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Sergio_Pitol",
   "https://www.elem.mx/autor/datos/862",
   "https://commons.wikimedia.org/wiki/File:Sergio_Pitol_on_Charlando_con_Cervantes_(1996).jpg"
  ],
  "notas": "Wikipedia fecha Juegos florales en 1985 y elem.mx registra el título premiado con el Villaurrutia como «Nocturno a Bujara» (el título correcto es Nocturno de Bujara)."
 },
 {
  "id": "nellie-campobello",
  "nombre": "Nellie Campobello (Francisca Ernestina Moya Luna)",
  "anios": "1900 – 1986",
  "nacimiento": "7 de noviembre de 1900 · Villa Ocampo, Durango",
  "fallecimiento": "9 de julio de 1986 · Progreso de Obregón, Hidalgo",
  "municipioOrigen": "Villa Ocampo, Durango",
  "movimiento": "Novela de la Revolución mexicana",
  "bloqueCanon": "mexicanos",
  "tituloHonorifico": "Narradora de la Revolución y pionera de la danza mexicana",
  "semblanzaSintetica": "Narradora, poeta y bailarina nacida en Villa Ocampo, Durango. Con Cartucho (1931) y Las manos de mamá (1937) dio una mirada infantil y femenina a la guerra en el norte de México. Dirigió durante décadas la Escuela Nacional de Danza.",
  "biografiaCompleta": [
   "Nellie Campobello, cuyo nombre de nacimiento fue Francisca Ernestina Moya Luna, nació en Villa Ocampo, Durango, el 7 de noviembre de 1900. Pasó la infancia en Hidalgo del Parral, Chihuahua, donde presenció de cerca la lucha revolucionaria en el norte del país. Llegó a la Ciudad de México en 1923 y publicó en 1929 su primer libro, el poemario ¡Yo! Versos por Francisca.",
   "En 1931 apareció Cartucho. Relatos de la lucha en el norte de México, libro de estampas breves que recoge entradas y salidas de tropas, asaltos, fusilamientos y nostalgias de los soldados villistas vistos por una niña. Las manos de mamá (1937) prolongó esa mirada. Publicó después Apuntes sobre la vida militar de Francisco Villa (1940), Ritmos indígenas de México (1940), escrito con su hermana Gloria, y la autobiografía literaria Mis libros (1960).",
   "Bailarina, coreógrafa e investigadora de danzas autóctonas, dirigió la Escuela Nacional de Danza del Instituto Nacional de Bellas Artes durante más de cuatro décadas y creó el Ballet de la Ciudad de México. En sus últimos años fue privada de su libertad por personas de su entorno; una investigación de la Comisión de Derechos Humanos del Distrito Federal estableció en 1998 que había muerto el 9 de julio de 1986 en Progreso de Obregón, Hidalgo. Se le considera la primera narradora moderna de la literatura mexicana del siglo XX."
  ],
  "obrasCapitales": [
   {
    "titulo": "¡Yo! Versos por Francisca",
    "anio": 1929,
    "genero": "Poesía",
    "descripcion": "Primer libro de la autora, firmado con su nombre de pila."
   },
   {
    "titulo": "Cartucho. Relatos de la lucha en el norte de México",
    "anio": 1931,
    "genero": "Narrativa",
    "descripcion": "Estampas de la Revolución villista narradas desde la mirada de una niña; obra central de su legado."
   },
   {
    "titulo": "Las manos de mamá",
    "anio": 1937,
    "genero": "Narrativa",
    "descripcion": "Evocación lírica de la madre en el contexto de la guerra."
   },
   {
    "titulo": "Apuntes sobre la vida militar de Francisco Villa",
    "anio": 1940,
    "genero": "Biografía",
    "descripcion": "Relato de las campañas de Villa a partir de testimonios y documentos."
   },
   {
    "titulo": "Mis libros",
    "anio": 1960,
    "genero": "Memoria / antología",
    "descripcion": "Recopilación de su obra con un prólogo autobiográfico."
   }
  ],
  "legadoPatrimonial": "La Escuela Nacional de Danza del INBA lleva el nombre de Nellie y Gloria Campobello. Cartucho es considerado un hito de la narrativa de la Revolución mexicana y de la literatura escrita por mujeres en México.",
  "dominioPublico": false,
  "citas": [],
  "retrato": {
   "url": "",
   "licencia": "",
   "autorFoto": "",
   "paginaCommons": ""
  },
  "fuentes": [
   "https://literatura.inba.gob.mx/durango/4228-campobello-nellie.html",
   "https://es.wikipedia.org/wiki/Nellie_Campobello",
   "https://www.gob.mx/cultura/prensa/nellie-campobello-embajadora-de-la-danza-mexicana?idiom=es",
   "http://www.elem.mx/autor/datos/177"
  ],
  "notas": "Fecha de nacimiento en disputa: INBA y Cervantes Virtual dan 7 de noviembre de 1900; Wikipedia señala que otras fuentes dan 1909. Nombre real: «Francisca Ernestina Moya Luna» (Wikipedia) o «Francisca Moya Luna» (Secretaría de Cultura). Wikipedia fecha su dirección de la Escuela Nacional de Danza en 1937-1984; el INBA indica que fundó la Escuela de Danza en 1931, convertida en Escuela Nacional de Danza en 1938. No se localizó retrato con licencia libre en Wikimedia Commons."
 },
 {
  "id": "clarice-lispector",
  "nombre": "Clarice Lispector",
  "anios": "1920 – 1977",
  "nacimiento": "10 de diciembre de 1920 · Chechelnik, Ucrania",
  "fallecimiento": "9 de diciembre de 1977 · Río de Janeiro",
  "municipioOrigen": "Chechelnik, Ucrania",
  "movimiento": "Modernismo brasileño (Generación del 45)",
  "bloqueCanon": "universales",
  "tituloHonorifico": "Narradora de la intimidad y la introspección",
  "semblanzaSintetica": "Escritora brasileña nacida en Ucrania en 1920, llegó a Brasil con su familia en 1922 y creció en Recife y Río de Janeiro. Novelista, cuentista, cronista y traductora, renovó la prosa en lengua portuguesa con una escritura introspectiva que ha sido comparada con la de Virginia Woolf y James Joyce. Murió en Río de Janeiro en 1977.",
  "biografiaCompleta": [
   "Clarice Lispector nació el 10 de diciembre de 1920 en Chechelnik, Ucrania, en el seno de una familia judía que emigró a Brasil y llegó al país en 1922, cuando ella aún no cumplía dos años. Pasó la infancia en Recife, donde perdió a su madre a los nueve años, y más tarde la familia se trasladó a Río de Janeiro. Allí estudió Derecho y comenzó a publicar: su primer cuento conocido, «Triunfo», apareció en la revista Pan el 25 de mayo de 1940. Se naturalizó brasileña el 12 de enero de 1943 y días después se casó con el diplomático Maury Gurgel Valente.",
   "Su primera novela, «Cerca del corazón salvaje» (Perto do coração selvagem), obtuvo el Premio Graça Aranha en 1944 y la dio a conocer como una voz nueva de la narrativa brasileña. Entre 1944 y 1959 vivió fuera de Brasil, en Europa y en Washington, siguiendo la carrera diplomática de su marido; en ese periodo nacieron sus dos hijos (1948 y 1953). Tras separarse, regresó a Río de Janeiro en junio de 1959. En 1960 publicó el libro de cuentos «Lazos de familia» y en 1964 la novela «La pasión según G.H.», una de sus obras más estudiadas.",
   "El 14 de septiembre de 1966 sufrió graves quemaduras en la mano derecha y las piernas en un incendio provocado por un cigarrillo en su apartamento. Entre agosto de 1967 y 1973 fue cronista del Jornal do Brasil, labor que la acercó a un público amplio. En 1973 apareció «Agua viva» y en 1977 «La hora de la estrella», su última novela publicada en vida. Murió en Río de Janeiro el 9 de diciembre de 1977, víspera de su cumpleaños número cincuenta y siete, a causa de un cáncer de ovario. Su obra, traducida a numerosas lenguas, sigue siendo referencia de la literatura en portugués."
  ],
  "obrasCapitales": [
   {
    "titulo": "Cerca del corazón salvaje (Perto do coração selvagem)",
    "anio": 1943,
    "genero": "Novela",
    "descripcion": "Novela de debut, premiada con el Graça Aranha en 1944, que inaugura su escritura introspectiva. Las fuentes consultadas fechan su publicación entre fines de 1943 y 1944."
   },
   {
    "titulo": "Lazos de familia (Laços de família)",
    "anio": 1960,
    "genero": "Cuento",
    "descripcion": "Colección de relatos sobre la vida familiar y la conciencia femenina; uno de sus libros de cuentos más leídos."
   },
   {
    "titulo": "La pasión según G.H. (A paixão segundo G.H.)",
    "anio": 1964,
    "genero": "Novela",
    "descripcion": "Monólogo de una mujer que, tras un encuentro con una cucaracha en el cuarto de servicio, atraviesa una crisis de identidad y conocimiento."
   },
   {
    "titulo": "Agua viva (Água viva)",
    "anio": 1973,
    "genero": "Prosa poética / novela",
    "descripcion": "Texto fragmentario en primera persona que explora el instante, la escritura y la percepción."
   },
   {
    "titulo": "La hora de la estrella (A hora da estrela)",
    "anio": 1977,
    "genero": "Novela",
    "descripcion": "Última novela publicada en vida; narra la historia de Macabéa, una joven nordestina en Río de Janeiro."
   }
  ],
  "legadoPatrimonial": "Su archivo y buena parte de su legado se conservan en el Instituto Moreira Salles de Brasil, que mantiene un portal dedicado a su vida y obra. Es considerada una de las figuras centrales de la literatura brasileña del siglo XX.",
  "dominioPublico": false,
  "citas": [
   {
    "texto": "Mientras tenga preguntas para las que no haya respuesta, seguiré escribiendo.",
    "obra": "Agua viva (1973)",
    "url": "https://es.wikiquote.org/wiki/Clarice_Lispector"
   }
  ],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/7/75/Clarice_Lispector_%28cropped%29.jpg",
   "licencia": "CC BY-SA 4.0",
   "autorFoto": "Maureen Bisilliat / Instituto Moreira Salles",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Clarice_Lispector_(cropped).jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Clarice_Lispector",
   "https://en.wikipedia.org/wiki/Clarice_Lispector",
   "https://pt.wikipedia.org/wiki/Clarice_Lispector",
   "https://claricelispector.ims.com.br/",
   "https://es.wikiquote.org/wiki/Clarice_Lispector",
   "https://commons.wikimedia.org/wiki/File:Clarice_Lispector_(cropped).jpg"
  ],
  "notas": "Discrepancias de fechas de obras: «Perto do coração selvagem» aparece como 1943 en en.wikipedia y como 1944 en es.wikipedia y pt.wikipedia (el premio Graça Aranha es de 1944). «A paixão segundo G.H.» figura como 1963 en es.wikipedia y 1964 en en.wikipedia y pt.wikipedia; se adoptó 1964. El retrato (foto de 1969) está bajo CC BY-SA 4.0: debe acreditarse «Maureen Bisilliat / Instituto Moreira Salles». Britannica devolvió error 403 y no pudo consultarse."
 },
 {
  "id": "fernando-pessoa",
  "nombre": "Fernando António Nogueira Pessoa",
  "anios": "1888 – 1935",
  "nacimiento": "13 de junio de 1888 · Lisboa, Portugal",
  "fallecimiento": "30 de noviembre de 1935 · Lisboa",
  "municipioOrigen": "Lisboa, Portugal",
  "movimiento": "Modernismo portugués",
  "bloqueCanon": "universales",
  "tituloHonorifico": "El poeta de los heterónimos",
  "semblanzaSintetica": "Poeta, ensayista y traductor portugués, figura central del modernismo en su país y creador de los heterónimos Alberto Caeiro, Ricardo Reis y Álvaro de Campos. En vida publicó un solo libro en portugués, «Mensaje» (1934); la mayor parte de su obra, conservada en un baúl con más de veinticinco mil páginas, se dio a conocer tras su muerte en Lisboa en 1935.",
  "biografiaCompleta": [
   "Fernando Pessoa nació en Lisboa el 13 de junio de 1888. Su padre murió de tuberculosis en 1893, cuando él tenía cinco años, y en enero de 1896 la familia se trasladó a Durban, Sudáfrica, donde recibió una educación en lengua inglesa que marcaría su formación literaria. Regresó definitivamente a Lisboa en 1905 y, durante el resto de su vida, se ganó el sustento como corresponsal comercial, redactando cartas en inglés y francés para casas de comercio. Vivió de forma discreta y modesta, dedicado a la escritura, y entre 1920 y 1935 residió en el edificio de Campo de Ourique que hoy alberga la Casa Fernando Pessoa.",
   "En marzo de 1915 participó en el lanzamiento de la revista Orpheu, punto de partida del modernismo portugués. Publicó en inglés los poemarios «Antinous» y «35 Sonnets» (1918) y «English Poems» (1922-1923). Su rasgo más singular fue la creación de heterónimos, personalidades literarias con biografía, ideas y estilo propios: el maestro Alberto Caeiro, el clásico y epicúreo Ricardo Reis, el sensacionista Álvaro de Campos y el semiheterónimo Bernardo Soares, autor del «Libro del desasosiego». Se le atribuyen alrededor de setenta y cinco de estas figuras.",
   "En 1934 publicó «Mensaje» (Mensagem), el único libro en portugués que editó en vida, distinguido con el Premio Antero de Quental. Murió en Lisboa el 30 de noviembre de 1935, a los cuarenta y siete años, en el Hospital de São Luís dos Franceses; la causa registrada fue una cirrosis hepática, diagnóstico que estudios médicos posteriores han discutido. Dejó un baúl con más de veinticinco mil páginas de manuscritos cuya edición continúa. El «Libro del desasosiego» apareció por primera vez en 1982 y en 1988, en el centenario de su nacimiento, sus restos fueron trasladados al Monasterio de los Jerónimos."
  ],
  "obrasCapitales": [
   {
    "titulo": "35 Sonnets",
    "anio": 1918,
    "genero": "Poesía (en inglés)",
    "descripcion": "Cuaderno de sonetos en inglés publicado en Lisboa junto con «Antinous»; muestra de su primera etapa de formación anglófona."
   },
   {
    "titulo": "Mensaje (Mensagem)",
    "anio": 1934,
    "genero": "Poesía",
    "descripcion": "Único libro en portugués publicado en vida; poemario de carácter simbólico sobre la historia y el destino de Portugal, premiado con el Antero de Quental."
   },
   {
    "titulo": "Libro del desasosiego (Livro do Desassossego)",
    "anio": 1982,
    "genero": "Prosa fragmentaria",
    "descripcion": "Diario íntimo atribuido al semiheterónimo Bernardo Soares, reunido a partir de fragmentos del baúl y publicado póstumamente en 1982."
   },
   {
    "titulo": "Poemas de Alberto Caeiro, Ricardo Reis y Álvaro de Campos",
    "anio": 1915,
    "genero": "Poesía heteronímica",
    "descripcion": "Los tres heterónimos principales, cuyos primeros textos datan de hacia 1914-1915; Campos apareció en la revista Orpheu (1915) y el conjunto se editó sistemáticamente tras la muerte del autor."
   }
  ],
  "legadoPatrimonial": "Su archivo, el célebre baúl con más de veinticinco mil páginas, se conserva en Portugal y sigue siendo objeto de edición. La Casa Fernando Pessoa, en Lisboa, ocupa el edificio donde vivió entre 1920 y 1935, y sus restos reposan en el Monasterio de los Jerónimos desde 1988.",
  "dominioPublico": false,
  "citas": [
   {
    "texto": "El amor es una muestra mortal de la inmortalidad.",
    "obra": "Aforismos (compilación, ed. 2005)",
    "url": "https://es.wikiquote.org/wiki/Fernando_Pessoa"
   }
  ],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/3/32/Pessoa_chapeu.jpg",
   "licencia": "Dominio público",
   "autorFoto": "",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Pessoa_chapeu.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Fernando_Pessoa",
   "https://en.wikipedia.org/wiki/Fernando_Pessoa",
   "https://pt.wikipedia.org/wiki/Fernando_Pessoa",
   "https://en.wikipedia.org/wiki/Casa_Fernando_Pessoa",
   "https://es.wikiquote.org/wiki/Fernando_Pessoa",
   "https://commons.wikimedia.org/wiki/File:Pessoa_chapeu.jpg"
  ],
  "notas": "Causa de muerte: las fuentes registran cirrosis hepática, pero en.wikipedia y pt.wikipedia señalan que ese diagnóstico ha sido cuestionado (se ha propuesto pancreatitis). Retrato: en.wikipedia y pt.wikipedia usan la fotografía de 1914 «Pessoa_chapeu.jpg» (dominio público, autor no identificado con certeza en Commons); es.wikipedia usa la foto de carné «Pessoa_1928_Foto_BI.png» (https://upload.wikimedia.org/wikipedia/commons/5/54/Pessoa_1928_Foto_BI.png, también dominio público). Pessoa falleció en 1935, por lo que su obra no está en dominio público conforme al criterio indicado (vida + 100). La cita proviene de una antología de aforismos y es.wikiquote no la vincula a una obra concreta. Britannica y Poetry Foundation devolvieron error 403."
 },
 {
  "id": "dante-alighieri",
  "nombre": "Dante Alighieri",
  "anios": "1265 – 1321",
  "nacimiento": "c. 1265 (entre mayo y junio) · Florencia, Italia",
  "fallecimiento": "14 de septiembre de 1321 · Rávena",
  "municipioOrigen": "Florencia, Italia",
  "movimiento": "Dolce stil novo",
  "bloqueCanon": "universales",
  "tituloHonorifico": "El poeta de la Divina Comedia",
  "semblanzaSintetica": "Poeta florentino, autor de la «Divina Comedia», figura mayor de la literatura medieval y padre de la lengua italiana. Participó en la vida política de Florencia hasta su condena al exilio en 1302, y escribió su obra principal en los años de destierro. Murió en Rávena en 1321, donde se conserva su tumba.",
  "biografiaCompleta": [
   "Dante Alighieri nació en Florencia hacia 1265, probablemente entre mediados de mayo y mediados de junio; fue bautizado el 27 de marzo de 1266. Según su propio relato en la «Vida nueva», conoció a Beatriz a los nueve años; ella murió en 1290 y se convirtió en el centro de su poesía. Contrajo matrimonio con Gemma Donati y en 1289 combatió en la batalla de Campaldino. Su formación poética se vincula al dolce stil novo, la corriente lírica florentina de finales del siglo XIII a la que pertenecen también sus primeros sonetos y la «Vida nueva», compuesta hacia 1292-1295.",
   "Para participar en el gobierno de Florencia se inscribió en 1295 en el gremio de médicos y boticarios, y entre el 15 de junio y el 15 de agosto de 1300 fue uno de los siete priores de la ciudad, en el bando de los güelfos blancos. Tras la victoria de los güelfos negros, el 27 de enero de 1302 fue condenado a una multa y a la confiscación de bienes y el 10 de marzo de 1302 a muerte en la hoguera si regresaba. Nunca volvió a Florencia. En el exilio escribió el «Convivio» y «De vulgari eloquentia» (hacia 1303-1307), y comenzó, hacia 1307, la «Comedia».",
   "Entre 1310 y 1313 apoyó la empresa del emperador Enrique VII, periodo al que se asocia el tratado «Monarquía». Residió en Verona, bajo la protección de Cangrande della Scala (1313-1318), y desde 1318 en Rávena, acogido por Guido Novello da Polenta, donde terminó el «Paraíso». Murió en Rávena en la noche del 13 al 14 de septiembre de 1321, de malaria contraída al volver de una misión diplomática en Venecia, y fue sepultado en esa ciudad, en la iglesia de San Francisco. Florencia le dedicó en 1829 un cenotafio en Santa Croce, pero sus restos permanecen en Rávena."
  ],
  "obrasCapitales": [
   {
    "titulo": "Vida nueva (Vita nuova)",
    "anio": 1293,
    "genero": "Prosa y poesía",
    "descripcion": "Libro juvenil en prosa y verso, compuesto hacia 1292-1295, que narra su amor por Beatriz y recoge sonetos y canciones del dolce stil novo."
   },
   {
    "titulo": "De vulgari eloquentia",
    "anio": 1305,
    "genero": "Tratado (en latín)",
    "descripcion": "Tratado inacabado, escrito hacia 1303-1305, en defensa de la lengua vulgar como lengua literaria."
   },
   {
    "titulo": "Convivio (Il Convivio)",
    "anio": 1307,
    "genero": "Tratado",
    "descripcion": "Obra filosófica inconclusa en italiano, redactada en los primeros años del exilio (c. 1304-1307), concebida como comentario a sus propias canciones."
   },
   {
    "titulo": "Monarquía (De Monarchia)",
    "anio": 1313,
    "genero": "Tratado político (en latín)",
    "descripcion": "Defensa de la monarquía universal y de la independencia del poder imperial frente al papado; su datación oscila entre 1308 y 1313 según las fuentes."
   },
   {
    "titulo": "Divina Comedia (Commedia)",
    "anio": 1321,
    "genero": "Poema épico-alegórico",
    "descripcion": "Viaje por el Infierno, el Purgatorio y el Paraíso, en tercetos encadenados; iniciado hacia 1307 y concluido poco antes de su muerte en 1321. Es la obra fundacional de la lengua italiana."
   }
  ],
  "legadoPatrimonial": "Su tumba se conserva en Rávena, donde murió, y Florencia mantiene un cenotafio en la basílica de Santa Croce desde 1829. La «Divina Comedia» es considerada la obra cumbre de la literatura medieval y el cimiento de la lengua italiana.",
  "dominioPublico": true,
  "citas": [
   {
    "texto": "Amor y gentil corazón son una misma cosa.",
    "obra": "Vida nueva (c. 1293)",
    "url": "https://es.wikiquote.org/wiki/Dante_Alighieri"
   },
   {
    "texto": "No hay dolor más grande que el de recordar el tiempo feliz en la desgracia.",
    "obra": "Divina Comedia, Infierno, canto V (c. 1321)",
    "url": "https://es.wikiquote.org/wiki/Dante_Alighieri"
   }
  ],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Portrait_de_Dante.jpg",
   "licencia": "Dominio público",
   "autorFoto": "Sandro Botticelli (retrato al temple, c. 1495; Fundación Bodmer, Cologny)",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Portrait_de_Dante.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Dante_Alighieri",
   "https://en.wikipedia.org/wiki/Dante_Alighieri",
   "https://it.wikipedia.org/wiki/Dante_Alighieri",
   "https://www.treccani.it/enciclopedia/dante-alighieri/",
   "https://es.wikiquote.org/wiki/Dante_Alighieri",
   "https://commons.wikimedia.org/wiki/File:Portrait_de_Dante.jpg"
  ],
  "notas": "Fecha de muerte: es.wikipedia y en.wikipedia dan 14 de septiembre de 1321; it.wikipedia y Treccani precisan «la noche del 13 al 14 de septiembre». Fecha de nacimiento: solo se conoce aproximadamente (c. mayo-junio de 1265; es.wikipedia sugiere c. 29 de mayo). Las fechas de composición de las obras varían según las fuentes: Vita nuova (1292-1295), De vulgari eloquentia (1302-1307), Convivio (1303-1309), Monarchia (1308-1313); los años indicados en «anio» son aproximados. Retrato: es.wikipedia usa el retrato de Botticelli (Portrait_de_Dante.jpg); en.wikipedia usa el fresco del Bargello atribuido a Giotto (File:Bargello_-_Kapelle_Fresko_2a.jpg). La segunda cita aparece textualmente en es.wikiquote, que la toma de una antología sin indicar el canto; la ubicación en Infierno V corresponde al pasaje de Francesca («Nessun maggior dolore...»). Britannica y Poetry Foundation devolvieron error 403."
 },
 {
  "id": "william-shakespeare",
  "nombre": "William Shakespeare",
  "anios": "1564 – 1616",
  "nacimiento": "c. 23 de abril de 1564 (bautizado el 26 de abril de 1564) · Stratford-upon-Avon, Inglaterra",
  "fallecimiento": "23 de abril de 1616 (calendario juliano) · Stratford-upon-Avon",
  "municipioOrigen": "Stratford-upon-Avon, Inglaterra",
  "movimiento": "Teatro isabelino y jacobino (Renacimiento inglés)",
  "bloqueCanon": "universales",
  "tituloHonorifico": "El Bardo de Avon",
  "semblanzaSintetica": "Dramaturgo, poeta y actor inglés, autor de unas treinta y nueve obras teatrales y 154 sonetos. Trabajó en Londres con la compañía Lord Chamberlain's Men, luego King's Men, que en 1599 inauguró el teatro The Globe. Tragedias como Hamlet, Otelo, El rey Lear y Macbeth lo han convertido en el autor más influyente de la literatura en lengua inglesa.",
  "biografiaCompleta": [
   "William Shakespeare fue bautizado el 26 de abril de 1564 en Stratford-upon-Avon, condado de Warwickshire, Inglaterra; la tradición sitúa su nacimiento el 23 de abril, aunque la fecha exacta se desconoce. Fue hijo de John Shakespeare y Mary Arden. A finales de noviembre de 1582, con dieciocho años, se casó con Anne Hathaway, de veintiséis; tuvieron tres hijos: Susanna, bautizada en mayo de 1583, y los mellizos Hamnet y Judith, bautizados en febrero de 1585. Poco se sabe con certeza de sus años de formación ni de su llegada a Londres, vacío que ha alimentado numerosas conjeturas.",
   "En Londres se integró como actor y dramaturgo en la compañía Lord Chamberlain's Men, que a partir de 1603, bajo el patrocinio del rey Jacobo I, pasó a llamarse King's Men. La compañía inauguró en el otoño de 1599 el teatro The Globe, con capacidad para unos dos mil espectadores. Entre 1589 y 1613 escribió la mayor parte de su obra: unas treinta y nueve piezas teatrales, entre comedias, tragedias y dramas históricos, además de poemas narrativos y 154 sonetos, publicados en 1609. Hamlet, Otelo, El rey Lear y Macbeth pertenecen a los primeros años del siglo XVII.",
   "Murió en Stratford-upon-Avon el 23 de abril de 1616, según el calendario juliano entonces vigente en Inglaterra, a los cincuenta y dos años. En 1623 se publicó el First Folio, edición póstuma que reunió treinta y seis de sus obras, dieciocho de ellas impresas por primera vez; sin ese volumen buena parte de su teatro se habría perdido. Su lenguaje, sus personajes y sus argumentos han sido traducidos, representados y reinterpretados en todas las lenguas y en todos los géneros, lo que lo ha convertido en el autor más influyente de la literatura en inglés."
  ],
  "obrasCapitales": [
   {
    "titulo": "Romeo y Julieta (Romeo and Juliet)",
    "anio": 1597,
    "genero": "Tragedia",
    "descripcion": "Escrita entre 1591 y 1595 y publicada en cuarto en 1597, narra el amor de dos jóvenes de familias enfrentadas en Verona y su desenlace fatal."
   },
   {
    "titulo": "Hamlet",
    "anio": 1601,
    "genero": "Tragedia",
    "descripcion": "Compuesta entre 1599 y 1601, sigue al príncipe de Dinamarca en su venganza contra el tío que asesinó a su padre; contiene el monólogo «Ser o no ser»."
   },
   {
    "titulo": "Sonetos (Sonnets)",
    "anio": 1609,
    "genero": "Poesía lírica",
    "descripcion": "Conjunto de 154 sonetos ingleses publicados en el cuarto de 1609, única edición aparecida en vida del autor, sobre el amor, el tiempo y la belleza."
   },
   {
    "titulo": "El rey Lear (King Lear)",
    "anio": 1606,
    "genero": "Tragedia",
    "descripcion": "Escrita a finales de 1605 o comienzos de 1606 y representada por primera vez en 1606, muestra la caída de un rey que reparte su reino entre sus hijas."
   },
   {
    "titulo": "La tempestad (The Tempest)",
    "anio": 1611,
    "genero": "Comedia / romance",
    "descripcion": "Probablemente escrita entre 1610 y 1611, una de las últimas obras que compuso en solitario; Próspero, mago desterrado en una isla, dirige el destino de sus enemigos."
   }
  ],
  "legadoPatrimonial": "Su obra, conservada en gran parte gracias al First Folio de 1623, es patrimonio común del teatro y la poesía universales. Su casa natal y su tumba en Stratford-upon-Avon, así como el retrato Chandos (primera adquisición de la National Portrait Gallery de Londres), son testimonios materiales de ese legado.",
  "dominioPublico": true,
  "citas": [
   {
    "texto": "El mundo entero es un teatro.",
    "obra": "Como gustéis (c. 1599)",
    "url": "https://es.wikiquote.org/wiki/William_Shakespeare"
   },
   {
    "texto": "Estamos hechos de la misma materia que los sueños y nuestra pequeña vida termina durmiendo.",
    "obra": "La tempestad (c. 1611)",
    "url": "https://es.wikiquote.org/wiki/William_Shakespeare"
   }
  ],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/2/21/William_Shakespeare_by_John_Taylor%2C_edited.jpg",
   "licencia": "Dominio público",
   "autorFoto": "Retrato Chandos, atribuido a John Taylor (c. 1600–1610); National Portrait Gallery, Londres (NPG 1)",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:William_Shakespeare_by_John_Taylor,_edited.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/William_Shakespeare",
   "https://en.wikipedia.org/wiki/William_Shakespeare",
   "https://es.wikipedia.org/wiki/Sonetos_(Shakespeare)",
   "https://en.wikipedia.org/wiki/Hamlet",
   "https://en.wikipedia.org/wiki/Romeo_and_Juliet",
   "https://en.wikipedia.org/wiki/King_Lear",
   "https://en.wikipedia.org/wiki/The_Tempest",
   "https://en.wikipedia.org/wiki/Chandos_portrait",
   "https://es.wikiquote.org/wiki/William_Shakespeare",
   "https://commons.wikimedia.org/wiki/File:William_Shakespeare_by_John_Taylor,_edited.jpg"
  ],
  "notas": "La fecha de nacimiento es incierta: solo consta el bautizo el 26 de abril de 1564; el 23 de abril es la fecha tradicional. Las fechas siguen el calendario juliano vigente en Inglaterra (la muerte, 23 de abril de 1616, equivale al 3 de mayo gregoriano). Sobre el matrimonio, es.wikipedia indica el 28 de noviembre de 1582 y en.wikipedia la licencia matrimonial del 27 de noviembre de 1582. Los años de las obras son fechas aproximadas de composición o primera edición. La autoría del retrato Chandos no está determinada con certeza; la atribución tradicional a John Taylor procede de una nota de George Vertue (1719). No se recogió la cita de Hamlet porque es.wikiquote documenta más de veinte traducciones distintas de «Ser o no ser»."
 },
 {
  "id": "franz-kafka",
  "nombre": "Franz Kafka",
  "anios": "1883 – 1924",
  "nacimiento": "3 de julio de 1883 · Praga, Reino de Bohemia (Imperio austrohúngaro; hoy República Checa)",
  "fallecimiento": "3 de junio de 1924 · Kierling (Klosterneuburg), Austria",
  "municipioOrigen": "Praga, República Checa",
  "movimiento": "Modernismo de lengua alemana (literatura de Praga)",
  "bloqueCanon": "universales",
  "tituloHonorifico": "Cronista de lo absurdo moderno",
  "semblanzaSintetica": "Escritor judío de lengua alemana nacido en Praga, doctor en Derecho y empleado de seguros durante casi toda su vida adulta. Publicó en vida pocos relatos, entre ellos La metamorfosis (1915); sus novelas El proceso, El castillo y América aparecieron póstumamente gracias a su amigo Max Brod, que desoyó su petición de destruir los manuscritos.",
  "biografiaCompleta": [
   "Franz Kafka nació el 3 de julio de 1883 en Praga, entonces capital del Reino de Bohemia dentro del Imperio austrohúngaro, en una familia judía de lengua alemana. Fue el primogénito de Hermann Kafka, comerciante, y de Julie Löwy. Estudió Derecho en la Universidad alemana de Praga y obtuvo el doctorado el 18 de junio de 1906. Tras un breve paso por la aseguradora Assicurazioni Generali, entre noviembre de 1907 y julio de 1908, ingresó en el Instituto de Seguros de Accidentes de Trabajo del Reino de Bohemia, donde trabajó durante años mientras escribía de noche.",
   "En septiembre de 1912 escribió de una sola tirada el relato La condena, que marca su madurez literaria; ese mismo otoño redactó La metamorfosis, publicada en 1915. En 1914 comenzó la novela El proceso y escribió En la colonia penitenciaria, impreso en 1919. También redactó la extensa Carta al padre, que nunca llegó a entregarle. En agosto de 1917 una hemoptisis confirmó que padecía tuberculosis pulmonar, y en 1918 el Instituto le concedió una pensión por enfermedad. En enero de 1922 inició El castillo. Mantuvo una estrecha amistad con Max Brod, a quien pidió que destruyera sus manuscritos.",
   "Murió el 3 de junio de 1924, a los cuarenta años, en el sanatorio del doctor Hoffmann en Kierling, a las afueras de Viena; la tuberculosis laríngea le impedía alimentarse. Fue enterrado el 11 de junio en el Nuevo Cementerio Judío de Praga-Žižkov. Brod desoyó su voluntad y supervisó la edición de las novelas inacabadas: El proceso (1925), El castillo (1926) y América (1927). En vida solo había publicado unos pocos relatos y volúmenes breves, de modo que su fama es enteramente póstuma. El adjetivo «kafkiano» designa hoy situaciones absurdas y opresivas semejantes a las de sus relatos."
  ],
  "obrasCapitales": [
   {
    "titulo": "La metamorfosis (Die Verwandlung)",
    "anio": 1915,
    "genero": "Relato largo",
    "descripcion": "Escrita en 1912 y publicada en 1915, cuenta cómo el viajante Gregor Samsa despierta convertido en un insecto monstruoso y es rechazado por su familia."
   },
   {
    "titulo": "En la colonia penitenciaria (In der Strafkolonie)",
    "anio": 1919,
    "genero": "Relato",
    "descripcion": "Escrito en octubre de 1914 y publicado en 1919, describe una máquina de ejecución que graba la sentencia en el cuerpo del condenado."
   },
   {
    "titulo": "El proceso (Der Process)",
    "anio": 1925,
    "genero": "Novela",
    "descripcion": "Comenzada en 1914 y publicada póstumamente por Max Brod en 1925, sigue a Josef K., detenido y juzgado por un tribunal inaccesible sin conocer nunca la acusación."
   },
   {
    "titulo": "El castillo (Das Schloss)",
    "anio": 1926,
    "genero": "Novela",
    "descripcion": "Iniciada el 27 de enero de 1922 y editada póstumamente en 1926, narra los esfuerzos inútiles del agrimensor K. por ser admitido por las autoridades de un castillo."
   },
   {
    "titulo": "América / El desaparecido (Der Verschollene)",
    "anio": 1927,
    "genero": "Novela",
    "descripcion": "Comenzada en 1912 y publicada por Brod en 1927 con el título Amerika, relata las peripecias del joven Karl Rossmann, enviado por su familia a los Estados Unidos."
   }
  ],
  "legadoPatrimonial": "Su obra, salvada por Max Brod, es una de las referencias centrales de la narrativa del siglo XX. Praga conserva su tumba en el Nuevo Cementerio Judío de Žižkov y numerosos lugares vinculados a su vida, y el término «kafkiano» ha pasado al vocabulario común de muchas lenguas.",
  "dominioPublico": true,
  "citas": [
   {
    "texto": "Querido padre: Hace poco tiempo me preguntaste por qué te tengo tanto miedo.",
    "obra": "Carta al padre (escrita en 1919; ed. Gradifco, 2008)",
    "url": "https://es.wikiquote.org/wiki/Franz_Kafka"
   },
   {
    "texto": "No puedo dormir. Tengo sueños, pero no tengo sueño.",
    "obra": "Diarios (1910–1923) (ed. Tusquets, 2021)",
    "url": "https://es.wikiquote.org/wiki/Franz_Kafka"
   }
  ],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/2/26/Franz_Kafka%2C_1923.jpg",
   "licencia": "Dominio público",
   "autorFoto": "Fotógrafo no identificado (probablemente septiembre de 1923, Berlín)",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Franz_Kafka,_1923.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Franz_Kafka",
   "https://en.wikipedia.org/wiki/Franz_Kafka",
   "https://es.wikiquote.org/wiki/Franz_Kafka",
   "https://commons.wikimedia.org/wiki/File:Franz_Kafka,_1923.jpg",
   "https://commons.wikimedia.org/wiki/File:Kafka1906_cropped.jpg"
  ],
  "notas": "Kierling es hoy parte del municipio de Klosterneuburg (Baja Austria). Sobre su retiro laboral las fuentes difieren: en.wikipedia y es.wikipedia indican que en 1918 el Instituto le concedió una pensión por enfermedad; es.wikipedia menciona además la jubilación definitiva en 1922. El año 1927 para América procede de es.wikipedia (en.wikipedia no lo precisa). La Carta al padre se escribió en vida pero no se publicó hasta después de su muerte. Existe otra fotografía habitual en Commons (Kafka1906_cropped.jpg, Atelier Jacobi, c. 1906, dominio público), pero la imagen principal de las Wikipedias en español e inglés es la de 1923."
 },
 {
  "id": "virginia-woolf",
  "nombre": "Virginia Woolf (Adeline Virginia Stephen)",
  "anios": "1882 – 1941",
  "nacimiento": "25 de enero de 1882 · Londres (Kensington), Reino Unido",
  "fallecimiento": "28 de marzo de 1941 · Río Ouse, cerca de Rodmell (Lewes), Sussex",
  "municipioOrigen": "Londres, Reino Unido",
  "movimiento": "Modernismo anglosajón · Grupo de Bloomsbury",
  "bloqueCanon": "universales",
  "tituloHonorifico": "Renovadora de la novela moderna",
  "semblanzaSintetica": "Novelista y ensayista inglesa, figura central del modernismo y miembro fundadora del Grupo de Bloomsbury. Con La señora Dalloway, Al faro y Las olas llevó el fluir de la conciencia a la novela, y en Una habitación propia (1929) reivindicó la independencia material e intelectual de las mujeres que escriben. Fundó con su marido Leonard Woolf la editorial Hogarth Press.",
  "biografiaCompleta": [
   "Adeline Virginia Stephen nació el 25 de enero de 1882 en el número 22 de Hyde Park Gate, en Kensington, Londres. Era hija de sir Leslie Stephen, escritor y crítico, y de Julia Prinsep Stephen, nacida Jackson. Se educó en casa, con acceso a la amplia biblioteca paterna. Tras la muerte de su padre en 1904 se instaló con sus hermanos en el barrio londinense de Bloomsbury, donde se formó el círculo de escritores, artistas e intelectuales conocido como Grupo de Bloomsbury, del que fue miembro fundadora y que marcó su vida social e intelectual.",
   "El 10 de agosto de 1912 se casó con el escritor Leonard Woolf, y en 1917 fundaron juntos la editorial Hogarth Press, que publicó buena parte de su obra. Su primera novela, Fin de viaje, apareció en 1915. Con La señora Dalloway (1925), Al faro (1927) y Las olas (1931) desarrolló el monólogo interior y el fluir de la conciencia, y renovó la forma de la novela moderna. Orlando (1928) juega con el tiempo y la identidad sexual de su protagonista, y el ensayo Una habitación propia (1929) es un texto fundacional de la crítica literaria feminista.",
   "A lo largo de su vida sufrió graves episodios de enfermedad mental. El 28 de marzo de 1941 se ahogó en el río Ouse, cerca de Monk's House, su casa de Rodmell, en Sussex, tras llenarse de piedras los bolsillos. Dejó concluida la novela Entre actos, publicada póstumamente ese mismo año. Sus diarios, cartas y ensayos, editados con posterioridad, completan una obra que la sitúa entre las figuras centrales del modernismo anglosajón y en la que la reivindicación de la independencia intelectual de las mujeres ocupa un lugar decisivo."
  ],
  "obrasCapitales": [
   {
    "titulo": "La señora Dalloway (Mrs Dalloway)",
    "anio": 1925,
    "genero": "Novela",
    "descripcion": "Un solo día de junio en Londres, visto a través de la conciencia de Clarissa Dalloway mientras prepara una fiesta y del veterano de guerra Septimus Warren Smith."
   },
   {
    "titulo": "Al faro (To the Lighthouse)",
    "anio": 1927,
    "genero": "Novela",
    "descripcion": "Dos jornadas de la familia Ramsay en su casa de veraneo, separadas por diez años; una de las cumbres de la técnica del fluir de la conciencia."
   },
   {
    "titulo": "Orlando",
    "anio": 1928,
    "genero": "Novela",
    "descripcion": "Biografía ficticia de un personaje que atraviesa cuatro siglos de historia inglesa y cambia de sexo, inspirada en su amiga Vita Sackville-West."
   },
   {
    "titulo": "Una habitación propia (A Room of One's Own)",
    "anio": 1929,
    "genero": "Ensayo",
    "descripcion": "Ensayo nacido de dos conferencias sobre las mujeres y la novela; sostiene que una mujer necesita dinero y una habitación propia para poder escribir."
   },
   {
    "titulo": "Las olas (The Waves)",
    "anio": 1931,
    "genero": "Novela",
    "descripcion": "Seis voces se alternan en monólogos desde la infancia hasta la vejez, en la obra más experimental y lírica de la autora."
   }
  ],
  "legadoPatrimonial": "Sus novelas y ensayos son lecturas de referencia del modernismo y del pensamiento feminista en todo el mundo. Monk's House, su casa de Rodmell, y los archivos de la Hogarth Press forman parte del patrimonio literario británico.",
  "dominioPublico": false,
  "citas": [
   {
    "texto": "Uno no puede pensar bien, amar bien, dormir bien, si no ha comido bien.",
    "obra": "Una habitación propia (1929)",
    "url": "https://es.wikiquote.org/wiki/Virginia_Woolf"
   },
   {
    "texto": "Amar nos separa de los demás.",
    "obra": "La señora Dalloway (1925)",
    "url": "https://es.wikiquote.org/wiki/Virginia_Woolf"
   }
  ],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/0/0b/George_Charles_Beresford_-_Virginia_Woolf_in_1902_-_Restoration.jpg",
   "licencia": "Dominio público",
   "autorFoto": "George Charles Beresford (1902); restauración de Adam Cuerden",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:George_Charles_Beresford_-_Virginia_Woolf_in_1902_-_Restoration.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Virginia_Woolf",
   "https://en.wikipedia.org/wiki/Virginia_Woolf",
   "https://es.wikiquote.org/wiki/Virginia_Woolf",
   "https://commons.wikimedia.org/wiki/File:George_Charles_Beresford_-_Virginia_Woolf_in_1902_-_Restoration.jpg"
  ],
  "notas": "Falleció en 1941, por lo que su obra no está en dominio público conforme al criterio de vida más cien años (ley mexicana). Sobre el lugar de la muerte, es.wikipedia dice «río Ouse, cerca de Lewes» y en.wikipedia «río Ouse, cerca de Monk's House, en Rodmell»; Rodmell pertenece al distrito de Lewes, en East Sussex. Las citas proceden de es.wikiquote, que las remite a las ediciones de Greenbooks (2016) y Akal (2015); el texto puede variar en otras traducciones. Britannica devolvió error 403 y no pudo usarse para el contraste."
 },
 {
  "id": "rainer-maria-rilke",
  "nombre": "Rainer Maria Rilke (René Karl Wilhelm Johann Josef Maria Rilke)",
  "anios": "1875 – 1926",
  "nacimiento": "4 de diciembre de 1875 · Praga, Bohemia (entonces Imperio austrohúngaro; hoy República Checa)",
  "fallecimiento": "29 de diciembre de 1926 · Sanatorio Valmont, Glion (Montreux), Suiza",
  "municipioOrigen": "Praga, República Checa",
  "movimiento": "Simbolismo y modernidad lírica en lengua alemana",
  "bloqueCanon": "universales",
  "tituloHonorifico": "Poeta de las Elegías de Duino y de las Cartas a un joven poeta",
  "semblanzaSintetica": "Poeta y narrador en lengua alemana nacido en Praga, considerado una de las voces líricas más influyentes del siglo XX. Su obra, de intensa interioridad, culmina en las Elegías de Duino y los Sonetos a Orfeo, ambos publicados en 1923. Murió de leucemia en Suiza a los 51 años.",
  "biografiaCompleta": [
   "René Karl Wilhelm Johann Josef Maria Rilke nació en Praga el 4 de diciembre de 1875, hijo de Josef Rilke, funcionario ferroviario, y de Sophie (Phia) Entz. Su paso por las escuelas militares de Sankt Pölten y Mährisch-Weisskirchen fue una experiencia dolorosa que marcó su juventud. En 1897 conoció en Múnich a Lou Andreas-Salomé, con quien mantuvo una relación decisiva para su formación intelectual; fue ella quien lo animó a cambiar su nombre de René por Rainer. Con ella viajó dos veces a Rusia, donde halló estímulos espirituales que alimentaron El libro de horas, publicado por la editorial Insel en 1905.",
   "En 1901 se casó con la escultora Clara Westhoff, con quien tuvo una hija, Ruth, nacida ese mismo año. En París trabajó como secretario del escultor Auguste Rodin, cuya disciplina del oficio influyó en los Nuevos poemas (1907-1908), donde Rilke ensayó el llamado poema-cosa, una mirada objetiva y concentrada sobre lo real. De su experiencia parisina nació también su única novela, Los cuadernos de Malte Laurids Brigge (1910), relato en forma de diario de un joven danés que se enfrenta a la soledad y la angustia de la gran ciudad.",
   "En 1912, en el castillo de Duino, comenzó las Elegías, que no concluiría hasta febrero de 1922 en el castillo de Muzot, cerca de Sierre, en Suiza, donde residió desde 1921 hasta su muerte. En aquellas semanas de 1922 escribió además los Sonetos a Orfeo; ambos libros aparecieron en 1923. Enfermo de leucemia, murió el 29 de diciembre de 1926 en el sanatorio Valmont, sobre Montreux, y fue enterrado el 2 de enero de 1927 en el cementerio de Raron (Valais). En 1929 Franz Xaver Kappus publicó las diez cartas que Rilke le había escrito entre 1902 y 1908, conocidas como Cartas a un joven poeta."
  ],
  "obrasCapitales": [
   {
    "titulo": "El libro de horas (Das Stunden-Buch)",
    "anio": 1905,
    "genero": "Poesía",
    "descripcion": "Ciclo de poemas de tono místico y oracional, escrito entre 1899 y 1903 y publicado por Insel en 1905, en el que un monje pintor dialoga con Dios."
   },
   {
    "titulo": "Nuevos poemas (Neue Gedichte)",
    "anio": 1907,
    "genero": "Poesía",
    "descripcion": "Dos volúmenes (1907 y 1908) marcados por la lección de Rodin: poemas que buscan captar la esencia de objetos, animales y figuras con precisión plástica."
   },
   {
    "titulo": "Los cuadernos de Malte Laurids Brigge (Die Aufzeichnungen des Malte Laurids Brigge)",
    "anio": 1910,
    "genero": "Novela",
    "descripcion": "Única novela de Rilke, en forma de apuntes de un joven poeta danés en París; una de las obras fundacionales de la narrativa moderna en alemán."
   },
   {
    "titulo": "Elegías de Duino (Duineser Elegien)",
    "anio": 1923,
    "genero": "Poesía",
    "descripcion": "Diez elegías iniciadas en Duino en 1912 y terminadas en Muzot en 1922; meditación sobre la existencia, el amor, la muerte y la figura del ángel."
   },
   {
    "titulo": "Sonetos a Orfeo (Die Sonette an Orpheus)",
    "anio": 1923,
    "genero": "Poesía",
    "descripcion": "Cincuenta y cinco sonetos escritos en pocas semanas de 1922, celebración del canto y de la transformación bajo el signo del mito órfico."
   }
  ],
  "legadoPatrimonial": "Rilke renovó la lírica en lengua alemana y su influencia alcanza a la poesía de todo el siglo XX, también en español. Sus Cartas a un joven poeta, publicadas póstumamente en 1929, siguen siendo una lectura iniciática para escritores de todo el mundo.",
  "dominioPublico": false,
  "citas": [
   {
    "texto": "Busca la profundidad de las cosas; hasta ahí nunca logra descender la ironía",
    "obra": "Cartas a un joven poeta (1929, edición póstuma)",
    "url": "https://es.wikiquote.org/wiki/Rainer_Maria_Rilke"
   },
   {
    "texto": "En la vida no hay clases para principiantes; en seguida exigen de uno lo más difícil",
    "obra": "Los cuadernos de Malte Laurids Brigge (1910)",
    "url": "https://es.wikiquote.org/wiki/Rainer_Maria_Rilke"
   }
  ],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Rainer_Maria_Rilke_1900.jpg",
   "licencia": "Dominio público",
   "autorFoto": "Autor desconocido (fotografía del 18 de septiembre de 1900)",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Rainer_Maria_Rilke_1900.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Rainer_Maria_Rilke",
   "https://en.wikipedia.org/wiki/Rainer_Maria_Rilke",
   "https://de.wikipedia.org/wiki/Rainer_Maria_Rilke",
   "https://es.wikiquote.org/wiki/Rainer_Maria_Rilke",
   "https://commons.wikimedia.org/wiki/File:Rainer_Maria_Rilke_1900.jpg"
  ],
  "notas": "Dominio público: Rilke falleció el 29 de diciembre de 1926, por lo que bajo la regla mexicana de vida + 100 años su obra original no pasa al dominio público hasta el 1 de enero de 2027; por ello dominioPublico es false. Lugar de muerte: la infobox de es.wikipedia menciona Raroña (Raron), que en realidad es el lugar de su sepultura; en.wikipedia y de.wikipedia precisan que murió en el sanatorio Valmont, en Glion, sobre Montreux, y fue enterrado en Raron el 2 de enero de 1927. Sobre su trabajo con Rodin, es.wikipedia indica que fue secretario en 1905-1906, mientras el resumen de en.wikipedia da un periodo más amplio (1902-1910); por ello no se fija año en la biografía. Las citas de es.wikiquote proceden de recopilaciones (Señor 1997; ResumenExpress 2016), no de ediciones críticas; conviene cotejarlas con una traducción de referencia antes de publicarlas. Britannica y Poetry Foundation devolvieron error 403 y no pudieron usarse como contraste."
 },
 {
  "id": "anton-chejov",
  "nombre": "Antón Pávlovich Chéjov",
  "anios": "1860 – 1904",
  "nacimiento": "29 de enero de 1860 (17 de enero según el calendario juliano) · Taganrog, Imperio ruso (hoy Rusia)",
  "fallecimiento": "15 de julio de 1904 (2 de julio según el calendario juliano) · Badenweiler, Alemania",
  "municipioOrigen": "Taganrog, Rusia",
  "movimiento": "Realismo ruso; renovador del cuento y del teatro modernos",
  "bloqueCanon": "universales",
  "tituloHonorifico": "Maestro del cuento breve y del teatro moderno",
  "semblanzaSintetica": "Cuentista, dramaturgo y médico ruso, nacido en Taganrog en 1860. Transformó el relato breve con una prosa contenida y sin moraleja, y renovó la escena con La gaviota, Tío Vania, Las tres hermanas y El jardín de los cerezos, estrenadas por el Teatro de Arte de Moscú. Murió de tuberculosis en Badenweiler, Alemania, en 1904.",
  "biografiaCompleta": [
   "Antón Pávlovich Chéjov nació en Taganrog, puerto del mar de Azov, el 29 de enero de 1860 (17 de enero del calendario juliano). Su padre, Pável, era tendero y director de coro; cuando el negocio quebró, la familia se trasladó a Moscú y el joven Antón permaneció en Taganrog para terminar el bachillerato, sosteniéndose con clases particulares. En 1879 se reunió con los suyos e ingresó en la Facultad de Medicina de la Universidad de Moscú. Para ayudar a su familia empezó a publicar relatos humorísticos en revistas con seudónimo, y en 1884 obtuvo el título de médico.",
   "Chéjov ejerció la medicina, a menudo atendiendo gratuitamente a los pobres, mientras su literatura ganaba profundidad. La estepa (1888) marcó su madurez narrativa y ese mismo año recibió el Premio Pushkin por la colección Al anochecer. En 1890 emprendió el largo viaje a la isla de Sajalín para estudiar la colonia penal, experiencia recogida en La isla de Sajalín (1895). En 1892 se instaló en la finca de Mélijovo, cerca de Moscú, donde trabajó como médico rural y escribió La sala número seis (1892) y La gaviota, cuyo estreno en San Petersburgo en 1896 fue un fracaso.",
   "El montaje de La gaviota por el Teatro de Arte de Moscú en 1898, bajo la dirección de Konstantín Stanislavski, cambió el rumbo de su teatro: siguieron Tío Vania (1899), Las tres hermanas (1901) y El jardín de los cerezos (1904). Enfermo de tuberculosis, en 1899 se trasladó a Yalta, en Crimea, donde escribió La dama del perrito (1899). El 25 de mayo de 1901 se casó con la actriz Olga Knipper, intérprete de sus obras. Murió el 15 de julio de 1904 (2 de julio juliano) en el balneario alemán de Badenweiler; su cuerpo fue trasladado a Moscú."
  ],
  "obrasCapitales": [
   {
    "titulo": "La estepa (Степь)",
    "anio": 1888,
    "genero": "Novela corta",
    "descripcion": "Relato del viaje de un niño a través de la estepa rusa; obra con la que Chéjov pasó de los cuentos humorísticos a la literatura seria."
   },
   {
    "titulo": "La sala número seis (Палата № 6)",
    "anio": 1892,
    "genero": "Cuento",
    "descripcion": "Un médico de provincias termina encerrado en el pabellón psiquiátrico que dirigía; una de las narraciones más sombrías y celebradas del autor."
   },
   {
    "titulo": "La gaviota (Чайка)",
    "anio": 1896,
    "genero": "Teatro",
    "descripcion": "Comedia en cuatro actos sobre el arte, el amor y el fracaso; tras el fiasco de 1896 en San Petersburgo, su montaje de 1898 en el Teatro de Arte de Moscú consagró al dramaturgo."
   },
   {
    "titulo": "La dama del perrito (Дама с собачкой)",
    "anio": 1899,
    "genero": "Cuento",
    "descripcion": "Historia de un amor adúltero nacido en Yalta, modelo del relato chejoviano por su final abierto y su mirada compasiva."
   },
   {
    "titulo": "El jardín de los cerezos (Вишнёвый сад)",
    "anio": 1904,
    "genero": "Teatro",
    "descripcion": "Última obra dramática de Chéjov, escrita en 1903 y estrenada el 17 de enero de 1904 en el Teatro de Arte de Moscú; retrato del declive de la nobleza rural rusa."
   }
  ],
  "legadoPatrimonial": "Chéjov fijó el modelo del cuento moderno, basado en la sugerencia, el detalle cotidiano y el final abierto, y su teatro del subtexto está en la raíz de la escena contemporánea. Su influencia se extiende a narradores de todas las lenguas, entre ellos muchos cuentistas hispanoamericanos.",
  "dominioPublico": true,
  "citas": [
   {
    "texto": "La brevedad es hermana del talento",
    "obra": "Atribuida (recopilaciones de Bartra, 1994, y Ortega, 2013)",
    "url": "https://es.wikiquote.org/wiki/Antón_Chéjov"
   },
   {
    "texto": "El perro hambriento sólo tiene fe para la carne",
    "obra": "El jardín de los cerezos (1904), acto III",
    "url": "https://es.wikiquote.org/wiki/Antón_Chéjov"
   }
  ],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Chekhov_1898_by_Osip_Braz.jpg",
   "licencia": "Dominio público",
   "autorFoto": "Ósip Braz (óleo, 1898; Galería Tretiakov, Moscú)",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Chekhov_1898_by_Osip_Braz.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Antón_Chéjov",
   "https://en.wikipedia.org/wiki/Anton_Chekhov",
   "https://en.wikipedia.org/wiki/The_Cherry_Orchard",
   "https://en.wikipedia.org/wiki/Three_Sisters_(play)",
   "https://es.wikiquote.org/wiki/Antón_Chéjov",
   "https://commons.wikimedia.org/wiki/File:Chekhov_1898_by_Osip_Braz.jpg"
  ],
  "notas": "Fechas: Rusia usaba el calendario juliano; nacimiento 17 de enero de 1860 (juliano) = 29 de enero (gregoriano); muerte 2 de julio de 1904 (juliano) = 15 de julio (gregoriano). Años de las obras teatrales: es.wikipedia da los años de estreno (La gaviota 1896, Tío Vania 1899, Las tres hermanas 1901, El jardín de los cerezos 1904), mientras en.wikipedia da los de escritura (1895, 1897, 1900, 1903); aquí se usan los de estreno, confirmados por los artículos de en.wikipedia sobre cada obra. Mudanza de la familia a Moscú: es.wikipedia dice 1875 y en.wikipedia 1876, por lo que la biografía no fija el año. Retrato: es.wikipedia usa el óleo de Ósip Braz (1898) y en.wikipedia una fotografía de 1889 (File:Anton_Chekhov_1889.jpg); se eligió el cuadro de Braz. La cita «La brevedad es hermana del talento» aparece en es.wikiquote solo con referencia a recopilaciones, sin obra concreta. Britannica devolvió error 403."
 },
 {
  "id": "charles-baudelaire",
  "nombre": "Charles Pierre Baudelaire",
  "anios": "1821 – 1867",
  "nacimiento": "9 de abril de 1821 · París, Francia",
  "fallecimiento": "31 de agosto de 1867 · París",
  "municipioOrigen": "París, Francia",
  "movimiento": "Precursor del simbolismo; poeta de la modernidad (poetas malditos)",
  "bloqueCanon": "universales",
  "tituloHonorifico": "Poeta de Las flores del mal, fundador de la lírica moderna",
  "semblanzaSintetica": "Poeta, crítico de arte y traductor francés, autor de Las flores del mal (1857), libro procesado por ofensa a la moral pública y considerado el punto de partida de la poesía moderna. Tradujo a Edgar Allan Poe y acuñó la noción de modernidad en El pintor de la vida moderna. Murió en París en 1867, tras una hemiplejía con afasia.",
  "biografiaCompleta": [
   "Charles Pierre Baudelaire nació en París el 9 de abril de 1821, hijo de Joseph-François Baudelaire, que murió en 1827, y de Caroline Dufaÿs. Su madre volvió a casarse con el militar Jacques Aupick, con quien el futuro poeta mantuvo una relación conflictiva. En 1841, para apartarlo de la vida disipada que llevaba, la familia lo embarcó con rumbo a Calcuta, pero el viaje se interrumpió en las islas Mauricio y Reunión; los paisajes y perfumes de aquella travesía dejarían huella en su poesía. De vuelta en París conoció a Jeanne Duval, su compañera durante años e inspiradora de varios poemas.",
   "Baudelaire se dio a conocer como crítico de arte con los Salones de 1845 y 1846, y a partir de 1856 publicó sus traducciones de Edgar Allan Poe, a quien dio a conocer en Europa. En 1857 apareció Las flores del mal; la justicia francesa procesó al autor y al editor por ofensa a la moral pública, impuso una multa y ordenó suprimir seis poemas. La segunda edición, de 1861, incorporó treinta y dos poemas nuevos. En 1860 publicó Los paraísos artificiales, sobre el vino, el hachís y el opio, y en 1863 el ensayo El pintor de la vida moderna, donde formuló su idea de la modernidad.",
   "Acosado por las deudas, se trasladó a Bruselas en abril de 1864. El 15 de marzo de 1866, en la iglesia de Saint-Loup de Namur, sufrió un ataque que le provocó hemiplejía y afasia. Trasladado a París, murió el 31 de agosto de 1867, a los 46 años, y fue enterrado en el cementerio de Montparnasse. Sus poemas en prosa, reunidos como El spleen de París o Pequeños poemas en prosa, se publicaron en 1869, de forma póstuma, lo mismo que la tercera edición de Las flores del mal, de 1868."
  ],
  "obrasCapitales": [
   {
    "titulo": "Salón de 1846 (Salon de 1846)",
    "anio": 1846,
    "genero": "Crítica de arte",
    "descripcion": "Ensayo sobre la exposición anual parisina en el que Baudelaire defiende a Delacroix y formula su concepción romántica y moderna de la pintura."
   },
   {
    "titulo": "Las flores del mal (Les Fleurs du mal)",
    "anio": 1857,
    "genero": "Poesía",
    "descripcion": "Su obra capital: libro de poemas sobre el spleen, el ideal, la ciudad, el amor y la muerte, procesado en 1857 y ampliado en la edición de 1861."
   },
   {
    "titulo": "Los paraísos artificiales (Les Paradis artificiels)",
    "anio": 1860,
    "genero": "Ensayo",
    "descripcion": "Reflexión sobre los efectos del vino, el hachís y el opio, en diálogo con las Confesiones de Thomas De Quincey."
   },
   {
    "titulo": "El pintor de la vida moderna (Le Peintre de la vie moderne)",
    "anio": 1863,
    "genero": "Ensayo",
    "descripcion": "Serie de artículos sobre el dibujante Constantin Guys en la que Baudelaire define la modernidad como lo transitorio y fugitivo unido a lo eterno."
   },
   {
    "titulo": "El spleen de París. Pequeños poemas en prosa (Le Spleen de Paris. Petits poèmes en prose)",
    "anio": 1869,
    "genero": "Poema en prosa",
    "descripcion": "Cincuenta poemas en prosa de ambiente urbano, publicados póstumamente, que abrieron el camino del género en la poesía moderna."
   }
  ],
  "legadoPatrimonial": "Baudelaire inaugura la poesía moderna: de él parten el simbolismo de Verlaine, Rimbaud y Mallarmé, y su noción de modernidad sigue siendo central en la estética contemporánea. Su huella en la lírica en español llega del modernismo de Rubén Darío a la poesía actual.",
  "dominioPublico": true,
  "citas": [
   {
    "texto": "Hay que estar siempre ebrio. Todo está allí: es la única cuestión.",
    "obra": "El spleen de París (1869), «Embriagaos»; traducción de Margarita Michelena",
    "url": "https://es.wikiquote.org/wiki/Charles_Baudelaire"
   },
   {
    "texto": "Lo bello es siempre raro.",
    "obra": "Atribuida (recopilación de Bartra, 1994)",
    "url": "https://es.wikiquote.org/wiki/Charles_Baudelaire"
   }
  ],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/1/16/%C3%89tienne_Carjat%2C_Portrait_of_Charles_Baudelaire%2C_circa_1862.jpg",
   "licencia": "Dominio público",
   "autorFoto": "Étienne Carjat (fotografía, c. 1862; British Library)",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Étienne_Carjat,_Portrait_of_Charles_Baudelaire,_circa_1862.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Charles_Baudelaire",
   "https://en.wikipedia.org/wiki/Charles_Baudelaire",
   "https://fr.wikipedia.org/wiki/Charles_Baudelaire",
   "https://es.wikiquote.org/wiki/Charles_Baudelaire",
   "https://commons.wikimedia.org/wiki/File:Étienne_Carjat,_Portrait_of_Charles_Baudelaire,_circa_1862.jpg"
  ],
  "notas": "Movimiento: es.wikipedia lo vincula al simbolismo, el romanticismo tardío y los «poetas malditos»; en.wikipedia lo adscribe al movimiento decadente; se optó por «precursor del simbolismo». Multa del proceso de 1857: fr.wikipedia indica 300 francos, reducidos a 50 por intervención imperial; es/en.wikipedia solo mencionan la multa y la supresión de seis poemas. La cita «Hay que estar siempre ebrio…» corresponde al poema en prosa «Embriagaos» (Enivrez-vous); es.wikiquote la toma de la traducción de Margarita Michelena (FCE, 2018), cuya edición no está en dominio público, por lo que conviene citarla brevemente o usar una traducción propia. «Lo bello es siempre raro» figura en es.wikiquote solo con referencia a una recopilación. Britannica y Poetry Foundation devolvieron error 403."
 },
 {
  "id": "wislawa-szymborska",
  "nombre": "Maria Wisława Anna Szymborska",
  "anios": "1923 – 2012",
  "nacimiento": "2 de julio de 1923 · Prowent (hoy parte de Kórnik), Polonia",
  "fallecimiento": "1 de febrero de 2012 · Cracovia",
  "municipioOrigen": "Kórnik, Polonia",
  "movimiento": "Poesía polaca de posguerra; generación de Czesław Miłosz y Zbigniew Herbert",
  "bloqueCanon": "universales",
  "tituloHonorifico": "Poeta de la ironía precisa, Premio Nobel de Literatura 1996",
  "semblanzaSintetica": "Poeta, ensayista y traductora polaca, residente en Cracovia desde su juventud. Publicó una obra poética breve y depurada, marcada por la ironía, la pregunta filosófica y la atención a lo cotidiano. Recibió el Premio Nobel de Literatura en 1996.",
  "biografiaCompleta": [
   "Wisława Szymborska nació el 2 de julio de 1923 en Prowent, localidad hoy integrada en Kórnik, en la región de Poznań. Su familia se trasladó a Cracovia, ciudad en la que vivió el resto de su vida. Tras la Segunda Guerra Mundial, a partir de 1945, estudió filología polaca y después sociología en la Universidad Jagellónica. En 1948 se casó con el poeta Adam Włodek, de quien se separó en 1954. Desde 1967 mantuvo una larga relación con el escritor Kornel Filipowicz.",
   "Su primer libro, Por eso vivimos (Dlatego żyjemy, 1952), apareció en el clima del realismo socialista; años después la autora tomó distancia de esa etapa y en 1966 abandonó el Partido Obrero Unificado Polaco. Entre 1953 y 1981 trabajó en la revista Życie Literackie, donde desde 1968 mantuvo la columna de reseñas Lecturas no obligatorias (Lektury nadobowiązkowe), recogida en volumen a partir de 1973. Con Llamando al Yeti (Wołanie do Yeti, 1957) encontró su voz propia, y con Sal (Sól, 1962) consolidó una poesía de interrogación serena y humor contenido.",
   "Publicó poco más de una docena de poemarios, entre ellos Mil alegrías, un encanto (Sto pociech, 1967), Si acaso (Wszelki wypadek, 1972), El gran número (Wielka liczba, 1976), Gente en el puente (Ludzie na moście, 1986) y Fin y principio (Koniec i początek, 1993). Recibió el Premio Goethe (1991), el Premio Herder (1995) y, en 1996, el Premio Nobel de Literatura, otorgado «por una poesía que, con irónica precisión, permite que el contexto histórico y biológico salga a la luz en fragmentos de realidad humana». Fue distinguida con la Orden del Águila Blanca. Murió en Cracovia el 1 de febrero de 2012."
  ],
  "obrasCapitales": [
   {
    "titulo": "Llamando al Yeti (Wołanie do Yeti)",
    "anio": 1957,
    "genero": "Poesía",
    "descripcion": "Poemario con el que la autora se desprendió de su primera etapa y definió su estilo irónico y reflexivo; ella misma lo consideraba su verdadero debut."
   },
   {
    "titulo": "Sal (Sól)",
    "anio": 1962,
    "genero": "Poesía",
    "descripcion": "Libro que afianza su voz de madurez: poemas breves, de lenguaje llano, que convierten la observación cotidiana en pregunta filosófica."
   },
   {
    "titulo": "El gran número (Wielka liczba)",
    "anio": 1976,
    "genero": "Poesía",
    "descripcion": "Incluye poemas célebres como «Utopía»; reflexiona sobre la escala de lo humano frente a la multitud y el azar."
   },
   {
    "titulo": "Gente en el puente (Ludzie na moście)",
    "anio": 1986,
    "genero": "Poesía",
    "descripcion": "Poemario de la década de 1980 que medita sobre el tiempo, la historia y la mirada del arte a partir de una estampa japonesa."
   },
   {
    "titulo": "Fin y principio (Koniec i początek)",
    "anio": 1993,
    "genero": "Poesía",
    "descripcion": "Último libro anterior al Nobel; contiene poemas sobre la guerra, la memoria y el olvido, como el que da título al volumen."
   }
  ],
  "legadoPatrimonial": "Su poesía, traducida a numerosas lenguas, es una de las más leídas de la literatura polaca contemporánea. En español circulan ediciones de su obra reunida y de sus Lecturas no obligatorias, que han hecho de ella una referencia para lectores y poetas de Hispanoamérica.",
  "dominioPublico": false,
  "citas": [
   {
    "texto": "Isla en la que todo se aclara.",
    "obra": "«Utopía», en El gran número (1976)",
    "url": "https://es.wikiquote.org/wiki/Wis%C5%82awa_Szymborska"
   }
  ],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Wis%C5%82awa_Szymborska_2009.10.23_%281%29.jpg",
   "licencia": "CC BY 3.0",
   "autorFoto": "Mariusz Kubik",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Wis%C5%82awa_Szymborska_2009.10.23_(1).jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Wis%C5%82awa_Szymborska",
   "https://en.wikipedia.org/wiki/Wis%C5%82awa_Szymborska",
   "https://pl.wikipedia.org/wiki/Wis%C5%82awa_Szymborska",
   "https://www.nobelprize.org/prizes/literature/1996/press-release/",
   "https://www.nobelprize.org/prizes/literature/1996/szymborska/facts/",
   "https://es.wikiquote.org/wiki/Wis%C5%82awa_Szymborska",
   "https://commons.wikimedia.org/wiki/File:Wis%C5%82awa_Szymborska_2009.10.23_(1).jpg"
  ],
  "notas": "Lugar de nacimiento: Wikipedia en español, inglés y polaco indican Prowent (hoy parte de Kórnik); la ficha de Commons y la Fundación Nobel lo sitúan en Bnin, también integrado hoy en Kórnik. Año de Si acaso (Wszelki wypadek): 1972 según Wikipedia en polaco e inglés; Wikipedia en español indica 1975 (se adopta 1972, fecha de la edición original). La foto de Commons está doblemente licenciada: CC BY 3.0 Unported y GFDL 1.2+; debe acreditarse a Mariusz Kubik. La motivación del Nobel se traduce del original inglés (nobelprize.org devolvió error 403 al consultarse directamente; el texto se confirmó mediante búsqueda y Wikipedia). La cita de Wikiquote corresponde al arranque del poema «Utopía»."
 },
 {
  "id": "michel-de-montaigne",
  "nombre": "Michel Eyquem de Montaigne",
  "anios": "1533 – 1592",
  "nacimiento": "28 de febrero de 1533 · Castillo de Montaigne, Saint-Michel-de-Montaigne, Francia",
  "fallecimiento": "13 de septiembre de 1592 · Castillo de Montaigne, Saint-Michel-de-Montaigne",
  "municipioOrigen": "Saint-Michel-de-Montaigne, Francia",
  "movimiento": "Humanismo renacentista; escepticismo",
  "bloqueCanon": "universales",
  "tituloHonorifico": "Creador del ensayo moderno",
  "semblanzaSintetica": "Filósofo, magistrado y escritor francés del Renacimiento. Con sus Ensayos (Essais, 1580-1588) inauguró un género nuevo: la reflexión personal, digresiva y escéptica sobre la experiencia propia. Fue además alcalde de Burdeos entre 1581 y 1585.",
  "biografiaCompleta": [
   "Michel Eyquem de Montaigne nació el 28 de febrero de 1533 en el castillo de Montaigne, en Saint-Michel-de-Montaigne, en la región francesa de Guyena. Su padre, Pierre Eyquem, señor de Montaigne, fue alcalde de Burdeos; su madre, Antoinette López de Villanueva, procedía de una familia de origen converso. Se formó en el Collège de Guyenne de Burdeos y estudió después derecho. Desde 1557 fue consejero del Parlamento de Burdeos, donde conoció al humanista Étienne de La Boétie, con quien mantuvo una amistad intensa hasta la muerte de este en 1563. En 1565 se casó con Françoise de La Chassaigne.",
   "En 1569 publicó su traducción de la Teología natural de Raimundo Sabunde, encargo de su padre. Tras renunciar a su cargo de magistrado en 1570, se retiró en 1571 a la torre de su castillo, donde reunió su biblioteca y comenzó, hacia 1572, la redacción de los Ensayos. La primera edición, con los libros I y II, apareció en Burdeos en 1580. Ese mismo año emprendió un viaje por Francia, Suiza, Alemania e Italia que duró hasta 1581 y cuyo diario, hallado en la torre, se publicó en 1774.",
   "A su regreso fue elegido alcalde de Burdeos, cargo que ocupó dos mandatos, entre 1581 y 1585, en años de guerras de religión. En 1588 publicó en París una nueva edición de los Ensayos, ampliada con el libro III. Siguió corrigiendo y anotando su ejemplar hasta el final de su vida, y en 1595 Marie de Gournay, su «hija de alianza», dio a la imprenta la edición póstuma. Murió en su castillo el 13 de septiembre de 1592. Su divisa, «Que sais-je?» (¿Qué sé yo?), resume la actitud escéptica y curiosa de toda su obra."
  ],
  "obrasCapitales": [
   {
    "titulo": "Teología natural de Raimundo Sabunde (traducción)",
    "anio": 1569,
    "genero": "Traducción / filosofía",
    "descripcion": "Versión francesa de la Theologia naturalis del teólogo catalán, realizada a petición de su padre; de ella nacería la célebre «Apología de Raimundo Sabunde» de los Ensayos."
   },
   {
    "titulo": "Ensayos, libros I y II (Essais)",
    "anio": 1580,
    "genero": "Ensayo",
    "descripcion": "Primera edición, impresa en Burdeos. Montaigne se toma a sí mismo como materia de estudio y funda un género de reflexión libre y personal."
   },
   {
    "titulo": "Ensayos, edición con el libro III (Essais)",
    "anio": 1588,
    "genero": "Ensayo",
    "descripcion": "Edición parisina ampliada con trece capítulos nuevos y numerosas adiciones, entre ellos «De la experiencia» y «Del arrepentimiento»."
   },
   {
    "titulo": "Ensayos, edición póstuma (Essais)",
    "anio": 1595,
    "genero": "Ensayo",
    "descripcion": "Publicada por Marie de Gournay a partir de las últimas anotaciones del autor; durante siglos fue la base de las ediciones y traducciones."
   },
   {
    "titulo": "Diario de viaje a Italia (Journal de voyage)",
    "anio": 1774,
    "genero": "Diario / literatura de viajes",
    "descripcion": "Relato del periplo de 1580-1581 por Suiza, Alemania e Italia, escrito en parte por un secretario y hallado en el castillo en el siglo XVIII."
   }
  ],
  "legadoPatrimonial": "Los Ensayos dieron nombre y forma a un género que recorre toda la literatura moderna, de Bacon y Pascal a los ensayistas hispanoamericanos. La torre de Montaigne, con las sentencias grabadas en sus vigas, se conserva en Saint-Michel-de-Montaigne como lugar de memoria literaria.",
  "dominioPublico": true,
  "citas": [
   {
    "texto": "Cobardía: madre de la crueldad.",
    "obra": "Ensayos, libro II, capítulo XXVII (1580)",
    "url": "https://es.wikiquote.org/wiki/Michel_de_Montaigne"
   },
   {
    "texto": "¡Cuantas cosas que ayer eran artículos de fe, son fábulas hoy!",
    "obra": "Ensayos, libro I (1580)",
    "url": "https://es.wikiquote.org/wiki/Michel_de_Montaigne"
   }
  ],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Portrait_of_Michel_de_Montaigne%2C_circa_unknown.jpg",
   "licencia": "Dominio público",
   "autorFoto": "Autor desconocido (retrato pintado, década de 1570); reproducción fotográfica fiel de obra bidimensional en dominio público",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Portrait_of_Michel_de_Montaigne,_circa_unknown.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Michel_de_Montaigne",
   "https://en.wikipedia.org/wiki/Michel_de_Montaigne",
   "https://fr.wikipedia.org/wiki/Michel_de_Montaigne",
   "https://es.wikiquote.org/wiki/Michel_de_Montaigne",
   "https://commons.wikimedia.org/wiki/File:Portrait_of_Michel_de_Montaigne,_circa_unknown.jpg"
  ],
  "notas": "Inicio en el Parlamento de Burdeos: Wikipedia en inglés indica 1557; la francesa sitúa su entrada como consejero entre 1556 y 1557, tras la supresión de la Cour des aides de Périgueux. Wikipedia en francés menciona además una segunda edición de los Ensayos en 1582, no recogida en las versiones española e inglesa. Britannica no pudo consultarse (error 403). Las citas de Wikiquote se atribuyen allí a antologías (Bartra 1994; Ortega 2013); la primera coincide con el título del capítulo II, XXVII («Couardise mère de la cruauté») y la segunda con un pasaje del libro I de los Ensayos; la segunda se reproduce con la puntuación y acentuación tal como aparece en la fuente."
 },
 {
  "id": "miguel-de-cervantes",
  "nombre": "Miguel de Cervantes Saavedra",
  "anios": "1547 – 1616",
  "nacimiento": "29 de septiembre de 1547 (fecha presunta; bautizado el 9 de octubre) · Alcalá de Henares, España",
  "fallecimiento": "22 de abril de 1616 · Madrid",
  "municipioOrigen": "Alcalá de Henares, España",
  "movimiento": "Siglo de Oro español",
  "bloqueCanon": "universales",
  "tituloHonorifico": "Autor del Quijote y padre de la novela moderna",
  "semblanzaSintetica": "Novelista, poeta, dramaturgo y soldado español. Combatió en Lepanto, pasó cinco años cautivo en Argel y publicó en 1605 y 1615 las dos partes de Don Quijote de la Mancha, considerada la primera novela moderna.",
  "biografiaCompleta": [
   "Miguel de Cervantes Saavedra nació en Alcalá de Henares en 1547; se admite como fecha probable el 29 de septiembre, festividad de san Miguel, y consta su bautismo el 9 de octubre. En 1569 se encontraba en Roma al servicio del cardenal Acquaviva, y el 7 de octubre de 1571 combatió en la batalla de Lepanto, donde recibió heridas que le dejaron inútil la mano izquierda. En 1575, cuando regresaba a España, fue apresado por corsarios berberiscos y permaneció cautivo en Argel hasta su rescate el 19 de septiembre de 1580.",
   "De vuelta en Castilla, Cervantes contrajo matrimonio con Catalina de Salazar en Esquivias el 12 de diciembre de 1584 y publicó en 1585 su primera obra extensa, la novela pastoril La Galatea. Los años siguientes fueron de estrecheces: trabajó como comisario de abastos para la Armada desde 1587 y como recaudador de impuestos a partir de 1594, ocupaciones que lo llevaron a prisión en la Cárcel Real de Sevilla entre septiembre y diciembre de 1597 por irregularidades contables.",
   "En 1605 apareció en Madrid la primera parte de El ingenioso hidalgo don Quijote de la Mancha, que alcanzó éxito inmediato. Le siguieron las Novelas ejemplares (1613), el Viaje del Parnaso (1614), las Ocho comedias y ocho entremeses nuevos nunca representados (1615) y la segunda parte del Quijote (1615). Murió en Madrid el 22 de abril de 1616 y fue enterrado al día siguiente en el convento de las Trinitarias Descalzas; Los trabajos de Persiles y Sigismunda se publicó póstumamente en 1617."
  ],
  "obrasCapitales": [
   {
    "titulo": "La Galatea",
    "anio": 1585,
    "genero": "Novela pastoril",
    "descripcion": "Primera obra extensa de Cervantes, una novela pastoril en seis libros de la que solo llegó a publicarse la primera parte."
   },
   {
    "titulo": "El ingenioso hidalgo don Quijote de la Mancha (primera parte)",
    "anio": 1605,
    "genero": "Novela",
    "descripcion": "Historia del hidalgo que, enloquecido por los libros de caballerías, sale a los caminos de la Mancha con su escudero Sancho Panza. Se la considera la primera novela moderna."
   },
   {
    "titulo": "Novelas ejemplares",
    "anio": 1613,
    "genero": "Novela corta",
    "descripcion": "Colección de doce relatos que aclimató en castellano la novela corta al modo italiano, con títulos como Rinconete y Cortadillo o El coloquio de los perros."
   },
   {
    "titulo": "Ocho comedias y ocho entremeses nuevos nunca representados",
    "anio": 1615,
    "genero": "Teatro",
    "descripcion": "Volumen que reúne su teatro de madurez; los entremeses, como El retablo de las maravillas, son piezas breves de gran vivacidad."
   },
   {
    "titulo": "Segunda parte del ingenioso caballero don Quijote de la Mancha",
    "anio": 1615,
    "genero": "Novela",
    "descripcion": "Continuación en la que los personajes saben que su historia ha sido publicada; culmina con el regreso y la muerte serena de Alonso Quijano."
   }
  ],
  "legadoPatrimonial": "El Quijote es la obra más traducida de la literatura en español y da nombre a la lengua misma, llamada a menudo «la lengua de Cervantes». El Premio Cervantes, máximo galardón de las letras hispánicas, y el Instituto Cervantes llevan su nombre.",
  "dominioPublico": true,
  "citas": [
   {
    "texto": "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.",
    "obra": "El ingenioso hidalgo don Quijote de la Mancha, I, cap. I (1605)",
    "url": "https://es.wikisource.org/wiki/P%C3%A1gina:El_ingenioso_hidalgo_Don_Quijote_de_la_Mancha_-_Tomo_I_(1908).pdf/35"
   }
  ],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/0/09/Cervantes_J%C3%A1uregui.jpg",
   "licencia": "Dominio público",
   "autorFoto": "Atribuido tradicionalmente a Juan de Jáuregui (c. 1600), atribución e identificación discutidas",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Cervantes_J%C3%A1uregui.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Miguel_de_Cervantes",
   "https://www.cervantesvirtual.com/portales/miguel_de_cervantes/autor_biografia/",
   "https://commons.wikimedia.org/wiki/File:Cervantes_J%C3%A1uregui.jpg"
  ],
  "notas": "Fecha de nacimiento presunta (29 de septiembre); solo está documentado el bautismo del 9 de octubre de 1547. El registro parroquial da el 23 de abril de 1616, que corresponde al entierro; la muerte fue el 22. El retrato llamado «de Jáuregui» es el de uso habitual, pero Commons advierte que la crítica moderna rechaza tanto la atribución a Jáuregui como que represente a Cervantes: el rótulo con su nombre se añadió más de un siglo después. No existe retrato auténtico del autor."
 },
 {
  "id": "garcilaso-de-la-vega",
  "nombre": "Garcilaso de la Vega",
  "anios": "c. 1501 – 1536",
  "nacimiento": "c. 1501 · Toledo, España",
  "fallecimiento": "14 de octubre de 1536 · Niza",
  "municipioOrigen": "Toledo, España",
  "movimiento": "Renacimiento español (petrarquismo)",
  "bloqueCanon": "universales",
  "tituloHonorifico": "Príncipe de los poetas castellanos; introductor del endecasílabo italiano",
  "semblanzaSintetica": "Poeta y militar toledano al servicio de Carlos V. Junto con Juan Boscán renovó la lírica castellana con los metros y temas del Renacimiento italiano; su breve obra se publicó póstumamente en 1543.",
  "biografiaCompleta": [
   "Garcilaso de la Vega nació en Toledo hacia 1501, hijo segundo de Garci Lasso de la Vega, comendador mayor de León y embajador de los Reyes Católicos ante Alejandro VI, y de Sancha de Guzmán, señora de Batres. Recibió una educación humanista que incluyó latín, música, esgrima y equitación. En 1521 resultó herido en Olías combatiendo contra los comuneros y en 1523 el emperador le concedió el hábito de la Orden de Santiago. En 1525 se casó con Elena de Zúñiga, dama de la corte, con quien tuvo varios hijos.",
   "Cortesano y soldado, siguió a Carlos V en sus campañas y viajes: en 1529-1530 lo acompañó a Italia para la coronación imperial. Por asistir en 1531 a una boda que el emperador había prohibido fue confinado en una isla del Danubio y después enviado a Nápoles, donde entre 1532 y 1534 se integró en los círculos intelectuales de la ciudad y afinó su asimilación de Petrarca, Sannazaro y los clásicos latinos. En 1535 participó en la toma de La Goleta y Túnez, episodio que recordó en sonetos y en su segunda elegía.",
   "En 1536, durante la campaña de Provenza, Garcilaso fue herido en el asalto a una fortificación en Le Muy y murió en Niza pocos días después, el 14 de octubre; sus restos fueron trasladados a Toledo en 1538. No publicó en vida: su obra, una cuarentena de sonetos, cinco canciones, tres églogas, dos elegías y una epístola, apareció en 1543 en Barcelona como apéndice a las Obras de Boscán. La edición anotada de Francisco Sánchez de las Brozas (1574) lo consagró como clásico de la lengua."
  ],
  "obrasCapitales": [
   {
    "titulo": "Égloga I",
    "anio": 1543,
    "genero": "Poesía (égloga)",
    "descripcion": "Lamento de los pastores Salicio y Nemoroso por el desdén y la muerte de sus amadas; es la cima de la poesía pastoril castellana. Publicada póstumamente."
   },
   {
    "titulo": "Égloga III",
    "anio": 1543,
    "genero": "Poesía (égloga)",
    "descripcion": "Cuatro ninfas del Tajo tejen en tapices historias de amor y muerte; obra de madurez de perfecta serenidad formal."
   },
   {
    "titulo": "Soneto XXIII («En tanto que de rosa y azucena»)",
    "anio": 1543,
    "genero": "Poesía (soneto)",
    "descripcion": "Invitación a gozar de la juventud antes de que el tiempo la marchite; el ejemplo canónico del tema del carpe diem en castellano."
   },
   {
    "titulo": "Canción V («Ode ad florem Gnidi»)",
    "anio": 1543,
    "genero": "Poesía (oda)",
    "descripcion": "Introduce en castellano la estrofa de la lira, que tomará su nombre de la primera palabra de este poema."
   },
   {
    "titulo": "Epístola a Boscán",
    "anio": 1543,
    "genero": "Poesía (epístola)",
    "descripcion": "Primera epístola en verso suelto de la literatura española, dirigida a su amigo y compañero de renovación poética."
   }
  ],
  "legadoPatrimonial": "Garcilaso fijó el endecasílabo, el soneto, la lira y la égloga como formas propias de la poesía en español y fue modelo de todos los líricos del Siglo de Oro, de Herrera a Góngora y Quevedo. Su obra sigue siendo lectura fundacional de la lírica hispánica.",
  "dominioPublico": true,
  "citas": [
   {
    "texto": "En tanto que de rosa y azucena / se muestra la color en vuestro gesto",
    "obra": "Soneto XXIII (ed. póstuma, 1543)",
    "url": "https://es.wikisource.org/wiki/En_tanto_que_de_rosa_y_azucena"
   }
  ],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Retrato_de_hombre_con_la_cruz_de_caballero_de_Alc%C3%A1ntara.jpg",
   "licencia": "Dominio público",
   "autorFoto": "Anónimo español, c. 1550-1555 (identificación con Garcilaso no confirmada)",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Retrato_de_hombre_con_la_cruz_de_caballero_de_Alc%C3%A1ntara.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Garcilaso_de_la_Vega",
   "https://datos.bne.es/persona/XX931941.html",
   "https://www.cervantesvirtual.com/portales/garcilaso_de_la_vega/autor_apunte/",
   "https://dbe.rah.es/biografias/10463/garcilaso-de-la-vega"
  ],
  "notas": "No se conoce la fecha exacta de nacimiento. La BNE y la Real Academia de la Historia dan 1501; Wikipedia ofrece el rango 1491/1503 y Cervantes Virtual menciona también 1498 y 1503. Sobre la muerte, Wikipedia da el 14 de octubre de 1536 y la RAH «13-14 de octubre». El cuadro usado como retrato (Retrato de hombre con la cruz de caballero de Alcántara) es una identificación tradicional; un artículo del Boletín de la RAH sostiene que Garcilaso nunca vistió el hábito de Alcántara y que la atribución es errónea, de modo que conviene rotularlo como «retrato tradicionalmente identificado con Garcilaso»."
 },
 {
  "id": "francisco-de-quevedo",
  "nombre": "Francisco Gómez de Quevedo Villegas y Santibáñez Cevallos",
  "anios": "1580 – 1645",
  "nacimiento": "14 de septiembre de 1580 · Madrid, España",
  "fallecimiento": "8 de septiembre de 1645 · Villanueva de los Infantes",
  "municipioOrigen": "Madrid, España",
  "movimiento": "Barroco (conceptismo)",
  "bloqueCanon": "universales",
  "tituloHonorifico": "Maestro del conceptismo y de la sátira barroca",
  "semblanzaSintetica": "Escritor, noble y político madrileño del Siglo de Oro. Cultivó con igual maestría la poesía amorosa, metafísica y satírica, la novela picaresca y la prosa moral y política; fue la figura central del conceptismo.",
  "biografiaCompleta": [
   "Francisco de Quevedo nació en Madrid el 14 de septiembre de 1580 y fue bautizado el 26 en la parroquia de San Ginés. Procedía de una familia hidalga de la Montaña cántabra vinculada a la corte: su padre, Pedro Gómez de Quevedo, fue secretario de la princesa María y de la reina Ana. Se educó en el Colegio Imperial de los jesuitas y en la Universidad de Alcalá, y mantuvo correspondencia con el humanista flamenco Justo Lipsio, con quien compartió el interés por la filología y el estoicismo de Séneca.",
   "Desde 1613 sirvió al duque de Osuna, a quien acompañó en Sicilia y Nápoles y en cuyo nombre desempeñó misiones políticas; en 1618 obtuvo el hábito de la Orden de Santiago. La caída de Osuna lo arrastró: fue desterrado a su señorío de la Torre de Juan Abad y encarcelado un tiempo en Uclés. Durante el valimiento del conde-duque de Olivares alternó el favor y la hostilidad de la corte. En 1634 contrajo un matrimonio breve y desdichado con Esperanza de Mendoza.",
   "El 7 de diciembre de 1639 fue detenido por orden reservada, por causas aún no del todo aclaradas, y recluido en el convento de San Marcos de León hasta junio de 1643. Salió con la salud quebrantada y murió el 8 de septiembre de 1645 en Villanueva de los Infantes. En vida publicó la Política de Dios (1626), El Buscón (1626, edición no autorizada) y los Sueños (1627); su poesía se reunió póstumamente en El Parnaso español (1648) y Las tres musas últimas castellanas (1670)."
  ],
  "obrasCapitales": [
   {
    "titulo": "Historia de la vida del Buscón",
    "anio": 1626,
    "genero": "Novela picaresca",
    "descripcion": "Peripecias de Pablos, pícaro segoviano, narradas con una densidad verbal y una crueldad satírica sin precedentes en el género. Se imprimió en Zaragoza sin autorización del autor."
   },
   {
    "titulo": "Política de Dios, gobierno de Cristo",
    "anio": 1626,
    "genero": "Tratado político",
    "descripcion": "Espejo de príncipes que propone la vida de Cristo como modelo del buen gobernante; la segunda parte apareció póstuma en 1655."
   },
   {
    "titulo": "Sueños y discursos",
    "anio": 1627,
    "genero": "Sátira en prosa",
    "descripcion": "Cinco visiones satíricas (El sueño del Juicio Final, El alguacil endemoniado, El sueño del infierno, El mundo por de dentro y El sueño de la muerte) que desfilan vicios y oficios de la época."
   },
   {
    "titulo": "Vida de Marco Bruto",
    "anio": 1644,
    "genero": "Ensayo histórico-político",
    "descripcion": "Comentario a la vida de Bruto según Plutarco, considerado la cima de su prosa doctrinal por la concentración del estilo."
   },
   {
    "titulo": "El Parnaso español",
    "anio": 1648,
    "genero": "Poesía",
    "descripcion": "Primera recopilación póstuma de su poesía, ordenada por musas por José Antonio González de Salas; incluye sonetos como «Amor constante más allá de la muerte»."
   }
  ],
  "legadoPatrimonial": "Quevedo es, con Góngora, la cumbre de la poesía barroca española y el mayor satírico de la lengua. Su dominio del concepto, el juego verbal y la gravedad metafísica han influido en autores de todas las épocas, de Borges a la poesía contemporánea.",
  "dominioPublico": true,
  "citas": [
   {
    "texto": "Cerrar podrá mis ojos la postrera / sombra que me llevare el blanco día",
    "obra": "«Amor constante más allá de la muerte», El Parnaso español (1648)",
    "url": "https://es.wikisource.org/wiki/Amor_constante_m%C3%A1s_all%C3%A1_de_la_muerte"
   },
   {
    "texto": "serán ceniza, mas tendrá sentido; / polvo serán, mas polvo enamorado.",
    "obra": "«Amor constante más allá de la muerte», El Parnaso español (1648)",
    "url": "https://es.wikisource.org/wiki/Amor_constante_m%C3%A1s_all%C3%A1_de_la_muerte"
   }
  ],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Quevedo_%28copia_de_Vel%C3%A1zquez%29.jpg",
   "licencia": "Dominio público",
   "autorFoto": "Copia anónima de un original de Velázquez, siglo XVII (Instituto Valencia de Don Juan, Madrid)",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Quevedo_(copia_de_Vel%C3%A1zquez).jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Francisco_de_Quevedo",
   "https://www.cervantesvirtual.com/portales/francisco_de_quevedo/vida_y_obra/",
   "https://datos.bne.es/persona/XX1066651.html"
  ],
  "notas": "Fechas de nacimiento y muerte coinciden en Wikipedia y Cervantes Virtual. La ficha de Commons del retrato es contradictoria (atribuye la copia a Juan van der Hamen, muerto en 1632, y la fecha hacia 1650); se ha optado por describirla como copia anónima de Velázquez, que es como la titula el propio archivo. Se omitió La cuna y la sepultura (1634) por constar su fecha en una sola fuente."
 },
 {
  "id": "lope-de-vega",
  "nombre": "Félix Lope de Vega Carpio",
  "anios": "1562 – 1635",
  "nacimiento": "25 de noviembre de 1562 · Madrid, España",
  "fallecimiento": "27 de agosto de 1635 · Madrid",
  "municipioOrigen": "Madrid, España",
  "movimiento": "Siglo de Oro (Barroco); creador de la comedia nueva",
  "bloqueCanon": "universales",
  "tituloHonorifico": "El Fénix de los Ingenios; creador del teatro nacional español",
  "semblanzaSintetica": "Poeta y dramaturgo madrileño, el autor más prolífico de la literatura española. Fijó la fórmula de la comedia nueva en tres actos y escribió centenares de obras teatrales, además de una vasta obra lírica, épica y narrativa.",
  "biografiaCompleta": [
   "Félix Lope de Vega Carpio nació en Madrid a finales de 1562, hijo del bordador Félix de Vega y de Francisca Fernández Flórez, oriundos del valle de Carriedo, en la Montaña cántabra; su primer biógrafo, Juan Pérez de Montalbán, fijó la fecha en el 25 de noviembre, día de san Lope. Estudió con los teatinos y en Alcalá, y tuvo por maestro a Vicente Espinel. Sus amores con la actriz Elena Osorio y unos libelos contra la familia de ella le valieron en 1588 un destierro de ocho años de la corte y dos del reino.",
   "En 1588 se casó por poderes con Isabel de Urbina y, según afirmó, se alistó en la Gran Armada; sirvió después como secretario a diversos nobles, en especial al duque de Sessa (1604-1633). A la muerte de Isabel se casó en 1598 con Juana de Guardo. Publicó La Arcadia (1598), las Rimas (1602) y el Arte nuevo de hacer comedias (1609), donde expuso la poética de su teatro. Las muertes de su hijo Carlos Félix (1612) y de Juana (1613) lo llevaron a ordenarse sacerdote; cantó su primera misa el 24 de mayo de 1614.",
   "Ni el sacerdocio apagó su vida sentimental, marcada por Marta de Nevares, ni su fecundidad: se conservan 426 comedias a él atribuidas, de las que 314 son seguras, y 42 autos sacramentales, aunque Montalbán le adjudicó unas 1800. Entre sus piezas mayores figuran Fuenteovejuna (publicada en 1619), Peribáñez, El perro del hortelano y El caballero de Olmedo. En 1632 publicó La Dorotea y en 1634 las Rimas humanas y divinas del licenciado Tomé de Burguillos. Murió en su casa de la calle de Francos el 27 de agosto de 1635."
  ],
  "obrasCapitales": [
   {
    "titulo": "Rimas",
    "anio": 1602,
    "genero": "Poesía",
    "descripcion": "Colección de doscientos sonetos que incluye algunos de los más célebres de la lengua, como «Desmayarse, atreverse, estar furioso»."
   },
   {
    "titulo": "Arte nuevo de hacer comedias en este tiempo",
    "anio": 1609,
    "genero": "Poética en verso",
    "descripcion": "Discurso leído ante la Academia de Madrid en que defiende la comedia en tres actos, la mezcla de lo trágico y lo cómico y el gusto del público frente a los preceptos clásicos."
   },
   {
    "titulo": "Fuenteovejuna",
    "anio": 1619,
    "genero": "Teatro (comedia)",
    "descripcion": "Un pueblo entero se alza contra el comendador que lo tiraniza y, ante el juez, responde al unísono: «Fuenteovejuna lo hizo». Compuesta hacia 1612-1614 y publicada en la Dozena parte de sus comedias."
   },
   {
    "titulo": "La Dorotea",
    "anio": 1632,
    "genero": "Acción en prosa",
    "descripcion": "Obra dialogada en prosa, de corte celestinesco, en la que Lope recreó en la vejez sus amores juveniles con Elena Osorio."
   },
   {
    "titulo": "El caballero de Olmedo",
    "anio": 1641,
    "genero": "Teatro (tragicomedia)",
    "descripcion": "Tragedia del galán don Alonso, asesinado camino de Olmedo tras ser advertido por un canto popular. Escrita hacia 1620-1625 y publicada póstumamente en Zaragoza."
   }
  ],
  "legadoPatrimonial": "Lope creó la comedia nueva, fórmula que dominó el teatro español durante más de un siglo y que siguieron Tirso de Molina y Calderón. Su obra, inmensa y popular, convirtió el teatro en el gran arte público del Siglo de Oro y sigue en los escenarios de todo el mundo hispánico.",
  "dominioPublico": true,
  "citas": [
   {
    "texto": "porque como las paga el vulgo, es justo / hablarle en necio para darle gusto.",
    "obra": "Arte nuevo de hacer comedias en este tiempo (1609)",
    "url": "https://es.wikisource.org/wiki/Arte_nuevo_de_hacer_comedias_en_este_tiempo"
   }
  ],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/7/79/LopedeVega.jpg",
   "licencia": "Dominio público",
   "autorFoto": "Atribuido a Eugenio Cajés, c. 1627 (Museo Lázaro Galdiano, Madrid)",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:LopedeVega.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Lope_de_Vega",
   "https://www.cervantesvirtual.com/portales/lope_de_vega/autor_biobibliografia/",
   "https://dbe.rah.es/biografias/5043/lope-de-vega-carpio",
   "https://es.wikipedia.org/wiki/Fuenteovejuna",
   "https://es.wikipedia.org/wiki/El_caballero_de_Olmedo"
  ],
  "notas": "La fecha de nacimiento (25 de noviembre de 1562) procede de Pérez de Montalbán; Cervantes Virtual señala que se discute y que algunos proponen el 2 de diciembre. Cervantes Virtual data La Arcadia en 1589 frente a 1598 en Wikipedia; se adoptó 1598, fecha de la edición madrileña. Su participación en la Gran Armada (1588) la afirmó él mismo, pero Cervantes Virtual la considera dudosa. Las fechas de Fuenteovejuna y El caballero de Olmedo son de publicación, no de composición."
 },
 {
  "id": "gustavo-adolfo-becquer",
  "nombre": "Gustavo Adolfo Claudio Domínguez Bastida (Gustavo Adolfo Bécquer)",
  "anios": "1836 – 1870",
  "nacimiento": "17 de febrero de 1836 · Sevilla, España",
  "fallecimiento": "22 de diciembre de 1870 · Madrid",
  "municipioOrigen": "Sevilla, España",
  "movimiento": "Posromanticismo",
  "bloqueCanon": "universales",
  "tituloHonorifico": "Poeta de las Rimas y las Leyendas; voz íntima del Romanticismo tardío",
  "semblanzaSintetica": "Poeta y narrador sevillano. Sus Rimas, breves y de tono intimista, y sus Leyendas en prosa, reunidas póstumamente en 1871, renovaron la lírica española y abrieron camino a la poesía moderna en lengua castellana.",
  "biografiaCompleta": [
   "Gustavo Adolfo Domínguez Bastida nació en Sevilla el 17 de febrero de 1836, hijo del pintor José María Domínguez Bécquer, apellido de origen flamenco que él y su hermano Valeriano adoptaron como nombre artístico. Quedó huérfano de padre en 1841 y de madre en 1847. Ingresó en 1846 en el Colegio Naval de San Telmo, clausurado al año siguiente, y después estudió pintura en la Escuela de Bellas Artes sevillana, que abandonó en 1850. En 1853 publicaba ya versos en revistas de su ciudad, y en octubre de 1854 se trasladó a Madrid con la ambición de triunfar como escritor.",
   "En la capital vivió de trabajos periodísticos y de un modesto empleo en la Dirección de Bienes Nacionales. En 1857 emprendió la Historia de los templos de España, proyecto que fracasó en 1858, año en que una grave enfermedad lo postró y apareció su primera leyenda, El caudillo de las manos rojas. Entre 1860 y 1861 publicó en El Contemporáneo las Cartas literarias a una mujer; el 19 de mayo de 1860 se casó con Casta Esteban, con quien tuvo tres hijos. Una estancia en el monasterio de Veruela en 1864 dio origen a las Cartas desde mi celda.",
   "Fue censor de novelas entre 1864 y 1865 y dirigió El Contemporáneo y El Museo Universal. La revolución de septiembre de 1868 le hizo perder el cargo; se separó de Casta y se refugió en Toledo con su hermano Valeriano, con quien reconstruyó de memoria sus poemas, perdidos en los disturbios, en el manuscrito Libro de los gorriones. En 1870 dirigió La Ilustración de Madrid. Valeriano murió el 23 de septiembre y Gustavo Adolfo el 22 de diciembre de 1870. Sus amigos editaron sus Obras en dos volúmenes en julio de 1871."
  ],
  "obrasCapitales": [
   {
    "titulo": "Historia de los templos de España",
    "anio": 1857,
    "genero": "Prosa histórico-artística",
    "descripcion": "Ambicioso proyecto editorial sobre la arquitectura religiosa española, del que solo apareció el tomo dedicado a Toledo antes de que la empresa quebrara en 1858."
   },
   {
    "titulo": "Leyendas",
    "anio": 1871,
    "genero": "Narrativa breve",
    "descripcion": "Relatos de ambiente medieval y fantástico como El monte de las ánimas, Maese Pérez el organista o El rayo de luna, publicados en prensa entre 1858 y 1865 y reunidos en las Obras de 1871."
   },
   {
    "titulo": "Cartas literarias a una mujer",
    "anio": 1861,
    "genero": "Ensayo epistolar",
    "descripcion": "Cuatro cartas aparecidas en El Contemporáneo (1860-1861) en las que expone su poética: la poesía como sentimiento que la palabra apenas alcanza a expresar."
   },
   {
    "titulo": "Cartas desde mi celda",
    "anio": 1864,
    "genero": "Prosa epistolar",
    "descripcion": "Nueve cartas escritas en el monasterio de Veruela y publicadas en El Contemporáneo, mezcla de paisaje, costumbres aragonesas y meditación personal."
   },
   {
    "titulo": "Rimas",
    "anio": 1871,
    "genero": "Poesía",
    "descripcion": "Setenta y nueve poemas breves sobre la poesía, el amor, el desengaño y la muerte, reconstruidos en el Libro de los gorriones (1868) y publicados póstumamente en las Obras de 1871."
   }
  ],
  "legadoPatrimonial": "Las Rimas son el puente entre el Romanticismo y la poesía contemporánea en español: su depuración formal y su intimismo influyeron en Rubén Darío, Juan Ramón Jiménez, Antonio Machado y la Generación del 27. Es uno de los poetas más leídos y memorizados de la lengua.",
  "dominioPublico": true,
  "citas": [
   {
    "texto": "¿Qué es poesía? ¿Y tú me lo preguntas? / Poesía... eres tú.",
    "obra": "Rima XXI, Rimas (ed. póstuma, 1871)",
    "url": "https://es.wikisource.org/wiki/Rima_XXI"
   }
  ],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/9/99/Portrait_of_Gustavo_Adolfo_B%C3%A9cquer%2C_by_his_brother_Valeriano_%281862%29.jpg",
   "licencia": "Dominio público",
   "autorFoto": "Valeriano Bécquer, 1862 (Museo de Bellas Artes de Sevilla)",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Portrait_of_Gustavo_Adolfo_B%C3%A9cquer,_by_his_brother_Valeriano_(1862).jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Gustavo_Adolfo_B%C3%A9cquer",
   "https://www.cervantesvirtual.com/portales/gustavo_adolfo_becquer/autor_biografia/",
   "https://commons.wikimedia.org/wiki/File:Portrait_of_Gustavo_Adolfo_B%C3%A9cquer,_by_his_brother_Valeriano_(1862).jpg"
  ],
  "notas": "La infobox de Wikipedia da 18 de febrero de 1836 y 23 de diciembre de 1870, pero el cuerpo del artículo y la biografía de Cervantes Virtual coinciden en 17 de febrero y 22 de diciembre, fechas aquí adoptadas. La causa de la muerte también varía: tuberculosis según la infobox; el certificado médico habló de «un gran infarto de hígado, complicado con una fiebre intermitente maligna». Los años de las Leyendas y de las Rimas corresponden a la edición conjunta de 1871, pues se publicaron antes de forma dispersa en prensa."
 },
 {
  "id": "ruben-dario",
  "nombre": "Félix Rubén García Sarmiento (Rubén Darío)",
  "anios": "1867 – 1916",
  "nacimiento": "18 de enero de 1867 · Metapa (hoy Ciudad Darío), Nicaragua",
  "fallecimiento": "6 de febrero de 1916 · León (Nicaragua)",
  "municipioOrigen": "Metapa (Ciudad Darío), Nicaragua",
  "movimiento": "Modernismo",
  "bloqueCanon": "universales",
  "tituloHonorifico": "Príncipe de las letras castellanas; padre del modernismo",
  "semblanzaSintetica": "Poeta, periodista y diplomático nicaragüense, máximo representante del modernismo hispánico. Con Azul... (1888), Prosas profanas (1896) y Cantos de vida y esperanza (1905) renovó el lenguaje, la métrica y la sensibilidad de la poesía en español a ambos lados del Atlántico.",
  "biografiaCompleta": [
   "Félix Rubén García Sarmiento nació el 18 de enero de 1867 en Metapa, Nicaragua, localidad que hoy lleva su nombre, Ciudad Darío. Se crió en León con sus tíos abuelos y fue un niño prodigio: publicaba versos en periódicos desde los trece años. En junio de 1886 viajó a Chile, donde trabajó en la prensa de Valparaíso y Santiago y publicó en 1888 Azul..., libro de cuentos y poemas que el crítico español Juan Valera saludó en sus Cartas americanas; una segunda edición ampliada apareció en 1890.",
   "De regreso a Centroamérica dirigió periódicos y se casó con Rafaela Contreras, muerta en 1893. Ese año conoció París y el 13 de agosto llegó a Buenos Aires como cónsul de Colombia; en la capital argentina publicó en 1896 Los raros, retratos de escritores admirados, y Prosas profanas y otros poemas, manifiesto del esteticismo modernista. Como corresponsal de La Nación llegó a Madrid el 22 de diciembre de 1898 para informar sobre la España derrotada, y desde entonces alternó residencias en París y Madrid, con viajes por Europa y América.",
   "Nombrado cónsul de Nicaragua en París en 1903, publicó en Madrid Cantos de vida y esperanza (1905), su obra más honda, seguida de El canto errante (1907) y Poema del otoño y otros poemas (1910). Fue ministro residente de Nicaragua en Madrid entre 1909 y 1910. Enfermo y arruinado, tras una gira por Nueva York y Guatemala regresó a Nicaragua el 7 de enero de 1916 y murió en León el 6 de febrero, a los 49 años, a causa de una cirrosis hepática."
  ],
  "obrasCapitales": [
   {
    "titulo": "Azul...",
    "anio": 1888,
    "genero": "Cuentos y poesía",
    "descripcion": "Publicado en Valparaíso, inaugura el modernismo hispánico con una prosa de refinamiento parnasiano y poemas de sonoridad nueva."
   },
   {
    "titulo": "Los raros",
    "anio": 1896,
    "genero": "Ensayo",
    "descripcion": "Semblanzas de escritores admirados, de Poe y Verlaine a Lautréamont y Martí, que fijaron el canon estético de su generación."
   },
   {
    "titulo": "Prosas profanas y otros poemas",
    "anio": 1896,
    "genero": "Poesía",
    "descripcion": "Cumbre del esteticismo modernista: princesas, cisnes y versalles, con innovaciones métricas que incluyen el verso alejandrino y la «Sonatina»."
   },
   {
    "titulo": "Cantos de vida y esperanza, los cisnes y otros poemas",
    "anio": 1905,
    "genero": "Poesía",
    "descripcion": "Libro de madurez, más grave y reflexivo, que abarca la angustia existencial («Lo fatal»), la conciencia hispánica y la melancolía del tiempo («Canción de otoño en primavera»)."
   },
   {
    "titulo": "El canto errante",
    "anio": 1907,
    "genero": "Poesía",
    "descripcion": "Reúne poemas de temas y tonos diversos con un prólogo, «Dilucidaciones», que defiende la libertad del poeta frente a escuelas y críticos."
   }
  ],
  "legadoPatrimonial": "Darío transformó la poesía en español del siglo XX y su influjo alcanza a Antonio Machado, Juan Ramón Jiménez, Lorca, Neruda y Vallejo. Nicaragua lo considera su poeta nacional y su figura preside el Teatro Nacional y la ciudad que lleva su nombre.",
  "dominioPublico": true,
  "citas": [
   {
    "texto": "Juventud, divino tesoro, / ¡ya te vas para no volver!",
    "obra": "«Canción de otoño en primavera», Cantos de vida y esperanza (1905)",
    "url": "https://es.wikisource.org/wiki/Canci%C3%B3n_de_oto%C3%B1o_en_primavera"
   }
  ],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/7/72/Rub%C3%A9n_Dar%C3%ADo.jpg",
   "licencia": "Dominio público",
   "autorFoto": "Fotógrafo desconocido, anterior a 1916",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Rub%C3%A9n_Dar%C3%ADo.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Rub%C3%A9n_Dar%C3%ADo",
   "https://www.cervantesvirtual.com/portales/ruben_dario/ruben_dario_y_su_obra/",
   "https://commons.wikimedia.org/wiki/File:Rub%C3%A9n_Dar%C3%ADo.jpg"
  ],
  "notas": "Fechas y títulos coinciden en Wikipedia y en el portal Rubén Darío de Cervantes Virtual. La ficha de Commons advierte que la fotografía, aunque de dominio público por antigüedad, podría no estarlo en países con plazos de 100 años que no aplican la regla del plazo más corto, y menciona México expresamente; al ser anónima y anterior a 1916, el riesgo es mínimo, pero conviene tenerlo presente."
 },
 {
  "id": "jose-marti",
  "nombre": "José Julián Martí Pérez",
  "anios": "1853 – 1895",
  "nacimiento": "28 de enero de 1853 · La Habana, Cuba",
  "fallecimiento": "19 de mayo de 1895 · Dos Ríos (Oriente, Cuba)",
  "municipioOrigen": "La Habana, Cuba",
  "movimiento": "Modernismo (iniciador)",
  "bloqueCanon": "universales",
  "tituloHonorifico": "Apóstol de la independencia cubana e iniciador del modernismo",
  "semblanzaSintetica": "Poeta, ensayista, periodista y político cubano. Organizó la guerra de independencia de Cuba desde el exilio y murió en combate; su prosa y sus Versos sencillos lo sitúan entre los fundadores del modernismo hispanoamericano.",
  "biografiaCompleta": [
   "José Julián Martí Pérez nació en La Habana el 28 de enero de 1853, hijo de un sargento valenciano y de una canaria. Alumno del poeta Rafael María de Mendive, con dieciséis años publicó sus primeros escritos independentistas al estallar la guerra de 1868. El 21 de octubre de 1869 fue encarcelado por una carta considerada desleal y en 1870 condenado a seis años de presidio con trabajos forzados en las canteras de San Lázaro; la pena se conmutó por la deportación a España, adonde llegó en enero de 1871. Allí publicó El presidio político en Cuba (1871) y se licenció en Derecho y en Filosofía y Letras en Zaragoza.",
   "En febrero de 1875 llegó a México, donde ejerció el periodismo; en 1877 enseñó en la Escuela Normal de Guatemala y en diciembre se casó con Carmen Zayas Bazán. Volvió a Cuba en 1878, fue deportado de nuevo a España en septiembre de 1879 y en 1880 se estableció en Nueva York, donde vivió casi quince años. Desde allí envió crónicas a los grandes diarios de América Latina, publicó Ismaelillo (1882), la novela Amistad funesta (1885) y la revista infantil La Edad de Oro (1889), y escribió en 1891 el ensayo Nuestra América y los Versos sencillos.",
   "En 1892 fundó el periódico Patria (14 de marzo) y el Partido Revolucionario Cubano (10 de abril), del que fue elegido delegado, y durante tres años unió a los emigrados y a los veteranos para una nueva guerra. El 25 de marzo de 1895 firmó con Máximo Gómez el Manifiesto de Montecristi y el 11 de abril desembarcó en Cuba. Cayó en combate el 19 de mayo de 1895 en Dos Ríos, cerca de Palma Soriano, en la provincia de Oriente. Sus Versos libres se publicaron póstumamente."
  ],
  "obrasCapitales": [
   {
    "titulo": "El presidio político en Cuba",
    "anio": 1871,
    "genero": "Ensayo / testimonio",
    "descripcion": "Denuncia, escrita en Madrid a los dieciocho años, de los horrores del presidio colonial que él mismo había padecido."
   },
   {
    "titulo": "Ismaelillo",
    "anio": 1882,
    "genero": "Poesía",
    "descripcion": "Quince poemas dedicados a su hijo, de imaginería luminosa y ritmo nuevo; se considera el primer libro del modernismo hispanoamericano."
   },
   {
    "titulo": "La Edad de Oro",
    "anio": 1889,
    "genero": "Literatura infantil / revista",
    "descripcion": "Revista mensual «para los niños de América», de la que escribió íntegramente los cuatro números aparecidos entre julio y octubre de 1889."
   },
   {
    "titulo": "Nuestra América",
    "anio": 1891,
    "genero": "Ensayo",
    "descripcion": "Texto fundacional del pensamiento latinoamericanista que reclama gobernar los pueblos desde su propia realidad y advierte sobre el poder de Estados Unidos."
   },
   {
    "titulo": "Versos sencillos",
    "anio": 1891,
    "genero": "Poesía",
    "descripcion": "Poemario en octosílabos de aparente sencillez y gran hondura; incluye «Yo soy un hombre sincero» y «Cultivo una rosa blanca», base de la canción «Guantanamera»."
   }
  ],
  "legadoPatrimonial": "Martí es el héroe nacional de Cuba y una referencia moral e intelectual de toda Hispanoamérica. Su prosa periodística renovó el ensayo en español, y su poesía, cantada popularmente, forma parte de la memoria colectiva del continente.",
  "dominioPublico": true,
  "citas": [
   {
    "texto": "Cultivo una rosa blanca / en julio como enero, / para el amigo sincero / que me da su mano franca.",
    "obra": "Versos sencillos, XXXIX (1891)",
    "url": "https://es.wikisource.org/wiki/Versos_sencillos/XXXIX"
   }
  ],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Jos%C3%A9_Mart%C3%AD_retrato_hecho_en_M%C3%A9xico_1875.jpg",
   "licencia": "Dominio público (CC0 1.0)",
   "autorFoto": "Valleto y Cía., México, 1875",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Jos%C3%A9_Mart%C3%AD_retrato_hecho_en_M%C3%A9xico_1875.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Jos%C3%A9_Mart%C3%AD",
   "https://www.josemarti.cu/biografia/",
   "https://www.ecured.cu/Jos%C3%A9_Mart%C3%AD",
   "https://commons.wikimedia.org/wiki/File:Jos%C3%A9_Mart%C3%AD_retrato_hecho_en_M%C3%A9xico_1875.jpg"
  ],
  "notas": "Wikipedia data Ismaelillo en 1882 y EcuRed en 1881; se adoptó 1882, año de la impresión en Nueva York. Dos Ríos no era un poblado sino la confluencia de dos ríos cerca de Palma Soriano. Para Versos libres (póstumo) y Amistad funesta (1885) la fecha procede solo de Wikipedia, por lo que no se incluyeron entre las obras capitales. La fotografía fue tomada en México en 1875, dato de interés para el público mexicano."
 },
 {
  "id": "antonio-machado",
  "nombre": "Antonio Cipriano José María Machado Ruiz",
  "anios": "1875 – 1939",
  "nacimiento": "26 de julio de 1875 · Sevilla, España",
  "fallecimiento": "22 de febrero de 1939 · Colliure (Francia)",
  "municipioOrigen": "Sevilla, España",
  "movimiento": "Generación del 98 (con raíces modernistas)",
  "bloqueCanon": "universales",
  "tituloHonorifico": "Poeta de Campos de Castilla; conciencia ética de la Generación del 98",
  "semblanzaSintetica": "Poeta sevillano, el más joven de la Generación del 98. De un simbolismo intimista en Soledades pasó a la meditación sobre España y el tiempo en Campos de Castilla; murió en el exilio francés al final de la guerra civil.",
  "biografiaCompleta": [
   "Antonio Machado Ruiz nació el 26 de julio de 1875 en el palacio de las Dueñas de Sevilla, en una familia liberal e ilustrada: su padre, Antonio Machado Álvarez, fue folclorista, y su abuelo, catedrático y rector. En 1883 la familia se trasladó a Madrid y Antonio, como su hermano Manuel, estudió en la Institución Libre de Enseñanza, con cuyo ideario estuvo siempre comprometido. Viajó a París en 1899 y 1902, donde trabajó como traductor y conoció a Rubén Darío, y publicó en 1903 su primer libro, Soledades.",
   "En mayo de 1907 obtuvo la cátedra de francés del instituto de Soria y en octubre publicó Soledades. Galerías. Otros poemas. El 30 de julio de 1909 se casó con Leonor Izquierdo, de quince años. En 1911 ambos viajaron a París con una beca; Leonor enfermó de tuberculosis y murió en Soria el 1 de agosto de 1912, pocos meses después de aparecer Campos de Castilla, su obra cumbre. Destrozado, Machado se trasladó en noviembre al instituto de Baeza, donde escribió los poemas a Leonor y a la tierra andaluza que ampliaron Campos de Castilla en 1917.",
   "En octubre de 1919 pasó al instituto de Segovia y durante más de una década viajó a Madrid para las tertulias y para escribir teatro con su hermano Manuel. Publicó Nuevas canciones (1924) y fue elegido miembro de la Real Academia Española en 1927, aunque nunca llegó a ingresar. Desde 1928 vivió el amor tardío por Pilar de Valderrama, la Guiomar de sus versos. Se instaló en Madrid en 1932 y en 1936 publicó Juan de Mairena. Fiel a la República, salió de España el 22 de enero de 1939 y murió en Colliure el 22 de febrero."
  ],
  "obrasCapitales": [
   {
    "titulo": "Soledades",
    "anio": 1903,
    "genero": "Poesía",
    "descripcion": "Primer libro, de tono simbolista e intimista, centrado en el tiempo, el sueño y los paisajes del alma."
   },
   {
    "titulo": "Soledades. Galerías. Otros poemas",
    "anio": 1907,
    "genero": "Poesía",
    "descripcion": "Reelaboración y ampliación de Soledades que depura su voz: las «galerías» interiores, los patios sevillanos, la tarde y la fuente como símbolos recurrentes."
   },
   {
    "titulo": "Campos de Castilla",
    "anio": 1912,
    "genero": "Poesía",
    "descripcion": "Obra mayor que vuelve la mirada hacia el paisaje soriano, la historia y el presente de España y el dolor por Leonor; incluye los «Proverbios y cantares» y «La tierra de Alvargonzález»."
   },
   {
    "titulo": "Nuevas canciones",
    "anio": 1924,
    "genero": "Poesía",
    "descripcion": "Libro de madurez que acentúa la veta sentenciosa y filosófica de los proverbios y los cantares populares."
   },
   {
    "titulo": "Juan de Mairena. Sentencias, donaires, apuntes y recuerdos de un profesor apócrifo",
    "anio": 1936,
    "genero": "Prosa",
    "descripcion": "Reflexiones sobre poesía, filosofía, educación y política puestas en boca de un maestro imaginario; cima de su prosa."
   }
  ],
  "legadoPatrimonial": "Machado es uno de los poetas más queridos de la lengua: sus versos sobre el camino, el tiempo y Castilla forman parte del habla común, y su tumba en Colliure es lugar de peregrinación. Su obra une la hondura lírica con el compromiso cívico y ha sido musicada y traducida en todo el mundo.",
  "dominioPublico": false,
  "citas": [
   {
    "texto": "Caminante, son tus huellas / el camino, y nada más; / caminante, no hay camino: / se hace camino al andar.",
    "obra": "«Proverbios y cantares», XXIX, Campos de Castilla (1912)",
    "url": "https://es.wikisource.org/wiki/Proverbios_y_cantares_(Campos_de_Castilla)"
   }
  ],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/5/50/Antonio_Machado_-_Poes%C3%ADas_completas_-_bdh0000252161_%28page_8_crop%29.jpg",
   "licencia": "Dominio público",
   "autorFoto": "Fotógrafo no identificado; reproducida en Poesías completas (Espasa-Calpe, 1928), ejemplar de la Biblioteca Digital Hispánica",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Antonio_Machado_-_Poes%C3%ADas_completas_-_bdh0000252161_(page_8_crop).jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Antonio_Machado",
   "https://www.cervantesvirtual.com/portales/antonio_machado/biografia/",
   "https://www.rae.es/academico/antonio-machado-y-ruiz-electo-1927",
   "https://commons.wikimedia.org/wiki/File:Antonio_Machado_-_Poes%C3%ADas_completas_-_bdh0000252161_(page_8_crop).jpg"
  ],
  "notas": "Fechas coincidentes en Wikipedia, Cervantes Virtual y la RAE. Falleció en 1939, por lo que en México (vida más 100 años) su obra no entra en dominio público hasta 2040; en España y la Unión Europea sí lo está desde 2010. La ficha de Commons consigna al propio Machado como «autor» de la fotografía, lo que es un dato de catalogación, no de autoría real; la imagen es de dominio público por haberse publicado en 1928."
 },
 {
  "id": "alejandra-pizarnik",
  "nombre": "Flora Alejandra Pizarnik",
  "anios": "1936 – 1972",
  "nacimiento": "29 de abril de 1936 · Avellaneda (provincia de Buenos Aires), Argentina",
  "fallecimiento": "25 de septiembre de 1972 · Buenos Aires",
  "municipioOrigen": "Avellaneda, Argentina",
  "movimiento": "Poesía argentina de la generación del 60; influencia surrealista",
  "bloqueCanon": "universales",
  "tituloHonorifico": "Poeta del silencio y de la palabra extrema",
  "semblanzaSintetica": "Poeta, ensayista y traductora argentina. En libros breves y de intensa concentración, como Árbol de Diana (1962) y Extracción de la piedra de locura (1968), exploró los límites del lenguaje, la noche, la infancia y la muerte. Murió a los 36 años.",
  "biografiaCompleta": [
   "Flora Alejandra Pizarnik nació el 29 de abril de 1936 en el Hospital Fiorito de Avellaneda, en el conurbano de Buenos Aires, hija de Elías Pozharnik y Rejzla Bromiker, inmigrantes judíos procedentes de Równe, entonces en Polonia. Estudió en la Escuela Normal n.º 7 de Avellaneda y en una escuela hebrea. Al terminar el secundario en 1954 cursó estudios en la Facultad de Filosofía y Letras de la Universidad de Buenos Aires y en la Escuela de Periodismo, y más tarde pintura con Juan Batlle Planas. En 1955, con diecinueve años, publicó su primer libro, La tierra más ajena.",
   "Le siguieron La última inocencia (1956) y Las aventuras perdidas (1958). Entre 1960 y 1964 vivió en París, donde trabajó para la revista Cuadernos y para editoriales francesas, publicó poemas y críticas, tradujo a Antonin Artaud, Henri Michaux, Aimé Césaire e Yves Bonnefoy, estudió historia de las religiones y literatura francesa en la Sorbona y trabó amistad con Julio Cortázar y Octavio Paz. Paz prologó Árbol de Diana (1962), libro de poemas brevísimos que la consagró.",
   "De regreso en Buenos Aires publicó Los trabajos y las noches (1965), que obtuvo el Premio Municipal de Poesía, Extracción de la piedra de locura (1968) y El infierno musical (1971), además del texto en prosa La condesa sangrienta. Recibió la beca Guggenheim en 1969 y la Fulbright en 1971. Sufrió depresiones graves y pasó sus últimos meses internada en el Hospital Pirovano. Murió el 25 de septiembre de 1972, en su departamento de la calle Montevideo, por una sobredosis de secobarbital. Sus Diarios y su Poesía completa se editaron póstumamente."
  ],
  "obrasCapitales": [
   {
    "titulo": "La tierra más ajena",
    "anio": 1955,
    "genero": "Poesía",
    "descripcion": "Primer libro, publicado a los diecinueve años y firmado todavía como Flora Alejandra Pizarnik; la autora lo excluyó después de su obra reconocida."
   },
   {
    "titulo": "Árbol de Diana",
    "anio": 1962,
    "genero": "Poesía",
    "descripcion": "Treinta y ocho poemas brevísimos, publicados por la editorial Sur con prólogo de Octavio Paz; es su libro más celebrado y el que fijó su voz."
   },
   {
    "titulo": "Los trabajos y las noches",
    "anio": 1965,
    "genero": "Poesía",
    "descripcion": "Poemas de amor y ausencia de extrema desnudez, galardonados con el Premio Municipal de Poesía de Buenos Aires."
   },
   {
    "titulo": "Extracción de la piedra de locura",
    "anio": 1968,
    "genero": "Poesía",
    "descripcion": "Abre el paso al poema en prosa y a una escritura más desgarrada que indaga en la locura, el lenguaje y la muerte."
   },
   {
    "titulo": "El infierno musical",
    "anio": 1971,
    "genero": "Poesía",
    "descripcion": "Último libro publicado en vida; prosa poética que lleva al límite la tensión entre el deseo de decir y la imposibilidad de la palabra."
   }
  ],
  "legadoPatrimonial": "Pizarnik es una de las voces más influyentes de la poesía hispanoamericana de la segunda mitad del siglo XX y figura de culto para generaciones de lectores y poetas. Su archivo se conserva en la Universidad de Princeton y su obra ha sido traducida a numerosas lenguas.",
  "dominioPublico": false,
  "citas": [
   {
    "texto": "sólo la sed / el silencio / ningún encuentro",
    "obra": "Árbol de Diana, 3 (1962)",
    "url": "https://www.poesi.as/apz62003.htm"
   }
  ],
  "retrato": {
   "url": "",
   "licencia": "",
   "autorFoto": "",
   "paginaCommons": ""
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Alejandra_Pizarnik",
   "https://www.cultura.gob.ar/alejandra-pizarnik-10448/",
   "https://www.poesi.as/indewapz.htm",
   "https://commons.wikimedia.org/wiki/File:Alejandra_Pizarnik-C123.jpg"
  ],
  "notas": "Fechas y lugares confirmados por Wikipedia y por el Ministerio de Cultura de Argentina (consultado mediante buscador; el sitio rechaza el acceso directo). La fotografía está en dominio público en Argentina porque la ley local protege las fotografías solo 20 años desde su publicación (1981); su situación jurídica en México no está confirmada, por lo que conviene usarla con atribución y, si es posible, consultar a un especialista. La condesa sangrienta se menciona en la biografía pero no entre las obras capitales porque su fecha (1971) solo consta en una fuente."
 },
 {
  "id": "juan-carlos-onetti",
  "nombre": "Juan Carlos Onetti Borges",
  "anios": "1909 – 1994",
  "nacimiento": "1 de julio de 1909 · Montevideo, Uruguay",
  "fallecimiento": "30 de mayo de 1994 · Madrid",
  "municipioOrigen": "Montevideo, Uruguay",
  "movimiento": "Generación del 45 (Uruguay); precursor de la novela moderna hispanoamericana",
  "bloqueCanon": "universales",
  "tituloHonorifico": "Fundador de Santa María; Premio Cervantes 1980",
  "semblanzaSintetica": "Narrador uruguayo, uno de los mayores novelistas en lengua española del siglo XX. Creador de la ciudad imaginaria de Santa María, escenario de La vida breve, El astillero y Juntacadáveres; recibió el Premio Cervantes en 1980 y murió exiliado en Madrid.",
  "biografiaCompleta": [
   "Juan Carlos Onetti Borges nació en Montevideo el 1 de julio de 1909. Lector voraz y fabulador desde niño, abandonó pronto los estudios secundarios y se ganó la vida en oficios diversos mientras empezaba a publicar relatos. Residió en Buenos Aires entre 1930 y 1934 y, de vuelta en Montevideo, fue secretario de redacción del semanario Marcha desde su fundación en 1939, donde firmó la columna «La piedra en el charco». Ese mismo año publicó su primera novela corta, El pozo, considerada el inicio de la narrativa urbana moderna en el Río de la Plata.",
   "En 1941 publicó Tierra de nadie y se instaló de nuevo en Buenos Aires, donde trabajó en la agencia Reuters y dirigió la revista Vea y Lea; allí permaneció hasta 1955. En 1950 apareció La vida breve, novela en la que surge por primera vez Santa María, ciudad ficticia que funde Montevideo y Buenos Aires y que será el escenario de buena parte de su obra. De regreso en Montevideo en 1955 dirigió las bibliotecas municipales y colaboró en el diario Acción; en esa etapa publicó Los adioses (1954), Para una tumba sin nombre, El astillero (1961) y Juntacadáveres (1964).",
   "En 1962 recibió el Premio Nacional de Literatura de Uruguay. En 1974, bajo la dictadura, fue detenido y recluido por integrar el jurado que premió un cuento considerado subversivo, y en 1975 se trasladó por motivos políticos a Madrid, donde vivió hasta su muerte. En España publicó Dejemos hablar al viento (1979) y recibió el Premio Cervantes en 1980 y el Gran Premio Nacional de Literatura de Uruguay en 1985. Su última novela, Cuando ya no importe, apareció en 1993. Murió en Madrid el 30 de mayo de 1994."
  ],
  "obrasCapitales": [
   {
    "titulo": "El pozo",
    "anio": 1939,
    "genero": "Novela corta",
    "descripcion": "Monólogo de Eladio Linacero, hombre solitario que escribe sus memorias en una pieza de pensión; texto fundacional de la narrativa existencial rioplatense."
   },
   {
    "titulo": "La vida breve",
    "anio": 1950,
    "genero": "Novela",
    "descripcion": "Juan María Brausen inventa, para huir de su vida, la ciudad de Santa María y a sus habitantes; obra clave que inaugura el ciclo sanmariano."
   },
   {
    "titulo": "Los adioses",
    "anio": 1954,
    "genero": "Novela corta",
    "descripcion": "Un almacenero reconstruye, con datos parciales y conjeturas, la historia de un enfermo que recibe cartas de dos mujeres; ejercicio magistral de narración oblicua."
   },
   {
    "titulo": "El astillero",
    "anio": 1961,
    "genero": "Novela",
    "descripcion": "Larsen regresa a Santa María para dirigir un astillero en ruinas y vivir una farsa de trabajo y amor; se la considera su obra maestra."
   },
   {
    "titulo": "Juntacadáveres",
    "anio": 1964,
    "genero": "Novela",
    "descripcion": "Larsen intenta fundar un prostíbulo en Santa María y choca con las fuerzas morales del pueblo; narra la prehistoria de El astillero."
   }
  ],
  "legadoPatrimonial": "Onetti anticipó la renovación de la novela hispanoamericana y fue reconocido como maestro por autores como Vargas Llosa, Cortázar y García Márquez. Santa María es uno de los grandes territorios imaginarios de la literatura en español, comparable al Macondo de García Márquez.",
  "dominioPublico": false,
  "citas": [],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Juan_Carlos_Onetti_1981.jpg",
   "licencia": "CC BY-SA 2.0",
   "autorFoto": "Elisa Cabot",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Juan_Carlos_Onetti_1981.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Juan_Carlos_Onetti",
   "https://www.cultura.gob.es/premiado/mostrarDetalleAction.do?prev_layout=premiadoResultado&layout=premiadoFicha&language=es&id=1007219&cache=init",
   "https://datos.bne.es/persona/XX966631.html",
   "https://commons.wikimedia.org/wiki/File:Juan_Carlos_Onetti_1981.jpg"
  ],
  "notas": "La ficha del Premio Cervantes del Ministerio de Cultura de España titula su última novela «Cuando ya no importa (1994)»; el título correcto es Cuando ya no importe y la fecha de publicación es 1993 (Wikipedia). La fotografía se describe como tomada en 1981, aunque la fecha de subida a Commons es de 2012; la licencia CC BY-SA 2.0 exige atribuir a Elisa Cabot y compartir con la misma licencia. No se incluyen citas porque no se localizó texto primario de acceso libre que permitiera verificarlas literalmente; las que circulan en Wikiquote proceden de diccionarios de citas, no de la obra."
 },
 {
  "id": "mario-benedetti",
  "nombre": "Mario Orlando Hardy Hamlet Brenno Benedetti Farrugia",
  "anios": "1920 – 2009",
  "nacimiento": "14 de septiembre de 1920 · Paso de los Toros (Tacuarembó), Uruguay",
  "fallecimiento": "17 de mayo de 2009 · Montevideo",
  "municipioOrigen": "Paso de los Toros, Uruguay",
  "movimiento": "Generación del 45 (Uruguay)",
  "bloqueCanon": "universales",
  "tituloHonorifico": "Poeta de lo cotidiano y de la conciencia cívica",
  "semblanzaSintetica": "Escritor uruguayo de la Generación del 45, autor de más de ochenta libros de poesía, cuento, novela, teatro y ensayo. Su novela La tregua y sus poemas de amor y compromiso lo convirtieron en uno de los autores más leídos de la lengua; vivió doce años de exilio durante la dictadura uruguaya.",
  "biografiaCompleta": [
   "Mario Benedetti nació el 14 de septiembre de 1920 en Paso de los Toros, departamento de Tacuarembó, Uruguay. Su familia se trasladó a Montevideo, donde estudió en el Colegio Alemán y, por dificultades económicas, trabajó desde los catorce años como taquígrafo, vendedor, cajero y funcionario público, experiencia que nutriría sus Poemas de la oficina. En 1945 se incorporó al semanario Marcha, en el que se formó como periodista junto a Carlos Quijano y donde permaneció hasta su clausura en 1974. En 1946 se casó con Luz López Alegre, su compañera de toda la vida.",
   "Con Poemas de la oficina (1956) y los cuentos de Montevideanos (1959) retrató la clase media urbana de su país; La tregua (1960), diario íntimo de un viudo cincuentón, lo hizo célebre y fue llevada al cine. Gracias por el fuego (1965) acentuó su mirada política. Tras el golpe de Estado del 27 de junio de 1973 debió exiliarse: vivió en Buenos Aires, Lima, La Habana y España (Palma de Mallorca y Madrid), desde donde denunció el autoritarismo y defendió los derechos humanos. De ese periodo son Poemas de otros (1974) y la novela Primavera con una esquina rota (1982).",
   "En 1985, restaurada la democracia, regresó a Uruguay y repartió su vida entre Montevideo y Madrid, donde pasaba los inviernos australes por su asma. Siguió publicando poesía y narrativa, y la antología El amor, las mujeres y la vida (1995) fue un éxito masivo. Recibió el Premio Reina Sofía de Poesía Iberoamericana (1999), el I Premio Iberoamericano José Martí (2001) y el Premio Internacional Menéndez Pelayo (2005). Murió en su casa de Montevideo el 17 de mayo de 2009 y legó por testamento la Fundación Mario Benedetti, dedicada a la literatura y a los derechos humanos."
  ],
  "obrasCapitales": [
   {
    "titulo": "Poemas de la oficina",
    "anio": 1956,
    "genero": "Poesía",
    "descripcion": "Versos sobre la rutina gris del empleado montevideano, con un lenguaje coloquial que abrió un nuevo registro en la poesía uruguaya."
   },
   {
    "titulo": "Montevideanos",
    "anio": 1959,
    "genero": "Cuento",
    "descripcion": "Relatos de la clase media urbana que fijaron su mirada irónica y compasiva sobre la ciudad; su libro de cuentos más celebrado."
   },
   {
    "titulo": "La tregua",
    "anio": 1960,
    "genero": "Novela",
    "descripcion": "Diario de Martín Santomé, viudo próximo a jubilarse, que vive un breve amor con una joven compañera de oficina. Traducida a numerosas lenguas y adaptada al cine en 1974."
   },
   {
    "titulo": "Gracias por el fuego",
    "anio": 1965,
    "genero": "Novela",
    "descripcion": "Conflicto entre un hijo y su padre, poderoso empresario de prensa, como alegoría de la corrupción y la parálisis moral del Uruguay de los años sesenta."
   },
   {
    "titulo": "Primavera con una esquina rota",
    "anio": 1982,
    "genero": "Novela",
    "descripcion": "Escrita en el exilio, entrelaza las voces de un preso político, su familia dispersa y el propio autor; una de las grandes novelas sobre la dictadura y el destierro."
   }
  ],
  "legadoPatrimonial": "Benedetti es uno de los escritores en español más leídos y recitados del último medio siglo; sus poemas han sido musicados por Joan Manuel Serrat, Daniel Viglietti y Nacha Guevara, entre otros. La Fundación Mario Benedetti custodia su legado y continúa su labor en favor de la literatura y de los derechos humanos.",
  "dominioPublico": false,
  "citas": [
   {
    "texto": "Mi táctica es / mirarte / aprender como sos / quererte como sos",
    "obra": "«Táctica y estrategia», Poemas de otros (1974)",
    "url": "https://www.poesi.as/mbap051.htm"
   }
  ],
  "retrato": {
   "url": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Mario_Benedetti%2C_1981.jpg",
   "licencia": "CC BY-SA 2.0",
   "autorFoto": "Elisa Cabot",
   "paginaCommons": "https://commons.wikimedia.org/wiki/File:Mario_Benedetti,_1981.jpg"
  },
  "fuentes": [
   "https://es.wikipedia.org/wiki/Mario_Benedetti",
   "https://fundacionmariobenedetti.uy/mariobenedettibio/",
   "http://fundacionmariobenedetti.uy/mario-benedetti-biografia-detallada-1985-1999/",
   "http://fundacionmariobenedetti.uy/mario-benedetti-biografia-detallada-2000-2009/",
   "https://www.cervantesvirtual.com/portales/mario_benedetti/autor_apunte/",
   "https://commons.wikimedia.org/wiki/File:Mario_Benedetti,_1981.jpg"
  ],
  "notas": "Fechas y títulos coinciden en Wikipedia, la Fundación Mario Benedetti y Cervantes Virtual. Wikipedia añade «González» como último apellido en la infobox; se usó la forma que la propia Fundación y Cervantes Virtual recogen (Benedetti Farrugia). El poema «No te rindas», muy difundido en internet con su firma, no es de Benedetti y no debe usarse. La fotografía (CC BY-SA 2.0) exige atribución a Elisa Cabot y compartir con la misma licencia."
 }
];
