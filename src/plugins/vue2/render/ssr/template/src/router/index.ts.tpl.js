module.exports = {
  importJs: `
import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from 'vue-router';
`,
  createRouterHistory: `
const routerHistory = import.meta.env.SSR
  ? createMemoryHistory()
  : createWebHistory();
`,
  injectRouterHistory: `
  history: routerHistory,
`
};
