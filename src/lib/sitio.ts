// Datos de contacto y navegación del sitio (una sola fuente)
export const CONTACTO = {
  whatsapp: '522205889391',
  whatsappVisible: '220 588 9391',
  correo: 'contacto@letrasyvocesdetabasco.org',
  facebook: 'https://www.facebook.com/letrayvoces.tabasco',
  instagram: 'https://www.instagram.com/letrasyvocestabasco',
  sedeTaller: 'Librería Universitaria UJAT · Av. 27 de Febrero 626, Centro, Villahermosa',
  mapaTaller: 'https://www.google.com/maps/search/?api=1&query=Librer%C3%ADa+Universitaria+UJAT+Av.+27+de+Febrero+626+Villahermosa',
};
export const wa = (texto: string) => `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(texto)}`;

export const NAV = [
  { href: '/taller-literario', texto: 'Taller' },
  { href: '/escritores-ilustres', texto: 'Escritores ilustres' },
  { href: '/publicaciones', texto: 'Publicaciones' },
  { href: '/audioteca', texto: 'Audioteca' },
  { href: '/EEJG', texto: 'Escuela Gorostiza' },
  { href: '/historia', texto: 'Nosotros' },
];
export const NAV_SECUNDARIA = [
  { href: '/autores', texto: 'Padrón de autores' },
  { href: '/descargas', texto: 'Convocatorias y descargas' },
  { href: '/rifa', texto: 'Rifa cultural 2026' },
];
// La rifa se muestra en portada y menú solo hasta el día del sorteo
export const RIFA_ACTIVA = new Date() < new Date('2026-10-17T06:00:00Z');

// Portadas optimizadas (public/assets/portadas/web/*.webp)
export const portadaWeb = (src?: string) => src ? src.replace(/^\/assets\/portadas\/(.+)\.(png|jpe?g)$/i, '/assets/portadas/web/$1.webp') : src;
