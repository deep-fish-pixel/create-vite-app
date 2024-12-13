module.exports = {
  import: spaMain ? '' : `
import createProgressGuard from '@/router/guard/progressGuard';
`,
  setup: spaMain ? '' : `
  createProgressGuard(router);
`,
};
