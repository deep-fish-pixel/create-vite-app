export default function (composer, terminal) {
  debugger
  return {
    filePaths: [terminal],
    params: {
      csr: terminal === 'csr',
      ssg: terminal === 'ssg',
      ssr: terminal === 'ssr',
    },
  };
}
