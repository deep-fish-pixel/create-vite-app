import { defineStore } from 'pinia';
import { getSetupI18n, setI18nLanguage } from '@/locales/helper/setupI18n';
import loadLocaleMessages from '@/locales/helper/loadLocaleMessages';

const i18nStore = defineStore({
  id: 'i18n',
  state: () => ({
    languages: ['zh-CN', 'en'],
    language: '',
  }),
  getters: {
    getLanguage: (state) => state.language,
  },
  actions: {
    async setLanguage(language: string) {
      this.language = language;

      // load locale messages
      if (!getSetupI18n().global.availableLocales.includes(language)) {
        await loadLocaleMessages(getSetupI18n(), language);
      }

      // set i18n language
      setI18nLanguage(getSetupI18n(), language);
    },
  },
});

export default i18nStore;
