// vite.config.js
import { defineConfig } from "vite";

export default defineConfig(({ command, mode, ssrBuild }) => {
  if (command === 'build') {
    return {
      base: '/coremedia-studio-preview-integration-example/'
    }
  } else {
    return {
      server: {
        port: 3000
      },
    }
  }
})
