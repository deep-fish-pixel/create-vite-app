module.exports = {
  import: `
import PWA from './vite.config.pwa'
`,
  injectViteVConsole: `
      ...PWA(),
`,
};
