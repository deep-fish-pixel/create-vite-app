import createPackage from './createPackage.js';
import copyEntryTemplate from './copyEntryTemplate.js';

export default function (spaName, answers) {
  createPackage(spaName, answers);
  copyEntryTemplate(spaName, answers);
}