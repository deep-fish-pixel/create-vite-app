import vue2 from './vue2/questionList.js';
import vue3 from './vue3/questionList.js';

export const framework = {
  type: 'list',
  name: 'framework',
  message: 'Select a framework',
  choices: [
    { name: 'vue3', value: 'vue3' },
    { name: 'vue2', value: 'vue2' },
  ],
  default: 'vue3'
};

export default {
  vue2,
  vue3,
};
