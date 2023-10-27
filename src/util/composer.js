const outputFilters = [];

export default {
  addOutputFilter(filter) {
    outputFilters.push(filter);
  },
  runOutputFilters(content, filename) {
    return outputFilters.reduce(
      (previousValue, filter) => filter(previousValue, filename),
      content
    );
  },
};
