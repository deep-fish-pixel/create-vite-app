module.exports = {
  import: `
import createI18nGuard from '@/router/guard/i18nGuard';
`,
  setup: `
  createI18nGuard(router);
`,
};
