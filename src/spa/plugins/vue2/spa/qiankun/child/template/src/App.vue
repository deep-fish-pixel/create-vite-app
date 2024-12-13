<script setup lang="ts">
import { useRoute } from 'vue-router/composables';

const route = useRoute();
</script>

<template>
  <div class="child-app">
    <p class="app-name"><!---=appName---></p>
    <div class="routers">
      <router-link :to="{ name: 'eslint' }" class="router">
        eslint
        <!---=styleReplace||规范--->
      </router-link>
      <router-link :to="{ name: 'store' }" class="router">
        pinia
        <!---=counterReplace||计数器--->
      </router-link>
      <router-link :to="{ name: 'tsx' }" class="router">
        tsx
        <!---=counterReplace||计数器--->
      </router-link>
      <router-link :to="{ name: 'ajax' }" class="router">
        {{
        <!---=requestReplace||'请求'---><!---#if(web)--->
        + ' + ' +
        <!---=progressReplace||'进度条'---><!---#if--->
        + '+ Mock' }}
      </router-link>
      <router-link :to="{ name: 'keepAlive' }" class="router">
        KeepAliveVue3
      </router-link>
      <!---+inject--->
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

</style>

<style lang="<!---=precssor--->" scoped>
.child-app{
  border: 1px dashed #ccc;
  position: relative;
  padding: 40px 0;

  .app-name{
    position: absolute;
    top: -29px;
    left: 14px;
    z-index: 4;
    padding: 0;
    color: #999;
    background: #fff;
  }
}

.routers{
  margin-bottom: 100px;
}
.router{
  margin-right: 20px;
}

</style>
