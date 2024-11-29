import Vue from 'vue';
import { router, setupRouter } from '@/router';
import setupDirectives from '@/directives';
import pinia from '@/store';
//<---+import--->
import App from './App.vue';
//<---+importCss--->

let router = null;
let app: any = null;

function appMount(props: any) {
  const { container } = props;

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
  }).$mount(container ? container.querySelector('#app') : '#app');
}

function appUnmount() {
  app.$destroy();
  app.$el.innerHTML = '';
  app = null;
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
