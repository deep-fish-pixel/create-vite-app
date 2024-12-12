<script setup lang="ts">
import IconVue from '@/components/svg/IconVue.vue';

defineProps<{ msg: string }>();
</script>

<template>
  <a href="https://vuejs.org/" target="_blank">
    <IconVue class="logo vue" alt="Vue logo" />
  </a>
  <h3>{{ msg }}</h3>
</template>

<style lang="<!---=precssor--->" scoped>
.read-the-docs {
  color: #888;
}
</style>
