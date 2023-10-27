module.exports = {
  inject: `
  {
    path: '/i18n',
    name: 'i18n',
    meta: {
      title: 'i18n',
    },
    component: () => import('@/views/i18n/index.vue'),
  },
`,
};
