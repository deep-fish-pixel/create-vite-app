import type { Router } from 'vue-router';
import { PageEnum } from '@/enums/pageEnum';

/**
 * 登录清除历史数据
 * @param router
 */
export default function createStateGuard(router: Router) {
  router.afterEach((to) => {
    // 进入登录页面，清除用户权限信息
    if (to.path === PageEnum.BASE_LOGIN) {
      /* demo:
      const userStore = useUserStore();
      const permissionStore = usePermissionStore();
      permissionStore.resetState();
      userStore.resetState();
      */
    }
  });
}
