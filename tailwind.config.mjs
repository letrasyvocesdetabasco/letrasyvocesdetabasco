/** @type {import('tailwindcss').Config} */
// Sistema visual LVT 2026 — Manual de Marca (70/20/10)
// Los colores salen de variables CSS (src/styles/global.css) para que el modo nocturno cambie todo a la vez.
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  darkMode: ['class', '.modo-nocturno'],
  theme: {
    container: { center: true, padding: { DEFAULT: '1.25rem', sm: '1.5rem', lg: '2rem' } },
    extend: {
      colors: {
        fondo: v('fondo'), superficie: v('superficie'), hundido: v('hundido'),
        tinta: v('tinta'), grafito: v('grafito'), tenue: v('tenue'), linea: v('linea'),
        naranja: v('naranja'), 'naranja-tinta': v('naranja-tinta'),
        noche: v('noche'), 'noche-2': v('noche-2'),
        crema: '#FDFBF7', carbon: '#222222',
      },
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        serif: ['"EB Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: { eyebrow: ['0.75rem', { lineHeight: '1', letterSpacing: '0.16em' }] },
      maxWidth: { lectura: '68ch' },
      boxShadow: {
        suave: '0 1px 2px rgb(34 34 34 / 0.04), 0 8px 24px -12px rgb(34 34 34 / 0.18)',
        alta: '0 24px 60px -24px rgb(34 34 34 / 0.35)',
        naranja: '0 18px 40px -18px rgb(239 123 56 / 0.6)',
      },
      borderRadius: { pieza: '1.25rem' },
      transitionTimingFunction: { suave: 'cubic-bezier(.16,1,.3,1)' },
    },
  },
  plugins: [],
};
