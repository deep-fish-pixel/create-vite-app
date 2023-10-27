import type VueRouter from 'vue-router';
import createPermissionGuard from '@/router/guard/permissionGuard';
import createStateGuard from '@/router/guard/stateGuard';
import createScrollGuard from '@/router/guard/scrollGuard';
//<---+import--->

// 配置守卫
export default function setupRouterGuard(router: VueRouter) {
  createScrollGuard(router);
  createPermissionGuard(router);
  createStateGuard(router);
  //<---+setup--->
}
