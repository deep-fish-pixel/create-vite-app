module.exports = {
  import: `
import permission from './permission';
`,
  setup: `
  Vue.directive('permission', permission);
`,
};
