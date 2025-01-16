import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'ZdesignUi',
      fileName: 'zdesign-ui',
    },

    minify: false,

    rollupOptions: {
      external: [
        /@zdesign.*/,
        'vue'
      ],
    },
    sourcemap: true,  // 是否生成 sourcemap，方便调试

  }
})
