<script setup lang="ts">
import { useRoute } from 'vue-router/composables';

const route = useRoute();
</script>

<template>
  <div class="routers">
    <div class="routers">
      //<---=childRouterLinks--->
    </div>
    <keep-alive-vue2 :cache="route.meta?.cache" />
  </div>
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

#childApp #app{
  border: 1px dashed #ccc;
  position: relative;
  &::before {
     content: "First Child App";
     position: absolute;
     top: -12px;
     left: 18px;
     z-index: 4;
     padding: 0 4px;
     color: #999;
     background: #fff;
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
