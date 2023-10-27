<script setup lang="ts">
import { onUnmounted, onMounted } from 'vue';
import { useRouter } from 'vue-router/composables';

const router = useRouter();

onMounted(() => {
  console.log('onMounted===');
});

onUnmounted(() => {
  console.log('onUnmounted====');
});

const routerPush = (cache?: boolean) => {
  router.push({ name: 'keepAlivePush', cache });
};

const routerGo = (num: number, cache = true) => {
  router.go(num, { cache });
};
</script>

<template>
  <div class="apis">
    <ul class="buttons">
      <li>
        <h3>router.push/replace</h3>
      </li>
      <li>
        <button @click="routerPush()">
          <p>router.push({ name: 'some' })</p>
          <p>
            <!---=forbidReplace||禁止--->
            <!---=cacheReplace||缓存--->
          </p>
        </button>
      </li>
      <li>
        <button @click="routerPush(true)">
          <p>
            router.push({ name: 'some',
            <span class="stress">cache: true</span> })
          </p>
          <p>
            <!---=useReplace||使用--->
            <!---=cacheReplace||缓存--->
          </p>
        </button>
      </li>
    </ul>

    <ul class="buttons">
      <li>
        <h3>router.back/forward/go</h3>
      </li>
      <li>
        <button @click="routerGo(1)">
          <p>router.go(1)</p>
          <p>
            <!---=useReplace||使用--->
            <!---=cacheReplace||缓存--->
          </p>
        </button>
      </li>
      <li>
        <button @click="routerGo(1, false)">
          <p>router.go(1, { <span class="stress">cache: false</span> })</p>
          <p>
            <!---=forbidReplace||禁止--->
            <!---=cacheReplace||缓存--->
          </p>
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="<!---=precssor--->" scoped>
.apis{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.buttons{
  list-style: none;
  border: 1px dashed;
  margin-right: 10px;
  li{
    margin: 10px;
  }
}
.stress{
  color: #bd34fe;
}
</style>
