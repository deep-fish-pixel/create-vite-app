import { assignConcat } from 'assign-deep-all';
import renderTemplate from './renderTemplate.js';

export default function mergeFileContents(baseFileMap, dataFileMaps, params) {
  // merge基础文件
  dataFileMaps.forEach((dataFileMap) => {
    dataFileMap.forEach((fileObjs, dataFileMapKey) => {
      fileObjs.forEach((fileObj) => {
        if(fileObj.filename.match(/main\.ts$|package\.json$/)){
          debugger
        }

        const baseFileOld = baseFileMap.get(fileObj.filename);

        if (/*!baseFileOld && */!fileObj.isTemplate) {
          const baseFile = baseFileOld ?  { content: fileObj.isJson ? baseFileOld[0].content || {} : '' } : { content: fileObj.isJson ? {} : '' };

          if (fileObj.isJson && !fileObj.isTemplate) {
            renderFile(baseFile, fileObj, params);
            baseFileMap.set(fileObj.filename, [
              { ...fileObj, content: baseFile.content },
            ]);
            dataFileMap.delete(dataFileMapKey);
          } else if (!fileObj.isTemplate) {
            baseFileMap.set(fileObj.filename, [
              { ...fileObj },
            ]);
            dataFileMap.delete(dataFileMapKey);
          }
        }
      });
    });
  });

  debugger
  // 替换全局参数
  dataFileMaps.forEach((dataFileMap) => {
    dataFileMap.forEach((fileObjs) => {
      fileObjs.forEach((fileObj) => {
        const baseFileOld = baseFileMap.get(fileObj.filename);

        if(fileObj.filename.match(/main\.ts$|package\.json$/)){
          debugger
        }

        if (baseFileOld) {
          baseFileOld.forEach((baseFile) => {
            renderFile(baseFile, fileObj, params);
          });
        }
      });
    });
  });
  return baseFileMap;
}

export function renderFile(baseFile, fileObj, params) {
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
