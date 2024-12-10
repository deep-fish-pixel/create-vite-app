module.exports = {
  import: `
import qiankun from 'vite-plugin-qiankun';
`,
  injectQiankun: `
      qiankun('first', {
        useDevMode: true
      }),
`,
  injectServerPort: `port: <!---=serverPort--->,`,
};
