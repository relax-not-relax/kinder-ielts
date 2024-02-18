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
        bon: resolve(__dirname, 'bon.html'),
        preielts: resolve(__dirname, 'preIelts.html'),
        hatcore: resolve(__dirname, 'hatcore.html'),
        bangvang: resolve(__dirname, 'bangVang.html'),
      },
    },
  },
})