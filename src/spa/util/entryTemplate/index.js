import createPackage from './createPackage.js';
import copyEntryTemplate from './copyEntryTemplate.js';
import createMicroChildApps from './createMicroChildApps.js';

export default function (spaName, answers) {
  createPackage(spaName, answers);
  copyEntryTemplate(spaName, answers);
  createMicroChildApps(spaName, answers);
}