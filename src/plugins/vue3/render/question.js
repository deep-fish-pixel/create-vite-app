export default {
  type: 'list',
  name: 'render',
  message: 'Select a render mode',
  choices: [
    { name: 'CSG', value: 'csg' },
    { name: 'SSG', value: 'ssg' },
    { name: 'SSR', value: 'ssr' },
  ],
};
