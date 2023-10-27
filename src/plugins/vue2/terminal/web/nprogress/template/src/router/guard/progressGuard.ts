import type VueRouter from 'vue-router';
import MultiNProgress from '@/router/helper/MultiNProgress';

/**
 * Routing with progress
 * @param router
 */
export default function createProgressGuard(router: VueRouter) {
  router.beforeEach(async (to, from, next) => {
    if (to.meta?.loaded) {
      return true;
    }
    MultiNProgress.start();
    next();
  });

  router.afterEach(async () => {
    MultiNProgress.done();
  });
}
