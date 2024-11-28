import { renderWithQiankun, qiankunWindow }  from 'vite-plugin-qiankun/dist/helper';
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
