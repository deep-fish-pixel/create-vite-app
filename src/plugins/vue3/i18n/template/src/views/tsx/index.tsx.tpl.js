module.exports = {
  addReplace: '{ t(\'add\') }',
  subReplace: '{ t(\'sub\') }',
  resetReplace: '{ t(\'reset\') }',
  import: `
import { useI18n } from 'vue-i18n';
`,
  useI18nInject: `
    const { t } = useI18n();
`,
};
