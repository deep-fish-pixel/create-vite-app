import { registerMicroApps, start } from 'qiankun';
import { createApp } from 'vue';
import { setupStore } from '@/store';
import { setupRouter } from '@/router';
import { setupDirectives } from '@/directives';
//<---+import--->
import App from './App.vue';
//<---+importCss--->

const app = createApp(App);

// 配置store
setupStore(app);

// 配置路由
setupRouter(app);

// 配置指令
setupDirectives(app);

//<---+setup--->

app.mount('#app');

// 注册子应用
registerMicroApps([
  //<---=childAppConfigs--->
]);

// 启用微前端
start();
