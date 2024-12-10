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
    debugger
    return {
      filePaths: [`../../../spa/plugins/${answers.framework}/spa/${value}/${answers.spaMain ? 'main' : 'child'}`],
      params: {
        childAppConfigs: answers.childApps.map((child, index) => `{
    name: '${child.childApp}',
    entry: 'http://localhost:${5173 + index + 1}',
    container: '#childApp',
    activeRule: '/${child.childApp}',
  }`).join(', ') + ',',
      },
    };
  }
};
