import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import mockDevServerPlugin from "vite-plugin-mock-dev-server";
//<---+import--->

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
        include: [/\.vue$/],
        reactivityTransform: true,
      }),
      vueJsx(),
      mockDevServerPlugin({
        prefix: '/',
      }),
      //<---+injectViteVConsole--->
    ],
    server: {
      proxy: {
        '^/api': {
          target: 'http://example.com',
        },
      },
    },
    //<---+injectTest--->
  };
});
