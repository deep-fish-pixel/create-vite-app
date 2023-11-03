import { setupStore } from '@/store';
import { setupRouter } from '@/router';
import { setupDirectives } from '@/directives';
//<---+import--->
import App from './App.vue';
import { ViteSSG } from 'vite-ssg';
import routes from '@/router/routes';
//<---+importCss--->

export const createApp = ViteSSG(
  App,
  {
    base: import.meta.env.BASE_URL,
    routes,
  },
  ({ app, router, initialState }) => {
    // 配置store
    setupStore(app);

    // 配置路由
    setupRouter(app, router);

    // 配置指令
    setupDirectives(app);

    //<---+setup--->
  },
  { rootContainer: '#app' }
);
