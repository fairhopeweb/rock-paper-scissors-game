import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://markteekman.github.io',
  base: '/rock-paper-scissors-game',
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
})
