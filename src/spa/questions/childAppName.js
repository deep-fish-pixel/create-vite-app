export default {
  question: {
    type: 'input',
    name: 'childApp',
    message: 'Set your ${index} child app name',
    default: '${index}ChildApp'
  },
  handler(composer, value){
    return {
      params: {
        value,
      },
    };
  }
};
