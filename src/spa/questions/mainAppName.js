export default {
  question: {
    type: 'list',
    name: 'spa',
    message: 'Set main app name',
    choices: [
      { name: 'qiankun', value: 'qiankun', default: true },
      { name: 'micro-app', value: 'micro-app' },
    ],
  },
  handler(composer, value){
    return {
      filePaths: [`../plugins/vue3/spa/${value}`],
      params: {
        precssor: value,
      },
    };
  }
};
