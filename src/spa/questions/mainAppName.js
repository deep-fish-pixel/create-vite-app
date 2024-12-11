export default {
  question: {
    type: 'input',
    name: 'mainApp',
    message: 'Set your main app name',
    default: 'main'
  },
  handler(composer, value){
    return {
      params: {
        value,
      },
    };
  }
};
