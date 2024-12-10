import createPackage from './createPackage.js';
import copyEntryTemplate from './copyEntryTemplate.js';

export default function (answers) {
  createPackage(answers);
  copyEntryTemplate(answers);
}