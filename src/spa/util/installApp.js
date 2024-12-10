import path from 'path';
import execa from 'execa';
import ora from 'ora';
import chalk from 'chalk';
import { getPackageManageName } from '../../util/install/packageManage.js';

export default function installApp(appName, install) {
  const packageManageName = getPackageManageName();
  const pnpmSpinner = ora(`Installing all ${appName} apps `);

  pnpmSpinner.start();
  execa.command(`${packageManageName} install`, {
    cwd: path.join(process.cwd(), appName),
  }).then(() => {
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
  });
}
