export default {
  question: {
    type: 'list',
    name: 'spa',
    message: 'Select a SPA framework',
    choices: [
      { name: 'qiankun', value: 'qiankun', default: true },
      { name: 'micro-app', value: 'micro-app' },
    ],
  },
  handler(composer, value, answers){
    return {
      filePaths: [`../../../spa/plugins/${answers.framework}/spa/${value}/${answers.spaMain ? 'main' : 'child'}`],
      params: {
        injectChildApp: answers.spaMain ? '<div id="childApp"></div>' : '',
        childAppConfigs: (answers.childApps || []).map((child, index) => `{
    name: '${child.childApp}',
    entry: 'http://localhost:${5173 + index + 1}',
    container: '#childApp',
    activeRule: '/${child.childApp}',
  }`).join(', ') + ',',
        childRouterLinks: (answers.childApps || []).map((child, index) => `<router-link :to="{ path: '/${child.childApp}' }" class="router" :class="{
      'router-link-active': route.path.match(/\\/${child.childApp}/)
    }">
      ${child.childApp.replace(/\w/, all => all.toUpperCase())}
    </router-link>`).join('\n    '),
        childRouters: (answers.childApps || []).map((child, index) => `{
    path: '/${child.childApp}/:id?',
    name: '${child.childApp}',
    component: () => import('@/views/apps/${child.childApp}.vue'),
  },`).join('\n    '),
      },
    };
  }
};
