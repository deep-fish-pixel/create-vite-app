export default function (composer, precssor) {
  if (precssor === true || precssor === 'true') {
    return {
      filePaths: ['template'],
      params: {
        i18n: true,
      },
    };
  }
  composer.addOutputFilter((content) =>
    content
      .replace(/\{\{\s*\$t\(['"](\w+)['"]\)\s*}}/g, '$1')
      .replace(/(\+?)\s*\$t\((['"]\w+['"])\)\s*(\+?)/g, '$1 $2 $3')
  );
  return {
    filePaths: null,
    params: {
      i18n: false,
    },
  };
}
