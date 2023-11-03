import type { App } from 'vue';
import type { Router } from 'vue-router';
import keepAliveVue3 from 'keep-alive-vue3';
//<---+importJs--->
import routes from '@/router/routes';
import setupRouterGuard from '@/router/guard';

//<---+createRouterHistory--->

export const router: Router = createRouter({
  //<---+injectRouterHistory--->
  routes: [...routes],
});

export function setupRouter(app: App<Element>) {
  setupRouterGuard(router);
  app.use(router).use(keepAliveVue3);
}
