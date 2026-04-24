/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#F8F9FA',
        primary: {
          DEFAULT: '#6D57BD',
          light: '#2b55e0',
          dark: '#0a2590',
        },
        accent: '#3EF48D',
        dark: '#0a0f1e',
      },
      fontFamily: {
        display: ['Open Sans', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
        mono: ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'dark-texture':
          'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      boxShadow: {
        'primary-sm': '0 4px 24px -4px rgba(16, 61, 204, 0.18)',
        'primary-md': '0 8px 40px -8px rgba(16, 61, 204, 0.28)',
        'primary-lg': '0 16px 64px -12px rgba(16, 61, 204, 0.38)',
        card: '0 2px 16px -2px rgba(10, 15, 30, 0.08), 0 1px 4px -1px rgba(10, 15, 30, 0.06)',
        'card-hover':
          '0 8px 32px -4px rgba(10, 15, 30, 0.12), 0 2px 8px -2px rgba(10, 15, 30, 0.08)',
      },
      letterSpacing: {
        label: '0.15em',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
};
