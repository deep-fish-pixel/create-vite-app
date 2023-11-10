<script setup lang="ts">
//<---#if(h5)--->
import { showToast } from 'vant';
//<---#if--->
import useUserStore from '@/store/userStore';

const userStore = useUserStore();

function login() {
//<---#if(h5)--->
  showToast('登录中');
  userStore
    .login()
    .then(() => {
      showToast('登录成功');
    })
    .catch(() => {
      showToast('登录失败');
    });
//<---#if--->
//<---#if(web)--->
  userStore.login();
//<---#if--->
}

function getUserInfo() {
//<---#if(h5)--->
  userStore
    .getUserInfo()
    .then(() => {
      showToast(`用户姓名 ${userStore.user.name}`);
    })
    .catch(() => {
      showToast('获取用户信息失败');
    });
//<---#if--->
//<---#if(web)--->
  userStore.getUserInfo();
//<---#if--->
}
</script>

<template>
  <p class="login">
    <button v-if="!userStore.getAccount" @click="login"><!---=loginReplace||登录---></button>
    <span v-else class="success">account: {{ userStore.getAccount }} </span>
  </p>
  <p v-if="!userStore.getUser.username">
    <button @click="getUserInfo"><!---=getReplace||获取---><!---=userinfoReplace||用户信息---></button>
  </p>
  <div v-else class="success">
    <div><!---=userinfoReplace||用户信息---></div>
    {{ userStore.getUser }}
  </div>
  <button @click="userStore.reset()"><!---=resetReplace||重置---></button>
  <p>
    <a
      target="_blank"
      href="https://www.npmjs.com/package/vite-plugin-mock-dev-server"
      >Typescript Mock</a
    >
  </p>
</template>

<style lang="<!---=precssor--->" scoped>
.login {
  .success {
    color: darkgreen;
  }
}

button{
  background-color: #eee;
  border-style: inherit;
  margin-left: 10px;
  margin-top: 10px;
}
</style>
