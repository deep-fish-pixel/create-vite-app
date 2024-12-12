import path from "path";
import fse from 'fs-extra';
import {checkPackageManages} from "../../../util/install/packageManage.js";


export default function (spaName, answers) {
  answers.childApps.forEach((childApp, index) => {
    fse.outputFile(path.join(process.cwd(), spaName, `${answers.spaMain}/src/views/apps/${childApp.childApp}.json`), `<template>
  <div class="micro-app">
    <micro-app
      name='${childApp.childApp}'
      url='http://localhost:${5173 + index + 1}/'
      iframe
      :data='data'
      router-mode='native'
    >
    </micro-app>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const data = ref({from: '来自基座的初始化数据'})

</script>

<style lang="scss">
.micro-app{
  border: 1px dashed #ccc;
  position: relative;
  &::before {
    content: "${childApp.childApp}";
    position: absolute;
    top: -12px;
    left: 18px;
    z-index: 4;
    padding: 0 4px;
    color: #999;
    background: #fff;
  }
}
</style>
`);
  });
}