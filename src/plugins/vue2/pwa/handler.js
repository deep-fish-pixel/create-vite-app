export default function (composer, precssor) {
  if (precssor === true || precssor === 'true') {
    return {
      filePaths: ['template'],
      params: {
        pwa: true,
      },
    };
  }
  return {
    filePaths: null,
    params: {
      pwa: false,
    },
  };
}
