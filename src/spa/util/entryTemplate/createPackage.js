import path from "path";
import fse from 'fs-extra';
import {checkPackageManages} from "../../../util/install/packageManage.js";


export default function (spaName, answers) {
  const manages = checkPackageManages();
  const installCmd = manages.yarn ? 'yarn' : 'npm i';
  const installChildCmds = answers.childApps.map(childApp => `"install:${childApp.childApp}": "cd ${childApp.childApp} && ${installCmd}"`);
  const startChildCmds = answers.childApps.map(childApp => `"start:${childApp.childApp}": "cd ${childApp.childApp} && npm start"`);
  const buildChildCmds = answers.childApps.map(childApp => `"build:${childApp.childApp}": "cd ${childApp.childApp} && npm run build"`);

  fse.outputFile(path.join(process.cwd(), spaName, 'package.json'), `{
  "name": "${spaName}",
  "version": "1.0.0",
  "description": "${answers.spa} spa",
  "devDependencies": {
    "npm-run-all": "^4.1.5"
  },
  "scripts": {
    "install": "npm-run-all --serial install:*",
    "install:main": "cd ${answers.spaMain} && ${installCmd}",
    ${installChildCmds.join(',\n    ')},
    "start": "npm-run-all --parallel start:*",
    "start:main": "cd main && npm start",
    ${startChildCmds.join(',\n    ')},
    "build": "npm-run-all build:*",
    "build:main": "cd main && npm run build",
    ${buildChildCmds.join(',\n    ')},
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/deep-fish-pixel/create-vite-app"
  },
  "keywords": [
    "${answers.spa}",
    "${answers.spa}-spa"
  ],
  "author": "deep-fish-pixel",
  "license": "MIT"
}`);
}