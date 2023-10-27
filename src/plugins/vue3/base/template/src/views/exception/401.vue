<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const goBack = () => {
  router.push({
    name: 'home',
  });
};
</script>

<template>
  <div class="warning">
    <p><!---=noAuthorityReplace||页面无权限---></p>
    <button @click="goBack">
      <!---=resetReplace||返回--->
    </button>
  </div>
</template>

<style lang="<!---=precssor--->" scoped>
.warning{
  p{
    font-size: 20px;
    color: darkorange;
  }
}
</style>
