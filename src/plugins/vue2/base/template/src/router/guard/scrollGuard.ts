import type VueRouter from 'vue-router';
import { type RouteLocationNormalized } from '@logue/vue2-helpers/vue-router';

/**
 * 回退默认回顶部
 * @param router
 */
export default function createScrollGuard(router: VueRouter) {
  const isHash = (href: string) => /^#/.test(href);

  const { body } = document;

  router.afterEach(async (to) => {
    // scroll top
    isHash((to as RouteLocationNormalized & { href: string })?.href) &&
      body.scrollTo(0, 0);
    return true;
  });
}
