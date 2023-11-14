import searchTemplates from './file/searchTemplates.js';
import mergeFileContents from './file/mergeFileContents.js';
import outputFileContents from './file/outputFileContents.js';
import getFileContentMap from './file/getFileContentMap.js';
import createGitignoreFile from './file/createGitignoreFile.js';
import installApp from './install/installApp.js';
import composer from './composer.js';
import handlers, { framework as frameworkHandler } from './qa/handlers.js';

function composeApp(appName, framework, answers, options = {}) {
  const _options = { install: true, ...options };
  const plugins = ['precss', 'i18n', 'terminal', 'pwa', 'render', 'test'];
  const appParams = {
    appName,
    ...frameworkHandler(composer, framework).params,
  };

  searchTemplates(
    framework,
    'base',
    handlers[framework].base(composer, answers['base'])
  ).then((baseResult) => {
    const baseFiles = baseResult.files;
    const baseParams = baseResult.params || {};
    let params = {};

    Promise.all(
      plugins.map((name) => {
        const handle = handlers[framework][name];

        return handle ? searchTemplates(
          framework,
          name,
          handle(composer, answers[name])
        ) : {
          files: [],
          params: {},
        };
      })
    ).then((templateResults) => {
        // 解析所有参数
        params = templateResults.reduce(
          (params, templateResult) => ({ ...params, ...templateResult.params }),
          { ...appParams, ...baseParams }
        );
        // 获取文件内容
        return Promise.all(
          [
            baseFiles,
            ...templateResults.map((templateResult) => templateResult.files),
          ].map((files) => getFileContentMap(files, params))
        );
      })
      .then(([baseContentMap, ...dataContentMaps]) => {
        // 设置项目名称
        if (baseContentMap.get('./package.json')) {
          baseContentMap.get('./package.json')[0].content.name = appName;
        }
        createGitignoreFile(baseContentMap);

        // merge文件内容
        return mergeFileContents(baseContentMap, dataContentMaps, {
          ...params,
        });
      })
      .then((baseContentMap) => {
        // 输出文件内容
        return outputFileContents(appName, baseContentMap)
      })
      .then(() =>
        // 安装操作
        installApp(appName, _options.install)
      );
  });
}

export default composeApp;
