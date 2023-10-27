import copy from 'rollup-plugin-copy';

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/lib/index.js',
      format: 'cjs',
    },
    plugins: [
      copy({
        targets: [
          {
            src: 'bin/vite-app-pro.js',
            dest: 'dist/bin/',
            transform: (contents) =>
              contents
                .toString()
                .replace(/\/src\//g, '/lib/')
                .replace(/\/util\//g, '/'),
          },
          { src: 'README.md', dest: 'dist/' },
          {
            src: 'package.json',
            dest: 'dist/',
            transform: (contents) =>
              contents
                .toString()
                .replace(/"type": "module",/g, '"type": "commonjs",'),
          },
          {
            src: 'src/plugins',
            dest: 'dist/lib/',
          },
        ],
        filter: (src) => !src.match(/\/(handler|question)\.js$/),
      }),
    ],
  },
  {
    input: 'src/util/composeApp.js',
    output: {
      file: 'dist/lib/composeApp.js',
      format: 'cjs',
    },
  },
];
