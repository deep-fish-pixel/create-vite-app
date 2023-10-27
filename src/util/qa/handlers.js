import vue2 from './vue2/handlers.js';
import vue3 from './vue3/handlers.js';

export function framework(composer, framework) {
  return {
    filePaths: [],
    params: {
      vue2: framework === 'vue2',
      vue3: framework === 'vue3',
      // react: framework === 'react',
    },
  };
}

export default {
  vue2,
  vue3,
};
