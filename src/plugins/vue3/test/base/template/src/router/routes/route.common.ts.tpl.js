module.exports = {
  inject: `
  {
    path: '/test',
    name: 'test',
    meta: {
      title: 'test',
    },
    component: () => import('@/views/test/index.vue'),
  },
`,
};
