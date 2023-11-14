import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        tutor: resolve(__dirname, 'tutor.html'),
        hatgiong: resolve(__dirname, 'hatgiong.html'),
        mam: resolve(__dirname, 'mam.html'),
        choi: resolve(__dirname, 'choi.html'),
        la: resolve(__dirname, 'la.html'),
        bonhatcore: resolve(__dirname, 'bon.html'),
      },
    },
  },
})