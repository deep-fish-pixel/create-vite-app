import { registerMicroApps, start } from 'qiankun';
import Vue from 'vue';
import { router, setupRouter } from '@/router';
import setupDirectives from '@/directives';
import pinia from '@/store';
//<---+import--->
import App from './App.vue';
//<---+importCss--->

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

// 注册子应用
registerMicroApps([
  //<---=childAppConfigs--->
]);

// 启用微前端
start();
