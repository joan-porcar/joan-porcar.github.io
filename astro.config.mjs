import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.tu-dominio.com', // 👈 REEMPLAZA AQUÍ CON TU DOMINIO REAL
  integrations: [tailwind()],
});
