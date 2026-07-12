/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0A0A0C',       // Negro mate profundo premium
          accent: '#CCFF00',   // Verde lima eléctrico / Neón
          textMuted: '#94A3B8'  // Gris suave para lectura cómoda
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['Google Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
