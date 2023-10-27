import type VueRouter from 'vue-router';
import { PageEnum } from '@/enums/pageEnum';

const whitePathList = [PageEnum.BASE_LOGIN, PageEnum.ERROR_PAGE];

/**
 * 权限获取并检查
 * @param router
 */
export default function createPermissionGuard(router: VueRouter) {
  router.beforeEach(async (to, from, next) => {
    // 白名单页面通过下一步
    if (whitePathList.includes(<PageEnum>to.path)) {
      return next();
    }
    const haveAuthority = true; // await checkPermissionAsync(to.meta.permissionKey)

    // 无权限拦截
    if (!haveAuthority) {
      return next('/');
    }
    return next();
  });
}
