<template>
  <div class="micro-app">
    <micro-app
      name='first'
      url='http://localhost:5174/'
      iframe
      :data='data'
      router-mode='native'
    >
    </micro-app>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const data = ref({from: '来自基座的初始化数据'})

</script>

<style lang="scss">
.micro-app{
  border: 1px dashed #ccc;
  position: relative;
  &::before {
    content: "子项目";
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
