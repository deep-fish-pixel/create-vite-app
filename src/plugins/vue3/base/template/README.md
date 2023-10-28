# Vite App <!---#if(h5)--->H5<!---#if---><!---#if(web)--->Web<!---#if--->
App is created by [vite-app-pro](https://www.npmjs.com/package/vite-app-pro)

### Cmd

startup
```
npm run start
```

build
```
npm run build
```

eslint check
```
npm run lint:eslint
```

eslint format code
```
npm run lint:prettier
```
<!---#if(unit)--->
unit test
```
npm run test:unit
```
<!---#if--->
<!---#if(e2e)--->
e2e test
```
npm run test:e2e
```
<!---#if--->


### Main modules
* vite + <!---#if(vue2)--->vue2<!---#if---><!---#if(vue3)--->vue3<!---#if---> + typescript + jsx
* pinia state management
* pre-cssor: <!---=precssor--->
* vite-app eslint
* husky commit rule
<!---#if(i18n)--->* i18n<!---#if--->
<!---#if(test)--->* automated testing：<!---#if---><!---#if(unit)---> unit<!---#if---><!---#if(e2e)---> e2e<!---#if--->
* typescript mock
* extends keep-alive
<!---#if(web)--->* ajax progress bar
* * ui component lib: element-plus
<!---#if--->
<!---#if(h5)--->* vConsole
* ui component lib：vant
<!---#if--->
