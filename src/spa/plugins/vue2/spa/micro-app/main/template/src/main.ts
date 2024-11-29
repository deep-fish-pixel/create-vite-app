import microApp from '@micro-zoe/micro-app'
import Vue from 'vue';
import { router, setupRouter } from '@/router';
import setupDirectives from '@/directives';
import pinia from '@/store';
//<---+import--->
import App from './App.vue';
//<---+importCss--->

// 启用微前端
microApp.start();

// 配置路由
setupRouter();

// 配置指令
setupDirectives();

//<---+setup--->

new Vue({
  router,
  pinia,
  //<---+inject--->
  render: (h) => h(App),
}).$mount('#app');

