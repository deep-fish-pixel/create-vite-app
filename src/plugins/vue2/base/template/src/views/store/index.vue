<script setup lang="ts">
import useCounterStore from '@/store/counterStore';

const store = useCounterStore();
</script>

<template>
  <div>
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
  </div>
</template>
