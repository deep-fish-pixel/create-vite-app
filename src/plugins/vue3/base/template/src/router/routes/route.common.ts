import type { RouteRecordRaw } from 'vue-router';

const commonRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'home',
    },
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/eslint',
    name: 'eslint',
    meta: {
      title: 'eslint',
    },
    component: () => import('@/views/eslint/index.vue'),
  },
  {
    path: '/store',
    name: 'store',
    meta: {
      title: 'counter',
    },
    component: () => import('@/views/store/index.vue'),
  },
  {
    path: '/ajax',
    name: 'ajax',
    meta: {
      title: 'ajax',
    },
    component: () => import('@/views/ajax/index.vue'),
  },
  {
    path: '/tsx',
    name: 'tsx',
    meta: {
      title: 'tsx',
    },
    component: () => import('@/views/tsx'),
  },
  {
    path: '/keep-alive',
    name: 'keepAlive',
    meta: {
      title: 'keep-alive',
    },
    component: () => import('@/views/keepAlive/index.vue'),
  },
  {
    path: '/keep-alive/push',
    name: 'keepAlivePush',
    meta: {
      title: 'keep-alive-push',
      cache: true,
    },
    component: () => import('@/views/keepAlive/Push.vue'),
  },
  //<---+inject--->
];

export default commonRoutes;
