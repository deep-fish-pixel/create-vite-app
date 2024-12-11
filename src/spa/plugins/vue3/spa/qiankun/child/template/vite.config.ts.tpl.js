module.exports = {
  import: `
import qiankun from 'vite-plugin-qiankun';
`,
  injectQiankun: `
      qiankun('${appName}', {
        // 微应用名字，与主应用注册的微应用名字保持一致
        useDevMode: true
      }),
`,
  injectServerPort: `port: ${serverPort},`,
};
