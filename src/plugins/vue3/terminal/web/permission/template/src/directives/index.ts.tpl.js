module.exports = {
  import: `
import permission from './permission';
`,
  setup: `
  app.directive('permission', permission);
`,
};
