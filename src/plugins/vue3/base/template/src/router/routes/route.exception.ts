// 跟鉴权无关的特殊路由
import type { RouteRecordRaw } from 'vue-router';

const exceptionRoutes: Array<RouteRecordRaw> = [
  {
    path: '/401',
    name: '401',
    meta: {
      title: '需要登录',
    },
    component: () => import('@/views/exception/401.vue'),
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '页面不存在',
    },
    component: () => import('@/views/exception/404.vue'),
  },
//<---#if(isSingle)--->
  {
    path: '/:pathMatch(.*)',
    meta: {},
    redirect: '/404',
  },
//<---#if--->
];

export default exceptionRoutes;
