// src/data/escritores_ilustres.ts — Compendio Canónico de Escritores Ilustres Tabasqueños
// Sociedad de Escritores «Letras y Voces de Tabasco, A.C.»
// Investigación rigurosa, archivo patrimonial y literatura viva de Tabasco

export interface ObraCapital {
  titulo: string;
  anio: number | string;
  genero: string;
  descripcion: string;
}

export interface CitaMemorable {
  cita: string;
  obra: string;
  contexto: string;
}

export interface EscritorIlustre {
  id: string;
  nombre: string;
  tituloHonorifico: string;
  anios: string;
  nacimiento: string;
  fallecimiento: string;
  municipioOrigen: string;
  movimiento: string;
  categoria: 'vanguardia' | 'contemporaneos' | 'siglo_xix' | 'poesia_fluvial' | 'narrativa_teatro' | 'mexicanos' | 'universales';
  bloqueCanon: 'tabasquenos' | 'mexicanos' | 'universales';
  dossierSlug: string;
  tiempoLecturaMinutos: number;
  badge: string;
  foto: string;
  fotoFallback: string;
  imagen?: string;
  semblanzaSintetica: string;
  biografiaCompleta: string[];
  obrasCapitales: ObraCapital[];
  citasMemorables: CitaMemorable[];
  legadoPatrimonial: string;
  audioSugerido: {
    titulo: string;
    compositor: string;
    archivo: string;
  };
  datosCuriosos: string[];
  colorAcento: string;
  fondoDegradado: string;
}

export const ESCRITORES_ILUSTRES: EscritorIlustre[] = [
  // =========================================================================
  // 1. CARLOS PELLICER CÁMARA
  // =========================================================================
  {
    id: 'carlos-pellicer',
    nombre: 'Carlos Pellicer Cámara',
    tituloHonorifico: 'El Poeta de América y Arquitecto del Paisaje',
    anios: '1897 – 1977',
    nacimiento: '16 de enero de 1897 · San Juan Bautista (Villahermosa), Tabasco',
    fallecimiento: '16 de febrero de 1977 · Ciudad de México (Sepultado en la Rotonda de las Personas Ilustres)',
    municipioOrigen: 'Centro (Villahermosa)',
    movimiento: 'Vanguardismo / Posmodernismo / Lírica de los Sentidos',
    categoria: 'vanguardia',
    bloqueCanon: 'tabasquenos',
    dossierSlug: '01_carlos_pellicer',
    tiempoLecturaMinutos: 30,
    badge: 'POETA DE AMÉRICA',
    foto: '/assets/ilustres/carlos_pellicer.webp',
    fotoFallback: '/assets/ilustres/carlos_pellicer.png',
    semblanzaSintetica: 'La voz lírica más solar, vegetal y cósmica de las letras hispanoamericanas. Museógrafo visionario, transformó la geografía tabasqueña en una arquitectura de luz, agua y devoción cívica.',
    biografiaCompleta: [
      'Carlos Pellicer Cámara nació a orillas del río Grijalva en la antigua San Juan Bautista. Desde su juventud deslumbró con una palabra que rompía los moldes del romanticismo y modernismo tardío para inaugurar una sensualidad desbordante, donde el sol, los frutos, el trópico y el horizonte marino vibran con color puro.',
      'Viajero incansable por América Latina y Europa junto a José Vasconcelos, Pellicer fue bautizado tempranamente como «El Poeta de América». Su poesía prescinde del pesimismo existencial para celebrar el milagro incesante de la creación, la dignidad de los pueblos originarios y la majestad telúrica del sureste mexicano.',
      'Su legado trascendió con creces el papel: como museógrafo eminente, concibió y fundó el Parque-Museo La Venta en Villahermosa —un hito mundial al rescatar los colosales monolitos olmecas y situarlos en un santuario selvático a cielo abierto—, además del Museo Regional de Antropología «Carlos Pellicer Cámara», el Museo Frida Kahlo y el Museo Anahuacalli.',
      'Miembro de la Academia Mexicana de la Lengua y galardonado con el Premio Nacional de Ciencias y Artes en Lingüística y Literatura (1964), Pellicer es el patrono lírico indiscutible de Tabasco, cuya obra nos interpela a mirar la naturaleza no como mercancía, sino como epifanía divina y memoria viva.'
    ],
    obrasCapitales: [
      {
        titulo: 'Colores en el mar y otros poemas',
        anio: 1921,
        genero: 'Poesía Lírica',
        descripcion: 'Libro fundacional donde el verso libre y las imágenes plásticas capturan el deslumbramiento ante el océano y los horizontes del trópico.'
      },
      {
        titulo: 'Piedra de sacrificios',
        anio: 1924,
        genero: 'Poesía Épico-Arqueológica',
        descripcion: 'Homenaje a las civilizaciones prehispánicas de Mesoamérica, explorando el misterio de Palenque y las raíces mayas y olmecas.'
      },
      {
        titulo: 'Esquemas para una Oda Tropical',
        anio: 1933,
        genero: 'Poema Coral Mayor',
        descripcion: 'Cántico sublime al paisaje de Tabasco: el río, la ceiba, el calor y el agua elevados a categoría metafísica de fulgor incesante.'
      },
      {
        titulo: 'Hora de Junio',
        anio: 1937,
        genero: 'Sonetos y Lírica Pura',
        descripcion: 'Considerado por la crítica su cenit formal: sonetos donde la maestría clásica hispánica abraza el misterio del río y la muerte luminosa.'
      },
      {
        titulo: 'Práctica de vuelo',
        anio: 1956,
        genero: 'Poesía Mística y Devocional',
        descripcion: 'Compendio de sonetos marianos y reflexiones metafísicas sobre el anhelo del alma por remontar la gravedad terrena.'
      }
    ],
    citasMemorables: [
      {
        cita: '¡Trópico, para qué me diste las manos llenas de color! Todo lo que yo toque se llenará de sol.',
        obra: 'Esquemas para una Oda Tropical (1933)',
        contexto: 'Declaración de principios de su poética luminosa frente a la naturaleza tabasqueña.'
      },
      {
        cita: 'Hay en mi tierra un río de agua lenta y oscura, donde las ceibas miran pasar las nubes verdes del verano.',
        obra: 'Hora de Junio (1937)',
        contexto: 'Verso fundacional sobre la contemplación del curso fluvial del Grijalva.'
      },
      {
        cita: 'La flor es el saludo que la tierra le da al cielo; en Tabasco, la tierra saluda a todas horas.',
        obra: 'Discurso por las Flores (1946)',
        contexto: 'Ensayo magistral sobre la generosidad vegetal y la preservación de la vida silvestre.'
      }
    ],
    legadoPatrimonial: 'Pellicer definió el color, la tonalidad y la dignidad visual de Tabasco ante el mundo. Su creación del Parque-Museo La Venta sentó las bases de la museografía ecológica mundial.',
    audioSugerido: {
      titulo: 'Claro de Luna (Clair de Lune)',
      compositor: 'Claude Debussy',
      archivo: '/assets/audio/debussy_clair_de_lune.mp3'
    },
    datosCuriosos: [
      'Fue electo Senador de la República por Tabasco en 1976 sin realizar mítines convencionales, recitando versos en las plazas públicas.',
      'Diseñó personalmente los senderos botánicos y la ubicación de las cabezas colosales en el Parque-Museo La Venta para que la luz natural iluminara las facciones olmecas.',
      'Instalaba cada diciembre en su casa monumentales nacimientos navideños que atraían a miles de personas de todo el país.'
    ],
    colorAcento: '#EF7B38',
    fondoDegradado: 'from-[#EF7B38]/15 via-[#C5A059]/10 to-[#FAF7F0]'
  },

  // =========================================================================
  // 2. JOSÉ GOROSTIZA ALCALÁ
  // =========================================================================
  {
    id: 'jose-gorostiza',
    nombre: 'José Gorostiza Alcalá',
    tituloHonorifico: 'Arquitecto de Muerte sin Fin y Maestro del Rigor Intelectual',
    anios: '1901 – 1973',
    nacimiento: '10 de noviembre de 1901 · San Juan Bautista (Villahermosa), Tabasco',
    fallecimiento: '16 de marzo de 1973 · Ciudad de México',
    municipioOrigen: 'Centro (Villahermosa)',
    movimiento: 'Los Contemporáneos / Poesía Pura / Neobarroco Metafísico',
    categoria: 'contemporaneos',
    bloqueCanon: 'tabasquenos',
    dossierSlug: '02_jose_gorostiza',
    tiempoLecturaMinutos: 30,
    badge: 'CUMBRE METAFÍSICA',
    foto: '/assets/ilustres/jose_gorostiza.webp',
    fotoFallback: '/assets/ilustres/jose_gorostiza.png',
    semblanzaSintetica: 'Autor de «Muerte sin fin», monumento ontológico cumbre de la poesía en lengua española. Canciller de México en 1964 y orfebre de una palabra exacta donde el vaso de la inteligencia y el agua primordial dialogan eternamente.',
    biografiaCompleta: [
      'José Gorostiza Alcalá nació el 10 de noviembre de 1901 en San Juan Bautista (actual Villahermosa), Tabasco. Primogénito de don Celso Gorostiza y hermano mayor del célebre dramaturgo Celestino Gorostiza, su infancia en las márgenes del río Grijalva forjó en él una sensibilidad donde el agua fluvial se convirtió en la gran interrogación ontológica de su vida.',
      'Tras mudarse a la Ciudad de México huyendo de los avatares de la Revolución, ingresó a la Escuela Nacional Preparatoria en el Antiguo Colegio de San Ildefonso, integrándose al grupo más brillante de la vanguardia crítica: «Los Contemporáneos», junto a Xavier Villaurrutia, Salvador Novo, Jaime Torres Bodet, Bernardo Ortiz de Montellano y Carlos Pellicer.',
      'En 1925 publicó «Canciones para cantar en las barcas», una de las cimas de la lírica pura y el cancionero tradicional depurado en el siglo XX, donde la musicalidad cristalina dialoga con la soledad y la contemplación del mar.',
      'En 1939 entregó a la literatura universal su obra monumental: «Muerte sin fin», poema de 773 versos de prodigiosa perfección dialéctica sobre el sentido del ser, la creación divina y la muerte a través de la metáfora del vaso (la forma, la razón) y el agua (la sustancia informe y vital). Octavio Paz la definió como la tragedia de la inteligencia humana ante la forma.',
      'En paralelo, Gorostiza construyó una carrera diplomática de intachable rigor moral: fue Canciller de la República (Secretario de Relaciones Exteriores) en 1964, embajador y pilar jurídico fundamental de la doctrina mexicana de no intervención y de las negociaciones preparatorias del histórico Tratado de Tlatelolco para la desnuclearización de América Latina.',
      'Miembro de la Academia Mexicana de la Lengua desde 1954 y Premio Nacional de Ciencias y Artes en Literatura en 1968, la Escuela de Escritores de nuestra asociación civil honra su memoria llevando su ilustre nombre.'
    ],
    obrasCapitales: [
      {
        titulo: 'Canciones para cantar en las barcas',
        anio: 1925,
        genero: 'Lírica Neopopular y Poesía Pura',
        descripcion: 'Poemas de cristalina precisión rítmica inspirados en el mar, las barcas y la frontera movediza del ser.'
      },
      {
        titulo: 'Muerte sin fin',
        anio: 1939,
        genero: 'Poema Filosófico Mayor',
        descripcion: 'Catedral metafísica en 773 versos: la dialéctica entre el vaso ordenador y el agua rebelde frente al enigma de la nada.'
      },
      {
        titulo: 'Notas sobre poesía',
        anio: 1955,
        genero: 'Discurso de Ingreso y Poética',
        descripcion: 'Célebre ensayo donde define la poesía como investigación apasionada y testimonio de la condición humana.'
      },
      {
        titulo: 'Poesía',
        anio: 1964,
        genero: 'Obra Poética Reunida',
        descripcion: 'Edición canónica del Fondo de Cultura Económica prologada magistralmente por Alí Chumacero.'
      },
      {
        titulo: 'Prosa',
        anio: 1969,
        genero: 'Ensayos y Prosa Diplomática',
        descripcion: 'Compilación de la UNAM que recoge sus ensayos, reflexiones estéticas y documentos de Estado.'
      }
    ],
    citasMemorables: [
      {
        cita: 'Lleno de mí, sitiado en mi epidermis / por un dios inasible que me ahoga, / mentido rumor de alas abiertas / en el húmedo follaje de mi sangre...',
        obra: 'Muerte sin fin (Primer movimiento, 1939)',
        contexto: 'Arranque canónico del poema metafísico más celebrado del siglo XX en lengua castellana.'
      },
      {
        cita: 'No es agua ni es arena / la orilla del mar. / Es una frontera / que tiembla en la sombra, / un sueño de espuma / que viene y se va.',
        obra: 'Canciones para cantar en las barcas («La orilla del mar», 1925)',
        contexto: 'La levedad límpida del cancionero tradicional elevado a reflexión sobre los límites de la materia.'
      },
      {
        cita: 'La poesía es para mí una investigación apasionada y un testimonio de la condición humana, una tentativa de apresar en las redes del lenguaje la esquiva sustancia del ser.',
        obra: 'Notas sobre poesía (Discurso Academia Mexicana de la Lengua, 1955)',
        contexto: 'Definición de su credo estético y de la ascesis del oficio creador.'
      },
      {
        cita: '¡Aleluya, aleluya! / sobre la tierra fría; / el gusano trabaja / con ciega alegría. / No llores por el vaso / que se quebró en el suelo...',
        obra: 'Muerte sin fin (Tercer movimiento: El Baile, 1939)',
        contexto: 'La célebre danza macabra e irónica con la que concluye el poema frente a la destrucción de la forma.'
      }
    ],
    legadoPatrimonial: 'José Gorostiza dotó a Tabasco y a México del más alto monumento del intelecto lírico. Su devoción a la palabra exacta y su integridad como estadista de la diplomacia de paz fundamentan el espíritu pedagógico de la Escuela de Escritores «José Gorostiza».',
    audioSugerido: {
      titulo: 'Sonata Claro de Luna (Moonlight Sonata)',
      compositor: 'Ludwig van Beethoven',
      archivo: '/assets/audio/beethoven_moonlight_sonata.mp3'
    },
    datosCuriosos: [
      'Alcanzó la inmortalidad literaria con una obra poética contenida en dos delgados volúmenes, demostrando que la trascendencia radica en la densidad conceptual y no en la abundancia estéril.',
      'Como Canciller en 1964 y diplomático de carrera, sentó las bases jurídicas del Tratado de Tlatelolco que desnuclearizó América Latina, merecedor del Premio Nobel de la Paz 1982 otorgado a Alfonso García Robles.',
      'Su hermano menor, Celestino Gorostiza, fue otro titán de las letras mexicanas como dramaturgo de vanguardia, ensayista y director del Instituto Nacional de Bellas Artes (INBA).'
    ],
    colorAcento: '#C5A059',
    fondoDegradado: 'from-[#1C1814]/30 via-[#C5A059]/15 to-[#FAF7F0]'
  },

  // =========================================================================
  // 3. JOSÉ CARLOS BECERRA
  // =========================================================================
  {
    id: 'jose-carlos-becerra',
    nombre: 'José Carlos Becerra',
    tituloHonorifico: 'El Arquero del Instante y la Voz Trágica del 68',
    anios: '1936 – 1970',
    nacimiento: '21 de mayo de 1936 · Villahermosa, Tabasco',
    fallecimiento: '27 de mayo de 1970 · Brindisi, Italia (Accidente automovilístico camino a Grecia)',
    municipioOrigen: 'Centro (Villahermosa)',
    movimiento: 'Generación de los 60 / Poesía Existencial y Crítica',
    categoria: 'poesia_fluvial',
    bloqueCanon: 'tabasquenos',
    dossierSlug: '03_jose_carlos_becerra',
    tiempoLecturaMinutos: 30,
    badge: 'LÍRICA EXISTENCIAL',
    foto: '/assets/ilustres/jose_carlos_becerra.webp',
    fotoFallback: '/assets/ilustres/jose_carlos_becerra.png',
    semblanzaSintetica: 'El meteoro más deslumbrante y desgarrador de la poesía mexicana de la segunda mitad del siglo XX. Su lírica torrencial, fluvial y existencial capturó el pulso de una juventud que desafió al poder.',
    biografiaCompleta: [
      'José Carlos Becerra creció entre los aguaceros y las calles húmedas de Villahermosa, antes de trasladarse a la Ciudad de México para estudiar arquitectura y filosofía. Esa doble formación dotó a su palabra de una prodigiosa noción del espacio, la caída, el volumen y la luz.',
      'Con la publicación de «Relación de los hechos» (1967), Becerra irrumpió en el panorama nacional con una voz madura, grave y torrencial. Su poesía se desmarcó de la brevedad hermética para desplegar largos versos de aliento cósmico, donde el río Grijalva, la soledad urbana, el deseo amoroso y la premonición de la muerte se entrelazan.',
      'Testigo doloroso de la matanza de Tlatelolco en 1968, escribió poemas desgarradores como «El espejo de bronce», que condensaron la indignación moral y el luto de toda su generación.',
      'Becado por la Fundación Guggenheim en 1969, viajó a Nueva York y posteriormente a Europa. La mañana del 27 de mayo de 1970, con apenas 34 años recién cumplidos, su automóvil volcó en una curva de la costa de Brindisi, Italia, mientras se dirigía a embarcar hacia Grecia. En la cajuela del coche quedaron los manuscritos que Octavio Paz y Gabriel Zaid compilaron en el volumen póstumo «El otoño recorre las islas» (1973).',
      'Paz escribió sobre él: «José Carlos Becerra fue el poeta más dotado de su generación. Su muerte no sólo fue una desgracia para sus amigos, sino una catástrofe para la poesía mexicana».'
    ],
    obrasCapitales: [
      {
        titulo: 'Los muertos',
        anio: 1966,
        genero: 'Poema Plaquette',
        descripcion: 'Primer texto canónico que anticipa su obsesión por la memoria, la desaparición y los rostros que se borran en el agua.'
      },
      {
        titulo: 'Relación de los hechos',
        anio: 1967,
        genero: 'Poesía Mayor',
        descripcion: 'Obra cumbre publicada en vida: poemas extensos sobre el trópico tabasqueño, la urbe y la soledad contemporánea.'
      },
      {
        titulo: 'El espejo de bronce',
        anio: 1968,
        genero: 'Poema testimonial y político',
        descripcion: 'Respuesta ética y estética al dolor nacional de 1968; una de las elegías más hondas escritas en México.'
      },
      {
        titulo: 'El otoño recorre las islas',
        anio: 1973,
        genero: 'Obra Poética Completa (Póstuma)',
        descripcion: 'Monumento lírico recopilado por Octavio Paz y Gabriel Zaid, piedra de toque de la poesía en lengua española.'
      }
    ],
    citasMemorables: [
      {
        cita: 'El otoño recorre las islas, / las islas desiertas donde el viento no deja nada en su lugar, / donde el mar rompe con furia de caballo ciego / contra los acantilados de piedra negra.',
        obra: 'El otoño recorre las islas (1973)',
        contexto: 'Arranque del poema titular póstumo, meditación sobre el naufragio del tiempo y la soledad marina.'
      },
      {
        cita: 'Miro en el fondo del metal pulido / la sombra de un rostro que no termina de ser mío, / un rostro que el fuego y el martillo forjaron / en algún taller de artesanos olvidados...',
        obra: 'El espejo de bronce (1968)',
        contexto: 'La mirada ética y la fractura interior tras los acontecimientos del 68 mexicano.'
      },
      {
        cita: 'El agua pasa, el río es un rumor que no termina / donde la juventud deja sus ropas sobre la hierba húmeda / antes de arrojarse a la corriente que todo se lo lleva.',
        obra: 'Relación de los hechos (1967)',
        contexto: 'La memoria fluvial de Villahermosa transmutada en metáfora del fluir de la vida.'
      }
    ],
    legadoPatrimonial: 'Becerra demostró que el lenguaje del trópico puede alcanzar las más altas cumbres del cuestionamiento ético, filosófico y político universal. La Biblioteca Central del Estado de Tabasco lleva su nombre.',
    audioSugerido: {
      titulo: 'Nocturno Op. 9 No. 2',
      compositor: 'Frédéric Chopin',
      archivo: '/assets/audio/chopin_nocturne_op9.mp3'
    },
    datosCuriosos: [
      'Octavio Paz financió y supervisó personalmente la repatriación de sus restos desde Italia hasta el Panteón Central de Villahermosa.',
      'Trabajó como redactor publicitario en la Ciudad de México para sostenerse económicamente, oficio que según sus biógrafos afiló su sentido de la precisión verbal.',
      'Sus manuscritos recuperados del accidente en Brindisi se conservan como tesoro bibliográfico en la UNAM.'
    ],
    colorAcento: '#2B5B84',
    fondoDegradado: 'from-[#0F172A]/25 via-[#2B5B84]/15 to-[#FAF7F0]'
  },

  // =========================================================================
  // 4. JOSEFINA VICENS
  // =========================================================================
  {
    id: 'josefina-vicens',
    nombre: 'Josefina Vicens',
    tituloHonorifico: 'La Gran Dama de la Novela Existencial y la Nada',
    anios: '1911 – 1988',
    nacimiento: '23 de noviembre de 1911 · Villahermosa, Tabasco',
    fallecimiento: '22 de noviembre de 1988 · Ciudad de México',
    municipioOrigen: 'Centro (Villahermosa)',
    movimiento: 'Narrativa Psicológica / Existencialismo / Guionismo de Oro',
    categoria: 'narrativa_teatro',
    bloqueCanon: 'tabasquenos',
    dossierSlug: '04_josefina_vicens',
    tiempoLecturaMinutos: 30,
    badge: 'PREMIO VILLAURRUTIA',
    foto: '/assets/ilustres/josefina_vicens.webp',
    fotoFallback: '/assets/ilustres/josefina_vicens.png',
    semblanzaSintetica: 'Pionera indiscutible de la novela existencial moderna en Hispanoamérica. Con apenas dos novelas revolucionó la literatura: la angustia de la página en blanco y la búsqueda de identidad.',
    biografiaCompleta: [
      'Josefina Vicens nació en Villahermosa en los albores de la Revolución Mexicana. Mujer libre, valiente e inclasificable en una época dominada por el patriarcado, ejerció múltiples oficios: líder sindical campesina, cronista taurina bajo el seudónimo de «Pepe Faroles», guionista cinematográfica y novelista mayor.',
      'En 1958 publicó «El libro vacío», obra que conmocionó el medio literario hispanoamericano. Con ella obtuvo el Premio Xavier Villaurrutia, convirtiéndose en la primera escritora mujer en alcanzar dicho galardón.',
      'Octavio Paz celebró la novela como una obra maestra: «El libro vacío es una proeza. Josefina Vicens no inventa una intriga novelesca; describe la tragedia cotidiana del hombre corriente que quiere escribir un libro y descubre que el acto de escribir es un descenso al vacío».',
      'Veinticuatro años después, en 1982, entregó su segunda y última novela: «Los años falsos», una sobrecogedora exploración psicológica sobre el duelo, la relación edípica filial y el peso de suplantar la identidad de un padre fallecido en el ámbito del poder político mexicano.',
      'Asimismo, escribió más de noventa guiones para la Época de Oro y renovación del cine mexicano, recibiendo dos Premios Ariel de la Academia Cinematográfica. Su rigor ético le impidió publicar por vanidad, dejándonos dos obras perfectas que hoy forman parte del canon mundial.'
    ],
    obrasCapitales: [
      {
        titulo: 'El libro vacío',
        anio: 1958,
        genero: 'Novela Existencial / Metanarrativa',
        descripcion: 'Premio Xavier Villaurrutia 1958. Historia íntima de José García y sus dos cuadernos: la lucha épica entre la vida cotidiana y el deseo creador.'
      },
      {
        titulo: 'Los años falsos',
        anio: 1982,
        genero: 'Novela Psicológica',
        descripcion: 'Monólogo sobre la imposición de los mandatos paternos y la usurpación de la propia identidad en una sociedad corrupta.'
      },
      {
        titulo: 'Las señoritas Vivanco / Los perros de Dios',
        anio: '1959 / 1974',
        genero: 'Guiones Cinematográficos Canónicos',
        descripcion: 'Obras maestras del cine mexicano galardonadas con el Premio Ariel por su agudeza de diálogos y crítica social.'
      }
    ],
    citasMemorables: [
      {
        cita: 'Escribo para no estar solo, para fijar el tiempo fugitivo, aunque sepa que las palabras son a veces un mar que no moja.',
        obra: 'El libro vacío (1958)',
        contexto: 'Reflexión del protagonista José García sobre la necesidad ontológica de plasmar la propia existencia.'
      },
      {
        cita: 'El primer cuaderno es para todo lo sucio, lo cotidiano, la anotación mezquina; el segundo está en blanco, esperando las palabras sagradas que nunca llegan.',
        obra: 'El libro vacío (1958)',
        contexto: 'La célebre metáfora de los dos cuadernos que sintetiza el drama del creador literario.'
      },
      {
        cita: 'Llevar el traje de un muerto no es sólo vestir su tela; es obligar a los propios huesos a tomar la postura de su sombra.',
        obra: 'Los años falsos (1982)',
        contexto: 'La asfixiante herencia paterna en la sociedad mexicana.'
      }
    ],
    legadoPatrimonial: 'Vicens abrió las puertas de la modernidad narrativa para las autoras latinoamericanas, demostrando que la intimidad psicológica profunda y la metanarrativa son tan universales como las epopeyas nacionales.',
    audioSugerido: {
      titulo: 'Gymnopédie No. 1',
      compositor: 'Erik Satie',
      archivo: '/assets/audio/satie_gymnopedie_1.mp3'
    },
    datosCuriosos: [
      'Fue una de las primeras mujeres cronistas de toros en México, escribiendo en los diarios con el seudónimo «Pepe Faroles» para que los editores no la rechazaran por ser mujer.',
      'Trabajó intensamente en la Secretaría de Gobernación y en organizaciones agrarias defendiendo los derechos de los campesinos.',
      'Gabriel García Márquez y Juan Rulfo manifestaron una profunda admiración personal y literaria hacia su prosa despojada de artificios.'
    ],
    colorAcento: '#8F3812',
    fondoDegradado: 'from-[#8F3812]/20 via-[#EF7B38]/10 to-[#FAF7F0]'
  },

  // =========================================================================
  // 5. MANUEL SÁNCHEZ MÁRMOL
  // =========================================================================
  {
    id: 'manuel-sanchez-marmol',
    nombre: 'Manuel Sánchez Mármol',
    tituloHonorifico: 'Pionero de la Novela en el Sureste y Patriarca Educativo',
    anios: '1839 – 1912',
    nacimiento: '25 de mayo de 1839 · Cunduacán, Tabasco',
    fallecimiento: '6 de marzo de 1912 · Ciudad de México',
    municipioOrigen: 'Cunduacán',
    movimiento: 'Realismo Literario / Novela de Costumbres / Liberalismo del Siglo XIX',
    categoria: 'siglo_xix',
    bloqueCanon: 'tabasquenos',
    dossierSlug: '05_manuel_sanchez_marmol',
    tiempoLecturaMinutos: 30,
    badge: 'PATRIARCA DE LAS LETRAS',
    foto: '/assets/ilustres/manuel_sanchez_marmol.webp',
    fotoFallback: '/assets/ilustres/manuel_sanchez_marmol.png',
    semblanzaSintetica: 'Fundador y primer rector del glorioso Instituto Juárez (hoy UJAT). Jurista, novelista y político liberal, consolidó el realismo narrativo con obras como «Pochóte» y «La venganza de una calumnia».',
    biografiaCompleta: [
      'Manuel Sánchez Mármol nació en Cunduacán, cuna de hombres y mujeres ilustres. Hombre de convicciones juaristas inquebrantables, consagró su vida al derecho, a la cátedra universitaria, al periodismo combativo y a la forja de la identidad cultural de Tabasco.',
      'En 1879, por encargo del gobernador Simón Sarlat Nova, redactó el proyecto y fundó el Instituto Juárez, faro educativo del sureste mexicano del cual fue su primer director. De sus aulas saldrían las generaciones que moldearon el Tabasco moderno.',
      'Como novelista, es el introductor y maestro supremo del realismo y la novela de costumbres en el sureste mexicano. Sus novelas «Pochóte» (1883), «La venganza de una calumnia» (1886) y «Juanita Sousa» (1901) retratan con maestría sociológica, vivacidad de lenguaje y vigor estético las pasiones, contradicciones políticas y paisajes de la sociedad tabasqueña decimonónica.',
      'Miembro de la Academia Mexicana de la Lengua y Ministro de la Suprema Corte de Justicia de la Nación, Sánchez Mármol es el faro del liberalismo ilustrado que unió el rigor de la ley con la belleza de la palabra escrita.'
    ],
    obrasCapitales: [
      {
        titulo: 'Pochóte',
        anio: 1883,
        genero: 'Novela Realista y de Costumbres',
        descripcion: 'Retrato vívido de la vida en el campo y las haciendas cacaoteras de Tabasco en el siglo XIX, pionera en el sureste.'
      },
      {
        titulo: 'La venganza de una calumnia',
        anio: 1886,
        genero: 'Novela Dramática',
        descripcion: 'Estudio de caracteres sobre el honor, la traición política y la hipocresía social en las provincias mexicanas.'
      },
      {
        titulo: 'Juanita Sousa',
        anio: 1901,
        genero: 'Novela Psico-Social',
        descripcion: 'La lucha de una joven frente a las convenciones de clase y los prejuicios de época en el puerto de Frontera y Villahermosa.'
      },
      {
        titulo: 'Prevenciones de la historia',
        anio: 1906,
        genero: 'Ensayo Histórico y Político',
        descripcion: 'Crónica lúcida y testimonial sobre las vicisitudes del liberalismo y la intervención francesa en Tabasco.'
      }
    ],
    citasMemorables: [
      {
        cita: 'La educación y la palabra libre son los únicos cimientos sobre los cuales una patria florece sin temor a la tiranía.',
        obra: 'Discurso Inaugural del Instituto Juárez (1879)',
        contexto: 'Manifiesto cívico al abrir las puertas de la máxima casa de estudios tabasqueña.'
      },
      {
        cita: 'En la sombra del pochote duermen las leyendas del pueblo, tan hondas como las raíces que beben del agua secreta de la tierra.',
        obra: 'Pochóte (1883)',
        contexto: 'Descripción simbólica de la ceiba sagrada y la memoria rural de Tabasco.'
      },
      {
        cita: 'El novelista no es un juez; es un testigo implacable que entrega a los siglos el mapa verdadero del corazón humano.',
        obra: 'Prólogo a La venganza de una calumnia (1886)',
        contexto: 'Su profesión de fe en la literatura como documento testimonial de la verdad.'
      }
    ],
    legadoPatrimonial: 'Sin Sánchez Mármol no existiría la Universidad Juárez Autónoma de Tabasco (UJAT) tal como hoy la conocemos. Su monumento y su tumba en el Panteón Francés representan la dignidad civil de Tabasco.',
    audioSugerido: {
      titulo: 'Aire sobre la cuerda de Sol',
      compositor: 'Johann Sebastian Bach',
      archivo: '/assets/audio/bach_air_on_g_string.mp3'
    },
    datosCuriosos: [
      'Redactó los primeros reglamentos pedagógicos de Tabasco basados en el pensamiento positivista de Gabino Barreda.',
      'Defendió con la pluma y la espada la causa republicana durante la invasión francesa en Tabasco.',
      'El municipio de Cunduacán y el auditorio principal de la UJAT portan su nombre en testimonio perenne de gratitud.'
    ],
    colorAcento: '#7A5B1E',
    fondoDegradado: 'from-[#7A5B1E]/20 via-[#C5A059]/15 to-[#FAF7F0]'
  },

  // =========================================================================
  // 6. CELESTINO GOROSTIZA ALCALÁ
  // =========================================================================
  {
    id: 'celestino-gorostiza',
    nombre: 'Celestino Gorostiza Alcalá',
    tituloHonorifico: 'Renovador del Teatro Mexicano Moderno y Director de Bellas Artes',
    anios: '1904 – 1967',
    nacimiento: '31 de enero de 1904 · Villahermosa, Tabasco',
    fallecimiento: '11 de enero de 1967 · Ciudad de México',
    municipioOrigen: 'Centro (Villahermosa)',
    movimiento: 'Dramaturgia Moderna / Teatro de Vanguardia (Ulises y Orientación)',
    categoria: 'narrativa_teatro',
    bloqueCanon: 'tabasquenos',
    dossierSlug: '06_celestino_gorostiza',
    tiempoLecturaMinutos: 30,
    badge: 'RENOVADOR TEATRAL',
    foto: '/assets/ilustres/celestino_gorostiza.webp',
    fotoFallback: '/assets/ilustres/celestino_gorostiza.png',
    semblanzaSintetica: 'Hermano menor de José Gorostiza y artífice de la modernización escénica de México. Dramaturgo, ensayista, director del INBA y fundador de los teatros experimentales Ulises y Orientación.',
    biografiaCompleta: [
      'Celestino Gorostiza nació en Villahermosa en 1904. Desde muy joven comprendió que el teatro mexicano de principios del siglo XX permanecía anclado en el costumbrismo decimonónico español y se propuso transformarlo radicalmente.',
      'Junto con Salvador Novo, Xavier Villaurrutia y Antonieta Rivas Mercado fundó en 1928 el legendario Teatro Ulises, y más tarde en 1932 el Teatro Orientación. En estos espacios introdujo a México las obras de Eugene O’Neill, Jean Cocteau, Luigi Pirandello y George Bernard Shaw, enseñando una nueva forma de actuación, escenografía e iluminación.',
      'Como dramaturgo escribió piezas capitales de gran hondura social y psicológica: «El nuevo paraíso» (1930), «Intimidad» (1931), «La escuela del amor» (1939) y su obra cumbre, «El color de nuestra piel» (1952), galardonada con el Premio Juan Ruiz de Alarcón por su valiente crítica al racismo, el arribismo y las tensiones del mestizaje en México.',
      'Ocupó cargos de máxima relevancia cultural, destacando como Director General del Instituto Nacional de Bellas Artes (INBA) de 1958 a 1964, periodo en el que impulsó la construcción de teatros, la orquesta sinfónica y las becas para nuevos talentos. Miembro de número de la Academia Mexicana de la Lengua.'
    ],
    obrasCapitales: [
      {
        titulo: 'El nuevo paraíso',
        anio: 1930,
        genero: 'Drama Vanguardista',
        descripcion: 'Primera ruptura escénica que confronta las convenciones burguesas con el psicoanálisis y el absurdo.'
      },
      {
        titulo: 'Intimidad',
        anio: 1931,
        genero: 'Pieza Teatral Psicológica',
        descripcion: 'Estudio de la incomunicación y el desamparo de la pareja en la soledad de la vida citadina moderna.'
      },
      {
        titulo: 'El color de nuestra piel',
        anio: 1952,
        genero: 'Drama Social y Político',
        descripcion: 'Premio Juan Ruiz de Alarcón. Obra capital sobre el clasismo y el racismo en las familias adineradas de México.'
      },
      {
        titulo: 'La Malinche',
        anio: 1958,
        genero: 'Tragedia Histórica',
        descripcion: 'Relectura audaz y desmitificadora del encuentro entre Cortés y Malintzin en las costas de Tabasco.'
      }
    ],
    citasMemorables: [
      {
        cita: 'El teatro es el espejo donde una sociedad se atreve a mirar sus propias heridas para iniciar su redención.',
        obra: 'Ensayos sobre Teatro Contemporáneo (1945)',
        contexto: 'Su visión del arte dramático como instrumento de autoconciencia colectiva.'
      },
      {
        cita: 'Mientras sigamos negando el color de nuestra piel y la raíz de nuestra sangre, seremos extranjeros en nuestra propia casa.',
        obra: 'El color de nuestra piel (1952)',
        contexto: 'Diálogo culminante de su obra más representada en los escenarios nacionales.'
      }
    ],
    legadoPatrimonial: 'Fundó las bases profesionales del teatro moderno en México, la formación de actores y la gestión de Bellas Artes, proyectando el genio tabasqueño a la alta administración cultural del país.',
    audioSugerido: {
      titulo: 'Invierno (Las Cuatro Estaciones)',
      compositor: 'Antonio Vivaldi',
      archivo: '/assets/audio/vivaldi_winter_largo.mp3'
    },
    datosCuriosos: [
      'Dirigió películas en la Época de Oro del cine mexicano, entre ellas «La mancha de sangre» (1937), censurada por su audacia temática.',
      'Fue el mentor escénico de figuras universales de la dramaturgia mexicana como Emilio Carballido y Luisa Josefina Hernández.',
      'El teatro principal de la ciudad de Villahermosa portó durante años su insignia en reconocimiento a su labor teatral.'
    ],
    colorAcento: '#991B1B',
    fondoDegradado: 'from-[#991B1B]/15 via-[#C5A059]/10 to-[#FAF7F0]'
  },

  // =========================================================================
  // 7. BRUNO ESTAÑOL VIDAL
  // =========================================================================
  {
    id: 'bruno-estanol',
    nombre: 'Bruno Estañol Vidal',
    tituloHonorifico: 'El Mago de la Memoria Clínica y la Prosa Humanista',
    anios: '1945 – Presente',
    nacimiento: '14 de enero de 1945 · Comalcalco, Tabasco',
    fallecimiento: 'Vive y crea activamente · Miembro de Número de la Academia Mexicana de la Lengua',
    municipioOrigen: 'Comalcalco',
    movimiento: 'Narrativa Contemporánea / Relato Fantástico / Ensayo Médico-Filosófico',
    categoria: 'narrativa_teatro',
    bloqueCanon: 'tabasquenos',
    dossierSlug: '07_bruno_estanol',
    tiempoLecturaMinutos: 30,
    badge: 'ACADEMIA DE LA LENGUA',
    foto: '/assets/ilustres/bruno_estanol.webp',
    fotoFallback: '/assets/ilustres/bruno_estanol.png',
    semblanzaSintetica: 'Eminente neurólogo, narrador y ensayista. Ocupa la silla XXV de la Academia Mexicana de la Lengua. Ha fundido la ciencia del cerebro humano con la belleza y el misterio de la selva tabasqueña.',
    biografiaCompleta: [
      'Originario de Comalcalco, tierra cacaotera y cuna de la arquitectura maya en ladrillo cocido, Bruno Estañol Vidal representa el renacentismo contemporáneo: un científico de renombre mundial en el campo de la neurofisiología clínica y un orfebre consumado del cuento y el ensayo literario.',
      'Formado en la Facultad de Medicina de la UNAM y en la prestigiosa Universidad Johns Hopkins en Estados Unidos, Estañol ha dedicado décadas a desentrañar los laberintos neurológicos de la memoria, el lenguaje, los sueños y la conciencia.',
      'En el campo de la literatura ha publicado más de una veintena de libros de relatos, novelas cortas y ensayos, destacando «Ni el amor ni la muerte» (1984), «Fígaro y el emperador» (1993), «El misterio de la orquídea negra» (2000) y «Passacaglia» (2004).',
      'Su prosa se caracteriza por una elegancia clásica, humor sutil y una compasión honda hacia la fragilidad humana. En sus historias conviven la atmósfera misteriosa del trópico tabasqueño, la precisión del bisturí clínico y la devoción a maestros universales como Chéjov, Borges y Montaigne.',
      'En 2011 ingresó como Miembro de Número a la Academia Mexicana de la Lengua, enalteciendo a Tabasco con uno de los sitiales intelectuales más prestigiados del orbe hispánico.'
    ],
    obrasCapitales: [
      {
        titulo: 'Ni el amor ni la muerte',
        anio: 1984,
        genero: 'Cuentos',
        descripcion: 'Cuentos donde el misterio clínico y la pasión carnal colisionan en la atmósfera sofocante de provincia.'
      },
      {
        titulo: 'El misterio de la orquídea negra',
        anio: 2000,
        genero: 'Relatos de Enigma y Selva',
        descripcion: 'Narraciones en las fincas de Comalcalco y la selva chiapaneca donde la botánica se transforma en metáfora del destino.'
      },
      {
        titulo: 'La vida secreta del cerebro',
        anio: 2012,
        genero: 'Ensayo Literario-Científico',
        descripcion: 'Fascinante puente entre la neurología moderna, la poesía y los mecanismos íntimos de la creatividad humana.'
      },
      {
        titulo: 'Cuentos de Comalcalco',
        anio: 2018,
        genero: 'Relatos Regionales Universales',
        descripcion: 'Homenaje a su pueblo natal: la memoria de los abuelos, la música de viento y la lluvia sobre los cacaotales.'
      }
    ],
    citasMemorables: [
      {
        cita: 'En el cerebro habitan todos los laberintos de la imaginación humana, pero sólo la literatura les da un nombre y un sentido ético.',
        obra: 'Discurso de Ingreso a la Academia Mexicana de la Lengua (2011)',
        contexto: 'Su tesis sobre la complementariedad indestructible entre la ciencia médica y la literatura.'
      },
      {
        cita: 'La memoria no es un disco grabado; es un río vivo que reconstruye la infancia cada vez que cae una gota de lluvia en el patio.',
        obra: 'Cuentos de Comalcalco (2018)',
        contexto: 'Evocación proustiana del paisaje tabasqueño.'
      }
    ],
    legadoPatrimonial: 'Demuestra la vigencia universal del intelectual tabasqueño en el siglo XXI, combinando la más alta excelencia científica con una maestría narrativa honrada por la Academia Mexicana de la Lengua.',
    audioSugerido: {
      titulo: 'Traümerei (Ensoñación)',
      compositor: 'Robert Schumann',
      archivo: '/assets/audio/schumann_traumerei.mp3'
    },
    datosCuriosos: [
      'Ha sido profesor de decenas de generaciones de médicos en el Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán.',
      'Siempre afirma que aprendió a observar la naturaleza escuchando los relatos orales de los campesinos y curanderos de Comalcalco.',
      'Es un apasionado melómano de la música barroca, la cual suele estructurar el ritmo de sus relatos cortos.'
    ],
    colorAcento: '#047857',
    fondoDegradado: 'from-[#047857]/15 via-[#C5A059]/10 to-[#FAF7F0]'
  },

  // =========================================================================
  // 8. RAMÓN GALGUERA NOVEROLA
  // =========================================================================
  {
    id: 'ramon-galguera-noverola',
    nombre: 'Ramón Galguera Noverola',
    tituloHonorifico: 'El Poeta del Crepúsculo y la Melancolía Fluvial',
    anios: '1914 – 1979',
    nacimiento: '24 de agosto de 1914 · San Juan Bautista (Villahermosa), Tabasco',
    fallecimiento: '18 de mayo de 1979 · Villahermosa, Tabasco',
    municipioOrigen: 'Centro (Villahermosa)',
    movimiento: 'Lírica Fluvial / Intimismo Poético / Posmodernismo Regional',
    categoria: 'poesia_fluvial',
    bloqueCanon: 'tabasquenos',
    dossierSlug: '08_ramon_galguera_noverola',
    tiempoLecturaMinutos: 30,
    badge: 'LÍRICA INTIMISTA',
    foto: '/assets/ilustres/ramon_galguera_noverola.webp',
    fotoFallback: '/assets/ilustres/ramon_galguera_noverola.png',
    semblanzaSintetica: 'La voz más intimista, recogida y melancólica de la poesía tabasqueña. Autor de «Alondra de la tarde», cantó a los callejones, los esteros y la soledad suave de la tarde tropical.',
    biografiaCompleta: [
      'Ramón Galguera Noverola habitó Villahermosa con la discreción de los grandes contemplativos. Mientras otros poetas buscaban los escenarios ruidosos de la capital, Galguera prefirió la soledad de su estudio provincial, la brisa del río Grijalva y las tertulias íntimas con los artistas de su tierra.',
      'En 1938 publicó «Alondra de la tarde», libro que marcó a toda una generación de lectores por su musicalidad dulce, desprovista de énfasis y saturada de una melancolía luminosa.',
      'Su poética se distingue por la brevedad, la precisión estrófica y una delicadeza casi japonesa para capturar el vuelo de una garza, el perfume de una guayaba o el declinar de la luz sobre los pantanos.',
      'Fue asimismo un gran promotor cultural: dirigió publicaciones literarias, impulsó a jóvenes escritores y resguardó la memoria bohemia de Tabasco. Sus «Poemas de la soledad y la muerte» (1942) y «Sonetos del silencio» (1960) son joyas secretas de la lírica mexicana que Letras y Voces de Tabasco rescata con orgullo.'
    ],
    obrasCapitales: [
      {
        titulo: 'Alondra de la tarde',
        anio: 1938,
        genero: 'Poesía Lírica',
        descripcion: 'Canto crepuscular a la belleza cotidiana, los aromas de la provincia y la soledad serena.'
      },
      {
        titulo: 'Poemas de la soledad y la muerte',
        anio: 1942,
        genero: 'Lírica Elegíaca',
        descripcion: 'Meditaciones breves sobre la fugacidad humana y la persistencia del paisaje tabasqueño.'
      },
      {
        titulo: 'Sonetos del silencio',
        anio: 1960,
        genero: 'Sonetos Clásicos',
        descripcion: 'Orfebrería formal donde el río y el silencio se vuelven un refugio espiritual ante el ruido del mundo.'
      }
    ],
    citasMemorables: [
      {
        cita: 'Tarde dormida sobre el agua callada: la soledad no es vacío, es la sombra que deja el pájaro que cantaba.',
        obra: 'Alondra de la tarde (1938)',
        contexto: 'El tono meditativo y sosegado de su poética fluvial.'
      },
      {
        cita: 'Pasa la barca lentamente / y el río no sabe adónde va, / pero en sus aguas transparentes / viaja mi humilde eternidad.',
        obra: 'Sonetos del silencio (1960)',
        contexto: 'Comunión mística con la corriente del Grijalva.'
      }
    ],
    legadoPatrimonial: 'Representa el equilibrio lírico de Tabasco: frente a la exuberancia torrencial de Pellicer, Galguera Noverola aportó la ternura, el susurro y la pátina contemplativa del crepúsculo.',
    audioSugerido: {
      titulo: 'Serenata (Ständchen)',
      compositor: 'Franz Schubert',
      archivo: '/assets/audio/schubert_serenade.mp3'
    },
    datosCuriosos: [
      'Fue íntimo amigo del pintor tabasqueño Fócil y solían escribir poemas e ilustrarlos juntos al borde del malecón.',
      'Rechazó múltiples ofertas de cargos públicos en la capital del país por negarse a vivir lejos de la vista cotidiana de su río.',
      'Sus versos son ampliamente musicalizados en el repertorio tradicional de cuerdas y serenata en Tabasco.'
    ],
    colorAcento: '#B45309',
    fondoDegradado: 'from-[#B45309]/15 via-[#C5A059]/10 to-[#FAF7F0]'
  },

  // =========================================================================
  // 9. TEODOSIO GARCÍA RUIZ
  // =========================================================================
  {
    id: 'teodosio-garcia-ruiz',
    nombre: 'Teodosio García Ruiz',
    tituloHonorifico: 'El Bardo de la Lluvia, los Muelles y la Bohemia Urbana',
    anios: '1964 – 2012',
    nacimiento: '29 de mayo de 1964 · Frontera (Centla), Tabasco',
    fallecimiento: '26 de julio de 2012 · Villahermosa, Tabasco',
    municipioOrigen: 'Frontera (Centla)',
    movimiento: 'Poesía Contemporánea / Neobarroco Tropical / Bohemia Urbana',
    categoria: 'poesia_fluvial',
    bloqueCanon: 'tabasquenos',
    dossierSlug: '09_teodosio_garcia_ruiz',
    tiempoLecturaMinutos: 30,
    badge: 'VOZ CONTEMPORÁNEA',
    foto: '/assets/ilustres/teodosio_garcia_ruiz.webp',
    fotoFallback: '/assets/ilustres/teodosio_garcia_ruiz.png',
    semblanzaSintetica: 'El poeta más entrañable, irreverente y talentoso del Tabasco de fin de siglo. Cantor de Frontera, de los aguaceros implacables, de los bares de mala muerte y de la ternura de los desamparados.',
    biografiaCompleta: [
      'Nacido en el puerto marítimo de Frontera, Centla, Teodosio García Ruiz traía en los oídos el rugido del mar chocando contra la desembocadura de los ríos Usumacinta y Grijalva. Esa música fluvial y portuaria definió su vida y su literatura.',
      'Ganador del prestigiado Premio Nacional de Poesía Joven de México y del Premio de Poesía Carlos Pellicer, Teodosio sacudió la escena cultural del sureste con libros incandescentes como «Furias del mediodía» (1990), «Sin lugar en el cielo» (1994) y «Sueño de perro» (1998).',
      'Su verso aunó la herencia barroca de Gorostiza y Lezama Lima con el lenguaje de la calle, los pescadores, las cantinas, las mujeres de la noche y el rumor inagotable de los zancudos bajo el calor tropical.',
      'Bohemio generoso, fue un imán de fraternidad para generaciones enteras de escritores nóveles en Tabasco, fundando suplementos culturales y talleres literarios. Su partida prematura en 2012 vistió de luto a las letras del sureste mexicano.'
    ],
    obrasCapitales: [
      {
        titulo: 'Furias del mediodía',
        anio: 1990,
        genero: 'Poesía / Premio Nacional',
        descripcion: 'Fiebre lírica, calor asfixiante y el despertar erótico y furioso en los muelles de Centla.'
      },
      {
        titulo: 'Sin lugar en el cielo',
        anio: 1994,
        genero: 'Poesía Urbana y Existencial',
        descripcion: 'Poemas a los marginados, la noche villarhermosina y la soledad conmovida del ser.'
      },
      {
        titulo: 'Sueño de perro',
        anio: 1998,
        genero: 'Poesía Narrativa y Prosa Poética',
        descripcion: 'Autobiografía alucinada y tierna entre el lodazal, la infancia y la devoción poética.'
      }
    ],
    citasMemorables: [
      {
        cita: 'La lluvia en este trópico no limpia las heridas: las hace cantar con un rumor de muelle abandonado.',
        obra: 'Furias del mediodía (1990)',
        contexto: 'Retrato de la intemperie tabasqueña y el dolor transmutado en canto lírico.'
      },
      {
        cita: 'Aquí nos tocó vivir, entre dos ríos monstruosos que sueñan con tragarse la ciudad cada octubre.',
        obra: 'Sin lugar en el cielo (1994)',
        contexto: 'La relación visceral de Tabasco con sus inundaciones ancestrales.'
      }
    ],
    legadoPatrimonial: 'Devolvió a la poesía tabasqueña el sabor del muelle, la incorrección política de la cantina y la ternura desgarrada de los marginados, sin perder un ápice de rigor técnico.',
    audioSugerido: {
      titulo: 'Marimba Tabasqueña Tradicional',
      compositor: 'Música de Raíz Tabasqueña',
      archivo: '/assets/audio/marimba_tabasquena_acustica.mp3'
    },
    datosCuriosos: [
      'Sus recitales eran auténticas fiestas populares donde leía poemas mezclados con anécdotas de pescadores de Centla.',
      'Compiló varias antologías donde impulsó a plumas que hoy presiden academias y colectivos literarios en el sureste.',
      'El Festival de Poesía de Frontera celebra anualmente certámenes que portan su nombre.'
    ],
    colorAcento: '#DC2626',
    fondoDegradado: 'from-[#DC2626]/15 via-[#EF7B38]/10 to-[#FAF7F0]'
  },

  // =========================================================================
  // 10. DIONICIO MORALES
  // =========================================================================
  {
    id: 'dionicio-morales',
    nombre: 'Dionicio Morales',
    tituloHonorifico: 'El Albacea Lírico de Pellicer y Cronista de las Luces',
    anios: '1943 – Presente',
    nacimiento: '14 de octubre de 1943 · Cunduacán, Tabasco',
    fallecimiento: 'Vive y crea activamente · Decano de la Crítica Literaria en México',
    municipioOrigen: 'Cunduacán',
    movimiento: 'Poesía Contemporánea / Ensayismo Crítico / Edición Canónica',
    categoria: 'vanguardia',
    bloqueCanon: 'tabasquenos',
    dossierSlug: '10_dionicio_morales',
    tiempoLecturaMinutos: 30,
    badge: 'CRÍTICO & ALBACEA',
    foto: '/assets/ilustres/dionicio_morales.webp',
    fotoFallback: '/assets/ilustres/dionicio_morales.png',
    semblanzaSintetica: 'Poeta, ensayista y crítico de arte. Discípulo predilecto y mayor albacea editorial de la obra de Carlos Pellicer. Su pluma ha iluminado la historia de la plástica y la literatura mexicana.',
    biografiaCompleta: [
      'Nacido en Cunduacán en 1943, Dionicio Morales pertenece a la estirpe de intelectuales que consagran su inteligencia no sólo a la creación propia, sino al rescate, fijación y difusión rigurosa del patrimonio poético nacional.',
      'Discípulo cercano de Carlos Pellicer, Morales asumió la misión monumental de editar, anotar y difundir las obras completas, la correspondencia y las conferencias del «Poeta de América», publicadas por el Fondo de Cultura Económica y el Conaculta.',
      'Su propia obra poética, iniciada con «Retrato hablado» (1968) y consolidada en «El alba de la palabra» (1975) y «Doble filo» (1984), dialoga con el arte plástico, la escultura y la arquitectura.',
      'Como crítico de arte y literatura ha sido durante décadas pluma obligada en los principales suplementos culturales de México (El Día, Novedades, La Jornada), mereciendo homenajes por su impecable trayectoria de más de medio siglo al servicio de las letras tabasqueñas y mexicanas.'
    ],
    obrasCapitales: [
      {
        titulo: 'Retrato hablado',
        anio: 1968,
        genero: 'Poesía',
        descripcion: 'Primer libro lírico de gran refinamiento visual y diálogo con las artes plásticas.'
      },
      {
        titulo: 'El alba de la palabra',
        anio: 1975,
        genero: 'Lírica',
        descripcion: 'Poemas de madurez sobre la luz matinal del trópico y el nacimiento de la conciencia creadora.'
      },
      {
        titulo: 'Pellicer: De cuerpo entero',
        anio: 1997,
        genero: 'Biografía Crítica y Ensayo',
        descripcion: 'La biografía testimonial definitiva sobre la vida íntima, política y estética de Carlos Pellicer.'
      }
    ],
    citasMemorables: [
      {
        cita: 'La poesía es el rescate de la luz en medio del olvido: quien nombra con devoción lo que ama, lo salva de morir.',
        obra: 'El alba de la palabra (1975)',
        contexto: 'Su concepción del arte poético como memoria salvadora.'
      },
      {
        cita: 'Cuidar la obra de nuestros mayores no es venerar cenizas, sino mantener encendido el fuego sagrado de la tribu.',
        obra: 'Prólogo a la Poesía Completa de Pellicer (1996)',
        contexto: 'El deber ético de la memoria cultural.'
      }
    ],
    legadoPatrimonial: 'Sin su dedicación filológica y amor fraterno, gran parte del archivo, cartas y textos dispersos de Pellicer se habrían perdido. Es el custodio de la memoria estética de Tabasco.',
    audioSugerido: {
      titulo: 'Primavera (Las Cuatro Estaciones)',
      compositor: 'Antonio Vivaldi',
      archivo: '/assets/audio/vivaldi_spring_allegro.mp3'
    },
    datosCuriosos: [
      'Conservó durante años manuscritos inéditos de Pellicer que el poeta le entregó en propia mano antes de partir a Roma.',
      'Fue curador de magnas exposiciones de plástica tabasqueña en el Palacio de Bellas Artes.',
      'En 2023 recibió la Medalla al Mérito Ciudadano de Cunduacán en homenaje a sus 80 años de vida.'
    ],
    colorAcento: '#4338CA',
    fondoDegradado: 'from-[#4338CA]/15 via-[#C5A059]/10 to-[#FAF7F0]'
  },

  // =========================================================================
  // 11. ALICIA DELAVAL
  // =========================================================================
  {
    id: 'alicia-delaval',
    nombre: 'Alicia Delaval',
    tituloHonorifico: 'Voz Matriarcal de los Pantanos y Cronista del Río',
    anios: '1917 – 2009',
    nacimiento: '16 de septiembre de 1917 · Villahermosa, Tabasco',
    fallecimiento: '18 de junio de 2009 · Villahermosa, Tabasco',
    municipioOrigen: 'Centro (Villahermosa)',
    movimiento: 'Narrativa Regional / Costumbrismo Femenino / Memoria Oral',
    categoria: 'narrativa_teatro',
    bloqueCanon: 'tabasquenos',
    dossierSlug: '11_alicia_delaval',
    tiempoLecturaMinutos: 30,
    badge: 'PIONERA NARRATIVA',
    foto: '/assets/ilustres/alicia_delaval.webp',
    fotoFallback: '/assets/ilustres/alicia_delaval.png',
    semblanzaSintetica: 'Narradora, poeta y cronista entrañable. Pionera de la literatura escrita por mujeres en el Tabasco del siglo XX. Rescató con valentía la mitología del agua, los pantanos y la lucha cotidiana femenina.',
    biografiaCompleta: [
      'Alicia Delaval (nombre de pluma de Alicia de la Peña de Valenzuela) nació en Villahermosa en 1917. En una sociedad provincial donde las mujeres solían ser relegadas al ámbito doméstico, Delaval alzó una voz narrativa lúcida, tenaz y comprometida con el destino de su gente.',
      'Su novela más célebre, «Cuando el agua nos tape» (1955), constituye un clásico indiscutible de la literatura del agua: relata el drama anual de las inundaciones en Tabasco, donde familias enteras deben levantar sus pertenencias en canoas sobre un mar dulce que lo cubre todo, revelando la resistencia estoica y la solidaridad del pueblo chontal y mestizo.',
      'En «Las almas del pantano» (1968) y «Cuentos del Grijalva» (1982), exploró las leyendas fluviales, los aparecidos, los duendes del cacao y la fuerza silenciosa de las madres tabasqueñas.',
      'Fue cofundadora de círculos literarios y mentora de escritoras jóvenes. Su casa en el centro de Villahermosa fue punto de reunión fraterno de poetas y pintores durante más de cuatro décadas.'
    ],
    obrasCapitales: [
      {
        titulo: 'Cuando el agua nos tape',
        anio: 1955,
        genero: 'Novela Fluvial y Testimonial',
        descripcion: 'Clásico sobre la lucha humana contra la gran creciente de los ríos y la dignidad de los damnificados.'
      },
      {
        titulo: 'Las almas del pantano',
        anio: 1968,
        genero: 'Relatos y Leyendas',
        descripcion: 'Mitos vivos de la Chontalpa y los humedales recreados con lenguaje poético y compasión humana.'
      },
      {
        titulo: 'Cuentos del Grijalva',
        anio: 1982,
        genero: 'Cuentos Regionales',
        descripcion: 'Historias de boga, cayucos y romances a la orilla del gran río de Tabasco.'
      }
    ],
    citasMemorables: [
      {
        cita: 'El pantano no es un desierto estéril: es una matriz viva donde el agua y el lodo paren la vida con dolor y con belleza.',
        obra: 'Las almas del pantano (1968)',
        contexto: 'Defensa ecológica y estética del ecosistema tabasqueño.'
      },
      {
        cita: 'El agua podrá tapar nuestras casas y llevarse nuestras cosechas, pero no podrá ahogar la fe de volver a sembrar mañana.',
        obra: 'Cuando el agua nos tape (1955)',
        contexto: 'La resiliencia inquebrantable de la gente de Tabasco ante la catástrofe fluvial.'
      }
    ],
    legadoPatrimonial: 'Pionera de la narrativa femenina en Tabasco; visibilizó la épica silenciosa de las mujeres de los humedales y transformó las tragedias fluviales en testimonio de resistencia cívica.',
    audioSugerido: {
      titulo: 'Guitarra Poética Suave',
      compositor: 'Música de Cuerdas de Tabasco',
      archivo: '/assets/audio/guitarra_poetica_suave.mp3'
    },
    datosCuriosos: [
      'Durante la histórica inundación de 1955 convirtió su propio hogar en albergue para familias desplazadas por el río.',
      'Su novela «Cuando el agua nos tape» fue reeditada en múltiples ocasiones y utilizada como lectura formativa en escuelas secundarias y normales del estado.',
      'La sala de lectura de la Casa de la Cultura de Villahermosa honra su memoria con su nombre.'
    ],
    colorAcento: '#059669',
    fondoDegradado: 'from-[#059669]/15 via-[#C5A059]/10 to-[#FAF7F0]'
  },

  // =========================================================================
  // 12. MANUEL MESTRE GHIGLIAZZA
  // =========================================================================
  {
    id: 'manuel-mestre-ghigliazza',
    nombre: 'Manuel Mestre Ghigliazza',
    tituloHonorifico: 'El Guardián de la Memoria y Director de la Biblioteca Nacional',
    anios: '1870 – 1954',
    nacimiento: '9 de febrero de 1870 · San Juan Bautista (Villahermosa), Tabasco',
    fallecimiento: '6 de febrero de 1954 · Ciudad de México',
    municipioOrigen: 'Centro (Villahermosa)',
    movimiento: 'Historiografía Crítica / Poesía / Bibliografía e Investigación Humanista',
    categoria: 'siglo_xix',
    bloqueCanon: 'tabasquenos',
    dossierSlug: '12_manuel_mestre_ghigliazza',
    tiempoLecturaMinutos: 30,
    badge: 'GUARDIÁN DE LA HISTORIA',
    foto: '/assets/ilustres/manuel_mestre_ghigliazza.webp',
    fotoFallback: '/assets/ilustres/manuel_mestre_ghigliazza.png',
    semblanzaSintetica: 'Médico, historiador riguroso, periodista libertario y bibliófilo insigne. Gobernador de Tabasco y Director de la Biblioteca Nacional de México. Rescató los documentos fundacionales de nuestra historia.',
    biografiaCompleta: [
      'Manuel Mestre Ghigliazza representa la cima de la erudición histórica de Tabasco. Médico de formación, su verdadera y apasionada vocación fue el rescate documental, la investigación hemerográfica y la defensa de la verdad cívica.',
      'Fue una de las figuras intelectuales más valientes de la época revolucionaria: opositor frontal al porfiriato desde su periódico «El Reproductor Tabasqueño» y luego electo Gobernador Constitucional de Tabasco (1911–1913), desde donde impulsó la reforma educativa, la libertad de prensa y el saneamiento público.',
      'Como historiador e investigador legó obras monumentales que son la piedra angular de cualquier estudio sobre el sureste: «Poetas tabasqueños contemporáneos» (1898), «Documentos y datos para la historia de Tabasco» (4 volúmenes, 1916–1940) y sus «Efemérides biográficas» (1945).',
      'Su pasión por los libros lo llevó a ser nombrado Director de la Biblioteca Nacional de México, donde modernizó los catálogos y resguardó códices e incunables patrios. Miembro de la Academia Mexicana de la Historia, su rigor metodológico salvó a Tabasco del olvido de su propio pasado.'
    ],
    obrasCapitales: [
      {
        titulo: 'Poetas tabasqueños contemporáneos',
        anio: 1898,
        genero: 'Antología Crítica y Biográfica',
        descripcion: 'La primera gran compilación histórica que fijó el canon poético de Tabasco en el siglo XIX.'
      },
      {
        titulo: 'Documentos y datos para la historia de Tabasco',
        anio: '1916–1940',
        genero: 'Monumento Historiográfico (4 Vols.)',
        descripcion: 'Compilación exhaustiva de archivos originales desde la colonia hasta la Revolución Mexicana.'
      },
      {
        titulo: 'Efemérides biográficas (1822–1910)',
        anio: 1945,
        genero: 'Investigación Histórico-Genealógica',
        descripcion: 'Registro monumental de los personajes y sucesos que forjaron la nación mexicana.'
      }
    ],
    citasMemorables: [
      {
        cita: 'Un pueblo que no atesora sus libros y su historia camina a ciegas hacia su propio desvanecimiento.',
        obra: 'Discurso en la Biblioteca Nacional de México (1920)',
        contexto: 'Llamado urgente a la preservación del archivo y la memoria escrita.'
      },
      {
        cita: 'La verdad histórica no se adorna con adjetivos: se sostiene sola con el documento irrefutable y la honestidad moral.',
        obra: 'Prólogo a Documentos para la Historia de Tabasco (1916)',
        contexto: 'Su método científico de rigor documental.'
      }
    ],
    legadoPatrimonial: 'Sin su titánica labor de rescate de archivos dispersos, la historia de Tabasco carecería de fuentes primarias. Fue el gran arquitecto del archivo de nuestra memoria.',
    audioSugerido: {
      titulo: 'Sonata en Do Mayor (K. 545)',
      compositor: 'W.A. Mozart',
      archivo: '/assets/audio/mozart_sonata_k545.mp3'
    },
    datosCuriosos: [
      'Donó a la Universidad y a la Biblioteca Nacional su invaluable colección personal de miles de libros raros y periódicos antiguos del siglo XIX.',
      'Siendo gobernador, abolió impuestos abusivos que pesaban sobre los campesinos e indígenas de la Chontalpa.',
      'El Archivo Histórico General del Estado de Tabasco custodia parte de su monumental fondo documental.'
    ],
    colorAcento: '#0284C7',
    fondoDegradado: 'from-[#0284C7]/15 via-[#C5A059]/10 to-[#FAF7F0]'
  },

  // =========================================================================
  // BLOQUE II: GRANDES PLUMAS DE MÉXICO (CANON NACIONAL)
  // =========================================================================

  // 13. JUAN RULFO
  {
    id: 'juan-rulfo',
    nombre: 'Juan Rulfo (Juan Nepomuceno Pérez Rulfo)',
    tituloHonorifico: 'El Patriarca de Comala y el Murmullo de las Ánimas',
    anios: '1917 – 1986',
    nacimiento: '16 de mayo de 1917 · Apulco / Sayula, Jalisco, México',
    fallecimiento: '7 de enero de 1986 · Ciudad de México',
    municipioOrigen: 'Sayula / San Gabriel, Jalisco',
    movimiento: 'Realismo Mágico Ontológico / Generación de Medio Siglo',
    categoria: 'mexicanos',
    bloqueCanon: 'mexicanos',
    dossierSlug: '13_juan_rulfo',
    tiempoLecturaMinutos: 30,
    badge: 'PATRIARCA DE COMALA',
    foto: '/assets/ilustres/juan_rulfo.webp',
    fotoFallback: '/assets/ilustres/juan_rulfo.jpg',
    semblanzaSintetica: 'El mayor renovador de la narrativa hispanoamericana del siglo XX. Con apenas dos obras maestras, El llano en llamas y Pedro Páramo, fundó la poética del desierto, el duelo histórico y las ánimas en pena.',
    biografiaCompleta: [
      'Juan Nepomuceno Carlos Pérez Rulfo Vizcaíno nació en el sur de Jalisco en un entorno desolado por la violencia de la Revolución y la Guerra Cristera, en la cual fueron asesinados su padre y su abuelo. Criado en un orfanato de Guadalajara, Rulfo convirtió aquella atmósfera de luto, orfandad y tierras resecas en la piedra de toque de su universo mítico.',
      'En 1953 publicó los diecisiete cuentos magistrales de «El llano en llamas», donde relatos como Luvina, Diles que no me maten y No oyes ladrar los perros transformaron el habla campesina en una partitura trágica y depurada de valor universal.',
      'En 1955 dio a la imprenta «Pedro Páramo», cumbre absoluta de la novela moderna. Ambientada en Comala, un pueblo donde todos los habitantes están muertos y conversan desde sus sepulturas, la obra rompió la cronología lineal e inspiró directamente a Gabriel García Márquez para escribir Cien años de soledad.',
      'Fotógrafo eminente y editor incansable en el Instituto Nacional Indigenista (INI), Rulfo recibió el Premio Xavier Villaurrutia (1955), el Premio Nacional de Letras (1970) y el Premio Príncipe de Asturias de las Letras (1983).'
    ],
    obrasCapitales: [
      {
        titulo: 'El llano en llamas',
        anio: 1953,
        genero: 'Colección de Cuentos Clásicos',
        descripcion: 'Diecisiete relatos que retratan la desolación de la tierra mexicana, la culpa, el silencio y la desesperanza campesina.'
      },
      {
        titulo: 'Pedro Páramo',
        anio: 1955,
        genero: 'Novela Canónica Universal',
        descripcion: 'Viaje iniciático de Juan Preciado a Comala en busca de su padre; una polifonía espectral de almas atrapadas en el purgatorio.'
      },
      {
        titulo: 'El gallo de oro',
        anio: 1980,
        genero: 'Novela Corta',
        descripcion: 'Historia trágica del pregonero Dionisio Pinzón y la caponera Bernarda Cutiño en el mundo de los palenques y el azar.'
      }
    ],
    citasMemorables: [
      {
        cita: 'Vine a Comala porque me dijeron que acá vivía mi padre, un tal Pedro Páramo.',
        obra: 'Pedro Páramo (1955)',
        contexto: 'Frase inaugural más célebre y evocada de la literatura mexicana contemporánea.'
      },
      {
        cita: 'En Luvina el viento no duerme. Raras veces deja de soplar, se le oye rascar las paredes como si tuviera uñas.',
        obra: 'Luvina (El llano en llamas, 1953)',
        contexto: 'Retrato de la soledad metafísica del páramo mexicano.'
      },
      {
        cita: '—¡Diles que no me maten, Justino! Anda, vete a decirles eso. Que por caridad. Diles que lo hagan por caridad.',
        obra: 'Diles que no me maten (1953)',
        contexto: 'Ruego agónico de Juvencio Nava ante la inexorable venganza militar.'
      }
    ],
    legadoPatrimonial: 'Rulfo demostró que la máxima economía de palabras engendra la máxima potencia mítica. Comala es el espejo interior de la memoria latinoamericana.',
    audioSugerido: {
      titulo: 'Poema Sonoro: Rulfo e Hidrante',
      compositor: 'Fonoteca LVT / Archivo Histórico',
      archivo: '/assets/audios/rulfo_hidrante.mp3'
    },
    datosCuriosos: [
      'García Márquez confesó que tras leer dos veces seguidas Pedro Páramo en una sola noche, no pudo volver a escribir igual y desbloqueó la escritura de Cien años de soledad.',
      'Dejó un acervo fotográfico de más de 6,000 negativos de impecable valor antropológico y estético sobre templos en ruinas y comunidades indígenas.',
      'Mantuvo un legendario silencio editorial de tres décadas tras la publicación de sus dos primeras obras, negándose a publicar por vanidad comercial.'
    ],
    colorAcento: '#B84E20',
    fondoDegradado: 'from-[#B84E20]/20 via-[#C5A059]/15 to-[#FAF7F0]'
  },

  // 14. SOR JUANA INÉS DE LA CRUZ
  {
    id: 'sor-juana',
    nombre: 'Sor Juana Inés de la Cruz',
    tituloHonorifico: 'La Décima Musa y el Fénix de América',
    anios: '1648 – 1695',
    nacimiento: '12 de noviembre de 1648 · San Miguel Nepantla, Estado de México',
    fallecimiento: '17 de abril de 1695 · Convento de San Jerónimo, Ciudad de México',
    municipioOrigen: 'Nepantla / Amecameca',
    movimiento: 'Barroco Novohispano / Siglo de Oro / Racionalismo Ilustrado',
    categoria: 'mexicanos',
    bloqueCanon: 'mexicanos',
    dossierSlug: '14_sor_juana_ines_de_la_cruz',
    tiempoLecturaMinutos: 30,
    badge: 'DÉCIMA MUSA',
    foto: '/assets/ilustres/sor_juana.webp',
    fotoFallback: '/assets/ilustres/sor_juana.jpg',
    semblanzaSintetica: 'La mayor mente intelectual, poeta y filósofa de la Nueva España. Pionera universal de la defensa de la mujer y su derecho inalienable al estudio, el saber y la creación científica.',
    biografiaCompleta: [
      'Juana Inés de Asbaje y Ramírez de Santillana aprendió a leer a los tres años en la biblioteca de su abuelo en la hacienda de Panoaya. Niña prodigio, dominó el latín en veinte lecciones y solicitó vestirse de hombre para asistir a la Universidad de México, vedada entonces a las mujeres.',
      'Dama de honor en la corte virreinal de la marquesa de Mancera, asombró a cuarenta sabios teólogos, filósofos y poetas en un examen público de conocimiento universal. Para preservar su libertad intelectual frente a las presiones del matrimonio burgués, profesó en la Orden de San Jerónimo en 1669.',
      'En su celda conventual reunió la biblioteca privada más cuantiosa de América (más de cuatro mil volúmenes, instrumentos astronómicos y musicales), donde compuso su obra maestra filosófica, «Primero Sueño» (1692), además de comedias cortesanas, villancicos populares y autos sacramentales.',
      'Su «Respuesta a Sor Filotea de la Cruz» (1691) constituye el primer manifiesto razonado en lengua castellana sobre el derecho de la mujer al saber superior. Falleció heroicamente cuidando a sus hermanas religiosas durante la epidemia de peste de 1695.'
    ],
    obrasCapitales: [
      {
        titulo: 'Primero Sueño',
        anio: 1692,
        genero: 'Poema Filosófico Mayor (975 versos)',
        descripcion: 'Cumbre de la poesía metafísica barroca; describe el viaje del alma humana que intenta abarcar la totalidad del cosmos durante la noche.'
      },
      {
        titulo: 'Respuesta a Sor Filotea de la Cruz',
        anio: 1691,
        genero: 'Epístola y Manifiesto Ético',
        descripcion: 'Defensa apasionada y erudita del intelecto femenino y la libertad de investigación frente a la censura eclesiástica.'
      },
      {
        titulo: 'Los empeños de una casa',
        anio: 1683,
        genero: 'Comedia de Enredos en Verso',
        descripcion: 'Brillante pieza teatral que subvierte las convenciones patriarcales del Siglo de Oro con ingenio y maestría rítmica.'
      }
    ],
    citasMemorables: [
      {
        cita: 'Hombres necios que acusáis a la mujer sin razón, sin ver que sois la ocasión de lo mismo que culpáis.',
        obra: 'Sátira Filosófica (Redondillas)',
        contexto: 'Axioma universal contra la doble moral y la hipocresía social.'
      },
      {
        cita: 'Yo no estudio para escribir, ni menos para enseñar, sino sólo por ver si con estudiar ignoro menos.',
        obra: 'Respuesta a Sor Filotea de la Cruz (1691)',
        contexto: 'Confesión de su devoción desinteresada y humilde hacia la verdad científica.'
      },
      {
        cita: 'Piramidal, funesta, de la tierra nacida sombra, al Cielo encaminaba de vanos obeliscos punta altiva...',
        obra: 'Primero Sueño (1692)',
        contexto: 'Apertura hipnótica de su poema mayor sobre la sombra nocturna de la Tierra.'
      }
    ],
    legadoPatrimonial: 'Sor Juana es el faro del pensamiento crítico novohispano y la precursora fundacional del feminismo humanista e intelectual en todo el orbe.',
    audioSugerido: {
      titulo: 'Aire en la Cuerda de Sol (Air on G)',
      compositor: 'J.S. Bach',
      archivo: '/assets/audio/bach_air_on_g_string.mp3'
    },
    datosCuriosos: [
      'Se cortaba el cabello varios centímetros cada vez que no lograba aprender una materia en el tiempo fijado, aduciendo que no era justo vestir de hermosura una cabeza vacía de doctrina.',
      'Compuso un tratado musical titulado «El Caracol», lamentablemente extraviado, donde proponía una revolucionaria notación armónica en espiral.',
      'Su figura engalanó históricamente los billetes de mayor circulación en México y su convento es hoy sede de la Universidad del Claustro de Sor Juana.'
    ],
    colorAcento: '#C5A059',
    fondoDegradado: 'from-[#C5A059]/20 via-[#EF7B38]/10 to-[#FAF7F0]'
  },

  // 15. OCTAVIO PAZ
  {
    id: 'octavio-paz',
    nombre: 'Octavio Paz Lozano',
    tituloHonorifico: 'Premio Nobel de Literatura y Arquitecto de la Otredad',
    anios: '1914 – 1998',
    nacimiento: '31 de marzo de 1914 · Mixcoac, Ciudad de México',
    fallecimiento: '19 de abril de 1998 · Coyoacán, Ciudad de México',
    municipioOrigen: 'Mixcoac, CDMX',
    movimiento: 'Vanguardismo Surrealista / Poesía del Pensamiento / Ensayismo Universal',
    categoria: 'mexicanos',
    bloqueCanon: 'mexicanos',
    dossierSlug: '15_octavio_paz',
    tiempoLecturaMinutos: 30,
    badge: 'PREMIO NOBEL 1990',
    foto: '/assets/ilustres/octavio_paz.webp',
    fotoFallback: '/assets/ilustres/octavio_paz.jpg',
    semblanzaSintetica: 'El único Premio Nobel de Literatura de México. Poeta deslumbrante y ensayista universal que exploró el laberinto de la identidad mexicana, el erotismo y la reconciliación del tiempo en la palabra.',
    biografiaCompleta: [
      'Nacido durante el fragor de la Revolución Mexicana, creció en la casona de su abuelo Ireneo Paz en Mixcoac, rodeado de una vasta biblioteca que alimentó su precoz sensibilidad cosmopolita.',
      'En 1950 publicó «El laberinto de la soledad», la radiografía psicológica, antropológica e histórica definitiva sobre el ser mexicano, sus máscaras, sus fiestas y su dialéctica entre la herencia indígena y la hispánica.',
      'En 1957 sorprendió al mundo con «Piedra de sol», poema circular de 584 versos endecasílabos que iguala la revolución astronómica del calendario azteca de Venus con el amor, la libertad y la reconciliación de la historia humana.',
      'Como diplomático renunció valientemente a la embajada de México en la India tras la masacre de Tlatelolco en 1968. Fundador de las revistas capitales Plural y Vuelta, recibió el Premio Cervantes (1981) y el Premio Nobel de Literatura (1990).'
    ],
    obrasCapitales: [
      {
        titulo: 'El laberinto de la soledad',
        anio: 1950,
        genero: 'Ensayo Antropológico y Filosófico',
        descripcion: 'La indagación más lúcida sobre la psique, la soledad ontológica y los ritos del pueblo mexicano.'
      },
      {
        titulo: 'Piedra de sol',
        anio: 1957,
        genero: 'Poema Mayor Circular',
        descripcion: 'Monumento lírico del siglo XX; un fluir incesante de imágenes donde el tiempo y el amor vencen a la muerte.'
      },
      {
        titulo: 'El arco y la lira',
        anio: 1956,
        genero: 'Teoría Poética Fundamental',
        descripcion: 'Exégesis magistral sobre qué es el poema, la revelación poética y la consagración del lenguaje humano.'
      }
    ],
    citasMemorables: [
      {
        cita: 'Un sauce de cristal, un chopo de agua, un alto surtidor que el viento arquea, un árbol bien plantado mas danzante...',
        obra: 'Piedra de sol (1957)',
        contexto: 'Versos iniciales y finales que cierran el círculo infinito del poema.'
      },
      {
        cita: 'Viejo o adolescente, criollo o mestizo, el mexicano se me aparece como un ser que se encierra y se preserva: máscara el rostro y máscara la sonrisa.',
        obra: 'El laberinto de la soledad (1950)',
        contexto: 'Análisis de las máscaras protectoras de la psicología nacional.'
      },
      {
        cita: 'La poesía es conocimiento, salvación, poder, abandono. Operación capaz de cambiar el mundo, la actividad poética es revolucionaria por naturaleza.',
        obra: 'El arco y la lira (1956)',
        contexto: 'Manifiesto sobre la función ontológica de la poesía.'
      }
    ],
    legadoPatrimonial: 'Paz situó a la literatura mexicana en el centro del debate intelectual contemporáneo, reconciliando la vanguardia occidental con el misticismo oriental y la raíz mesoamericana.',
    audioSugerido: {
      titulo: 'Gymnopédie No. 1',
      compositor: 'Erik Satie',
      archivo: '/assets/audio/satie_gymnopedie_1.mp3'
    },
    datosCuriosos: [
      'Mantuvo una estrecha correspondencia y amistad fraternal con el tabasqueño Carlos Pellicer, a quien consideraba el maestro del color en la poesía de nuestra lengua.',
      'Su discurso de recepción del Premio Nobel, titulado «La búsqueda del presente», es una de las reflexiones éticas más hondas sobre la caída de los totalitarismos y la esperanza democrática.',
      'En la India conoció a su gran amor y compañera de vida, Marie-José Tramini, a quien dedicó sus poemas amorosos más radiantes.'
    ],
    colorAcento: '#EF7B38',
    fondoDegradado: 'from-[#EF7B38]/20 via-[#B84E20]/10 to-[#FAF7F0]'
  },

  // 16. ROSARIO CASTELLANOS
  {
    id: 'rosario-castellanos',
    nombre: 'Rosario Castellanos Figueroa',
    tituloHonorifico: 'La Voz Indómita de la Dignidad Indígena y Femenina',
    anios: '1925 – 1974',
    nacimiento: '25 de mayo de 1925 · Ciudad de México (Crianza en Comitán, Chiapas)',
    fallecimiento: '7 de agosto de 1974 · Tel Aviv, Israel',
    municipioOrigen: 'Comitán de Domínguez, Chiapas',
    movimiento: 'Generación del 50 / Indigenismo Crítico / Poesía de la Conciencia Social',
    categoria: 'mexicanos',
    bloqueCanon: 'mexicanos',
    dossierSlug: '16_rosario_castellanos',
    tiempoLecturaMinutos: 30,
    badge: 'CONCIENCIA ÉTICA',
    foto: '/assets/ilustres/rosario_castellanos.webp',
    fotoFallback: '/assets/ilustres/rosario_castellanos.jpg',
    semblanzaSintetica: 'La más lúcida, valiente e influyente escritora mexicana del siglo XX. Creadora del ciclo de Chiapas (Balún Canán, Oficio de tinieblas) y autora del estremecedor Memorial de Tlatelolco.',
    biografiaCompleta: [
      'Aunque nacida incidentalmente en la capital, creció en Comitán, Chiapas, en el seno de una familia terrateniente donde atestiguó desde niña la explotación secular y la injusticia contra las comunidades mayas tzeltales y tojolabales.',
      'Estudió Filosofía y Letras en la UNAM, integrando la brillante Generación del 50 junto a Jaime Sabines, Emilio Carballido y Sergio Magaña. En 1957 publicó «Balún Canán» y en 1962 «Oficio de tinieblas», dos obras maestras que fundaron el indigenismo crítico en América Latina.',
      'Su poesía, reunida en «Poesía no eres tú» (1972), demolió con ironía sabia los estereotipos románticos patriarcales para inaugurar una lírica de deslumbrante lucidez existencial y autocrítica.',
      'Embajadora de México en Israel y catedrática en la Universidad Hebrea de Jerusalén, falleció trágicamente a los 49 años a causa de una descarga eléctrica doméstica. Sus restos descansan en la Rotonda de las Personas Ilustres.'
    ],
    obrasCapitales: [
      {
        titulo: 'Balún Canán',
        anio: 1957,
        genero: 'Novela Indigenista Mayor',
        descripcion: 'Retrato desgarrador del choque entre el mundo criollo y la cosmogonía maya durante el gobierno cardenista.'
      },
      {
        titulo: 'Oficio de tinieblas',
        anio: 1962,
        genero: 'Novela Histórica y Social',
        descripcion: 'Recreación magistral de la sublevación indígena de Chamula en el siglo XIX, explorando el mito, la fe y la violencia.'
      },
      {
        titulo: 'Poesía no eres tú',
        anio: 1972,
        genero: 'Poesía Completa',
        descripcion: 'Obra cumbre lírica donde el desamor, la soledad y la lucidez se expresan con depuración verbal perfecta.'
      }
    ],
    citasMemorables: [
      {
        cita: '¿Quién? ¿Quiénes? Nadie. Al día siguiente, nadie. La plaza amaneció barrida; los periódicos dieron como noticia principal el estado del tiempo.',
        obra: 'Memorial de Tlatelolco (1968)',
        contexto: 'Elegía estremecedora en honor a los estudiantes caídos el 2 de octubre de 1968.'
      },
      {
        cita: 'No son una sola cosa la justicia y la ley: la ley es la muralla que los fuertes levantan para defenderse de los débiles.',
        obra: 'Balún Canán (1957)',
        contexto: 'Reflexión política sobre el despojo agrario en el sureste mexicano.'
      },
      {
        cita: 'Matamos lo que amamos. Lo demás no ha estado vivo nunca.',
        obra: 'Juegos de ingenio (Poesía no eres tú, 1972)',
        contexto: 'Axioma lírico sobre la tragedia y posesión del afecto.'
      }
    ],
    legadoPatrimonial: 'Castellanos devolvió la dignidad histórica a los pueblos indígenas del sureste y sentó las bases del pensamiento feminista ético contemporáneo.',
    audioSugerido: {
      titulo: 'Nocturno Op. 9 No. 2',
      compositor: 'Frédéric Chopin',
      archivo: '/assets/audio/chopin_nocturne_op9.mp3'
    },
    datosCuriosos: [
      'Al heredar las tierras de sus padres en Chiapas, donó gran parte de las propiedades directamente a las familias campesinas e indígenas que las trabajaban.',
      'Su obra teatral en verso «El eterno femenino» es una farsa cómica e irreverente sobre los mitos de la mujer en la historia de México.',
      'Mantuvo una hermosa amistad con el poeta tabasqueño José Carlos Becerra, a quien despidió con profundo dolor tras su fatal accidente en Brindisi.'
    ],
    colorAcento: '#9E782F',
    fondoDegradado: 'from-[#9E782F]/20 via-[#EF7B38]/10 to-[#FAF7F0]'
  },

  // 17. JAIME SABINES
  {
    id: 'jaime-sabines',
    nombre: 'Jaime Sabines Gutiérrez',
    tituloHonorifico: 'El Francotirador del Amor y la Muerte Cotidiana',
    anios: '1926 – 1999',
    nacimiento: '25 de marzo de 1926 · Tuxtla Gutiérrez, Chiapas',
    fallecimiento: '19 de marzo de 1999 · Ciudad de México',
    municipioOrigen: 'Tuxtla Gutiérrez, Chiapas',
    movimiento: 'Poesía Coloquial / Existencialismo Lírico / Generación de Medio Siglo',
    categoria: 'mexicanos',
    bloqueCanon: 'mexicanos',
    dossierSlug: '17_jaime_sabines',
    tiempoLecturaMinutos: 30,
    badge: 'POETA DE LA CARNE',
    foto: '/assets/ilustres/jaime_sabines.webp',
    fotoFallback: '/assets/ilustres/jaime_sabines.jpg',
    semblanzaSintetica: 'El poeta más entrañable, memorizado y visceral del México contemporáneo. Cantor de la fragilidad humana, el dolor del cáncer y el duelo desgarrador ante la muerte del padre.',
    biografiaCompleta: [
      'Hijo del mayor Julio Sabines —un militar libanés que combatió en la Revolución— y de doña Luz Gutiérrez, abandonó los estudios de medicina para entregarse con furor a la poesía en la Facultad de Filosofía y Letras de la UNAM.',
      'En 1950 publicó «Horal», libro de asombrosa madurez juvenil que contiene Los amorosos, el poema de amor más célebre de las letras mexicanas del siglo XX. Le siguieron Tarumba (1956) y Diario semanario y poemas en prosa (1961).',
      'En 1973 publicó «Algo sobre la muerte del mayor Sabines», considerado unánimemente una de las cumbres de la elegía poética universal en lengua española, a la altura de las Coplas de Jorge Manrique.',
      'Galardonado con el Premio Xavier Villaurrutia (1973) y el Premio Nacional de Ciencias y Artes (1983), sus lecturas en el Palacio de Bellas Artes congregaban a miles de jóvenes que recitaban sus versos al unísono.'
    ],
    obrasCapitales: [
      {
        titulo: 'Horal',
        anio: 1950,
        genero: 'Poesía Lírica Fundacional',
        descripcion: 'Primer libro donde nace su tono directo, doloroso y apasionado; incluye el poema Los amorosos.'
      },
      {
        titulo: 'Tarumba',
        anio: 1956,
        genero: 'Canto Existencial',
        descripcion: 'Diálogo desgarrado con su doble interior frente a la rutina, la fatiga y la soledad urbana.'
      },
      {
        titulo: 'Algo sobre la muerte del mayor Sabines',
        anio: 1973,
        genero: 'Elegía Trágica Mayor',
        descripcion: 'Monumento fúnebre contra la agonía y la enfermedad del padre; testimonio de rebelión y ternura filial.'
      }
    ],
    citasMemorables: [
      {
        cita: 'Los amorosos callan. El amor es el silencio más fino, el más tembloroso, el más insoportable.',
        obra: 'Los amorosos (Horal, 1950)',
        contexto: 'Himno lírico a la búsqueda incesante e insatisfecha del deseo.'
      },
      {
        cita: 'No es que muera de amor, muero de ti. Muero de ti, amor, de amor de ti, de mi piel que te quiere, de mi pecho herido.',
        obra: 'Espero curarme de ti (1975)',
        contexto: 'Lamento de la ausencia y la dependencia física del ser amado.'
      },
      {
        cita: 'Te entierran, te dejan caer en el hoyo, te echan tierra encima, ¡y se van todos a comer caldo de gallina!',
        obra: 'Algo sobre la muerte del mayor Sabines (1973)',
        contexto: 'Feroz constatación de la crudeza cotidiana de la muerte.'
      }
    ],
    legadoPatrimonial: 'Sabines despojó a la poesía de la retórica académica para devolverle su poder curativo, salvaje y popular en las calles y corazones de América.',
    audioSugerido: {
      titulo: 'Poema Sonoro: Sabines y el Cuerpo',
      compositor: 'Fonoteca LVT / Archivo Histórico',
      archivo: '/assets/audios/sabines_cuerpo.mp3'
    },
    datosCuriosos: [
      'Durante años atendió un negocio familiar de venta de telas en Tuxtla Gutiérrez, escribiendo versos en los papeles de envoltura entre cliente y cliente.',
      'Rechazaba el calificativo de «intelectual», insistiendo en que él simplemente era un hombre que testimoniaba la condición de estar vivo y vulnerable.',
      'Fue electo diputado federal en dos ocasiones, distinguiéndose siempre por su integridad cívica y su voz libre.'
    ],
    colorAcento: '#B84E20',
    fondoDegradado: 'from-[#B84E20]/20 via-[#EF7B38]/10 to-[#FAF7F0]'
  },

  // 18. ELENA GARRO
  {
    id: 'elena-garro',
    nombre: 'Elena Garro Navarro',
    tituloHonorifico: 'Pionera Absoluta del Realismo Mágico y Dramaturga Insumisa',
    anios: '1916 – 1998',
    nacimiento: '11 de diciembre de 1916 · Puebla de los Ángeles, México',
    fallecimiento: '23 de agosto de 1998 · Cuernavaca, Morelos',
    municipioOrigen: 'Puebla / Iguala, Guerrero',
    movimiento: 'Realismo Mágico Fundacional / Teatro Poético / Narrativa del Exilio',
    categoria: 'mexicanos',
    bloqueCanon: 'mexicanos',
    dossierSlug: '18_elena_garro',
    tiempoLecturaMinutos: 30,
    badge: 'GENIO INSUMISO',
    foto: '/assets/ilustres/elena_garro.webp',
    fotoFallback: '/assets/ilustres/elena_garro.jpg',
    semblanzaSintetica: 'Una de las mayores creadoras de la lengua española. Precursora del realismo mágico antes que García Márquez con Los recuerdos del porvenir y revolucionaria del teatro contemporáneo con Un hogar sólido.',
    biografiaCompleta: [
      'Pasó su infancia en Iguala, Guerrero, durante los años de la Guerra Cristera, en un ambiente rural donde convivían el catolicismo devoto, los relatos indígenas de nahuales y los libros de los clásicos griegos de su padre español.',
      'En 1937 viajó a España en plena Guerra Civil acompañando a Octavio Paz —con quien estuvo casada dos décadas— al Congreso Antifascista, experiencia que relató con lucidez e ironía en sus «Memorias de España 1937».',
      'En 1963 publicó «Los recuerdos del porvenir» (Premio Xavier Villaurrutia), novela narrada por la voz del pueblo de Ixtepec que inauguró el realismo mágico moderno, explorando la tiranía militar y la rebelión de las mujeres en el México cristero.',
      'Su pieza teatral «Un hogar sólido» (1957) y sus cuentos de «La semana de colores» (como La culpa es de los tlaxcaltecas) revolucionaron la concepción del tiempo y la identidad mestiza. Tras el 68 sufrió un amargo exilio de dos décadas en Francia y España antes de su retorno triunfal a México.'
    ],
    obrasCapitales: [
      {
        titulo: 'Los recuerdos del porvenir',
        anio: 1963,
        genero: 'Novela Canónica Mayor',
        descripcion: 'Premio Xavier Villaurrutia; Ixtepec cobra voz para narrar la violencia militar y la resistencia de Julia Andrade e Isabel Moncada.'
      },
      {
        titulo: 'Un hogar sólido',
        anio: 1957,
        genero: 'Teatro Poético en Un Acto',
        descripcion: 'Obra maestra donde los muertos de una familia conversan bajo la losa sepulcral esperando la eternidad con humor y nostalgia.'
      },
      {
        titulo: 'La semana de colores',
        anio: 1964,
        genero: 'Cuentos Fantásticos',
        descripcion: 'Contiene La culpa es de los tlaxcaltecas, indagación deslumbrante sobre la caída de Tenochtitlan y el tiempo circular.'
      }
    ],
    citasMemorables: [
      {
        cita: 'Aquí estoy, sentado sobre esta piedra aparente. Sólo mi memoria sabe lo que encierra. La veo y me recuerdo, y como el agua va al agua, así yo, melancólico, vengo a caer en sus ojos transparentes...',
        obra: 'Los recuerdos del porvenir (1963)',
        contexto: 'Voz del pueblo de Ixtepec en la apertura de la novela.'
      },
      {
        cita: 'El tiempo no pasa, Nacha; el tiempo da vueltas y nosotros somos los mismos que estábamos ayer en la fiesta de Cholula.',
        obra: 'La culpa es de los tlaxcaltecas (1964)',
        contexto: 'Fusión mítica de la mujer prehispánica y contemporánea.'
      },
      {
        cita: 'La muerte es como esperar el tren en una estación fría: al principio da sueño, pero luego una se acostumbra a la humedad de la piedra.',
        obra: 'Un hogar sólido (1957)',
        contexto: 'Diálogo entrañable en la cripta familiar.'
      }
    ],
    legadoPatrimonial: 'Garro devolvió al castellano la dimensión poética del tiempo mítico y abrió las compuertas a la literatura de la memoria insumisa en América Latina.',
    audioSugerido: {
      titulo: 'Serenata (Ständchen)',
      compositor: 'Franz Schubert',
      archivo: '/assets/audio/schubert_serenade.mp3'
    },
    datosCuriosos: [
      'Bailarina consumada en su juventud, integró el grupo de Teatro Ulises dirigido por Xavier Villaurrutia y Celestino Gorostiza.',
      'Vivió en París en condiciones de extrema pobreza acompañada por sus gatos, escribiendo novelas maestras sobre servilletas de café.',
      'Jorge Luis Borges y Adolfo Bioy Casares profesaron una profunda admiración por sus cuentos fantásticos, que consideraban entre los más originales de América.'
    ],
    colorAcento: '#EF7B38',
    fondoDegradado: 'from-[#EF7B38]/20 via-[#C5A059]/10 to-[#FAF7F0]'
  },

  // 19. JUAN JOSÉ ARREOLA
  {
    id: 'juan-jose-arreola',
    nombre: 'Juan José Arreola Zúñiga',
    tituloHonorifico: 'El Orfebre de la Prosa Breve y el Bestiario Fantástico',
    anios: '1918 – 2001',
    nacimiento: '21 de septiembre de 1918 · Zapotlán el Grande (Ciudad Guzmán), Jalisco',
    fallecimiento: '3 de diciembre de 2001 · Guadalajara, Jalisco',
    municipioOrigen: 'Ciudad Guzmán, Jalisco',
    movimiento: 'Ficción Fantástica / Microficción / Generación de Medio Siglo',
    categoria: 'mexicanos',
    bloqueCanon: 'mexicanos',
    dossierSlug: '19_juan_jose_arreola',
    tiempoLecturaMinutos: 35,
    badge: 'ORFEBRE DE LA PALABRA',
    foto: '/assets/ilustres/juan_jose_arreola.webp',
    fotoFallback: '/assets/ilustres/juan_jose_arreola.jpg',
    semblanzaSintetica: 'El maestro indiscutible de la brevedad, la ironía intelectual y la parábola fantástica en México. Autor de Confabulario y El guardagujas, revolucionó la microficción con elegancia clásica y lúdica.',
    biografiaCompleta: [
      'Autodidacta admirable, aprendió a leer solo observando las páginas impresas mientras trabajaba desde niño como encuadernador, dependiente de abarrotes y zapatero en Zapotlán el Grande.',
      'En 1945 viajó a París becado por el Instituto Francés para estudiar artes dramáticas en la Comédie-Française, donde conoció a Jean-Louis Barrault y perfeccionó su dicción histriónica.',
      'En 1952 publicó «Confabulario», libro capital que contiene piezas maestras del cuento fantástico contemporáneo como El guardagujas, Baby H.P. y En verdad os digo. En 1958 deslumbró con «Punta de plata», bestiario poético ilustrado por Héctor Xavier.',
      'Formador de generaciones de escritores a través de su célebre colección «Los Presentes» y el taller del Fondo de Cultura Económica, recibió el Premio Xavier Villaurrutia (1963), el Premio Nacional de Lingüística y Literatura (1979) y el Premio Juan Rulfo de Literatura Latinoamericana y del Caribe (1992).'
    ],
    obrasCapitales: [
      {
        titulo: 'Confabulario',
        anio: 1952,
        genero: 'Cuentos Fantásticos y Parábolas',
        descripcion: 'Premio Jalisco de Literatura; incluye piezas canónicas de ingenio y crítica a la modernidad mecánica.'
      },
      {
        titulo: 'La feria',
        anio: 1963,
        genero: 'Novela Polifónica Coral',
        descripcion: 'Premio Xavier Villaurrutia; retrato fragmentario y carnavalesco de Zapotlán el Grande a través de múltiples voces.'
      },
      {
        titulo: 'Bestiario',
        anio: 1958,
        genero: 'Prosa Poética y Alegoría Animal',
        descripcion: 'Retratos zoológicos en miniatura donde el rinoceronte, el sapo y la hiena encarnan pasiones humanas.'
      }
    ],
    citasMemorables: [
      {
        cita: 'El forastero llegó sin aliento a la estación desierta. Su gran valija, que nadie quiso cargar, le había fatigado en extremo. Se limpió el rostro con un pañuelo y con los ojos fijos en los rieles, miró hacia la lejanía...',
        obra: 'El guardagujas (Confabulario, 1952)',
        contexto: 'Apertura de la alegoría maestra sobre los trenes y el destino nacional.'
      },
      {
        cita: 'Señora: puesto que su esposo no puede comprarle un abrigo de visón, adquiera usted un Baby H.P., el acumulador de energía infantil.',
        obra: 'Baby H.P. (1952)',
        contexto: 'Sátira demoledora del capitalismo tecnológico y la publicidad moderna.'
      },
      {
        cita: 'Soy un autodidacto, es decir, un hombre que no fue a la escuela porque aprendió a leer antes de que lo obligaran a desaprenderlo.',
        obra: 'Memoria y olvido (1994)',
        contexto: 'Defensa de la libertad soberana del conocimiento autodidacta.'
      }
    ],
    legadoPatrimonial: 'Arreola demostró que la prosa en español puede alcanzar la precisión del diamante y la flexibilidad musical de la poesía sin perder la gracia popular.',
    audioSugerido: {
      titulo: 'Sonata en Do Mayor (K. 545)',
      compositor: 'W.A. Mozart',
      archivo: '/assets/audio/mozart_sonata_k545.mp3'
    },
    datosCuriosos: [
      'Apasionado maestro del ajedrez y del ping-pong, solía desafiar a sus alumnos en su casa de Coyoacán mientras les comentaba pasajes de Dante y Rabelais.',
      'Publicó el primer libro de Carlos Fuentes («Los días enmascarados») y promovió las primeras obras de Elena Poniatowska e Inés Arredondo.',
      'Su atuendo teatral de capa negra, chaleco de seda y bastón de ébano lo convirtió en un icono inconfundible de la televisión cultural mexicana.'
    ],
    colorAcento: '#C5A059',
    fondoDegradado: 'from-[#C5A059]/20 via-[#B84E20]/10 to-[#FAF7F0]'
  },

  // 20. JOSÉ EMILIO PACHECO
  {
    id: 'jose-emilio-pacheco',
    nombre: 'José Emilio Pacheco Berny',
    tituloHonorifico: 'Cronista Ético de la Memoria y la Fugacidad del Tiempo',
    anios: '1939 – 2014',
    nacimiento: '30 de junio de 1939 · Ciudad de México',
    fallecimiento: '26 de enero de 2014 · Ciudad de México',
    municipioOrigen: 'Colonia Roma, CDMX',
    movimiento: 'Generación del 50 / Poesía de la Brevedad y la Conciencia / Cuento Fantástico',
    categoria: 'mexicanos',
    bloqueCanon: 'mexicanos',
    dossierSlug: '20_jose_emilio_pacheco',
    tiempoLecturaMinutos: 32,
    badge: 'PREMIO CERVANTES 2009',
    foto: '/assets/ilustres/jose_emilio_pacheco.webp',
    fotoFallback: '/assets/ilustres/jose_emilio_pacheco.jpg',
    semblanzaSintetica: 'El poeta y prosista más querido del México moderno. Creador de Las batallas en el desierto y autor de Alta traición, consagró su pluma a rescatar el valor del idioma, la amistad y la memoria.',
    biografiaCompleta: [
      'Creció en la colonia Roma de la Ciudad de México, escenario que recrearía magistralmente en sus novelas. Estudió en la UNAM, donde trabó una estrecha alianza creativa con Carlos Monsiváis y Sergio Pitol.',
      'En 1981 publicó «Las batallas en el desierto», novela breve que cautivó a millones de lectores al relatar el amor infantil de Carlos por Mariana en el México de la posguerra, adaptada al cine y vuelta canción por Café Tacvba.',
      'Como poeta, su obra reunida en «Tarde o temprano» (1980) destaca por su claridad moral, su humor melancólico y su defensa de la ecología y los seres indefensos.',
      'Durante décadas redactó su legendaria columna «Inventario» en la revista Proceso. En 2009 fue galardonado con el Premio Reina Sofía de Poesía Iberoamericana y el Premio Cervantes de Literatura.'
    ],
    obrasCapitales: [
      {
        titulo: 'Las batallas en el desierto',
        anio: 1981,
        genero: 'Novela Corta Clásica',
        descripcion: 'El despertar amoroso de Carlos en la colonia Roma de los años cuarenta frente a la modernización corrupta.'
      },
      {
        titulo: 'No me preguntes cómo pasa el tiempo',
        anio: 1969,
        genero: 'Poesía Crítica Mayor',
        descripcion: 'Premio Nacional de Poesía Aguascalientes; meditación sobre el 68, la erosión del tiempo y la historia.'
      },
      {
        titulo: 'El principio del placer',
        anio: 1972,
        genero: 'Cuentos de Aprendizaje',
        descripcion: 'Premio Xavier Villaurrutia; incluye relatos maestros como Tenga para que se entretenga.'
      }
    ],
    citasMemorables: [
      {
        cita: 'No amo mi patria. Su fulgor abstracto es inasible. Pero (aunque suene mal) daría la vida por diez lugares suyos, cierta gente, puertos, bosques de pinos, fortalezas...',
        obra: 'Alta traición (1969)',
        contexto: 'El poema cívico más conmovedor y lúcido sobre el amor a la tierra mexicana.'
      },
      {
        cita: 'Por alto esté el cielo en el mundo, por hondo que sea el mar profundo, no habrá una estrella más linda que la que alumbra tu faz.',
        obra: 'Las batallas en el desierto (1981)',
        contexto: 'Bolero de Pedro Infante que acompaña el amor imposible por Mariana.'
      },
      {
        cita: 'Ya somos todo aquello contra lo cual luchamos a los veinte años.',
        obra: 'Antigüedades mexicanas (1975)',
        contexto: 'Sentencia melancólica sobre el desgaste moral del tiempo.'
      }
    ],
    legadoPatrimonial: 'Pacheco enseñó que la poesía no pertenece a los poetas sino a los lectores que la necesitan para sobrevivir con decencia en un mundo hostil.',
    audioSugerido: {
      titulo: 'Träumerei (Ensoñación)',
      compositor: 'Robert Schumann',
      archivo: '/assets/audio/schumann_traumerei.mp3'
    },
    datosCuriosos: [
      'Al recibir el Premio Cervantes en Alcalá de Henares en 2010, se le cayeron los pantalones al acomodarse el frac en un simpático accidente que sorteó con su célebre humildad y elegancia.',
      'Corregía obsesivamente sus poemas en cada nueva reedición, argumentando que un texto nunca se termina, sólo se abandona.',
      'Fue el traductor definitivo al español de Cuatro cuartetos de T.S. Eliot y De profundis de Oscar Wilde.'
    ],
    colorAcento: '#0284C7',
    fondoDegradado: 'from-[#0284C7]/15 via-[#EF7B38]/10 to-[#FAF7F0]'
  },

  // 21. AMADO NERVO
  {
    id: 'amado-nervo',
    nombre: 'Amado Nervo (Juan Crisóstomo Ruiz de Nervo)',
    tituloHonorifico: 'El Místico del Modernismo y Cantor de la Serenidad',
    anios: '1870 – 1919',
    nacimiento: '27 de agosto de 1870 · Tepic, Nayarit, México',
    fallecimiento: '24 de mayo de 1919 · Montevideo, Uruguay',
    municipioOrigen: 'Tepic, Nayarit',
    movimiento: 'Modernismo Hispanoamericano / Poesía Mística y Filosófica',
    categoria: 'siglo_xix',
    bloqueCanon: 'mexicanos',
    dossierSlug: '21_amado_nervo',
    tiempoLecturaMinutos: 30,
    badge: 'CLÁSICO MODERNISTA',
    foto: '/assets/ilustres/amado_nervo.webp',
    fotoFallback: '/assets/ilustres/amado_nervo.jpg',
    semblanzaSintetica: 'Una de las voces más leídas y veneradas en la historia de la lírica hispanoamericana. Poeta de la serenidad espiritual, el despojo místico y el dolor trascendido ante la amada inmóvil.',
    biografiaCompleta: [
      'Nacido en Tepic, cursó estudios en el Seminario de Zamora, Michoacán, donde adquirió una sólida base en teología, lenguas clásicas y mística que marcaría la espiritualidad de su poética.',
      'En 1894 se trasladó a la Ciudad de México y cofundó la célebre «Revista Moderna» junto a Jesús E. Valenzuela, órgano cumbre del modernismo en México. En 1900 viajó a París como corresponsal de El Imparcial, donde trabó amistad íntima con Rubén Darío y conoció a su gran amor, Ana Cecilia Luisa Dailliez.',
      'El fallecimiento prematuro de Ana Cecilia en 1912 inspiró su obra cumbre de luto y trascendencia: «La amada inmóvil», que conmocionó a los lectores de todo el continente.',
      'Diplomático respetado en España, Argentina y Uruguay, su muerte en Montevideo en 1919 desató un duelo continental sin precedentes: buques de guerra de tres naciones escoltaron sus restos hasta Veracruz y más de trescientas mil personas acompañaron su féretro a la Rotonda de los Hombres Ilustres.'
    ],
    obrasCapitales: [
      {
        titulo: 'La amada inmóvil',
        anio: 1920,
        genero: 'Elegía Amorosa Mayor',
        descripcion: 'Publicado póstumamente; ciclo fúnebre dedicado a Ana Cecilia Dailliez que transformó el dolor de la muerte en comunión mística.'
      },
      {
        titulo: 'Serenidad',
        anio: 1914,
        genero: 'Poesía Filosófica',
        descripcion: 'Compendio de paz interior y aceptación estoica de la vida; incluye su inmortal poema En paz.'
      },
      {
        titulo: 'Elevación',
        anio: 1916,
        genero: 'Mística y Meditación',
        descripcion: 'Lírica del desprendimiento material, la bondad franciscana y la búsqueda de la armonía con la naturaleza.'
      }
    ],
    citasMemorables: [
      {
        cita: 'Muy cerca de mi ocaso, yo te bendigo, vida, porque nunca me diste ni esperanza fallida, ni trabajos injustos, ni pena inmerecida...',
        obra: 'En paz (Serenidad, 1914)',
        contexto: 'El epitafio lírico más célebre de la poesía en lengua española.'
      },
      {
        cita: '¡Vida, nada me debes! ¡Vida, estamos en paz!',
        obra: 'En paz (1914)',
        contexto: 'Culminación suprema de la reconciliación del alma con su destino.'
      },
      {
        cita: 'Si tú me dices: «¡Ven!», lo dejo todo. Llegaré a tu santuario casi viejo, y al mirar tu belleza me diré: ¡más valió la espera!',
        obra: 'Si tú me dices: «¡Ven!» (1902)',
        contexto: 'Declaración de amor incondicional y entrega lírica.'
      }
    ],
    legadoPatrimonial: 'Nervo demostró que la belleza poética es un bálsamo de consuelo para el alma humana, logrando que millones de lectores hallaran serenidad en sus versos.',
    audioSugerido: {
      titulo: 'Nocturno en Mi Bemol',
      compositor: 'Frédéric Chopin',
      archivo: '/assets/audio/chopin_nocturne_op9.mp3'
    },
    datosCuriosos: [
      'Alcanzó tal devoción popular en su época que en las escuelas primarias de México y Sudamérica era obligatorio memorizar sus poemas.',
      'Su nombre original «Amado» no era un seudónimo sino el nombre de pila heredado de su padre, Amado Nervo Maldonado.',
      'Escribió pioneros relatos de ciencia ficción y misterio como «La última guerra» y «El donador de almas».'
    ],
    colorAcento: '#C5A059',
    fondoDegradado: 'from-[#C5A059]/20 via-[#EF7B38]/10 to-[#FAF7F0]'
  },

  // 22. INÉS ARREDONDO
  {
    id: 'ines-arredondo',
    nombre: 'Inés Amelia Camelo Arredondo',
    tituloHonorifico: 'La Maestra del Secreto, la Pasión Oculta y lo Siniestro',
    anios: '1928 – 1989',
    nacimiento: '20 de marzo de 1928 · Culiacán, Sinaloa, México',
    fallecimiento: '2 de noviembre de 1989 · Ciudad de México',
    municipioOrigen: 'Culiacán / Eldorado, Sinaloa',
    movimiento: 'Generación de Medio Siglo / Narrativa Psicológica / Poética de la Transgresión',
    categoria: 'narrativa_teatro',
    bloqueCanon: 'mexicanos',
    dossierSlug: '22_ines_arredondo',
    tiempoLecturaMinutos: 30,
    badge: 'MAESTRA DEL CUENTO',
    foto: '/assets/ilustres/ines_arredondo.webp',
    fotoFallback: '/assets/ilustres/ines_arredondo.jpg',
    semblanzaSintetica: 'La más profunda, intensa y perturbadora cuentista de la literatura mexicana moderna. Autora de La señal y Río subterráneo, exploró los abismos del deseo prohibido, el sacrificio y la pasión sagrada.',
    biografiaCompleta: [
      'Nacida en Culiacán, pasó largas temporadas en la hacienda azucarera de su abuelo materno en Eldorado, Sinaloa, un territorio tropical de calor denso, cañaverales y casonas señoriales que serviría de escenario a sus relatos más incandescentes.',
      'Estudió Letras Hispánicas en la UNAM, donde integró el selecto grupo de la Generación de Medio Siglo junto a Juan García Ponce, Huberto Batis, Juan Vicente Melo y Rosario Castellanos.',
      'En 1965 publicó «La señal», colección de catorce cuentos donde piezas como La sunamita, Mariana y Estío fundaron una narrativa implacable sobre la transgresión erótica, la pureza sacrificial y el mal que no se nombra.',
      'En 1979 obtuvo el prestigioso Premio Xavier Villaurrutia por su libro «Río subterráneo». Su obra, breve pero perfecta en su ejecución estilística, es reconocida unánimemente como una de las cumbres del cuento hispanoamericano.'
    ],
    obrasCapitales: [
      {
        titulo: 'La señal',
        anio: 1965,
        genero: 'Colección de Cuentos Clásicos',
        descripcion: 'Libro fundacional que incluye La sunamita, Estío y Mariana; indagación magistral del deseo y la sumisión.'
      },
      {
        titulo: 'Río subterráneo',
        anio: 1979,
        genero: 'Cuentos de la Conciencia Herida',
        descripcion: 'Premio Xavier Villaurrutia; exploraciones psicológicas de la locura lúcida, el secreto conyugal y la pasión absoluta.'
      },
      {
        titulo: 'Los espejos',
        anio: 1988,
        genero: 'Cuentos de Madurez',
        descripcion: 'Último volumen publicado en vida; reflexiones sobre el reflejo del alma, el envejecimiento y la revelación mística.'
      }
    ],
    citasMemorables: [
      {
        cita: 'Hay cosas que sólo se pueden comprender si se aceptan con la inocencia con que se acepta un abismo.',
        obra: 'La señal (1965)',
        contexto: 'Axioma sobre la entrega total a lo sagrado y lo prohibido.'
      },
      {
        cita: 'Fui joven y amé la luz; pero aprendí que las corrientes más hondas de la vida corren siempre por un río subterráneo que nadie ve.',
        obra: 'Río subterráneo (1979)',
        contexto: 'Metáfora central de su universo narrativo.'
      },
      {
        cita: 'El tío Apolonio me miró con ojos secos de moribundo y extendió su mano helada: «Tú serás mi esposa ante la ley y ante Dios para que la hacienda no se pierda».',
        obra: 'La sunamita (1965)',
        contexto: 'Momento de ruptura donde la protagonista queda atrapada en el rito conyugal.'
      }
    ],
    legadoPatrimonial: 'Arredondo demostró que en el cuento breve se pueden tocar los fondos más oscuros y reveladores de la condición humana con una prosa de pureza diamantina.',
    audioSugerido: {
      titulo: 'Invierno (Largo)',
      compositor: 'Antonio Vivaldi',
      archivo: '/assets/audio/vivaldi_winter_largo.mp3'
    },
    datosCuriosos: [
      'Su cuento «La sunamita» fue adaptado al cine por Héctor Mendoza en el célebre filme colectivo «Amor, amor, amor» (1965).',
      'Durante años ejerció como investigadora y bibliotecaria en el Centro de Estudios Literarios de la UNAM, colaborando en el rescate de revistas del siglo XIX.',
      'El prestigioso Premio Nacional de Cuento del Instituto Nacional de Bellas Artes lleva hoy su nombre en su honor.'
    ],
    colorAcento: '#EF7B38',
    fondoDegradado: 'from-[#EF7B38]/20 via-[#B84E20]/10 to-[#FAF7F0]'
  },

  // =========================================================================
  // BLOQUE III: CÁNONES UNIVERSALES (LETRAS MUNDIALES)
  // =========================================================================

  // 23. JORGE LUIS BORGES
  {
    id: 'jorge-luis-borges',
    nombre: 'Jorge Luis Borges',
    tituloHonorifico: 'El Creador de los Laberintos Metafísicos y el Aleph Infinito',
    anios: '1899 – 1986',
    nacimiento: '24 de agosto de 1899 · Buenos Aires, Argentina',
    fallecimiento: '14 de junio de 1986 · Ginebra, Suiza',
    municipioOrigen: 'Palermo / Recoleta, Buenos Aires',
    movimiento: 'Ultraísmo / Literatura Fantástica / Ensayo Metafísico Universal',
    categoria: 'universales',
    bloqueCanon: 'universales',
    dossierSlug: '23_jorge_luis_borges',
    tiempoLecturaMinutos: 45,
    badge: 'GENIO UNIVERSAL',
    foto: '/assets/ilustres/jorge_luis_borges.webp',
    fotoFallback: '/assets/ilustres/jorge_luis_borges.jpg',
    semblanzaSintetica: 'El mayor artífice de la ficción metafísica, los laberintos, el tiempo circular y las bibliotecas infinitas en la literatura del siglo XX. Creador de Ficciones y El Aleph.',
    biografiaCompleta: [
      'Criado en una casa de Palermo con una inmensa biblioteca inglesa de su padre, Borges afirmó haber salido poco de esa biblioteca a lo largo de toda su existencia. Educado en Ginebra durante la Primera Guerra Mundial, dominó el latín, el francés y el alemán.',
      'A su regreso a Buenos Aires encabezó la vanguardia del Ultraísmo. En los años cuarenta publicó dos colecciones que revolucionaron la narrativa mundial: «Ficciones» (1944) y «El Aleph» (1949), donde cuentos como El jardín de senderos que se bifurcan y Las ruinas circulares fundaron la metaficción contemporánea.',
      'Afectado por una ceguera hereditaria progresiva que lo dejó en tinieblas hacia 1955 —el mismo año en que fue nombrado Director de la Biblioteca Nacional de Argentina—, Borges transmutó su ceguera en una prodigiosa agudeza poética y memorística.',
      'Premio Cervantes en 1979 y nominado perennemente al Premio Nobel, Borges es el maestro del rigor conceptual, la ironía sabia y la música íntima del idioma.'
    ],
    obrasCapitales: [
      {
        titulo: 'Ficciones',
        anio: 1944,
        genero: 'Cuentos Metafísicos Canónicos',
        descripcion: 'Incluye El jardín de senderos que se bifurcan, Pierre Menard y La biblioteca de Babel; cumbre de la imaginación lógica.'
      },
      {
        titulo: 'El Aleph',
        anio: 1949,
        genero: 'Ficciones Universales',
        descripcion: 'El descubrimiento en el sótano de una casa en la calle Garay del punto donde confluyen todos los lugares del universo.'
      },
      {
        titulo: 'El hacedor',
        anio: 1960,
        genero: 'Prosas Breves y Poemas',
        descripcion: 'Obra entrañable de reconciliación con la ceguera; contiene el ensayo Borges y yo y el Poema de los dones.'
      }
    ],
    citasMemorables: [
      {
        cita: 'Nadie rebaje a lágrima o reproche esta declaración de la maestría de Dios, que con magnífica ironía me dio a la vez los libros y la noche.',
        obra: 'Poema de los dones (1960)',
        contexto: 'Meditación serena al asumir la dirección de la Biblioteca Nacional estando ciego.'
      },
      {
        cita: 'Vi el Aleph, desde todos los puntos, vi en el Aleph la tierra, vi mi cara y mis vísceras, vi tu cara, y sentí vértigo y lloré...',
        obra: 'El Aleph (1949)',
        contexto: 'Epifanía mística de la totalidad del cosmos en un instante simultáneo.'
      },
      {
        cita: 'Al otro, a Borges, es a quien le ocurren las cosas. Yo camino por Buenos Aires y me demoro, acaso ya mecánicamente, para mirar el arco de un zaguán...',
        obra: 'Borges y yo (1960)',
        contexto: 'Reflexión filosófica sobre la dualidad entre el hombre mortal y el escritor mitificado.'
      }
    ],
    legadoPatrimonial: 'Borges demostró que la filosofía, la teología y la lógica matemática pueden transformarse en las formas más altas y deslumbrantes de la aventura literaria.',
    audioSugerido: {
      titulo: 'Sonata Claro de Luna',
      compositor: 'L.V. Beethoven',
      archivo: '/assets/audio/beethoven_moonlight_sonata.mp3'
    },
    datosCuriosos: [
      'Profundo admirador de la literatura náhuatl y de las civilizaciones mesoamericanas, dedicó hermosas páginas de elogio a la poesía de Sor Juana Inés de la Cruz y Manuel Sánchez Mármol.',
      'Leía y memorizaba sagas nórdicas en islandés antiguo a los ochenta años de edad, sirviéndose únicamente del oído y de la memoria.',
      'Eligió reposar para siempre en el cementerio de Plainpalais en Ginebra bajo una lápida sencilla con inscripciones en anglosajón antiguo.'
    ],
    colorAcento: '#C5A059',
    fondoDegradado: 'from-[#C5A059]/20 via-[#EF7B38]/10 to-[#FAF7F0]'
  },

  // 24. FEDERICO GARCÍA LORCA
  {
    id: 'federico-garcia-lorca',
    nombre: 'Federico García Lorca',
    tituloHonorifico: 'El Poeta Mártir del Duende y la Tragedia Andaluza',
    anios: '1898 – 1936',
    nacimiento: '5 de junio de 1898 · Fuente Vaqueros, Granada, España',
    fallecimiento: '18 de agosto de 1936 · Barranco de Víznar, Granada',
    municipioOrigen: 'Fuente Vaqueros, Granada',
    movimiento: 'Generación del 27 / Neopopularismo Lírico / Teatro Trágico Mayor',
    categoria: 'universales',
    bloqueCanon: 'universales',
    dossierSlug: '24_federico_garcia_lorca',
    tiempoLecturaMinutos: 35,
    badge: 'POETA DEL DUENDE',
    foto: '/assets/ilustres/federico_garcia_lorca.webp',
    fotoFallback: '/assets/ilustres/federico_garcia_lorca.jpg',
    semblanzaSintetica: 'El poeta y dramaturgo más universal, musical y desgarrador de las letras hispánicas del siglo XX. Creador del Romancero gitano, Poeta en Nueva York y La casa de Bernarda Alba.',
    biografiaCompleta: [
      'Nacido en la vega granadina, absorbió el folclore andaluz, el cante jondo y las canciones populares de cuna de la mano de las criadas campesinas y de Manuel de Falla.',
      'En Madrid residió en la mítica Residencia de Estudiantes, trabando una amistad fraternal e irrepetible con Salvador Dalí, Luis Buñuel y los poetas de la Generación del 27.',
      'En 1928 alcanzó celebridad universal con el «Romancero gitano». Tras su estancia en Manhattan en 1929 concibió «Poeta en Nueva York», alarido surrealista contra la deshumanización del capitalismo financiero. En su dramaturgia legó la trilogía trágica inmortal: Bodas de sangre, Yerma y La casa de Bernarda Alba.',
      'Al estallar la Guerra Civil Española en agosto de 1936, fue vilmente fusilado por fuerzas golpistas fascistas en el camino entre Víznar y Alfacar, convirtiéndose en el símbolo imperecedero de la libertad creadora frente a la barbarie.'
    ],
    obrasCapitales: [
      {
        titulo: 'Romancero gitano',
        anio: 1928,
        genero: 'Poesía Lírica Popular y Mítica',
        descripcion: 'Dieciocho romances donde la luna, la sangre, el río y los gitanos andaluces alcanzan dimensión trágica eterna.'
      },
      {
        titulo: 'Llanto por Ignacio Sánchez Mejías',
        anio: 1935,
        genero: 'Elegía Trágica Mayor',
        descripcion: 'Considerada la cumbre de la elegía poética contemporánea en cuatro cantos inmortales.'
      },
      {
        titulo: 'La casa de Bernarda Alba',
        anio: 1936,
        genero: 'Drama Trágico de Mujeres',
        descripcion: 'La asfixia del luto impuesto, el deseo reprimido y la rebelión de Adela contra la tiranía materna.'
      }
    ],
    citasMemorables: [
      {
        cita: 'A las cinco de la tarde. Eran las cinco en punto de la tarde. Un niño trajo la blanca sábana a las cinco de la tarde...',
        obra: 'Llanto por Ignacio Sánchez Mejías (1935)',
        contexto: 'El estribillo elegíaco más estremecedor y perfecto de la poesía contemporánea.'
      },
      {
        cita: 'Verde que te quiero verde. Verde viento. Verdes ramas. El barco sobre la mar y el caballo en la montaña.',
        obra: 'Romance sonámbulo (1928)',
        contexto: 'Versos universales que condensan la magia hipnótica del duende lorquiano.'
      },
      {
        cita: 'En la bandera de la libertad bordé el amor más grande de mi vida.',
        obra: 'Mariana Pineda (1927)',
        contexto: 'Declaración de entrega cívica y pasión amorosa.'
      }
    ],
    audioSugerido: {
      titulo: 'Balada Lírica: Lorca y Alberti',
      compositor: 'Fonoteca LVT / Archivo Histórico',
      archivo: '/assets/audios/lorca_alberti_balada.mp3'
    },
    legadoPatrimonial: 'Lorca demostró que la palabra poética nace del temblor de la tierra y del dolor del pueblo, y que ningún pelotón de fusilamiento puede acallar el canto vivo.',
    datosCuriosos: [
      'Fue pianista talentoso y fundó el teatro universitario itinerante «La Barraca», recorriendo los pueblos más apartados de España en camión para representar a Lope y Calderón ante campesinos analfabetas.',
      'Pronunció en Buenos Aires en 1933 su célebre conferencia «Teoría y juego del duende», definiendo el misterio del arte que sube por las plantas de los pies.',
      'Su cuerpo permanece aún sin localizar en las fosas comunes del barranco de Víznar, integrado para siempre a la tierra andaluza que tanto cantó.'
    ],
    colorAcento: '#EF7B38',
    fondoDegradado: 'from-[#EF7B38]/20 via-[#B84E20]/10 to-[#FAF7F0]'
  },

  // 25. GABRIEL GARCÍA MÁRQUEZ
  {
    id: 'gabriel-garcia-marquez',
    nombre: 'Gabriel García Márquez («Gabo»)',
    tituloHonorifico: 'Premio Nobel de Literatura y Creador Inmortal de Macondo',
    anios: '1927 – 2014',
    nacimiento: '6 de marzo de 1927 · Aracataca, Magdalena, Colombia',
    fallecimiento: '17 de abril de 2014 · Ciudad de México',
    municipioOrigen: 'Aracataca, Magdalena',
    movimiento: 'Realismo Mágico Continental / Boom Latinoamericano',
    categoria: 'universales',
    bloqueCanon: 'universales',
    dossierSlug: '25_gabriel_garcia_marquez',
    tiempoLecturaMinutos: 48,
    badge: 'PREMIO NOBEL 1982',
    foto: '/assets/ilustres/gabriel_garcia_marquez.webp',
    fotoFallback: '/assets/ilustres/gabriel_garcia_marquez.jpg',
    semblanzaSintetica: 'El narrador más universal y deslumbrante de América Latina. Con Cien años de soledad fundó el territorio mítico de Macondo, transformando las leyendas orales del Caribe en un monumento planetario.',
    biografiaCompleta: [
      'Criado por sus abuelos maternos —el coronel Nicolás Márquez y doña Tranquilina Iguarán— en una casona de Aracataca poblada de fantasmas, recuerdos de las guerras civiles y cuentos sobrenaturales contados con rostro imperturbable.',
      'Periodista de raza en Bogotá y Cartagena, publicó en 1955 «La hojarasca» y «El coronel no tiene quien le escriba» (1961). Instalado en la Ciudad de México en los años sesenta, se encerró durante dieciocho meses en su casa de San Ángel para redactar su obra cumbre.',
      'En 1967, Editorial Sudamericana publicó en Buenos Aires «Cien años de soledad». El impacto fue un terremoto cultural planetario: traducida a más de cuarenta idiomas y con decenas de millones de ejemplares vendidos, consagró el Boom de la literatura hispanoamericana.',
      'Galardonado con el Premio Nobel de Literatura en 1982 con su discurso memorable «La soledad de América Latina», residió entrañablemente en México hasta su fallecimiento, considerándolo su segunda patria.'
    ],
    obrasCapitales: [
      {
        titulo: 'Cien años de soledad',
        anio: 1967,
        genero: 'Novela Canónica Universal',
        descripcion: 'La epopeya de siete generaciones de la familia Buendía en el pueblo mítico de Macondo.'
      },
      {
        titulo: 'El amor en los tiempos del cólera',
        anio: 1985,
        genero: 'Novela Romántica Mayor',
        descripcion: 'El amor indestructible y obstinado de Florentino Ariza y Fermina Daza a lo largo de cincuenta y un años y nueve meses.'
      },
      {
        titulo: 'Crónica de una muerte anunciada',
        anio: 1981,
        genero: 'Novela Policial y Periodística',
        descripcion: 'Reconstrucción geométrica y fatal del homicidio de Santiago Nasar a manos de los hermanos Vicario.'
      }
    ],
    citasMemorables: [
      {
        cita: 'Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo.',
        obra: 'Cien años de soledad (1967)',
        contexto: 'La frase de apertura más célebre y citada en la historia de la novela universal.'
      },
      {
        cita: 'Le rogó a Dios que le concediera al menos un instante para decirle cuánto lo había amado por encima de todas las dudas del mundo.',
        obra: 'El amor en los tiempos del cólera (1985)',
        contexto: 'Declaración final de la persistencia del amor maduro.'
      },
      {
        cita: 'La vida no es la que uno vivió, sino la que uno recuerda y cómo la recuerda para contarla.',
        obra: 'Vivir para contarla (2002)',
        contexto: 'Axioma testimonial sobre la memoria y la invención novelesca.'
      }
    ],
    legadoPatrimonial: 'García Márquez dio a América Latina una carta de identidad universal, demostrando que la realidad de nuestro continente supera cualquier fantasía concebible.',
    audioSugerido: {
      titulo: 'Guitarra Poética Tradicional',
      compositor: 'Acervo Cultural LVT',
      archivo: '/assets/audio/guitarra_poetica_suave.mp3'
    },
    datosCuriosos: [
      'Al enviar el manuscrito de Cien años de soledad por correo desde México a Buenos Aires, su esposa Mercedes Barcha empeñó la batidora y el secador de pelo para pagar el flete de la segunda mitad.',
      'Asistió a recibir el Premio Nobel en Estocolmo vestido con un tradicional liquiliqui blanco de lino caribeño, rompiendo con el protocolo del frac europeo.',
      'Tuvo una estrecha relación de admiración con Tabasco y con el poeta Carlos Pellicer, a quien consideraba uno de los patriarcas líricos de Mesoamérica.'
    ],
    colorAcento: '#EF7B38',
    fondoDegradado: 'from-[#EF7B38]/20 via-[#C5A059]/10 to-[#FAF7F0]'
  },

  // 26. GABRIELA MISTRAL
  {
    id: 'gabriela-mistral',
    nombre: 'Gabriela Mistral (Lucila Godoy Alcayaga)',
    tituloHonorifico: 'Premio Nobel de Literatura y Madre de la Tierra y la Infancia',
    anios: '1889 – 1957',
    nacimiento: '7 de abril de 1889 · Vicuña, Valle de Elqui, Chile',
    fallecimiento: '10 de enero de 1957 · Hempstead, Nueva York, EE. UU.',
    municipioOrigen: 'Vicuña / Valle de Elqui, Chile',
    movimiento: 'Modernismo Telúrico / Poesía de la Maternidad y el Duelo / Pedagogía Cívica',
    categoria: 'universales',
    bloqueCanon: 'universales',
    dossierSlug: '26_gabriela_mistral',
    tiempoLecturaMinutos: 30,
    badge: 'PRIMER NOBEL LATINOAMERICANO',
    foto: '/assets/ilustres/gabriela_mistral.webp',
    fotoFallback: '/assets/ilustres/gabriela_mistral.jpg',
    semblanzaSintetica: 'La primera mujer latinoamericana galardonada con el Premio Nobel de Literatura (1945). Poeta del dolor sagrado, educadora continental y defensora apasionada de los niños y los indígenas.',
    biografiaCompleta: [
      'Nacida en el árido y luminoso Valle de Elqui, creció en la humildad rural y se formó como maestra de escuela en las escuelas más apartadas de la Patagonia y el norte chileno.',
      'En 1914 obtuvo los Juegos Florales de Santiago con sus desgarradores «Sonetos de la muerte», nacidos del suicidio de su primer amor, Romelio Ureta. Su primer libro formal, «Desolación», vio la luz en Nueva York en 1922 gracias al Instituto de las Españas.',
      'En 1922 fue invitada a México por José Vasconcelos para colaborar en la histórica reforma educativa posrevolucionaria, fundando escuelas rurales y bibliotecas populares que transformaron el país.',
      'En 1945 la Academia Sueca le otorgó el Premio Nobel de Literatura «por su poesía lírica que, inspirada por poderosas emociones, ha hecho de su nombre un símbolo de las aspiraciones idealistas de todo el mundo hispanoamericano».'
    ],
    obrasCapitales: [
      {
        titulo: 'Desolación',
        anio: 1922,
        genero: 'Poesía del Duelo y la Mística',
        descripcion: 'Obra maestra que incluye los Sonetos de la muerte y poemas de la soledad patagónica.'
      },
      {
        titulo: 'Tala',
        anio: 1938,
        genero: 'Poesía Telúrica y Madurez',
        descripcion: 'Homenaje a su madre doña Petronila y canto a las materias primas del suelo americano: el pan, la sal, el agua.'
      },
      {
        titulo: 'Lagar',
        anio: 1954,
        genero: 'Lírica Trágica y Trascendencia',
        descripcion: 'Reflexión desgarradora sobre las guerras mundiales y la trágica pérdida de su sobrino Yin Yin.'
      }
    ],
    citasMemorables: [
      {
        cita: 'Del nicho helado en que los hombres te pusieron, te bajaré a la tierra humilde y soleada. Que he de dormirme en ella los hombres no supieron...',
        obra: 'Sonetos de la muerte (1914)',
        contexto: 'Primer verso del soneto fundacional que consagró su sitial lírico.'
      },
      {
        cita: 'Piececitos de niño, azulosos de frío, ¡cómo os ven y no os cubren, Dios mío!',
        obra: 'Piececitos (Ternura, 1924)',
        contexto: 'Clamor de ternura y justicia social por los niños desamparados.'
      },
      {
        cita: 'Donde haya un árbol que plantar, plántalo tú; donde haya un error que enmendar, enmiéndalo tú; donde haya un esfuerzo que todos esquivan, hazlo tú.',
        obra: 'El placer de servir (1923)',
        contexto: 'Manifiesto de ética pedagógica y generosidad humana.'
      }
    ],
    legadoPatrimonial: 'Mistral elevó la maternidad espiritual, el cuidado del desvalido y la lengua campesina de América a la cima del reconocimiento universal.',
    audioSugerido: {
      titulo: 'Gymnopédie No. 1',
      compositor: 'Erik Satie',
      archivo: '/assets/audio/satie_gymnopedie_1.mp3'
    },
    datosCuriosos: [
      'Al descubrir el talento adolescente del joven Neftalí Reyes (Pablo Neruda) en Temuco, le prestó generosamente sus propios libros de Tolstói y Dostoievski, impulsándolo a ser escritor.',
      'En México es considerada una heroína nacional; una escuela en cada rincón de la República lleva su nombre y miles de maestras entonan su «Oración de la maestra».',
      'Donó la totalidad de los derechos de autor de su libro «Tala» a los niños huérfanos de la Guerra Civil Española.'
    ],
    colorAcento: '#C5A059',
    fondoDegradado: 'from-[#C5A059]/20 via-[#EF7B38]/10 to-[#FAF7F0]'
  },

  // 27. CÉSAR VALLEJO
  {
    id: 'cesar-vallejo',
    nombre: 'César Abraham Vallejo Mendoza',
    tituloHonorifico: 'El Poeta del Dolor Humano y la Vanguardia Absoluta',
    anios: '1892 – 1938',
    nacimiento: '16 de marzo de 1892 · Santiago de Chuco, La Libertad, Perú',
    fallecimiento: '15 de abril de 1938 · París, Francia',
    municipioOrigen: 'Santiago de Chuco, Perú',
    movimiento: 'Vanguardismo Radical / Poesía Humanista y Social / Hermetismo Lírico',
    categoria: 'universales',
    bloqueCanon: 'universales',
    dossierSlug: '27_cesar_vallejo',
    tiempoLecturaMinutos: 30,
    badge: 'POETA DEL DOLOR UNIVERSAL',
    foto: '/assets/ilustres/cesar_vallejo.webp',
    fotoFallback: '/assets/ilustres/cesar_vallejo.jpg',
    semblanzaSintetica: 'La voz poética más desgarradoramente humana, solidaria y revolucionaria del idioma español. Con Trilce dinamitó la sintaxis tradicional y con Poemas humanos cantó al sufrimiento de los humildes.',
    biografiaCompleta: [
      'Nacido en un pueblo minero de los Andes peruanos, el menor de once hermanos en un hogar mestizo con raíces indígenas chimus y españolas, conoció desde niño la pobreza y el desamparo.',
      'En 1918 publicó en Lima «Los heraldos negros», donde su poema homónimo sacudió las letras con el golpe existencial de la desgracia. Encarcelado injustamente durante cuatro meses en Trujillo en 1920, concibió en su celda «Trilce» (1922), la ruptura estética y lingüística más radical de la vanguardia mundial.',
      'En 1923 emigró a París, donde vivió en condiciones de heroica indigencia material. Fascinado por el marxismo humanista, viajó a la Unión Soviética y se entregó en cuerpo y alma a defender la República Española en «España, aparta de mí este cáliz».',
      'Falleció en París en una tarde lluviosa de Viernes Santo en 1938, tal como lo había profetizado años antes en su inmortal soneto Piedra negra sobre una piedra blanca.'
    ],
    obrasCapitales: [
      {
        titulo: 'Los heraldos negros',
        anio: 1918,
        genero: 'Poesía del Dolor Indígena y Mestizo',
        descripcion: 'Contiene el poema fundacional sobre los golpes terribles que el destino asesta a la criatura humana.'
      },
      {
        titulo: 'Trilce',
        anio: 1922,
        genero: 'Vanguardia Absoluta y Neologismo',
        descripcion: 'Obra revolucionaria donde la gramática y el idioma se fracturan para expresar la prisión y la orfandad.'
      },
      {
        titulo: 'Poemas humanos',
        anio: 1939,
        genero: 'Poesía Social Mayor (Póstuma)',
        descripcion: 'Canto cósmico al trabajador, al hambriento y al hombre que sufre en su carne la injusticia del mundo.'
      }
    ],
    citasMemorables: [
      {
        cita: 'Hay golpes en la vida, tan fuertes... ¡Yo no sé! Golpes como del odio de Dios; como si ante ellos, la resaca de todo lo sufrido se empozara en el alma...',
        obra: 'Los heraldos negros (1918)',
        contexto: 'Apertura inmortal del poema de la compasión y el dolor universal.'
      },
      {
        cita: 'Me moriré en París con aguacero, un día del cual tengo ya el recuerdo. Me moriré en París —y no me corro— tal vez un jueves, como es hoy, de otoño.',
        obra: 'Piedra negra sobre una piedra blanca (1938)',
        contexto: 'Profecía fúnebre asombrosa cumplida con milimétrica precisión.'
      },
      {
        cita: '¡Sierra de mi corazón, España, aparta de mí este cáliz!',
        obra: 'España, aparta de mí este cáliz (1939)',
        contexto: 'Clamor de solidaridad con el pueblo español ensangrentado por la guerra.'
      }
    ],
    legadoPatrimonial: 'Vallejo refundó la lengua castellana desde el dolor de los vencidos, recordándonos que la verdadera poesía es un acto supremo de piedad y fraternidad humana.',
    audioSugerido: {
      titulo: 'Nocturno Op. 9',
      compositor: 'Frédéric Chopin',
      archivo: '/assets/audio/chopin_nocturne_op9.mp3'
    },
    datosCuriosos: [
      'El título de su libro «Trilce» es un neologismo inventado por él uniendo las palabras «triste» y «dulce».',
      'Thomas Merton y Allen Ginsberg consideraban a César Vallejo como el más grande poeta religioso y universal del siglo XX occidental.',
      'Su tumba en el cementerio de Montparnasse en París es un lugar de peregrinación constante donde viajeros de todo el mundo dejan lápices y cuadernos en señal de homenaje.'
    ],
    colorAcento: '#B84E20',
    fondoDegradado: 'from-[#B84E20]/20 via-[#EF7B38]/10 to-[#FAF7F0]'
  },

  // 28. JULIO CORTÁZAR
  {
    id: 'julio-cortazar',
    nombre: 'Julio Florencio Cortázar',
    tituloHonorifico: 'El Gran Cronopio y Arquitecto Revolucionario de Rayuela',
    anios: '1914 – 1984',
    nacimiento: '26 de agosto de 1914 · Ixelles, Bruselas, Bélgica',
    fallecimiento: '12 de febrero de 1984 · París, Francia',
    municipioOrigen: 'Banfield / Buenos Aires, Argentina',
    movimiento: 'Boom Latinoamericano / Surrealismo Lúdico / Cuento Fantástico Moderno',
    categoria: 'universales',
    bloqueCanon: 'universales',
    dossierSlug: '28_julio_cortazar',
    tiempoLecturaMinutos: 35,
    badge: 'GRAN CRONOPIO',
    foto: '/assets/ilustres/julio_cortazar.webp',
    fotoFallback: '/assets/ilustres/julio_cortazar.jpg',
    semblanzaSintetica: 'El renovador más libre, lúdico y deslumbrante de la novela y el cuento moderno en lengua castellana. Creador de Rayuela, Bestiario y las inolvidables Historias de cronopios y de famas.',
    biografiaCompleta: [
      'Nacido accidentalmente en Bruselas por misiones comerciales de su padre diplomático, creció en Banfield, en las afueras de Buenos Aires, enfermo de asma y sumergido en lecturas febriles de Julio Verne y Edgar Allan Poe.',
      'Trabajó como maestro rural en pueblos de la pampa y traductor público. En 1951, decepcionado por el panorama político, se trasladó a París, donde trabajó como traductor independiente para la UNESCO y donde viviría el resto de sus días.',
      'En 1951 publicó «Bestiario», con cuentos perfectos como Casa tomada y Carta a una señorita en París. En 1963 publicó «Rayuela», novela caleidoscópica que dinamitó la estructura lineal del libro tradicional proponiendo múltiples lecturas y fundando la contranovela moderna.',
      'Traductor insigne de la obra íntegra de Edgar Allan Poe al español, Cortázar combinó su amor por el jazz, el juego y la imaginación fantástica con un compromiso inquebrantable con las causas sociales de América Latina.'
    ],
    obrasCapitales: [
      {
        titulo: 'Rayuela',
        anio: 1963,
        genero: 'Contranovela Revolucionaria',
        descripcion: 'El deambular de Horacio Oliveira y La Maga por París y Buenos Aires; una obra que puede leerse en múltiples órdenes.'
      },
      {
        titulo: 'Bestiario',
        anio: 1951,
        genero: 'Cuentos Fantásticos Clásicos',
        descripcion: 'Ocho piezas magistrales donde lo insólito y lo siniestro irrumpen en la tranquila cotidianidad burguesa.'
      },
      {
        titulo: 'Historias de cronopios y de famas',
        anio: 1962,
        genero: 'Ficciones Breves y Lúdicas',
        descripcion: 'Miniaturas poéticas y satíricas sobre los cronopios (seres libres y desordenados) y los famas (ordenados y rígidos).'
      }
    ],
    citasMemorables: [
      {
        cita: '¿Encontraría a la Maga? Tantas veces me había bastado asomarme, viniendo por la rue de Seine, al arco que da al Quai de Conti, y ya la luz de ceniza y olivo que flota sobre el río me dejaba distinguir su silueta...',
        obra: 'Rayuela (Capítulo 1, 1963)',
        contexto: 'Comienzo legendario de la búsqueda del amor y el sentido en el París bohemio.'
      },
      {
        cita: 'Toco tu boca, con un dedo toco el borde de tu boca, voy dibujándola como si saliera de mi mano, como si por primera vez tu boca se entreabriera...',
        obra: 'Rayuela (Capítulo 7, 1963)',
        contexto: 'El pasaje lírico de amor sensual más recordado y leído de la narrativa del Boom.'
      },
      {
        cita: 'Los cronopios son esos seres que cuando cantan, las esperanzas se enternecen y los pájaros cambian de pluma.',
        obra: 'Historias de cronopios y de famas (1962)',
        contexto: 'Definición del espíritu libre y poético frente a la burocracia del mundo.'
      }
    ],
    legadoPatrimonial: 'Cortázar enseñó que la literatura es un juego sagrado y que la libertad absoluta del pensamiento es el único camino para derribar la estupidez del mundo.',
    audioSugerido: {
      titulo: 'Voz Original: Cortázar y los Ángeles',
      compositor: 'Fonoteca LVT / Archivo Histórico',
      archivo: '/assets/audios/cortazar_angeles.mp3'
    },
    datosCuriosos: [
      'Medía cerca de dos metros de altura y padecía acromegalia, lo que le confería una apariencia juvenil y angelical que conservó hasta sus últimos años.',
      'Su traducción de todos los cuentos de Edgar Allan Poe, realizada en 1953 para la Universidad de Puerto Rico, es celebrada universalmente como la mejor traducción literaria al español del siglo XX.',
      'Aficionado apasionado al boxeo y al jazz, escribió cuentos memorables inspirados en Charlie Parker («El perseguidor»).'
    ],
    colorAcento: '#EF7B38',
    fondoDegradado: 'from-[#EF7B38]/20 via-[#C5A059]/10 to-[#FAF7F0]'
  },

  // 29. PABLO NERUDA
  {
    id: 'pablo-neruda',
    nombre: 'Pablo Neruda (Neftalí Reyes Basoalto)',
    tituloHonorifico: 'Premio Nobel de Literatura y la Voz Cósmica del Canto General',
    anios: '1904 – 1973',
    nacimiento: '12 de julio de 1904 · Parral, Región del Maule, Chile',
    fallecimiento: '23 de septiembre de 1973 · Santiago de Chile',
    municipioOrigen: 'Temuco / Parral, Chile',
    movimiento: 'Vanguardismo / Épica Latinoamericana / Odas Elementales',
    categoria: 'universales',
    bloqueCanon: 'universales',
    dossierSlug: '29_pablo_neruda',
    tiempoLecturaMinutos: 30,
    badge: 'PREMIO NOBEL 1971',
    foto: '/assets/ilustres/pablo_neruda.webp',
    fotoFallback: '/assets/ilustres/pablo_neruda.jpg',
    semblanzaSintetica: 'El poeta más torrencial, prolífico y cósmico del continente americano. Creador de Veinte poemas de amor, Residencia en la tierra y el monumental Canto general.',
    biografiaCompleta: [
      'Nacido en Parral y criado en las selvas lluviosas de Temuco entre aserraderos y trenes de lastre, fue alentado en su juventud por Gabriela Mistral a consagrarse al verso.',
      'En 1924, a los diecinueve años, publicó «Veinte poemas de amor y una canción desesperada», el libro de lírica amorosa más leído, declamado y vendido en la historia de la lengua española.',
      'Durante sus destinos consulares en Rangún, Ceilán y Java concibió la angustia existencial de «Residencia en la tierra» (1935). Tras la Guerra Civil Española —donde lloró el asesinato de Lorca— y su exilio clandestino en la cordillera andina, forjó «Canto general» (1950), la epopeya totalizadora de la naturaleza e historia de América Latina.',
      'Galardonado con el Premio Nobel de Literatura en 1971, sus casas de Isla Negra, La Chascona y La Sebastiana son santuarios de la belleza marina y la memoria poética universal.'
    ],
    obrasCapitales: [
      {
        titulo: 'Veinte poemas de amor y una canción desesperada',
        anio: 1924,
        genero: 'Lírica Amorosa Universal',
        descripcion: 'El libro de poesía erótica y romántica más popular y recordado del idioma español.'
      },
      {
        titulo: 'Residencia en la tierra',
        anio: 1935,
        genero: 'Surrealismo Metafísico Mayor',
        descripcion: 'Desolación cósmica y angustia de la materia ante el paso inexorable del tiempo y la muerte.'
      },
      {
        titulo: 'Canto general',
        anio: 1950,
        genero: 'Épica Continental Latinoamericana',
        descripcion: 'Quince secciones y más de quince mil versos que narran la flora, la fauna, las luchas y los mártires de América.'
      }
    ],
    citasMemorables: [
      {
        cita: 'Puedo escribir los versos más tristes esta noche. Escribir, por ejemplo: «La noche está estrellada, y tiritan, azules, los astros, a lo lejos».',
        obra: 'Poema 20 (Veinte poemas de amor, 1924)',
        contexto: 'Elegía amorosa universal sobre la pérdida y la noche austral.'
      },
      {
        cita: 'Sube a nacer conmigo, hermano. Dame la mano desde la profunda zona de tu dolor diseminado...',
        obra: 'Alturas de Macchu Picchu (Canto general, 1950)',
        contexto: 'Invocación a los constructores anónimos de la fortaleza andina.'
      },
      {
        cita: 'Sucede que me canso de ser hombre. Sucede que entro en las sastrerías y en los cines marchito, impenetrable, como un cisne de fieltro...',
        obra: 'Walking around (Residencia en la tierra, 1935)',
        contexto: 'Feroz testimonio del hastío y la alienación urbana moderna.'
      }
    ],
    legadoPatrimonial: 'Neruda otorgó a la geografía y a los pueblos de América un cántico de proporciones titánicas, donde cada piedra, hoja o fruto adquiere dignidad eterna.',
    audioSugerido: {
      titulo: 'Voz Original: Neruda y las Manos',
      compositor: 'Fonoteca LVT / Archivo Histórico',
      archivo: '/assets/audios/neruda_sabines_manos.mp3'
    },
    datosCuriosos: [
      'Coleccionaba con fervor infantil mascarones de proa de barcos antiguos, caracolas gigantes, botellas de colores y juguetes de madera traídos de todos los continentes.',
      'Escribía siempre a mano con tinta verde en grandes cuadernos, pues consideraba que el verde era el color de la esperanza y de los bosques de Temuco.',
      'Su entierro en Santiago en septiembre de 1973, pocos días después del golpe militar de Pinochet, se convirtió en la primera gran manifestación cívica de resistencia popular en las calles chilenas.'
    ],
    colorAcento: '#0284C7',
    fondoDegradado: 'from-[#0284C7]/15 via-[#C5A059]/10 to-[#FAF7F0]'
  },

  // 30. EDGAR ALLAN POE
  {
    id: 'edgar-allan-poe',
    nombre: 'Edgar Allan Poe',
    tituloHonorifico: 'El Padre del Relato Policíaco y Renovador del Terror Psicológico',
    anios: '1809 – 1849',
    nacimiento: '19 de enero de 1809 · Boston, Massachusetts, EE. UU.',
    fallecimiento: '7 de octubre de 1849 · Washington College Hospital, Baltimore, EE. UU.',
    municipioOrigen: 'Richmond, Virginia / Baltimore, Maryland',
    movimiento: 'Romanticismo Oscuro / Cuento Gótico Psicológico / Raciocinio Deductivo',
    categoria: 'universales',
    bloqueCanon: 'universales',
    dossierSlug: '30_edgar_allan_poe',
    tiempoLecturaMinutos: 68,
    badge: 'PADRE DEL SUSPENSE',
    foto: '/assets/ilustres/edgar_allan_poe.webp',
    fotoFallback: '/assets/ilustres/edgar_allan_poe.jpg',
    semblanzaSintetica: 'Creador del cuento analítico de deducción lógica (Auguste Dupin) y maestro indiscutible del horror gótico y psicológico universal. Autor de El cuervo, El corazón delator y El gato negro.',
    biografiaCompleta: [
      'Hijo huérfano de actores ambulantes de teatro, fue acogido en Richmond por el comerciante John Allan, con quien mantuvo un amargo conflicto de voluntades por su devoción literaria.',
      'Tras un breve paso por el ejército y la academia de West Point, fue el primer gran autor estadounidense que intentó vivir exclusivamente de la pluma, ejerciendo un periodismo implacable y científico que le valió el apodo de «Tomahawk Man».',
      'En 1841 fundó oficialmente el género policíaco moderno con «Los crímenes de la calle Morgue», creando al Chevalier C. Auguste Dupin, precursor directo de Sherlock Holmes. En 1845 alcanzó celebridad universal con su poema «El cuervo».',
      'Traducido devotamente al francés por Baudelaire y Mallarmé, y al español por Julio Cortázar, Poe es el teórico de la arquitectura del efecto único y de la melancolía como nota suprema de la belleza poética.'
    ],
    obrasCapitales: [
      {
        titulo: 'El cuervo (The Raven)',
        anio: 1845,
        genero: 'Poema Fúnebre Mayor',
        descripcion: 'El luto insaciable por la amada Leonora frente al graznido implacable del ave del «Nunca más».'
      },
      {
        titulo: 'Cuentos extraordinarios (El corazón delator, El gato negro)',
        anio: 1843,
        genero: 'Cuentos de Horror Psicológico',
        descripcion: 'Traducidos magistralmente por Julio Cortázar; anatomía de la culpa, la perversidad y el latido sepultado.'
      },
      {
        titulo: 'Los crímenes de la calle Morgue',
        anio: 1941,
        genero: 'Cuento de Raciocinio Deductivo',
        descripcion: 'Nacimiento del detective moderno y la resolución analítica del enigma cerrado.'
      }
    ],
    citasMemorables: [
      {
        cita: '—Dime cuál es tu nombre señorial en las riberas plutónicas de la Noche. Y el Cuervo dijo: «Nunca más».',
        obra: 'El cuervo (1845)',
        contexto: 'El estribillo gótico más célebre de la literatura occidental.'
      },
      {
        cita: '¡Es verdad! Siempre he sido muy nervioso, terriblemente nervioso. ¿Pero por qué afirman ustedes que estoy loco?',
        obra: 'El corazón delator (1843, Trad. Julio Cortázar)',
        contexto: 'Apertura hipnótica de la confesión del homicidio del anciano del ojo de buitre.'
      },
      {
        cita: 'La muerte de una hermosa mujer es, sin disputa alguna, el tema más poético del mundo.',
        obra: 'Filosofía de la composición (1846)',
        contexto: 'Axioma estético sobre la génesis formal de la poesía pura.'
      }
    ],
    legadoPatrimonial: 'Poe enseñó a la modernidad occidental que el verdadero terror no viene de los fantasmas medievales, sino de los abismos insondables de la mente humana y la culpa.',
    audioSugerido: {
      titulo: 'Claro de Luna (Moonlight Sonata)',
      compositor: 'L.V. Beethoven',
      archivo: '/assets/audio/beethoven_moonlight_sonata.mp3'
    },
    datosCuriosos: [
      'En su ensayo cosmológico «Eureka» (1848) intuyó con un siglo de anticipación a la ciencia la teoría del Big Bang y la solución a la paradoja de Olbers sobre la oscuridad del cielo nocturno.',
      'Su muerte a los cuarenta años en Baltimore tras ser hallado delirante en una taberna en día de elecciones continúa siendo uno de los mayores enigmas de la historia literaria.',
      'Julio Cortázar consideraba la traducción de los cuentos de Poe como uno de los trabajos más felices y exigentes de toda su carrera de escritor.'
    ],
    colorAcento: '#191614',
    fondoDegradado: 'from-[#191614]/30 via-[#EF7B38]/15 to-[#FAF7F0]'
  }
];
