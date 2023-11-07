module.exports = {
  import: `
import vConsolePlugin from 'vite-plugin-simple-vconsole'; 
`,
  injectViteVConsole: `
      vConsolePlugin({
        enable: env.mode !== 'production',
      }),
`,
};
