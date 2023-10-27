import {
  i18n,
  loadedLanguages,
  setI18nLanguage,
} from '@/locales/helper/setupI18n';

export default async function loadLocaleMessages(locale: string) {
  // 如果语言相同
  if (i18n.locale === locale) {
    return Promise.resolve();
  }

  // 如果语言已经加载
  if (loadedLanguages.includes(locale)) {
    return Promise.resolve(setI18nLanguage(locale));
  }

  // 如果尚未加载语言
  return import(
    /* webpackChunkName: "lang-[request]" */ `@/locales/messages/${locale}.json`
  ).then((messages) => {
    i18n.setLocaleMessage(locale, messages.default);
    loadedLanguages.push(locale);
    return setI18nLanguage(locale);
  });
}
