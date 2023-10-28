<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router/composables';

const route = useRoute();
const router = useRouter();
const num = ref('');
</script>

<template>
  <div>
    <p>route.meta.cache: {{ route.meta?.cache }}</p>
    <!---=inputReplace||输入--->：<input v-model="num" />
    <button @click="router.back()">
      <!---=gobackReplace||返回--->
    </button>
  </div>
</template>

<style lang="<!---=precssor--->" scoped>
button{
  margin-left: 10px;
}
</style>
