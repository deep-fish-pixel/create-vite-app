import vue2 from './vue2/questionList.js';
import vue3 from './vue3/questionList.js';

export const framework = {
  type: 'list',
  name: 'framework',
  message: 'Select a framework',
  choices: [
    { name: 'vue3', value: 'vue3', default: true },
    { name: 'vue2', value: 'vue2' },
    // { name: 'react', value: 'react', disabled: true, },
  ],
};

export default {
  vue2,
  vue3,
};
