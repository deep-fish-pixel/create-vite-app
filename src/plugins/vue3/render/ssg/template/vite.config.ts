import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import VitePages from 'vite-plugin-pages';
import mockDevServerPlugin from 'vite-plugin-mock-dev-server';
import 'vite-ssg';
import generateSitemap from 'vite-ssg-sitemap';
import Components from 'unplugin-vue-components/vite';

export default defineConfig((env) => {
  // 获取配置
  const viteEnv = loadEnv(env.mode, process.cwd());

  return {
    // 根路径
    base: viteEnv.VITE_BASE,
    // 别名
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    plugins: [
      vue({
        include: [/\.vue$/ /*, /\.tsx$/, /\.md$/*/],
        reactivityTransform: true,
      }),
      vueJsx(),
      VitePages({
        extensions: ['vue', 'tsx', 'md'],
      }),
      mockDevServerPlugin({
        prefix: '/',
      }),
      Components({
        extensions: ['vue', 'tsx', 'md'],
        include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/, /\.md$/],
        dts: 'src/components.d.ts',
      }),
    ],
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
    server: {
      proxy: {
        '^/api': {
          target: 'http://example.com',
        },
      },
    },
    test: {
      include: ['test/unit/**/*.spec.ts'],
      environment: 'jsdom',
      deps: {
        inline: ['@vue', '@vueuse'],
      },
    },
  };
});
