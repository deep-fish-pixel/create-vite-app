import Vue from 'vue';
import axios from 'axios';
import VueI18n from 'vue-i18n';
import useI18nStore from '@/store/i18nStore';
import zhCN from '@/locales/messages/zh-CN.json';

Vue.use(VueI18n);

const i18nLocale = {
  value: '',
};

export const loadedLanguages: string[] = ['zh-CN'];

export const i18n = new VueI18n({
  locale: 'zh-CN',
  messages: {
    'zh-CN': zhCN,
  },
});

export function setI18nLanguage(locale: string) {
  const i18nStore = useI18nStore();

  i18nStore.setLanguage(locale);
  i18nLocale.value = locale;
  i18n.locale = locale;
  axios.defaults.headers.common['Accept-Language'] = locale;
  window.document?.querySelector('html')?.setAttribute('lang', locale);
  return locale;
}

export function getSetupI18n() {
  return i18nLocale.value;
}
