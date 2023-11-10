export default {
  type: 'list',
  name: 'render',
  message: 'Select a render mode',
  choices: [
    { name: 'CSG', value: 'csr' },
    { name: 'SSG', value: 'ssg' },
    { name: 'SSR', value: 'ssr' },
  ],
};
