<script setup lang="ts">
import useCounterStore from '@/store/counterStore';

const store = useCounterStore();
</script>

<template>
  <h2>{{ store.count }}</h2>
  <button @click="store.increment()">
    <!---=addReplace||增加--->
  </button>
  <button @click="store.decrement()">
    <!---=subReplace||减少--->
  </button>
  <button @click="store.reset()">
    <!---=resetReplace||重置--->
  </button>
</template>

<style lang="<!---=precssor--->" scoped>
button{
  background-color: #eee;
  border-style: inherit;
  margin-left: 10px;
  margin-top: 10px;
}
</style>
