import { defineStore } from 'pinia';

const i18nStore = defineStore({
  id: 'i18n',
  state: () => ({
    languages: ['zh-CN', 'en'],
    language: 'zh-CN',
  }),
  getters: {
    getLanguage: (state) => state.language,
  },
  actions: {
    setLanguage(language: string) {
      this.language = language;
    },
  },
});

export default i18nStore;
