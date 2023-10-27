import type VueRouter from 'vue-router';
import { getSetupI18n } from '@/locales/helper/setupI18n';
import loadLocaleMessages from '@/locales/helper/loadLocaleMessages';

/**
 * 回退默认回顶部
 * @param router
 */
export default function createScrollGuard(router: VueRouter) {
  router.beforeEach(async (to, from, next) => {
    // 获取用户的语言
    const locale: string = getSetupI18n() || 'zh-CN';

    await loadLocaleMessages(locale);
    next();
  });
}
