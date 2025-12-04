/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Source Sans 3"', 'sans-serif'],
      },
      colors: {
        'luxury-bg': '#0B0B0C',
        'luxury-dark': '#1A1A1C',
        'luxury-darker': '#202024',
        'luxury-text': '#F5F4EF',
        'luxury-text-muted': '#B0ACA3',
        'luxury-gold': '#C9B67A',
        'luxury-gold-muted': '#C8B47A',
        'luxury-divider': '#222',
      },
      lineHeight: {
        'luxury': '1.7',
      },
    },
  },
  plugins: [],
}

