module.exports = {
  inject: `
    <router-link
      :to="{ name: 'test' }"
      class="router"
    >
      test
    </router-link>
`,
};
