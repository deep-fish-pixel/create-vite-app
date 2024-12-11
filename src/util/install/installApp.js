import path from 'path';
import execa from 'execa';
import ora from 'ora';
import chalk from 'chalk';
import { getPackageManageName } from './packageManage.js';

export default function installApp(appName, install) {
  const gitSpinner = ora('git init').start();
  const packageManageName = getPackageManageName();
  const pnpmSpinner = ora(`${packageManageName} install`);

  execa
    .command('git init', { cwd: path.join(process.cwd(), appName) })
    .then(() => {
      gitSpinner.succeed('git inited');
      if (install) {
        pnpmSpinner.start();
        return execa.command(`${packageManageName} install`, {
          cwd: path.join(process.cwd(), appName),
        });
      }
    })
    .then(() => {
      if (install) {
        pnpmSpinner.succeed(`${packageManageName} installed`);
      }
    })
    .then(() => {
      if (install) {
        console.log(
          `You can start dev serve by commands：\n${chalk.green(
            `cd ${appName} && npm run start`
          )}`
        );
      } else {
        console.log(
          `You can start dev serve by commands：\n${chalk.green(
            `cd ${appName} && ${packageManageName} install && npm run start`
          )}`
        );
      }
    }).catch((error) => {
      pnpmSpinner.fail(`${packageManageName} install failed`);
      console.log(
        `You can start dev serve by commands：\n${chalk.green(
          `cd ${appName} && ${packageManageName} install && npm run start`
        )}`
      );
  });
}
