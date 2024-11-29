import type { RouteRecordRaw } from 'vue-router';

const childAppRoutes: Array<RouteRecordRaw> = [
  {
    path: '/first/:id?',
    name: 'first',
    component: () => import('@/views/child/first.vue'),
  },
];

export default childAppRoutes;
