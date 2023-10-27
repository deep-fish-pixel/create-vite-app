import { nextTick } from 'vue';
import type { I18n } from 'vue-i18n';

export default async function loadLocaleMessages(i18n: I18n, locale: string) {
  // load locale messages with dynamic import
  const messages = await import(
    /* webpackChunkName: "locale-[request]" */ `@/locales/messages/${locale}.json`
  );

  // set locale and locale message
  i18n.global.setLocaleMessage(locale, messages.default);

  return nextTick();
}
