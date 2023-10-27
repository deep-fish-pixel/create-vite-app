import fse from 'fs-extra';
import path from 'path';
import ora from 'ora';
import composer from '../composer.js';

export default function outputFileContents(appName, fileMap) {
  const createFileSpinner = ora('creating files ...').start();

  try {
    fileMap.forEach((files) => {
      const file = files[0];
      const output = file.isJson
        ? JSON.stringify(file.content, null, 2)
        : file.content
            .replace(RegExp('(//<|<!)---=\\w+\\|\\|([^>]*)--->', 'g'), '$2')
            .replace(RegExp('(\\n+)( *)(//<|<!)(---\\+\\w+--->)', 'g'), '');

      fse.outputFileSync(
        path.join(process.cwd(), appName, file.filename),
        composer.runOutputFilters(output, file.filename)
      );
    });
    createFileSpinner.succeed(`${appName} project created`);
  } catch (e) {
    createFileSpinner.stop();
    throw e;
  }
}
