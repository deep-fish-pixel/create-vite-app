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

  if (answers.spa) {
    plugins.push('spa');
  }

  const appParams = {
    appName,
    isSingle: !answers.spa,
    ...frameworkHandler(composer, framework).params,
  };

  return searchTemplates(
    `plugins/${framework}`,
    'base',
    handlers[framework].base(composer, answers['base'])
  ).then((baseResult) => {
    const baseFiles = baseResult.files;
    const baseParams = baseResult.params || {};
    let params = {};

    return Promise.all(
      plugins.map((name) => {
        const handle = handlers[framework][name];

        return handle ? searchTemplates(
          `plugins/${framework}`,
          name,
          handle(composer, answers[name], answers)
        ) : {
          files: [],
          params: {},
        };
      })
    ).then((templateResults) => {
        // 解析所有参数
        params = templateResults.reduce(
          (params, templateResult) => ({ ...params, ...templateResult.params }),
          { ...answers, ...appParams, ...baseParams }
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
        return outputFileContents(appName, baseContentMap, answers.spa ? answers.spa : '', )
      })
      .then(() =>{
        // 安装操作
        if (!answers.spa) {
          return installApp(appName, _options.install);
        }
      });
  });
}

export default composeApp;
