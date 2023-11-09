import inquirer from 'inquirer';
import composeApp from './composeApp.js';
import questions from './qa/questions.js';

export default function promptAppConfigs(appName, framework) {
  if (!questions[framework]) {
    console.error(`暂不支持${framework}`);
    return;
  }

  debugger
  inquirer.prompt(questions[framework]).then((answers) => {
    composeApp(appName, framework, answers);
  });
}
