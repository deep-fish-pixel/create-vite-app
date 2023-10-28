<script setup lang="ts"></script>

<template>
  <ul>
<!---#if(unit)--->
    <li>
      <h3>unit test</h3>
      <p>npm run test:unit</p>
      <div>
        doc:
        <a target="_blank" href="https://cn.vitest.dev/guide/why.html"
          >vitest
        </a>
        <a target="_blank" href="https://test-utils.vuejs.org/guide/"
          >test-utils</a
        >
      </div>
    </li>
<!---#if--->
<!---#if(e2e)--->
    <li>
      <h3>e2e test</h3>
      <p>npm run test:e2e</p>
      <div>
        doc:
        <a
          target="_blank"
          href="https://docs.cypress.io/guides/getting-started/installing-cypress"
          >cypress</a
        >
      </div>
    </li>
<!---#if--->
  </ul>
</template>

<style lang="<!---=precssor--->" scoped>
ul{
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  li{
    width: 200px;
    height: 200px;
    h3{
      margin-right: 10px;
    }
    p{
      display: inline;
      background: #f7f7f7;
      padding: 4px;
    }
    div{
      margin-top: 10px;
    }
  }
}
</style>
