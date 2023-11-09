module.exports = {
  import: `
import PWA from './vite.config.pwa'
`,
  injectViteVConsole: `
      ...PWA(),
`,
  injectTest: `
    ssgOptions: {
      script: 'async',
      formatting: 'minify',
      crittersOptions: {
        reduceInlineStyles: false,
      },
      onFinished() {
        generateSitemap();
      },
    },
`,
};
