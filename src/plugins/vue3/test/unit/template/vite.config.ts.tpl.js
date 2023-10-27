module.exports = {
  injectTest: `
    test: {
      include: ['test/unit/**/*.spec.ts'],
      environment: 'jsdom',
      deps: {
        inline: ['@vue', '@vueuse'],
      }
    },
`,
};
