import { assignConcat } from 'assign-deep-all';
import renderTemplate from './renderTemplate.js';

export default function mergeFileContents(baseFileMap, dataFileMaps, params) {
  dataFileMaps.forEach((dataFileMap) => {
    dataFileMap.forEach((fileObjs) => {
      fileObjs.forEach((fileObj) => {
        const baseFiles = baseFileMap.get(fileObj.filename);

        if (!baseFiles) {
          const baseFile = { content: fileObj.isJson ? {} : '' };

          renderFile(baseFile, fileObj, params);
          baseFileMap.set(fileObj.filename, [
            { ...fileObj, content: baseFile.content },
          ]);
        } else {
          baseFiles.forEach((baseFile) => {
            renderFile(baseFile, fileObj, params);
          });
        }
      });
    });
  });
  return baseFileMap;
}

function renderFile(baseFile, fileObj, params) {
  if (fileObj.isJson) {
    assignConcat(baseFile.content, fileObj.content);
  } else if (fileObj.isTemplate) {
    baseFile.content = renderTemplate(
      baseFile.content,
      fileObj.content,
      params
    );
  } else if (typeof fileObj.content === 'string') {
    baseFile.content = renderTemplate(fileObj.content, params);
  } else {
    // handle json object
    baseFile.content = fileObj.content;
  }
}
