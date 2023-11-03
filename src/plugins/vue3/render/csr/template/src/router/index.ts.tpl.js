module.exports = {
  importJs: `
import { createRouter, createWebHistory } from 'vue-router';
`,
  createRouterHistory: ``,
  injectRouterHistory: `
  history: createWebHistory(import.meta.env.VITE_BASE),
`
};
