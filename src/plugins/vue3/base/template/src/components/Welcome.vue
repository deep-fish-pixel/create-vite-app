<script setup lang="ts">
import vueSvg from '../assets/images/vue.svg';

defineProps<{ msg: string }>();
</script>

<template>
  <a href="https://vuejs.org/" target="_blank">
    <img :src="vueSvg" class="logo vue" alt="Vue logo" />
  </a>
  <h3>{{ msg }}</h3>
</template>

<style lang="<!---=precssor--->" scoped>
.read-the-docs {
  color: #888;
}
</style>
