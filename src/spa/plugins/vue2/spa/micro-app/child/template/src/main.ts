import { createApp } from 'vue';
import { setupStore } from '@/store';
import { setupRouter } from '@/router';
import { setupDirectives } from '@/directives';
//<---+import--->
import App from './App.vue';
//<---+importCss--->

let router = null;
let app: any = null;

function appMount(props: any) {
  const { container } = props;

  app = createApp(App);

  // 配置store
  setupStore(app);

  // 配置路由
  router = setupRouter(app);

  // 配置指令
  setupDirectives(app);

  //<---+setup--->

  app.mount(container ? container.querySelector('#app') : '#app');
}

function appUnmount() {
  app.unmount();
  app = null;
  router = null;
}

// 挂载全局加载
window.mount = () => {
  appMount({})
}

// 挂载全局卸载
window.unmount = () => {
  appUnmount();
}

// 非微前端环境，启用
if (!window.__MICRO_APP_ENVIRONMENT__) {
  window.mount()
}
