import inquirer from 'inquirer';
import composeApp from './composeApp.js';
import questions from './qa/questions.js';

export default function promptAppConfigs(appName, framework, isSPA, spaAnswers) {
  if (!questions[framework]) {
    console.error(`暂不支持${framework}`);
    return;
  }

  const frameworkQuestions = [...questions[framework]];

  if(framework === 'vue3'){
    frameworkQuestions.splice(3, 1);
  }

  return new Promise((resolve, reject) => {
    inquirer.prompt(frameworkQuestions).then(() => {
      // 框架名称
      answers.framework = framework;

      resolve({
        ...answers,
      });

      // spa的回答
      Object.assign(answers, spaAnswers);

      composeApp(appName, framework, answers);
    });
  })

}
