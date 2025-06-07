import svgr from "vite-plugin-svgr";
import ViteYaml from '@modyfi/vite-plugin-yaml';
import { compression } from 'vite-plugin-compression2';
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    plugins: [svgr(), ViteYaml(), compression()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                cv: resolve(__dirname, 'cv.html'),
                ademar: resolve(__dirname, 'ademar.html'),
            },
        },
    },
})