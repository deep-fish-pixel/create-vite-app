export default function (baseContentMap) {
  const ignoreFilepath = './.gitignore';

  if (!baseContentMap.has(ignoreFilepath)) {
    baseContentMap.set(ignoreFilepath, [
      {
        isJson: false,
        isTemplate: false,
        content: `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw? 
`,
        filename: ignoreFilepath,
      },
    ]);
  }
}
