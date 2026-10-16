// «Animalia Literaria» (2026): datos del libro tomados de los archivos finales de imprenta
// (portada, página legal, prólogo, índice general, colofón y contraportada).
// La numeración «pagina» corresponde al lector en línea: 0 = portada, 1–131 = interior, 132 = contraportada.

export const ANIMALIA = {
  id: 'animalia-literaria',
  titulo: 'Animalia Literaria',
  subtitulo: 'Antología de Narrativa y Lírica',
  sello: 'Sociedad de Escritores «Letras y Voces de Tabasco», A.C.',
  compilador: 'Juan David Pérez Cabrera',
  prologuista: 'Liliana Chuzeville Córdoba',
  edicion: 'Primera edición: agosto de 2026',
  estado: 'Impreso en agosto de 2026 · presentación próximamente',
  portada: '/assets/portadas/animalia_literaria_portada_oficial.webp',
  portadaChica: '/assets/portadas/web/animalia_literaria_portada_oficial.webp',
  imagenSocial: '/assets/portadas/animalia_literaria_og.jpg',
  lector: '/publicaciones/animalia-literaria/leer',
  ficha: '/publicaciones/animalia-literaria',
  totalPaginas: 133,
  contraportada: [
    'Animalia Literaria es una travesía íntima hacia el pulso secreto de la naturaleza. A través del mito, la lírica y la memoria viva, diecinueve textos trazan un puente indómito entre el ser humano y el reino animal: del rugido ancestral del jaguar y el misterio del coyote en el semidesierto, al canto del manatí en los ríos tabasqueños y la noble lealtad del perro guardián.',
    'Entre la contemplación poética y la fuerza del relato, esta antología celebra la belleza sagrada de las criaturas sin artificios, invitando al lector a descubrir que en cada mirada animal palpita un enigma que también nos pertenece.',
  ],
  epigrafe: 'Desde antes de que tus ojos rozaran estas páginas, este libro ya te estaba esperando. Hay un pacto secreto e invisible entre quien busca y quien es hallado; una memoria antigua escrita con la luz del agua, el susurro del viento y la pisada silenciosa de las criaturas.',
  prologoInicio: 'Toda antología es, antes que nada, un encuentro de voces, de miradas y de distintas maneras de comprender el mundo a través de la palabra. Animalia Literaria nace de ese encuentro: diecinueve textos en los que diversos autores se aproximan al universo animal desde la narrativa y la lírica, pero también desde la memoria, la imaginación, la sensibilidad, el conocimiento y la experiencia humana.',
  colofon: '«La palabra es el puente que une la memoria humana con el misterio del mundo.»',
  fichaTecnica: [
    ['Formato', '14 × 21.5 cm, media carta'],
    ['Interior', '131 páginas, 59 de ellas a color'],
    ['Papel', 'Cultural ahuesado de 90 g'],
    ['Encuadernación', 'Rústica, tapa blanda'],
    ['Tipografía', 'EB Garamond'],
    ['Ilustración', 'Cabeceras pintadas al óleo'],
    ['Edición', 'Primera, agosto de 2026'],
    ['Impresión', 'Talleres gráficos de Villahermosa, Tabasco'],
  ] as [string, string][],
};

export interface EntradaIndice { n?: number; titulo: string; autor?: string; pagina: number; paginaImpresa?: string; parte?: 'narrativa' | 'lirica'; seccion?: boolean }

export const INDICE_ANIMALIA: EntradaIndice[] = [
  { titulo: 'Portada', pagina: 0, seccion: true },
  { titulo: 'Portadilla y página legal', pagina: 1, seccion: true },
  { titulo: 'Prólogo', autor: 'Liliana Chuzeville Córdoba', pagina: 7, paginaImpresa: 'vii', seccion: true },
  { titulo: 'Índice general', pagina: 13, seccion: true },
  { titulo: 'Parte I · Narrativa', pagina: 15, paginaImpresa: '1', seccion: true },
  { n: 1, titulo: 'Accidente Desafortunado', autor: 'Juan David Pérez Cabrera', pagina: 17, paginaImpresa: '4', parte: 'narrativa' },
  { n: 2, titulo: 'El ascenso de Báalam', autor: 'Víctor Manuel Ameca Mena', pagina: 21, paginaImpresa: '8', parte: 'narrativa' },
  { n: 3, titulo: 'El eterno guardián', autor: 'Marlene de la Cruz de la O', pagina: 33, paginaImpresa: '20', parte: 'narrativa' },
  { n: 4, titulo: 'Huella', autor: 'Arlette Alana Pérez Ruiz', pagina: 39, paginaImpresa: '26', parte: 'narrativa' },
  { n: 5, titulo: 'Las patitas del jaguar', autor: 'María de los Ángeles Cervantes Rosas', pagina: 43, paginaImpresa: '30', parte: 'narrativa' },
  { n: 6, titulo: 'Lecciones de un rescate', autor: 'Francis Vestali Romero Alcántara', pagina: 51, paginaImpresa: '38', parte: 'narrativa' },
  { n: 7, titulo: 'Mi dulce Caramelo', autor: 'Natalia Morales Sosa', pagina: 57, paginaImpresa: '44', parte: 'narrativa' },
  { n: 8, titulo: 'Mi guardián y compañero', autor: 'Pragedis Hernández García', pagina: 63, paginaImpresa: '50', parte: 'narrativa' },
  { n: 9, titulo: 'Nipaki y Mimatini', autor: 'María de los Ángeles Muñoz Sánchez', pagina: 67, paginaImpresa: '54', parte: 'narrativa' },
  { n: 10, titulo: 'Playeros amantes', autor: 'Juan Manuel Canepa Bertolini', pagina: 73, paginaImpresa: '60', parte: 'narrativa' },
  { n: 11, titulo: 'Viaje entre cuentos y canciones', autor: 'Liliana Chuzeville Córdoba', pagina: 77, paginaImpresa: '64', parte: 'narrativa' },
  { titulo: 'Parte II · Lírica', pagina: 81, paginaImpresa: '67', seccion: true },
  { n: 12, titulo: 'A una libélula', autor: 'Nadya Vanessa Ortiz Moya', pagina: 83, paginaImpresa: '70', parte: 'lirica' },
  { n: 13, titulo: 'Coyote Ancestral', autor: 'Israel Mendoza Vázquez', pagina: 87, paginaImpresa: '74', parte: 'lirica' },
  { n: 14, titulo: 'El jaguar', autor: 'María de los Ángeles Cervantes Rosas', pagina: 91, paginaImpresa: '78', parte: 'lirica' },
  { n: 15, titulo: 'Haikus a Villahermosa', autor: 'Nadya Vanessa Ortiz Moya', pagina: 97, paginaImpresa: '84', parte: 'lirica' },
  { n: 16, titulo: 'La luna y el jaguar', autor: 'Eva Guadalupe Pineda Cruz', pagina: 101, paginaImpresa: '88', parte: 'lirica' },
  { n: 17, titulo: 'Manatí', autor: 'Flor de Liz Marín Hernández', pagina: 105, paginaImpresa: '92', parte: 'lirica' },
  { n: 18, titulo: 'Minino capuchino', autor: 'Ana Luisa Mosqueda Caraveo', pagina: 109, paginaImpresa: '96', parte: 'lirica' },
  { n: 19, titulo: 'Oda a Judith', autor: 'Marlene de la Cruz de la O', pagina: 117, paginaImpresa: '104', parte: 'lirica' },
  { titulo: 'Glosario de autores', pagina: 121, paginaImpresa: '109', seccion: true },
  { titulo: 'Colofón', pagina: 131, seccion: true },
  { titulo: 'Contraportada', pagina: 132, seccion: true },
];

export const TEXTOS_ANIMALIA = INDICE_ANIMALIA.filter((e) => e.n);
export const AUTORES_ANIMALIA = [...new Set(TEXTOS_ANIMALIA.map((e) => e.autor!))];
