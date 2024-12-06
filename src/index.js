import inquirer from 'inquirer';
import promptAppConfigs from './util/promptAppConfigs.js';
import { framework } from './util/qa/questions.js';

export default function promptFramework(appName, isSPA = false, spaAnswers = {}) {
  inquirer.prompt(framework).then((answers) => {
    promptAppConfigs(appName, answers.framework, isSPA, spaAnswers);
  });
}
