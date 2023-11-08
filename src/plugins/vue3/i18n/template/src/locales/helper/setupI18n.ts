import type { App, WritableComputedRef } from 'vue';
import type { I18n } from 'vue-i18n';
import { createI18n } from 'vue-i18n';
import axios from 'axios';
import zhCN from '@/locales/messages/zh-CN.json';

const i18nRef = {
  value: {},
};

export function getSetupI18n() {
  return i18nRef.value as I18n;
}

export function getI18n(options = { locale: '' }) {
  const i18n = createI18n({
    legacy: false,
    locale: options.locale || 'zh-CN',
    messages: {
      'zh-CN': zhCN,
    },
  });

  if (options.locale) {
    setI18nLanguage(i18n, options.locale);
  }
  i18nRef.value = i18n;
  return i18n;
}

export function setupI18n(app: App<Element>) {
  const i18n = getI18n();

  app.use(i18n as any);
}

export function setI18nLanguage(i18n: I18n<any>, locale: string) {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale;
  } else {
    const localeRef = i18n.global.locale as WritableComputedRef<any>;

    localeRef.value = locale;
  }
  axios.defaults.headers.common['Accept-Language'] = locale;
}
