export default {
  question: {
    type: 'number',
    name: 'childAppNumber',
    message: 'Set the number of your child apps',
    default: 2,
    validate: function(value) {
      if (value < 1 || value > 10) {
        return 'Number must be between 1 and 10';
      }
      return true;
    }
  },
  handler(composer, value){
    return {
      params: {
        value,
      },
    };
  }
};

