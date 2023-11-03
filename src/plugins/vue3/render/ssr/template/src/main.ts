import { createSSRApp } from 'vue';
import { setupStore } from '@/store';
import { setupRouter, router } from '@/router';
import { setupDirectives } from '@/directives';
import { ID_INJECTION_KEY } from 'element-plus';
//<---+import--->
import App from './App.vue';
//<---+importCss--->

export function createApp() {
  const app = createSSRApp(App);

  // 配置store
  const store = setupStore(app);

  // 配置路由
  setupRouter(app);

  // 配置指令
  setupDirectives(app);

  //<---+setup--->

  app.provide(ID_INJECTION_KEY, {
    prefix: 1024,
    current: 0
  });

  return { app, router, store };
}
