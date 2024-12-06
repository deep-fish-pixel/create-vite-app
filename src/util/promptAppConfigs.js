import inquirer from 'inquirer';
import composeApp from './composeApp.js';
import questions from './qa/questions.js';

export default function promptAppConfigs(appName, framework, isSPA, spaAnswers) {
  if (!questions[framework]) {
    console.error(`暂不支持${framework}`);
    return;
  }

  const frameworkQuestions = [...questions[framework]];
  debugger
  if(framework === 'vue3'){
    frameworkQuestions.splice(3, 1);
  }

  inquirer.prompt(frameworkQuestions).then((answers) => {
    // 框架名称
    answers.framework = framework;
    // spa的回答
    Object.assign(answers, spaAnswers);
    debugger
    composeApp(appName, framework, answers);
  });
}
