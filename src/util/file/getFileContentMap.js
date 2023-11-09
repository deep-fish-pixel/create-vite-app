import fse from 'fs-extra';
import renderTemplate from './renderTemplate.js';

function getFileContents(filePathes, params) {
  return Promise.all(
    filePathes.map((filePath) => {
      if (filePath.match(/\.json$/)) {
        return fse.readJson(filePath);
      }
      else if (filePath.match(/\.(png|jpg|jpeg|ico|svg)$/)) {
        return fse.readFile(filePath);
      }
      return fse
        .readFile(filePath, { encoding: 'utf-8' })
        .then((content) => {
          return renderTemplate(content, params)
        });
    })
  );
}

export default function getFileContentMap(filePathes, params) {
  const fileMap = new Map();

  return getFileContents(filePathes, params)
    .then((fileContents) => {
      fileContents.forEach((fileContent, index) => {
        const filename = filePathes[index].replace(/\.tpl\.js$/, '');
        const relativeFilename = filename.replace(/.*\/template\//, './');
        const isTemplate = !!filePathes[index].match(/\.tpl\.js$/);
        const isFile = !!filePathes[index].match(/\.(png|jpg|jpeg|ico|svg)$/);

        const value = {
          isJson: !!filePathes[index].match(/\.json$/),
          isTemplate,
          isFile,
          content: isTemplate ? requireObject(fileContent) : fileContent,
          filename: relativeFilename,
        };

        if (fileMap.has(relativeFilename)) {
          const values = fileMap.get(relativeFilename);

          values.push(value);
        } else {
          fileMap.set(relativeFilename, [value]);
        }
      });
    })
    .then(() => fileMap);
}

function requireObject(fileContent) {
  return new Function(
    [],
    fileContent.replace(/(module\.exports\s*=|export default)\s*/, 'return ')
  )();
}
