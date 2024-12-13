import { renderWithQiankun, qiankunWindow }  from 'vite-plugin-qiankun/dist/helper';
import Vue from 'vue';
import { router, setupRouter } from '@/router';
import setupDirectives from '@/directives';
import pinia from '@/store';
//<---+import--->
import App from './App.vue';
//<---+importCss--->

let app: any = null;

function appMount(props: any) {
  const { container } = props;

  // 配置路由
  setupRouter();

  // 配置指令
  setupDirectives();

  //<---+setup--->

  app = new Vue({
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

// 启动入口
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  appMount({})
} else {
  renderWithQiankun({
    mount(props) {
      appMount(props)
    },
    bootstrap() {
      console.log('react app bootstraped');
    },
    unmount(props) {
      appUnmount();
    },
    update(props) {
      console.log('update props', props);
    }
  })
}
