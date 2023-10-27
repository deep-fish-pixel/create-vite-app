import sortPackageJson from 'sort-package-json';

export default function (composer, precssor) {
  composer.addOutputFilter((content, filename) => {
    if (filename.match(/package\.json$/)) {
      return sortPackageJson(content);
    }
    return content;
  });
  return {
    filePaths: ['template'],
    params: {},
  };
}
