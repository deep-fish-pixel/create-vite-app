module.exports = {
  unityReplace: '{{ $t(\'unity\') }}',
  styleReplace: '{{ $t(\'style\') }}',
  counterReplace: '{{ $t(\'counter\') }}',
  progressReplace: '$t(\'progress\')',
  requestReplace: '$t(\'request\')',
  inject: `
    <router-link
      :to="{ name: 'i18n' }"
      class="router"
    >
      i18n
    </router-link>
`,
};
