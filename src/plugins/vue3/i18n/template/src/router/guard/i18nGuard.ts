import type { Router } from 'vue-router';
import useI18nStore from '@/store/i18nStore';

/**
 * 回退默认回顶部
 * @param router
 */
export default function createScrollGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const i18nStore = useI18nStore();
    // 获取用户的语言
    const locale: string = i18nStore.getLanguage || 'zh-CN';

    await i18nStore.setLanguage(locale);

    return next();
  });
}
