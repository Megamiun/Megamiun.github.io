import svgr from "vite-plugin-svgr";
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    plugins: [svgr()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                ademar: resolve(__dirname, 'ademar.html'),
            },
        },
    },
})