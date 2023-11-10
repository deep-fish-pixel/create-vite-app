import type { App } from 'vue';
import type { Router } from 'vue-router';
import keepAliveVue2 from 'keep-alive-vue2';
import setupRouterGuard from '@/router/guard';

export function setupRouter(app: App<Element>, router: Router) {
  setupRouterGuard(router);
  app.use(router).use(keepAliveVue2);
}
