import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Configuración oficial optimizada para tu despliegue en GitHub Pages
export default defineConfig({
  site: 'https://joan-porcar.github.io',
  integrations: [tailwind()],
});
