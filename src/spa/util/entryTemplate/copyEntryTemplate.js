import path from "path";
import fse from 'fs-extra';
import searchTemplates from "../../../util/file/searchTemplates.js";
import handlers from "../../../util/qa/handlers.js";
import composer from "../../../util/composer.js";
import outputFileContents from "../../../util/file/outputFileContents.js";
import mergeFileContents, {renderFile} from "../../../util/file/mergeFileContents.js";
import getFileContentMap from "../../../util/file/getFileContentMap.js";

export default function (answers) {
  searchTemplates(
    'spa',
    'entry',
    {
      filePaths: ['template']
    }
  ).then((baseResult) => {
    const baseFiles = baseResult.files;
    const params = { ...answers, Spa: answers.spa.replace(/^\d/, (char) => char.toUpperCase()) };

    return getFileContentMap(baseFiles, params);
  }).then((baseContentMap) => {
    // 输出文件内容
    debugger
    return outputFileContents(answers.spa, baseContentMap, '')
  })
}