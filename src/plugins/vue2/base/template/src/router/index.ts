import Vue from 'vue';
import type VueRouter from 'vue-router';
import { createRouter } from '@logue/vue2-helpers/vue-router';
import keepAliveVue2 from 'keep-alive-vue2';
import routes from '@/router/routes/index';
import setupRouterGuard from '@/router/guard';

const router: VueRouter = createRouter({
  mode: 'history',
  routes: [...routes],
});

export function setupRouter() {
  setupRouterGuard(router);
  Vue.use(keepAliveVue2);
}

export { router };
