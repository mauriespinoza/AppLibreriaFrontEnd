// import { defineConfig, loadEnv } from 'vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
// https://vitejs.dev/config/
// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '')

//   return {
//     define: {
//       __APP_ENV__: env.APP_ENV
//     },
//     plugins: [react()],
//     server: {
//       port: 4010
//     }
//   }
// })