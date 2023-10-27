import type { App } from 'vue';
import type { Router } from 'vue-router';
import keepAliveVue3 from 'keep-alive-vue3';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/router/routes';
import setupRouterGuard from '@/router/guard';

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE),
  routes: [...routes],
});

export function setupRouter(app: App<Element>) {
  setupRouterGuard(router);
  app.use(router).use(keepAliveVue3);
}

export { router };
