export default function (composer, answer) {
  if (answer === 'all') {
    return {
      filePaths: ['base', 'e2e', 'unit'],
      params: {
        e2e: true,
        unit: true,
        test: true,
      },
    };
  }
  if (answer === 'no') {
    return {
      filePaths: null,
      params: {
        e2e: false,
        unit: false,
        test: false,
      },
    };
  }
  return {
    filePaths: ['base', answer],
    params: {
      e2e: answer === 'e2e',
      unit: answer === 'unit',
      test: true,
    },
  };
}
