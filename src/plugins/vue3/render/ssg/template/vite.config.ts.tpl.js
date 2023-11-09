module.exports = {
  import: `
import VitePages from 'vite-plugin-pages';
import 'vite-ssg';
import generateSitemap from 'vite-ssg-sitemap';
import Components from 'unplugin-vue-components/vite';
`,
  injectViteVConsole: `
      VitePages({
        extensions: ['vue', 'tsx', 'md'],
      }),
      Components({
        extensions: ['vue', 'tsx', 'md'],
        include: [/\\.vue$/, /\\.vue\\?vue/, /\\.tsx$/, /\\.md$/],
        dts: 'src/components.d.ts',
      }),
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
