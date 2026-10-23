// «A corazón abierto» (2026), poemario de María de los Ángeles Cervantes Rosas: datos tomados del PDF final
// (cubierta, página legal, dedicatoria, contenido, prólogo y «Acerca de la autora»).
// La numeración «pagina» corresponde al lector en línea: 0 = portada, 1–82 = interior (igual al folio impreso), 83 = contraportada.
import type { EntradaLector } from '../lib/lector';

export const CORAZON_ABIERTO = {
  id: 'a-corazon-abierto',
  titulo: 'A corazón abierto',
  subtitulo: 'Ven y piérdete en mi mirada',
  autora: 'María de los Ángeles Cervantes Rosas',
  prologuista: 'Abel Pérez Sánchez',
  isbn: '978-607-29-8439-4',
  indautor: '03-2026-012017574600-14',
  /** Interruptor de la lectura en línea (las páginas protegidas están en public/lectura/ca). */
  lecturaAbierta: true,
  portada: '/assets/portadas/a_corazon_abierto_portada.webp',
  portadaChica: '/assets/portadas/web/a_corazon_abierto_portada.webp',
  imagenSocial: '/assets/portadas/a_corazon_abierto_og.jpg',
  lector: '/publicaciones/a-corazon-abierto/leer',
  ficha: '/publicaciones/a-corazon-abierto',
  totalPaginas: 84,
  presentacion: { fecha: '30 de mayo de 2026', lugar: 'Casa Universitaria Cacao y Chocolate, Villahermosa' },
  contraportada: [
    'En este libro se hace un recorrido íntimo y colectivo del dolor a la esperanza. La voz poética transita desde la denuncia social de las injusticias convirtiendo el silencio en protesta, profundiza en las heridas compartidas desde una conciencia lúcida, con una mirada que no teme al abismo.',
    'A lo largo de seis ejes, la voz se expande; deja de ser eco para volverse abrazo, nudo y lazo entre las almas. Se tienden puentes donde la poesía se vuelve refugio. Finalmente, la palabra se abre a un mundo más justo, más sensible y más humano, no como una aspiración, sino como una realidad posible.',
    'En conjunto, este poemario es un testimonio sensible que abraza la herida y el afecto, la denuncia y el deseo, recordándonos que aún en medio del dolor, la poesía puede ser semilla de esperanza.',
  ],
  /** Versos de «A ti» (p. 36) que abren la contraportada */
  epigrafe: { versos: ['Gracias por impulsarme cuando yo dudo,', 'por ver en mí lo que a veces no veo,', 'por admirar mis pasos, no mostrarte rudo,', 'y levantarme con tu amor sincero.'], poema: 'A ti', pagina: 36 },
  prologo: [
    'Seguir la lectura de sus poemas es volver a sentir, es recordar que somos humanos, es entender que estamos hechos para amar.',
    'El mensaje es el amor, el propósito es salvar a la humanidad… y lo está logrando.',
  ],
  semblanza: [
    'Profesora investigadora de la Universidad Autónoma de Occidente y miembro del Sistema Nacional de Investigadores e Investigadoras, nivel 1. Lidera el Cuerpo Académico Capital Intelectual y Desarrollo Sostenible y forma parte del Club de Lectura Guasave Lee.',
    'Ha recibido la Distinción Gota de Código R (Uruguay), el premio Mujer Guasavense 2023 en Ciencia y el reconocimiento Profesionista Lince 2022 por mérito ambientalista. Es coautora de la compilación poética «Partituras rotas de amores perdidos» (Ediciones Learte) y ha participado en las antologías «La Mujer en el Siglo XXI» y «Leyendas de nuestra región» de Letras y Voces de Tabasco.',
  ],
  fichaTecnica: [
    ['Género', 'Poesía'],
    ['Contenido', '30 poemas en seis secciones'],
    ['Extensión', '82 páginas'],
    ['Prólogo', 'Abel Pérez Sánchez'],
    ['Portada', 'Óleo sobre tela de la autora, 60 × 60 cm'],
    ['Edición', '2026'],
    ['ISBN', '978-607-29-8439-4'],
    ['Registro INDAUTOR', '03-2026-012017574600-14'],
  ] as [string, string][],
};

export interface SeccionPoemario { numero: string; titulo: string; pagina: number; poemas: { titulo: string; pagina: number }[] }

export const SECCIONES_CORAZON: SeccionPoemario[] = [
  { numero: 'I', titulo: 'Susurros que gritan', pagina: 11, poemas: [
    { titulo: 'El amor no duele', pagina: 13 }, { titulo: 'El grito de los productores', pagina: 16 }, { titulo: 'La cita', pagina: 18 }, { titulo: 'Mujer', pagina: 20 },
  ] },
  { numero: 'II', titulo: 'Cicatrices colectivas', pagina: 21, poemas: [
    { titulo: 'La pala en la mano', pagina: 23 }, { titulo: 'La voz del agricultor', pagina: 25 }, { titulo: 'Ya no aguanto', pagina: 27 },
  ] },
  { numero: 'III', titulo: 'Vínculos y puentes', pagina: 29, poemas: [
    { titulo: 'Atardeceres', pagina: 31 }, { titulo: 'El colibrí', pagina: 33 }, { titulo: 'Beso', pagina: 34 }, { titulo: 'Sangre', pagina: 35 },
    { titulo: 'A ti', pagina: 36 }, { titulo: 'Llámame infiel', pagina: 38 }, { titulo: 'Te regalo mi luna', pagina: 40 }, { titulo: 'Tú en mí', pagina: 42 },
  ] },
  { numero: 'IV', titulo: 'Latidos del corazón', pagina: 45, poemas: [
    { titulo: 'Café y amor', pagina: 47 }, { titulo: 'Húmedos', pagina: 49 }, { titulo: 'Lluvia fría', pagina: 51 }, { titulo: 'Un beso en la frente', pagina: 52 },
    { titulo: 'Ven', pagina: 54 }, { titulo: 'Donde el alma se arrodilla', pagina: 55 },
  ] },
  { numero: 'V', titulo: 'Quimeras del querer', pagina: 57, poemas: [
    { titulo: 'Tu nombre', pagina: 59 }, { titulo: 'La siesta', pagina: 61 }, { titulo: 'Desnuda', pagina: 63 }, { titulo: 'Compromiso', pagina: 65 },
    { titulo: 'Besos', pagina: 67 }, { titulo: 'Eres', pagina: 69 },
  ] },
  { numero: 'VI', titulo: 'Horizonte de esperanzas', pagina: 71, poemas: [
    { titulo: 'La esperanza tricolor', pagina: 73 }, { titulo: 'La igualdad de género', pagina: 75 }, { titulo: 'Queremos paz', pagina: 77 },
  ] },
];

export const POEMAS_CORAZON = SECCIONES_CORAZON.flatMap((s) => s.poemas);

export const INDICE_CORAZON: EntradaLector[] = [
  { titulo: 'Portada', pagina: 0, seccion: true },
  { titulo: 'Portadilla y página legal', pagina: 1, seccion: true },
  { titulo: 'Dedicatoria', pagina: 3, paginaImpresa: '3', seccion: true },
  { titulo: 'Contenido', pagina: 5, paginaImpresa: '5', seccion: true },
  { titulo: 'Prólogo', autor: 'Abel Pérez Sánchez', pagina: 7, paginaImpresa: '7', seccion: true },
  ...SECCIONES_CORAZON.flatMap((s) => [
    { titulo: `${s.numero} · ${s.titulo}`, pagina: s.pagina, paginaImpresa: String(s.pagina), seccion: true },
    ...s.poemas.map((p) => ({ titulo: p.titulo, pagina: p.pagina, paginaImpresa: String(p.pagina) })),
  ]),
  { titulo: 'Acerca de la autora', pagina: 79, paginaImpresa: '79', seccion: true },
  { titulo: 'Contraportada', pagina: 83, seccion: true },
];
