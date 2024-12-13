<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div class="routers">
    //<---=childRouterLinks--->
  </div>
  <keep-alive-vue3 :cache="route.meta?.cache" />
</template>

<style lang="<!---=precssor--->">
.routers{
  .router{
    color: #646cff;
  }
  .router-link-active{
    color: #42b883;
  }
}
</style>

<style lang="<!---=precssor--->" scoped>
.routers{
  margin-bottom: 100px;
}
.router{
  margin-right: 20px;
}
</style>
