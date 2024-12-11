import inquirer from 'inquirer';
import spaQuestion from './questions/spa.js';
import mainAppNameQuestion from './questions/mainAppName.js';
import childAppsNumberQuestion from './questions/childAppsNumber.js';
import childAppNameQuestion from './questions/childAppName.js';
import promptFramework from '../index.js';
import composeApp from "../util/composeApp.js";
import createEntryTemplate from "./util/entryTemplate/index.js";
import installApp from "./util/installApp.js";

export default function spaPromptFramework() {
  inquirer.prompt(spaQuestion.question).then((spaAnswers) => {
    inquirer.prompt(mainAppNameQuestion.question).then((mainAppNameAnswers) => {
      inquirer.prompt(childAppsNumberQuestion.question).then((childAppsNumberAnswers) => {
        const list = [];

        for (let index = 0; index < childAppsNumberAnswers.childAppNumber; index++) {
          list.push(childAppNameQuestion);
        }

        loopQuestionsPromise(list, 0, []).then((childResults) => {
          console.log(spaAnswers, mainAppNameAnswers, childAppsNumberAnswers, childResults);

          promptFramework(mainAppNameAnswers.mainApp, true, {
            spa: spaAnswers.spa,
            spaMain: mainAppNameAnswers.mainApp,
            childApps: childResults,
          }).then((answers) => {
            debugger
            createEntryTemplate(answers);
            return Promise.all(childResults.map((childResult, index) => {
              const childAnswers = {
                ...answers,
                spa: spaAnswers.spa,
                spaMain: false,
                childApps: [],
                serverPort: 7143 + index + 1,
              };

              return composeApp(childResult.childApp, childAnswers.framework, childAnswers);
            })).then(() => {
              installApp(spaAnswers.spa, mainAppNameAnswers.mainApp, childResults.map(child => child.childApp));
            });
            // installApp(spaAnswers.spa, true);

          });
        });
      });
    });
  });
}

function loopQuestionsPromise(list, index=0, answers = []) {
  return new Promise((resolve, reject) => {
    loopQuestions(list, index, answers, resolve);
  })
}

function loopQuestions(list, index=0, answers = [], resolve = () => null) {
  if (list[index]) {
    inquirer.prompt({
      ...list[index].question,
      message: indexToOrdinalNumbers(list[index].question.message, index),
      default: indexToOrdinalNumbers(list[index].question.default, index)
    }).then((spaAnswers) => {
      answers.push(spaAnswers);
      return loopQuestions(list, ++index, answers, resolve);
    });
  } else {
    resolve(answers);
  }
}

function indexToOrdinalNumbers(content, index) {
  const ordinalNumbers = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth',];
  return content.replace(/\$\{index}/g, ordinalNumbers[index]);
}
