export default function (composer, terminal) {
  return {
    filePaths: [terminal],
    params: {
      csr: terminal === 'csr',
      ssg: terminal === 'ssg',
      ssr: terminal === 'ssr',
    },
  };
}
