import path from 'path';
import execa from 'execa';
import ora from 'ora';
import chalk from 'chalk';
import { getPackageManageName } from '../../util/install/packageManage.js';

export default function installApp(entryAppName, mainApp, childApps, install) {
  const gitSpinner = ora('git init').start();
  const packageManageName = getPackageManageName();
  const pnpmSpinner = ora(`${packageManageName.replace(/^\w/, char => char.toUpperCase())} is installing all ${entryAppName} apps `);

  pnpmSpinner.start();

  const apps = [entryAppName, mainApp, ...childApps].map((name, index) => ({
    name,
    path: index > 0 ? `${entryAppName}/${name}` : entryAppName,
  }));

  const gitInitCommands = apps.map(app => execa.command('git init', { cwd: path.join(process.cwd(), app.path) }));

  return Promise.all(gitInitCommands)
    .then(() => {
      apps.forEach((app) => {
        gitSpinner.succeed(`${app.name} git inited`);
      });
    })
    .then(() => {
      console.log(
        `You can start dev serve by commands：\n${chalk.green(
          `cd ${entryAppName} && ${packageManageName} install && npm run start`
        )}`
      );
    }).catch((error) => {
      // console.error(error);
      // pnpmSpinner.fail(`${packageManageName} install failed`);
      console.log(
        `You can start dev serve by commands：\n${chalk.green(
          `cd ${entryAppName} && ${packageManageName} install && npm run start`
        )}`
      );
    });
}
