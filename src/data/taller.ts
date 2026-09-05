// src/data/taller.ts - Datos Maestros y Curriculares Oficiales del Taller Literario «Letras y Voces»
// Universidad Juárez Autónoma de Tabasco (UJAT) & Sociedad de Escritores Letras y Voces de Tabasco, A.C.
// Ciclo Semestral Continuo 2026 (24 Semanas / 48 Horas en Aula)

export interface SesionTaller {
  numero: number;
  semana: number;
  titulo: string;
  ejeTeorico: string;
  conceptosClave: string[];
  lecturasReferencia: {
    autor: string;
    obra: string;
    enfoque: string;
  }[];
  ejercicioAula: {
    duracion: string; // "30 min"
    titulo: string;
    instruccion: string;
    restricciones?: string;
  };
  clinicaTextos: {
    duracion: string; // "50 min"
    dinamica: string;
    criterioEvaluacion: string;
  };
}

export interface ModuloTaller {
  id: string;
  numeroRomano: string;
  nombre: string;
  subtitulo: string;
  semanas: string;
  horas: number;
  descripcion: string;
  productoEntregable: string;
  icono: string;
  sesiones: SesionTaller[];
}

export interface PilarPedagogico {
  titulo: string;
  descripcion: string;
  icono: string;
}

export interface ReglaClinica {
  numero: string;
  nombre: string;
  principio: string;
  descripcion: string;
}

export const DATOS_GENERALES_TALLER = {
  nombreOficial: "TALLER LITERARIO LVT-UJAT (GRATIS)",
  subtitulo: "Creación literaria, lectura comentada y clínica de textos en comunidad",
  lemaPedagogico: "Escribir se aprende leyendo con atención y reescribiendo con paciencia",
  coorganizan: [
    {
      nombre: "Sociedad de Escritores «Letras y Voces de Tabasco», A.C.",
      dependencias: "Mesa Directiva y Colegiado de Mediadores Literarios (Coordinación y docencia)"
    },
    {
      nombre: "Librería Universitaria UJAT",
      dependencias: "Universidad Juárez Autónoma de Tabasco (Espacio anfitrión y sede del taller)"
    }
  ],
  titularAcademico: {
    nombre: "Lic. Juan David Pérez Cabrera",
    grado: "Licenciado en Física",
    trayectoria: "Diplomado en Creación Literaria (12 años de trayectoria formativa)",
    cargo: "Presidente de la Sociedad de Escritores «Letras y Voces de Tabasco», A.C.",
    rolTaller: "Titular Académico y Mediador del Taller Literario",
    semblanza: "Licenciado en física y escritor con doce años de trayectoria en la mediación de talleres literarios y análisis del texto creativo. Como presidente de Letras y Voces de Tabasco, A.C., encabeza las sesiones sabatinas en la Librería Universitaria UJAT, integrando el pensamiento crítico, la estructura narrativa y la disciplina del oficio escritural en un ambiente colaborativo e intergeneracional."
  },
  coordinacionDocente: {
    colectivo: "Colegiado de Mediadores · Letras y Voces de Tabasco, A.C.",
    nombre: "Colegiado de Letras y Voces de Tabasco, A.C.",
    cargo: "Coordinación y Mediación del Taller Literario",
    enfoque: "El taller está coordinado por el cuerpo docente y mediadores de la Sociedad de Escritores «Letras y Voces de Tabasco, A.C.», con la participación de escritores y talleristas invitados. Nuestro trabajo se orienta al acompañamiento cercano, la técnica de la palabra y el respeto a la voz de cada participante.",
    cita: "«El taller es un espacio abierto para descubrir la propia voz, compartir la lectura y aprender el oficio de escribir en comunidad.»"
  },
  logistica: {
    sede: "Librería Universitaria UJAT",
    direccion: "Avenida 27 de Febrero No. 626, Colonia Centro, C.P. 86000, Villahermosa, Tabasco (a unos pasos del Instituto Juárez).",
    horario: "Sábados de 9:00 a 11:00 hrs",
    acceso: "Entrada libre y gratuita (asistencia abierta, sin costo ni requisitos de admisión previa)",
    cargaHoraria: "Ciclo de 24 semanas · 48 horas de trabajo en aula",
    contacto: {
      email: "contacto@letrasyvocesdetabasco.org",
      telefono: "2205889391",
      telefonoClean: "522205889391",
      mensajePredefinido: "Hola, deseo información del Taller Literario sabatino gratuito en la Librería Universitaria UJAT."
    }
  },
  dobleVia: {
    horizontal: {
      titulo: "Sesiones Abiertas e Independientes (Asistencia flexible)",
      descripcion: "Cada sábado funciona como un espacio completo de dos horas. Si asistes a una sola clase, realizas ejercicios de escritura y recibes retroalimentación directa sin necesidad de haber acudido a las anteriores."
    },
    vertical: {
      titulo: "Itinerario Formativo Completo (Para asistentes regulares)",
      descripcion: "Quienes participan de manera constante a lo largo de las 24 semanas recorren los cuatro géneros principales (narrativa, poesía, ensayo y crónica), integran un portafolio de textos y participan en la antología impresa."
    }
  },
  estructuraTriadica: [
    {
      bloque: "Bloque I: Diálogo y Lectura Guiada",
      duracion: "40 min",
      metodologia: "Revisión breve de conceptos fundamentales y lectura colectiva de autores representativos para detonar ideas de escritura."
    },
    {
      bloque: "Bloque II: Ejercicio de Escritura en el Aula",
      duracion: "30 min",
      metodologia: "Tiempo dedicado a redactar en la mesa de la librería a partir de pautas claras que estimulan la imaginación y la práctica inmediata."
    },
    {
      bloque: "Bloque III: Clínica de Textos y Retroalimentación",
      duracion: "50 min",
      metodologia: "Lectura voluntaria de los textos recién escritos en un ambiente de diálogo respetuoso, escucha atenta y recomendaciones puntuales para mejorar."
    }
  ],
  reglasClinica: [
    {
      numero: "I",
      nombre: "Escucha atenta del texto",
      principio: "El texto se defiende por sí mismo en la página.",
      descripcion: "El participante lee su escrito en voz alta y escucha los comentarios de los compañeros sin necesidad de dar justificaciones previas sobre sus intenciones."
    },
    {
      numero: "II",
      nombre: "Comentarios constructivos y con fundamento",
      principio: "Respeto mutuo y sugerencias claras.",
      descripcion: "Las observaciones se enfocan en la claridad, el ritmo, las imágenes y el vocabulario, evitando juicios de valor meramente personales."
    },
    {
      numero: "III",
      nombre: "Acompañamiento y reescritura",
      principio: "Escribir es un proceso de pulido constante.",
      descripcion: "El moderador resume las sugerencias principales y orienta sobre cómo trabajar una siguiente versión del texto para enriquecerlo."
    }
  ],
  dinamicaFormativa: [
    { 
      aspecto: "Práctica Semanal en Aula", 
      descripcion: "Ejercicios breves de escritura en cada sesión para ejercitar la soltura y la técnica literaria." 
    },
    { 
      aspecto: "Clínica y Diálogo Respetuoso", 
      descripcion: "Lectura compartida en mesa redonda, promoviendo el compañerismo y la escucha de diversas sensibilidades." 
    },
    { 
      aspecto: "Reescritura y Cuidado Editorial", 
      descripcion: "Acompañamiento en la corrección de los borradores para fortalecer el estilo de cada autor." 
    },
    { 
      aspecto: "Constancia Oficial y Antología", 
      descripcion: "Entrega de constancia avalada por UJAT y Letras y Voces de Tabasco, A.C., con inclusión de textos en la edición impresa." 
    }
  ],
  productosTangibles: [
    {
      nombre: "Dossier Individual de Obra",
      descripcion: "Portafolio profesional maquetado con textos rigurosamente corregidos, listo para postularse a convocatorias del SACPC/FONCA, PECDA Tabasco o premios literarios nacionales."
    },
    {
      nombre: "Antología Colectiva Impresa",
      descripcion: "Edición conmemorativa que reúne las mejores creaciones del taller, con cuidado editorial profesional, trámites legales y presentación en recital de clausura ante la comunidad tabasqueña."
    }
  ]
};

export const PILARES_PEDAGOGICOS: PilarPedagogico[] = [
  {
    titulo: "1. Análisis Formal y Lectura Crítica",
    descripcion: "Desmontaje analítico de obras maestras canónicas y contemporáneas. La lectura crítica es el catalizador indispensable para la asimilación consciente de los mecanismos internos de cada género.",
    icono: "book-open"
  },
  {
    titulo: "2. Técnicas de Composición y Disciplina",
    descripcion: "Calibración del ritmo verbal, administración del dato escondido y diseño de atmósferas sensoriales. Se fomenta la disciplina del borrador continuo, superando la autocomplacencia del primer impulso.",
    icono: "pen-tool"
  },
  {
    titulo: "3. Dinamización Horizontal y Tertulia",
    descripcion: "Mesa de trabajo abierta, cálida y fraterna en el espacio emblemático de la Librería Universitaria UJAT, libre de actitudes dogmáticas y propicia para la interacción intergeneracional.",
    icono: "users"
  },
  {
    titulo: "4. Clínica de Textos y Gestión Editorial",
    descripcion: "Metodología probada en la tradición latinoamericana de talleres (escuela de Abelardo Castillo y Liliana Heker), combinada con formación en corrección de estilo, maquetación y la cadena del libro.",
    icono: "feather"
  }
];

export const MODULOS_TALLER: ModuloTaller[] = [
  // ==========================================
  // MÓDULO I: NARRATIVA Y FICCIÓN
  // ==========================================
  {
    id: "modulo-1-narrativa",
    numeroRomano: "I",
    nombre: "Prosa Narrativa y Ficción Contemporánea",
    subtitulo: "Voz narrativa, tensión dramática, personajes, atmósfera, diálogo y condensación",
    semanas: "Semanas 1 a 6",
    horas: 12,
    descripcion: "Establece los cimientos técnicos de la arquitectura del relato: verosimilitud del narrador, economía de medios expresivos, manejo de la elipsis y diseño de mundos de ficción consistentes.",
    productoEntregable: "Cuento breve pulido o corpus de 3 microrrelatos corregidos.",
    icono: "book",
    sesiones: [
      {
        numero: 1,
        semana: 1,
        titulo: "El Umbral de la Escritura y la Voz Narrativa",
        ejeTeorico: "La escritura como oficio y aprendizaje técnico frente al mito de la inspiración. Tipología del narrador: focalización cero, interna y externa; narradores omniscientes, equiscientes, testigos y deficientes. Distancia narrativa y pacto ficcional.",
        conceptosClave: ["Focalización", "Pacto ficcional", "Voz narrativa", "Distancia dramática"],
        lecturasReferencia: [
          { autor: "Horacio Quiroga", obra: "Decálogo del perfecto cuentista", enfoque: "Leyes inmutables de la tensión y economía narrativa." },
          { autor: "Juan Rulfo", obra: "Luvina", enfoque: "Análisis de la textura del monólogo y la voz fantasmal." }
        ],
        ejercicioAula: {
          duracion: "30 min",
          titulo: "El doble lente focal",
          instruccion: "Elaborar un relato breve (máx. 300 palabras) a partir de un suceso cotidiano, narrado secuencialmente desde dos perspectivas contrapuestas: primero en primera persona testimonial y luego en tercera persona distante y fría.",
          restricciones: "Prohibido juzgar moralmente los hechos en la versión en tercera persona."
        },
        clinicaTextos: {
          duracion: "50 min",
          dinamica: "Lectura en voz alta en la gran mesa. Análisis grupal para evaluar si la voz elegida resulta verosímil y si sostiene la distancia focal sin fisuras sintácticas.",
          criterioEvaluacion: "Verosimilitud de la voz y consistencia del punto de vista."
        }
      },
      {
        numero: 2,
        semana: 2,
        titulo: "La Estructura del Relato y la Unidad de Acción",
        ejeTeorico: "La arquitectura del cuento: detonante, nudo, clímax y desenlace. Criterios de tensión e intensidad según Julio Cortázar (el cuento como nocaut frente a la novela por puntos). La teoría del iceberg de Hemingway: el arte de la elipsis y la administración del dato escondido.",
        conceptosClave: ["Teoría del iceberg", "Elipsis", "Unidad de efecto", "Dato escondido"],
        lecturasReferencia: [
          { autor: "Julio Cortázar", obra: "Algunos aspectos del cuento", enfoque: "La noción de esfera perfecta y tensión centrípeta." },
          { autor: "Ernest Hemingway", obra: "Los asesinos", enfoque: "La administración magistral de lo que nunca se nombra." }
        ],
        ejercicioAula: {
          duracion: "30 min",
          titulo: "El iceberg visible",
          instruccion: "Redacción del primer párrafo de un relato de misterio o suspenso donde acontezca un suceso perturbador, ocultando deliberadamente la causa primordial para detonar intriga inmediata.",
          restricciones: "No revelar el móvil del conflicto; sugerirlo únicamente por indicios materiales."
        },
        clinicaTextos: {
          duracion: "50 min",
          dinamica: "Discusión grupal sobre la fuerza de enganche inicial, la economía de medios y la poda de explicaciones redundantes.",
          criterioEvaluacion: "Capacidad de sugestión y tensión en las primeras diez líneas."
        }
      },
      {
        numero: 3,
        semana: 3,
        titulo: "Arquetipos y Diseño Tridimensional de Personajes",
        ejeTeorico: "Construcción de personajes: dimensiones física, psicológica y sociológica (matriz de Lajos Egri). Contraposición de valores, contradicciones internas y motivación dramática. Personajes planos vs. complejos. La técnica de mostrar sin declarar (Show, don’t tell).",
        conceptosClave: ["Tridimensionalidad", "Show don't tell", "Motivación oculta", "Grieta moral"],
        lecturasReferencia: [
          { autor: "Antón Chéjov", obra: "La dama del perrito", enfoque: "La transformación interior a través de gestos mínimos." },
          { autor: "Raymond Carver", obra: "De qué hablamos cuando hablamos de amor", enfoque: "La vulnerabilidad expuesta en la charla ordinaria." }
        ],
        ejercicioAula: {
          duracion: "30 min",
          titulo: "Confesión indirecta",
          instruccion: "Redacción de un monólogo dramático o confesión de una página donde el personaje revele una grieta moral inconfesable sin admitirla directamente, sólo a través de sus manías y justificaciones.",
          restricciones: "Prohibido nombrarle nombre al defecto moral; debe deducirse por sus actos."
        },
        clinicaTextos: {
          duracion: "50 min",
          dinamica: "Evaluación cruzada por parejas: identificar qué rasgos revelan la psicología profunda y cuáles resultan acartonados o melodramáticos.",
          criterioEvaluacion: "Densidad psicológica y ausencia de clichés valorativos."
        }
      },
      {
        numero: 4,
        semana: 4,
        titulo: "Creación de Atmósferas y Espacio Narrativo",
        ejeTeorico: "El espacio narrativo como agente dramático y proyección simbólica del estado emocional, no como mero decorado. Estimulación sensorial integral: texturas táctiles, olores, temperaturas tropicales, humedad y acústica del entorno.",
        conceptosClave: ["Atmósfera dramática", "Espacio simbólico", "Sensorialidad", "Topofilia / Topofobia"],
        lecturasReferencia: [
          { autor: "Amparo Dávila", obra: "El huésped", enfoque: "La claustrofobia doméstica como pesadilla psíquica." },
          { autor: "Juan Carlos Onetti", obra: "Un sueño realizado", enfoque: "La decadencia ambiental como correlato del fracaso." }
        ],
        ejercicioAula: {
          duracion: "30 min",
          titulo: "Habitación sofocante",
          instruccion: "Descripción de un espacio sofocante o amenazante prescindiendo de adjetivos abstractos valorativos (prohibido usar 'misterioso', 'tenebroso', 'triste'), recurriendo únicamente a sombras, humedad, objetos y resonancias acústicas.",
          restricciones: "Cero adjetivos abstractos; únicamente datos sensoriales concretos."
        },
        clinicaTextos: {
          duracion: "50 min",
          dinamica: "Lectura colectiva. El grupo marcará cualquier abstracción o cliché para sustituirlo de inmediato por sensaciones físicas palpables.",
          criterioEvaluacion: "Eficacia sensorial y erradicación de adjetivación vacía."
        }
      },
      {
        numero: 5,
        semana: 5,
        titulo: "El Diálogo y las Capas de Subtexto",
        ejeTeorico: "Funciones del diálogo dramático: aceleración rítmica, caracterización verosímil y avance de la trama. Estilos directo, indirecto e indirecto libre. El subtexto narrativo: cómo hacer que los personajes hablen de lo trivial mientras resuelven un conflicto existencial soterrado.",
        conceptosClave: ["Subtexto", "Diálogo dramático", "Fraseo orgánico", "Silencio elocuente"],
        lecturasReferencia: [
          { autor: "Ernest Hemingway", obra: "Colinas como elefantes blancos", enfoque: "La cumbre del subtexto en el diálogo moderno." },
          { autor: "Carmen Boullosa", obra: "Selección narrativa y teatral", enfoque: "Polifonía y naturalidad en el contrapunto verbal." }
        ],
        ejercicioAula: {
          duracion: "30 min",
          titulo: "La ruptura en el café",
          instruccion: "Escribir una escena dialógica entre dos personas que toman café en la librería y deciden terminar un vínculo de años mientras fingen discutir sobre el clima o el precio de un libro.",
          restricciones: "No se permite mencionar el conflicto de fondo de forma explícita."
        },
        clinicaTextos: {
          duracion: "50 min",
          dinamica: "Lectura dramatizada a dos voces: escuchar la cadencia natural del fraseo, podar acotaciones innecesarias y verificar la tensión del subtexto.",
          criterioEvaluacion: "Tensión dramática bajo la superficie de la charla cotidiana."
        }
      },
      {
        numero: 6,
        semana: 6,
        titulo: "El Microrrelato y la Condensación Dramática",
        ejeTeorico: "La poética de la extrema brevedad: economía de lenguaje, resignificación del título, intertextualidad, elipsis radical y giro de tuerca final. El lector como cocreador activo del sentido.",
        conceptosClave: ["Microrrelato", "Elipsis radical", "Título polisémico", "Giro de tuerca"],
        lecturasReferencia: [
          { autor: "Augusto Monterroso", obra: "La oveja negra y demás fábulas", enfoque: "La ironía sutil y la brevedad fulgurante." },
          { autor: "Edmundo Valadés", obra: "La muerte tiene permiso", enfoque: "La condensación dramática de la tragedia social." }
        ],
        ejercicioAula: {
          duracion: "30 min",
          titulo: "El bisturí de la brevedad",
          instruccion: "Composición de dos microrrelatos de máx. 80 palabras cada uno, inspirados en la inversión irónica de una fábula clásica o en un suceso insólito del entorno tabasqueño.",
          restricciones: "Extensión máxima estricta de 80 palabras por pieza."
        },
        clinicaTextos: {
          duracion: "50 min",
          dinamica: "Poda Quirúrgica Colectiva: someter cada microcuento a la amputación del 30% de sus palabras sin perder impacto dramático ni sentido. Entrega del producto final del Módulo I.",
          criterioEvaluacion: "Densidad, fuerza del desenlace y precisión en la supresión de sobrantes."
        }
      }
    ]
  },

  // ==========================================
  // MÓDULO II: POESÍA Y LÍRICA
  // ==========================================
  {
    id: "modulo-2-poesia",
    numeroRomano: "II",
    nombre: "Lírica, Poética y Arqueología del Lenguaje",
    subtitulo: "Ritmo, respiración, tropos, sujeto lírico, poesía de la experiencia, prosa poética y ebanistería del verso",
    semanas: "Semanas 7 a 12",
    horas: 12,
    descripcion: "Desautomatiza la relación utilitaria con el idioma cotidiano, afinando la percepción rítmica, la capacidad metafórica y la orfebrería verbal.",
    productoEntregable: "Muestrario de poesía (Plaquette de 3 a 5 poemas rigurosamente intervenidos).",
    icono: "feather",
    sesiones: [
      {
        numero: 7,
        semana: 7,
        titulo: "Fundamentos de la Poética: Ritmo, Imagen y Verso",
        ejeTeorico: "Suspensión de la función referencial y utilitaria de la lengua. El ritmo como latido vertebrador del poema (cadencia, acentos, pausas versales e interversales). Métrica silábico-acentual frente al verso libre contemporáneo.",
        conceptosClave: ["Ritmo poético", "Verso libre", "Pausa versal", "Musicalidad interior"],
        lecturasReferencia: [
          { autor: "Octavio Paz", obra: "El arco y la lira (El ritmo y el verso)", enfoque: "El poema como máquina rítmica que recrea el tiempo." },
          { autor: "Rosario Castellanos", obra: "Poesía no eres tú (selección)", enfoque: "Claridad formal, despojamiento y rigor expresivo." }
        ],
        ejercicioAula: {
          duracion: "30 min",
          titulo: "Metamorfosis del prosaísmo",
          instruccion: "Tomar un fragmento de noticia o párrafo cotidiano y transfigurarlo en un poema de 10 a 14 versos libres, donde cada corte responda a la respiración y a la tensión anímica.",
          restricciones: "Prohibido rimar de forma consonante obligada."
        },
        clinicaTextos: {
          duracion: "50 min",
          dinamica: "Lectura sonora con ojos cerrados en la mesa de taller para calibrar caídas de ritmo, tropiezos cacofónicos o versos quebrados sin necesidad.",
          criterioEvaluacion: "Respiración orgánica y tensión rítmica del corte de verso."
        }
      },
      {
        numero: 8,
        semana: 8,
        titulo: "Tropos, Figuras Retóricas y Desplazamiento Semántico",
        ejeTeorico: "La metáfora como instrumento ontológico de conocimiento y no como simple adorno ornamental. Metonimia, sinestesia, oxímoron e hipérbole. Caza implacable y erradicación del lugar común lírico.",
        conceptosClave: ["Metáfora ontológica", "Sinestesia", "Oxímoron", "Caza de clichés"],
        lecturasReferencia: [
          { autor: "Jaime Sabines", obra: "Horal y Tarumba", enfoque: "La crudeza verbal y la emoción sin afeites." },
          { autor: "Xavier Villaurrutia", obra: "Nostalgia de la muerte", enfoque: "El juego de reflejos, sombras y la noche sonora." }
        ],
        ejercicioAula: {
          duracion: "30 min",
          titulo: "El inventario prohibido",
          instruccion: "Escribir un poema de 12 versos sobre una pérdida o una obsesión con una restricción infranqueable: vetadas las palabras abstractas ('dolor', 'olvido', 'alma', 'corazón', 'soledad') forzando asociaciones sensoriales insólitas.",
          restricciones: "Veto absoluto a vocablos sentimentales trillados."
        },
        clinicaTextos: {
          duracion: "50 min",
          dinamica: "Ronda de caza de clichés: sustitución colectiva en vivo de cualquier lugar común por imágenes frescas, concretas y desafiantes.",
          criterioEvaluacion: "Fuerza y originalidad en el desplazamiento semántico."
        }
      },
      {
        numero: 9,
        semana: 9,
        titulo: "La Voz Poética y el Sujeto Lírico",
        ejeTeorico: "Distinción crucial entre el autor empírico (la persona civil) y el sujeto lírico (la voz estética construida en el texto). El poema de personaje, la máscara poética (persona) y el monólogo dramático en verso.",
        conceptosClave: ["Sujeto lírico", "Máscara poética", "Persona", "Monólogo lírico"],
        lecturasReferencia: [
          { autor: "Blanca Varela", obra: "Canto villano", enfoque: "La voz descarnada, sobria y despojada de complacencia." },
          { autor: "José Emilio Pacheco", obra: "No me preguntes cómo pasa el tiempo", enfoque: "La ironía reflexiva y la mirada histórica." }
        ],
        ejercicioAula: {
          duracion: "30 min",
          titulo: "Voz de lo inanimado",
          instruccion: "Composición de un poema asumiendo la voz en primera persona de un elemento no humano (un río contaminado, una ceiba milenaria, un mueble abandonado) o de una figura histórica en su esfera íntima.",
          restricciones: "Mantener el punto de vista del objeto sin caer en moralejas infantiles."
        },
        clinicaTextos: {
          duracion: "50 min",
          dinamica: "Evaluación de la coherencia tonal de la máscara y la contención ante el sentimentalismo desbordado.",
          criterioEvaluacion: "Consistencia tonal y verosimilitud de la máscara poética."
        }
      },
      {
        numero: 10,
        semana: 10,
        titulo: "Poesía de la Experiencia e Itinerarios Urbanos",
        ejeTeorico: "La poética de la inmanencia y lo cotidiano: cómo elevar a rango artístico el paisaje urbano, el bochorno del trópico, el transporte público, el mercado y los objetos domésticos. La mirada del flâneur contemporáneo.",
        conceptosClave: ["Poesía urbana", "Flâneur", "Inmanencia", "Poemínimos"],
        lecturasReferencia: [
          { autor: "Eduardo Lizalde", obra: "El tigre en la casa", enfoque: "La cólera poética y la ferocidad en el ámbito íntimo." },
          { autor: "Efraín Huerta", obra: "Poemas urbanos y Poemínimos", enfoque: "El humor corrosivo y la estampa callejera." }
        ],
        ejercicioAula: {
          duracion: "30 min",
          titulo: "Estampa de asfalto y río",
          instruccion: "Escribir una serie de 3 poemínimos o una estampa poética inspirada en un rincón concreto de Villahermosa (el Mercado Pino Suárez, el Parque Tomás Garrido o el malecón del Grijalva).",
          restricciones: "Evitar el folclorismo superficial; capturar el choque de la modernidad."
        },
        clinicaTextos: {
          duracion: "50 min",
          dinamica: "Revisión de la agudeza visual y la capacidad del texto para tensionar la realidad inmediata sin caer en estampas de postal turística.",
          criterioEvaluacion: "Originalidad del ángulo visual e incisividad verbal."
        }
      },
      {
        numero: 11,
        semana: 11,
        titulo: "Hibridación Lírica: La Prosa Poética",
        ejeTeorico: "El poema en prosa como territorio de frontera: cómo sostener la condensación, la intensidad metafórica y la musicalidad interior sin recurrir a los saltos de línea.",
        conceptosClave: ["Poema en prosa", "Hibridación", "Densidad metafórica", "Cadencia interna"],
        lecturasReferencia: [
          { autor: "Charles Baudelaire", obra: "Pequeños poemas en prosa (El spleen de París)", enfoque: "El nacimiento de la modernidad lírica en prosa." },
          { autor: "Oliverio Girondo", obra: "En la masmédula", enfoque: "La audacia rítmica y la invención léxica." },
          { autor: "Pura López Colomé", obra: "Textos líricos selectos", enfoque: "La tensión mística y la concentración verbal." }
        ],
        ejercicioAula: {
          duracion: "30 min",
          titulo: "El bloque lírico",
          instruccion: "Redacción de un poema en prosa de una cuartilla centrado en una experiencia táctil de la infancia o en un sueño recurrente, cuidando que la cadencia interna sostenga la lectura.",
          restricciones: "No redactar un cuento; debe primar la imagen y la vibración lírica sobre la anécdota."
        },
        clinicaTextos: {
          duracion: "50 min",
          dinamica: "Examen de la densidad poética para asegurar que el texto no deslice hacia una narración convencional.",
          criterioEvaluacion: "Intensidad lírica interna y arquitectura del párrafo."
        }
      },
      {
        numero: 12,
        semana: 12,
        titulo: "Edición, Corte de Verso y Depuración Poética",
        ejeTeorico: "La arquitectura visual del poema en el soporte de la página: el uso expresivo de los blancos tipográficos, encabalgamientos suaves y abruptos, y la carpintería final. La poesía como el arte de suprimir lo superfluo.",
        conceptosClave: ["Encabalgamiento", "Espacio blanco", "Depuración", "Carpintería del verso"],
        lecturasReferencia: [
          { autor: "Jorge Luis Borges", obra: "Siete noches (La poesía)", enfoque: "La emoción estética de la palabra precisa." },
          { autor: "T. S. Eliot", obra: "El oficio de la poesía", enfoque: "El correlato objetivo y la tradición activa." }
        ],
        ejercicioAula: {
          duracion: "30 min",
          titulo: "Ebanistería de versos",
          instruccion: "Taller Intensivo de Ebanistería: tomar los 3 mejores poemas desarrollados a lo largo del módulo y someterlos a una poda del 40% de sus palabras, redistribuyendo estrofas en la página.",
          restricciones: "Reducción mínima del 40% de volumen de texto."
        },
        clinicaTextos: {
          duracion: "50 min",
          dinamica: "Conformación, revisión y entrega del Muestrario Poético (Plaquette) de cada tallerista para el archivo del taller.",
          criterioEvaluacion: "Pulcritud en la poda y solidez del conjunto lírico entregable."
        }
      }
    ]
  },

  // ==========================================
  // MÓDULO III: ENSAYO Y PENSAMIENTO
  // ==========================================
  {
    id: "modulo-3-ensayo",
    numeroRomano: "III",
    nombre: "El Ensayo Literario y la Filosofía de la Prosa",
    subtitulo: "Pensar por escrito, erudición lúdica, ironía, ensayo sobre lo ínfimo, memoria y subjetividad",
    semanas: "Semanas 13 a 18",
    horas: 12,
    descripcion: "Conecta la creación literaria con la reflexión ensayística no dogmática, la duda metódica, la digresión inteligente y la memoria personal como lente universal.",
    productoEntregable: "Ensayo breve de carácter personal o reflexivo (3 a 5 cuartillas pulidas).",
    icono: "feather",
    sesiones: [
      {
        numero: 13,
        semana: 13,
        titulo: "Anatomía del Ensayo Literario: Pensar por Escrito",
        ejeTeorico: "El ensayo como frontera viva entre literatura, filosofía y autobiografía. La lección de Michel de Montaigne: el ensayo no como dogma académico o tratado erudito, sino como tentativa, pesaje de incertidumbres y libre ejercicio del juicio personal.",
        conceptosClave: ["Pesaje de dudas", "Tentativa", "Ensayo montaigniano", "Juicio crítico"],
        lecturasReferencia: [
          { autor: "Michel de Montaigne", obra: "De los olores y Ensayos (selección)", enfoque: "El nacimiento del ensayo moderno como autoindagación." },
          { autor: "Alfonso Reyes", obra: "El deslinde y Las jitanjáforas", enfoque: "El ensayo como el centauro de los géneros." }
        ],
        ejercicioAula: {
          duracion: "30 min",
          titulo: "Elogio de la contradicción",
          instruccion: "Elegir una paradoja o manía cotidiana ('la tiranía de la puntualidad', 'el placer de extraviar objetos') y elaborar un mapa de ideas cruzadas con tesis abierta para un ensayo de 3 páginas.",
          restricciones: "Evitar el tono doctoral; privilegiar la curiosidad y la duda."
        },
        clinicaTextos: {
          duracion: "50 min",
          dinamica: "Presentación oral del esquema. Retroalimentación colectiva sobre la originalidad de la mirada y el tono ensayístico.",
          criterioEvaluacion: "Pertinencia del cuestionamiento y frescura en el enfoque."
        }
      },
      {
        numero: 14,
        semana: 14,
        titulo: "La Voz Ensayística y la Erudición Lúdica",
        ejeTeorico: "Cómo incorporar lecturas, citas y referencias científicas o históricas sin caer en la pedantería árida del paper universitario. El arte de la digresión con brújula y la complicidad festiva con el lector.",
        conceptosClave: ["Erudición lúdica", "Digresión controlada", "Complicidad", "Tono conversacional"],
        lecturasReferencia: [
          { autor: "Hugo Hiriart", obra: "El arte de la dedicatoria", enfoque: "El humor inteligente y el paseo conceptual libre." },
          { autor: "Gabriel Zaid", obra: "Los demasiados libros / Este era un gato", enfoque: "Precisión económica del lenguaje y lucidez ensayística." }
        ],
        ejercicioAula: {
          duracion: "30 min",
          titulo: "El puente insólito",
          instruccion: "Redacción de dos cuartillas argumentativas donde se enlace una referencia cultural o científica rigurosa con una anécdota personal cómica o desconcertante.",
          restricciones: "El nexo entre la teoría y la vivencia debe ser orgánico, no forzado."
        },
        clinicaTextos: {
          duracion: "50 min",
          dinamica: "Revisión de la fluidez sintáctica y la agilidad de los puentes lógicos entre la anécdota y la reflexión conceptual.",
          criterioEvaluacion: "Gracia expresiva y solidez de los puentes argumentativos."
        }
      },
      {
        numero: 15,
        semana: 15,
        titulo: "La Mirada Crítica y la Desmitificación del Dogma",
        ejeTeorico: "El ensayo como ariete contra el sentido común y las verdades aceptadas sin examen. Empleo de la ironía, el escepticismo pedagógico, la provocación dialéctica y el humor sutil.",
        conceptosClave: ["Desmitificación", "Ironía dialéctica", "Escepticismo", "Provocación elegante"],
        lecturasReferencia: [
          { autor: "G. K. Chesterton", obra: "Correr tras el propio sombrero", enfoque: "La paradoja luminosa que revela lo extraordinario en lo ordinario." },
          { autor: "Wisława Szymborska", obra: "Lecturas no obligatorias", enfoque: "La modestia reflexiva y el asombro filosófico cotidiano." }
        ],
        ejercicioAula: {
          duracion: "30 min",
          titulo: "La defensa de lo indefendible",
          instruccion: "Escritura de un alegato apasionado pero rigurosamente argumentado que defienda una postura impopular o refute un dogma aceptado por la mayoría (ej. 'las bondades de la pereza' o 'el engaño del éxito').",
          restricciones: "Prohibido el tono panfletario o el insulto; persuasión con elegancia retórica."
        },
        clinicaTextos: {
          duracion: "50 min",
          dinamica: "Debate y análisis de la contundencia lógica de los argumentos y la sutileza de la ironía.",
          criterioEvaluacion: "Fuerza argumental y destreza en el manejo de la ironía."
        }
      },
      {
        numero: 16,
        semana: 16,
        titulo: "La Orfebrería de la Prosa: El Ensayo sobre lo Ínfimo",
        ejeTeorico: "El 'ensayo-objeto': asombro ante lo minúsculo o lo aparentemente insignificante. Cómo derivar reflexiones antropológicas, estéticas o metafísicas profundas a partir de objetos ordinarios.",
        conceptosClave: ["Ensayo-objeto", "Filosofía de lo cotidiano", "Orfebrería verbal", "Asombro"],
        lecturasReferencia: [
          { autor: "Luigi Amara", obra: "La promiscuidad de los encendedores / Los elásticos", enfoque: "La microfísica ensayística de las cosas comunes." },
          { autor: "Alma Guillermoprieto", obra: "Harinas", enfoque: "La textura de la materia ligada a la identidad cultural." }
        ],
        ejercicioAula: {
          duracion: "30 min",
          titulo: "Biografía secreta de un objeto",
          instruccion: "Escribir una pieza de 400 palabras explorando la biografía secreta y las resonancias existenciales de un objeto de bolsillo (unas llaves viejas, una moneda falsa, un paraguas oxidado).",
          restricciones: "No describir solo físicamente el objeto; interrogar su significado simbólico."
        },
        clinicaTextos: {
          duracion: "50 min",
          dinamica: "Revisión grupal del vuelo metafórico y la riqueza de vocabulario aplicada a la descripción del objeto.",
          criterioEvaluacion: "Profundidad conceptual a partir de un detonante mínimo."
        }
      },
      {
        numero: 17,
        semana: 17,
        titulo: "El Ensayo Personal, la Memoria y la Subjetividad",
        ejeTeorico: "El 'yo' como instrumento de exploración colectiva y no como exhibicionismo narcisista. Gestión del pudor, la vulnerabilidad y la frontera entre la catarsis quejumbrosa y la lucidez ensayística.",
        conceptosClave: ["Ensayo personal", "Vulnerabilidad", "Pudor estético", "Lucidez autobiográfica"],
        lecturasReferencia: [
          { autor: "Laura Sofía Rivero", obra: "Dios tiene tripas", enfoque: "El humor lúcido ante lo visceral, el cuerpo y el bochorno humano." },
          { autor: "Vivian Abenshushan", obra: "Contra el ensayista sin estilo", enfoque: "La desobediencia formal y la escritura como resistencia vital." }
        ],
        ejercicioAula: {
          duracion: "30 min",
          titulo: "El error fundador",
          instruccion: "Escribir un texto que parta de un error o ridículo personal vivido por el autor, para elevarlo a reflexión compartida sobre una flaqueza o dilema ético contemporáneo.",
          restricciones: "Superar el desahogo íntimo; la anécdota debe iluminar una verdad universal."
        },
        clinicaTextos: {
          duracion: "50 min",
          dinamica: "Clínica de contención expresiva: verificar que la voz personal comunique una problemática colectiva y no un lamento aislado.",
          criterioEvaluacion: "Equilibrio entre intimidad, autocrítica y resonancia universal."
        }
      },
      {
        numero: 18,
        semana: 18,
        titulo: "Estructuración, Pulido y Cierre del Ensayo",
        ejeTeorico: "Arquitectura del ensayo: modulación del tono, transiciones orgánicas entre párrafos y construcción de desenlaces abiertos que dejen preguntas resonando en la mente del lector.",
        conceptosClave: ["Arquitectura ensayística", "Transiciones", "Final abierto", "Pulido estilístico"],
        lecturasReferencia: [
          { autor: "Liliana Weinberg", obra: "El ensayo, entre el paraíso y el infierno", enfoque: "Teoría y estética del pensar ensayístico latinoamericano." }
        ],
        ejercicioAula: {
          duracion: "30 min",
          titulo: "Ensamblaje del ensayo",
          instruccion: "Reescritura completa y estructuración en limpio del ensayo desarrollado a lo largo de las 6 semanas (extensión final: 3 a 5 cuartillas).",
          restricciones: "Asegurar que cada párrafo contenga un núcleo temático que dialogue con el siguiente."
        },
        clinicaTextos: {
          duracion: "50 min",
          dinamica: "Evaluación con rúbrica ensayística y entrega formal de la pieza terminada del Módulo III.",
          criterioEvaluacion: "Coherencia argumental, cadencia de prosa y pertinencia de la conclusión."
        }
      }
    ]
  },

  // ==========================================
  // MÓDULO IV: CRÓNICA Y EDICIÓN
  // ==========================================
  {
    id: "modulo-4-cronica-edicion",
    numeroRomano: "IV",
    nombre: "Crónica Literaria, Periodismo Narrativo y Gestión Editorial",
    subtitulo: "Observación participante, entrevista, relato testimonial, corrección de estilo, maquetación y recital de clausura",
    semanas: "Semanas 19 a 24",
    horas: 12,
    descripcion: "Lleva la literatura al territorio documental del entorno social tabasqueño y capacita a los talleristas en los procesos editoriales reales para la publicación de su obra en libro impreso.",
    productoEntregable: "Crónica testimonial pulida, participación en la Antología Colectiva Impresa y lectura en el Recital de Clausura.",
    icono: "newspaper",
    sesiones: [
      {
        numero: 19,
        semana: 19,
        titulo: "La Crónica Periodístico-Literaria: Mirada y Técnica",
        ejeTeorico: "La naturaleza híbrida de la crónica: rigor inviolable con los hechos reales y libertad total en los recursos estéticos de la ficción narrativa. El cronista como testigo, observador participante y reconstructor de climas sociales.",
        conceptosClave: ["Rigor documental", "Mirada participante", "Punto de vista", "Pacto testimonial"],
        lecturasReferencia: [
          { autor: "Carlos Monsiváis", obra: "A ustedes les consta (antología de la crónica en México)", enfoque: "La mirada irónica y la polifonía urbana mexicana." },
          { autor: "Elena Poniatowska", obra: "La noche de Tlatelolco / Fuerte es el silencio", enfoque: "El collage coral y la sensibilidad testimonial." }
        ],
        ejercicioAula: {
          duracion: "30 min",
          titulo: "Notas de campo en Villahermosa",
          instruccion: "Puesta en común de notas de campo recolectadas durante la semana en un espacio público de Villahermosa (Mercado Pino Suárez, Parque Tomás Garrido, transporte público o malecón) y selección del ángulo narrativo.",
          restricciones: "Basarse exclusivamente en hechos observados y anotados en libreta de campo."
        },
        clinicaTextos: {
          duracion: "50 min",
          dinamica: "Revisión de la frescura de los apuntes y definición de la hipótesis narrativa que vertebrará la crónica.",
          criterioEvaluacion: "Agudeza de observación y pertinencia del ángulo narrativo."
        }
      },
      {
        numero: 20,
        semana: 20,
        titulo: "Investigación, Entrevista e Inmersión Narrativa",
        ejeTeorico: "La entrevista en profundidad y la escucha etnográfica. Cómo atrapar la voz viva del interlocutor sin deformarla ni acartonarla. Ética de la representación de personas de carne y hueso en la literatura de no ficción.",
        conceptosClave: ["Escucha etnográfica", "Entrevista a fondo", "Ética testimonial", "Polifonía"],
        lecturasReferencia: [
          { autor: "Leila Guerriero", obra: "Plano americano / Los suicidas del fin del mundo", enfoque: "El arte del perfil implacable y el detalle revelador." },
          { autor: "Martín Caparrós", obra: "El Hambre / Lacrónica", enfoque: "La voz del cronista en diálogo con las cifras y el dolor social." }
        ],
        ejercicioAula: {
          duracion: "30 min",
          titulo: "Del audio a la escena viva",
          instruccion: "Transcripción y reelaboración estética de un fragmento de testimonio oral real, transformándolo en una escena dinámica con gestualidad y atmósfera concreta.",
          restricciones: "Fidelidad absoluta a las palabras esenciales del entrevistado."
        },
        clinicaTextos: {
          duracion: "50 min",
          dinamica: "Análisis de la fidelidad testimonial contrapuesta al ritmo dramático del texto.",
          criterioEvaluacion: "Naturalidad en la incorporación de la voz testimonial y el pulso narrativo."
        }
      },
      {
        numero: 21,
        semana: 21,
        titulo: "Construcción del Relato Testimonial y Ritmo Informativo",
        ejeTeorico: "Alternancia de planos en la crónica: la descripción envolvente del ambiente, el dato duro verificado, el testimonio de los protagonistas y las reflexiones del cronista. Montaje cinematográfico en la prosa testimonial.",
        conceptosClave: ["Montaje narrativo", "Alternancia de planos", "Dato duro", "Ritmo informativo"],
        lecturasReferencia: [
          { autor: "Juan Villoro", obra: "Los cielos de la tribu / Safari accidental", enfoque: "La crónica como lente de aumento de las pasiones colectivas." },
          { autor: "Alma Guillermoprieto", obra: "Los placeres y los días", enfoque: "La cadencia y la elegancia al narrar la convulsión política." }
        ],
        ejercicioAula: {
          duracion: "30 min",
          titulo: "El primer corte de montaje",
          instruccion: "Redacción y ensamblaje del borrador completo de la crónica testimonial (4 a 6 cuartillas) integrando voz, atmósfera y datos verificables.",
          restricciones: "Cuidar las transiciones temporales y espaciales entre escenas."
        },
        clinicaTextos: {
          duracion: "50 min",
          dinamica: "Lectura grupal para calibrar el pulso de la narración y podar baches informativos o sensacionalismos fáciles.",
          criterioEvaluacion: "Solidez del arco narrativo y precisión en el tono testimonial."
        }
      },
      {
        numero: 22,
        semana: 22,
        titulo: "Corrección de Estilo Superior y Normas Editoriales",
        ejeTeorico: "Principios de la corrección de estilo editorial profesional: erradicación de cacofonías, pleonasmos, queísmos/dequeísmos, gerundios de posterioridad y discordancias gramaticales. Signos y marcas tipográficas estandarizadas de corrección.",
        conceptosClave: ["Corrección de estilo", "Signos de corrección", "Propiedad léxica", "Limpieza sintáctica"],
        lecturasReferencia: [
          { autor: "Manuales de Edición Profesional", obra: "Prontuarios de corrección y estilo editorial de excelencia", enfoque: "El respeto riguroso a la voz del autor combinado con la pulcritud idiomática." }
        ],
        ejercicioAula: {
          duracion: "30 min",
          titulo: "La prueba del bolígrafo rojo",
          instruccion: "Intercambio cruzado de manuscritos entre compañeros para ejecutar una corrección de estilo minuciosa a mano, anotando sugerencias con signos tipográficos normativos.",
          restricciones: "Justificar cada corrección en una norma sintáctica o de propiedad léxica."
        },
        clinicaTextos: {
          duracion: "50 min",
          dinamica: "Defensa y discusión lingüística de las enmiendas propuestas, consensuando la versión final definitiva de cada texto.",
          criterioEvaluacion: "Capacidad de autocrítica y rigor normativo en la revisión mutua."
        }
      },
      {
        numero: 23,
        semana: 23,
        titulo: "Procesos Editoriales, Maquetación y Diseño de Antología",
        ejeTeorico: "La cadena integral del libro: dictamen de originales, cuidado de edición, diseño editorial, tipometría, maquetación interior, portada, trámites de registro INDAUTOR, código ISBN y depósito legal.",
        conceptosClave: ["Cadena del libro", "Maquetación", "Tipometría", "INDAUTOR & ISBN"],
        lecturasReferencia: [
          { autor: "Lineamientos Editoriales", obra: "Guías de gestión y publicación editorial universitaria e independiente", enfoque: "De la página mecanografiada al libro encuadernado y distribuido." }
        ],
        ejercicioAula: {
          duracion: "30 min",
          titulo: "El prefacio coral",
          instruccion: "Selección colectiva de las obras, jerarquización del índice y redacción comunitaria del prefacio de la Antología del Taller Literario de la Librería UJAT.",
          restricciones: "El prefacio debe sintetizar el espíritu del ciclo semestral 2026."
        },
        clinicaTextos: {
          duracion: "50 min",
          dinamica: "Aprobación formal de las pruebas de galera e interiores para el envío final a imprenta.",
          criterioEvaluacion: "Coherencia estética y editorial del libro colectivo."
        }
      },
      {
        numero: 24,
        semana: 24,
        titulo: "Lectura Pública de Clausura y Recital Cultural",
        ejeTeorico: "La dimensión performática y oral de la literatura: modulación de la voz, respiración ante el micrófono, pausas dramáticas y presencia escénica del autor frente a la audiencia.",
        conceptosClave: ["Lectura en voz alta", "Manejo escénico", "Oralidad", "Recital cultural"],
        lecturasReferencia: [
          { autor: "Antología del Taller", obra: "Lectura colectiva de las obras terminadas del ciclo 2026", enfoque: "La culminación del oficio literario compartido en el espacio universitario." }
        ],
        ejercicioAula: {
          duracion: "30 min",
          titulo: "Ensayo general de lectura",
          instruccion: "Ensayo de lectura cronometrada (máximo 4 minutos por autor), puliendo entonación, contacto visual y ritmo frente al atril.",
          restricciones: "Respeto riguroso al tiempo asignado."
        },
        clinicaTextos: {
          duracion: "50 min",
          dinamica: "Recital Cultural de Clausura en la Librería Universitaria UJAT: lectura ante la comunidad, entrega de reconocimientos, presentación oficial del libro y brindis de honor.",
          criterioEvaluacion: "Desempeño en la lectura pública y culminación formativa del ciclo."
        }
      }
    ]
  }
];
