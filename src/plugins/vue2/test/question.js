export default {
  type: 'list',
  name: 'test',
  message: 'Select unit/e2e test',
  choices: [
    { name: 'Unit test', value: 'unit', default: true },
    { name: 'E2e test', value: 'e2e', default: true },
    { name: 'All tests', value: 'all' },
    { name: 'No test', value: 'no' },
  ],
};
