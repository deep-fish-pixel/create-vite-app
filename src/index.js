import inquirer from 'inquirer';
import promptAppConfigs from './util/promptAppConfigs.js';
import { framework } from './util/qa/questions.js';

export default function promptFramework(appName, isSPA = false, spaAnswers = {}) {
  return inquirer.prompt(framework).then((answers) => {
    return promptAppConfigs(appName, answers.framework, isSPA, spaAnswers);
  });
}
