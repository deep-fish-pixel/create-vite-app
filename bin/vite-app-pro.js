#!/usr/bin/env node
const { Command } = require('commander');
const chalk = require('chalk');
const packageJson = require('../package.json');
const composeApp = require('../src/util/composeApp');
const promptFramework = require('../src/index');
const spaPromptFramework = require('../src/spa/spaPromptFramework');

const program = new Command();

program
  .name('vite-vue-pro')
  .description('CLI to create vue web/h5 template app')
  .version(packageJson.version);

program
  .command('create')
  .description('Create a new app')
  .argument('<app-name>', 'app name')
  .option('-a, --answers [answers...]', 'provide answer values')
  .action((str, options) => {
    if (options.answers) {
      if (options.answers === true) {
        options.answers = [];
      }
      if (typeof options.answers === 'string') {
        options.answers = [options.answers];
      }
      const answerMap = options.answers.reduce(
        (previousValue, currentValue) => {
          const keyValue = currentValue.split('=');

          previousValue[keyValue[0]] = keyValue[1];
          return previousValue;
        },
        {}
      );

      if (!answerMap.framework) {
        console.error(
          chalk.red('Missing framework name. (framework=[vue3|vue2])')
        );
        return;
      }
      if (!answerMap.terminal) {
        console.error(chalk.red('Missing terminal name. (terminal=[web|h5])'));
        return;
      }
      return composeApp(
        str,
        answerMap.framework,
        {
          precss: 'scss',
          i18n: true,
          test: 'all',
          ...answerMap,
        },
        {
          install: false,
        }
      );
    }
    promptFramework(str);
  });

program
  .command('create-spa')
  .description('Create a spa, contains spa entry、main app and child apps')
  .argument('<spa-name>', 'spa name')
  .action((str, options) => {
    spaPromptFramework(str);
  });

program.parse();
