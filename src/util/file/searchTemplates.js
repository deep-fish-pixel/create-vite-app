import recursive from 'recursive-readdir';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function searchTemplates(framework, name, result) {
  return new Promise((resolve) => {
    const { filePaths, params } = result;

    Promise.all(
      (filePaths || []).map((pathName) =>
        {
          const filepath = path.join(
            __dirname,
            __filename.match(/searchTemplates\.js/) ? '../../' : '',
            `plugins/${framework}`,
            name,
            pathName
          );
          return recursive(
            filepath,
            ['.DS_Store', `${name}/handler.js`, `${name}/question.js`]
          ).then((files) => files.filter((file) => !!file.match(/\/template\//)));
        }
      )
    ).then((files) => {
      resolve({
        files: files.flat(),
        params,
      });
    });
  });
}
