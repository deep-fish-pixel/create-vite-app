module.exports = {
  import: `
import { viteVConsole } from 'vite-plugin-vconsole';  
`,
  injectViteVConsole: `
      viteVConsole({
        entry: [resolve('src/main.ts')], // entry file
        localEnabled: env.mode === 'development', // dev environment
        enabled: env.mode !== 'production', // build production
        config: { 
          maxLogNumber: 1000,
          theme: 'dark'
        }
      }),
`,
};
