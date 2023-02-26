/*
 * @FilePath: /NERV/vite.config.ts
 * @Author: maggot-code
 * @Date: 2023-02-26 01:36:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2023-02-26 19:19:15
 * @Description: 
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import unpluginImport from "unplugin-auto-import/vite";
import unpluginComponents from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
    clearScreen: true,
    server: {
        hmr: true,
    },
    resolve: {
        alias: [
            {
                find: "@",
                replacement: '/src',
            }
        ],
        extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx", ".json"],
        dedupe: ["vue"],
        preserveSymlinks: false,
    },
    json: {
        namedExports: true,
        stringify: false,
    },
    plugins: [
        vue(),
        unpluginImport({
            imports: ["vue"],
            dts: true
        }),
        unpluginComponents({
            version: 3,
            dirs: ["src/components"],
            extensions: ["vue", "jsx", "tsx"],
            transformer: "vue3",
            dts: true,
            deep: true,
        })
    ],
})
