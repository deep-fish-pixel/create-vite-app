<script setup lang="ts">
import useI18nStore from '@/store/i18nStore';

const i18nStore = useI18nStore();

const changeLanguage = () => {
  i18nStore.setLanguage(i18nStore.language);
};
</script>

<template>
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
</template>

<style lang="<!---=precssor--->" scoped>
.login{
  .success{
    color: darkgreen;
  }
}
select{
  background-color: #eee;
  border-style: solid;
  margin-left: 10px;
}
</style>
