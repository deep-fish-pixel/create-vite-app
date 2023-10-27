export default {
  type: 'list',
  name: 'precss',
  message: 'Select a precss',
  choices: [
    { name: 'Scss', value: 'scss', default: true },
    { name: 'Less', value: 'less' },
    { name: 'Stylus', value: 'stylus' },
  ],
};
