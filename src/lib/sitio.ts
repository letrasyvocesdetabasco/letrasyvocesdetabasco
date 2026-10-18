// Datos de contacto y navegación del sitio (una sola fuente)
export const CONTACTO = {
  whatsapp: '522205889391',
  whatsappVisible: '220 588 9391',
  correo: 'contacto@letrasyvocesdetabasco.org',
  facebook: 'https://www.facebook.com/letrayvoces.tabasco',
  instagram: 'https://www.instagram.com/letrasyvocestabasco',
  youtube: 'https://www.youtube.com/@LetrasyVocesdeTabasco',
  sedeTaller: 'Librería Universitaria UJAT · Av. 27 de Febrero 626, Centro, Villahermosa',
  mapaTaller: 'https://www.google.com/maps/search/?api=1&query=Librer%C3%ADa+Universitaria+UJAT+Av.+27+de+Febrero+626+Villahermosa',
  ciudad: 'Villahermosa, Tabasco, México',
};
export const wa = (texto: string) => `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(texto)}`;

export const NAV = [
  { href: '/taller-literario', texto: 'Taller' },
  { href: '/escritores-ilustres', texto: 'Escritores' },
  { href: '/sala-de-lectura', texto: 'Sala de lectura' },
  { href: '/audioteca', texto: 'Audioteca' },
  { href: '/videos', texto: 'Videos' },
  { href: '/publicaciones', texto: 'Publicaciones' },
  { href: '/EEJG', texto: 'Escuela' },
  { href: '/historia', texto: 'Nosotros' },
];
export const NAV_SECUNDARIA = [
  { href: '/boletin', texto: 'Boletín «Entre ríos»' },
  { href: '/glosario', texto: 'Glosario literario' },
  { href: '/autores', texto: 'Padrón de autores' },
  { href: '/descargas', texto: 'Convocatorias y recursos' },
  { href: '/rifa', texto: 'Rifa cultural 2026' },
  { href: '/contacto', texto: 'Contacto' },
  { href: '/buscar', texto: 'Buscar en el sitio' },
];
// La rifa se muestra en portada y menú solo hasta el día del sorteo
// El sorteo fue el 16-oct-2026: la rifa concluyó y se retira de portada y menú.
export const RIFA_ACTIVA = false;

// Portadas optimizadas (public/assets/portadas/web/*.webp)
export const portadaWeb = (src?: string) => src ? src.replace(/^\/assets\/portadas\/(.+)\.(png|jpe?g)$/i, '/assets/portadas/web/$1.webp') : src;

export const SITIO = 'https://letrasyvocesdetabasco.org';
