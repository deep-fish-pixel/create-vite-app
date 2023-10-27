<script setup lang="ts">
import useI18nStore from '@/store/i18nStore';
import loadLocaleMessages from '@/locales/helper/loadLocaleMessages';

const i18nStore = useI18nStore();

const changeLanguage = () => {
  loadLocaleMessages(i18nStore.language);
};
</script>

<template>
  <div>
    <div>
      {{ $t('change locale') }}
      <select v-model="i18nStore.language" @change="changeLanguage()">
        <option
          v-for="language in i18nStore.languages"
          :key="language"
          :value="language"
          :label="$t(language)"
        />
      </select>
      <p>{{ $t('current locale') }}：{{ i18nStore.language }}</p>
    </div>
    {{ $t('hello') }},
    {{ $t('welcome to') }}
    {{ $t('demo display') }}
  </div>
</template>

<style lang="<!---=precssor--->" scoped>
.login{
  .success{
    color: darkgreen;
  }
}
</style>
