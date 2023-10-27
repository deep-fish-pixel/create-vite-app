export default function (composer, terminal) {
  return {
    filePaths: [terminal],
    params: {
      h5: terminal === 'h5',
      web: terminal === 'web',
      none: terminal === 'none',
    },
  };
}
