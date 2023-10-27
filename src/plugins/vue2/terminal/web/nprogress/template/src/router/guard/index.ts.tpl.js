module.exports = {
  import: `
import createProgressGuard from '@/router/guard/progressGuard';
`,
  setup: `
  createProgressGuard(router);
`,
};
