<script setup lang="ts">
import HelloWorld from '@/components/Welcome.vue';
</script>

<template>
  <hello-world :msg="<!---=welcomeReplace||'欢迎'--->" />
</template>
