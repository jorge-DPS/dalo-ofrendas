import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.scss', 'resources/js/app.js'],
            refresh: true,
        }),
        tailwindcss(),

    ],
    resolve: {
        alias: {
          '@': path.resolve(__dirname, 'resources/js'),
        },
      },
      build: {
        outDir: 'public/build',
      },
      css: {
        postcss: './postcss.config.js',
      },
});
