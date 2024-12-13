#!/usr/bin/env node
import { Command } from 'commander';
import fse from 'fs-extra';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import promptFramework from '../src/index.js';
import spaPromptFramework from '../src/spa/spaPromptFramework.js';
import composeApp from '../src/util/composeApp.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const program = new Command();
const packageJson = fse.readJson(path.join(__dirname, '../package.json'));

program
  .name('vite-vue-pro')
  .description('CLI to create vue3/vue2 web/h5 template project')
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
