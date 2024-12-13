import fse from 'fs-extra';
import path from 'path';
import ora from 'ora';
import composer from '../composer.js';

export default function outputFileContents(appName, fileMap, subDir) {
  const createFileSpinner = ora('creating files ...').start();

  try {
    fileMap.forEach((files) => {
      const file = files[0];

      if(file.filename.indexOf('vite.config.ts') >= 0){
        debugger
      }

      if (file.isFile) {
        fse.outputFileSync(
          path.join(process.cwd(), subDir, appName, file.filename),
          file.content,
        );
      } else {
        let output = '';
        if (file.isJson) {
          output = JSON.stringify(file.content, null, 2);
        } else if (file.filename.match(/\.vue$/) ) {
          output = file.content.replace(RegExp('(//<|<!)---=\\w+\\|\\|([^>]*)--->', 'g'), '$2')
            .replace(RegExp('(\\n+)( *)(//<|<!)(---\\+\\w+--->)', 'g'), '');
        } else {
          output = file.content.replace(RegExp('(\\n+)?( *)?(//<|<!)---=([^>]*)--->', 'g'), '')
            .replace(RegExp('(\\n+)( *)(//<|<!)(---\\+\\w+--->)', 'g'), '');
        }

        fse.outputFileSync(
          path.join(process.cwd(), subDir, appName, file.filename),
          composer.runOutputFilters(output, file.filename)
        );
      }
    });
    createFileSpinner.succeed(`${appName} project created`);
  } catch (e) {
    createFileSpinner.stop();
    throw e;
  }
}
