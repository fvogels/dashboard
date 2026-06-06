import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { viteSingleFile } from "vite-plugin-singlefile"


// https://vite.dev/config/
export default defineConfig((configuration) => {
    const mode = configuration.mode || 'home';

    return {
        plugins: [
            react(),
            babel({ presets: [reactCompilerPreset()] }),
            viteSingleFile(),
        ],
        define: {
            'DASHBOARD': JSON.stringify(mode),
        },
        resolve: {
            tsconfigPaths: true,
        },
    }
})
