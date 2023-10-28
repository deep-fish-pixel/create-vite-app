export default function (target, data, params) {
  const renderData = { ...params, ...(data || {}) };

  Object.keys(renderData).forEach((key) => {
    target = target
      .replace(
        RegExp(`(\\n?)( *)(\/\/<|<!)(---\\+${key}--->)(\\n?)`, 'g'),
        (
          all,
          lineChars,
          spaceChars,
          contentHeader,
          content,
          tailLineSpaceChars
        ) => {
          const value = data[key] || '';

          return `${
            value.match(/^\n/) ? '' : (lineChars || '') + spaceChars
          }${value}${value.match(/\n$/) ? '' : tailLineSpaceChars}${
            spaceChars + contentHeader + content + (tailLineSpaceChars || '')
          }`;
        }
      )
      .replace(
        RegExp(`(\/\/<|<!)---\=(${key})(\\|\\|([^>]*))?--->`, 'g'),
        renderData[key] || ''
      )
      .replace(
        RegExp(
          `(\\n?)(\/\/<|<!)---#if\\(${key}\\)--->([^#]*)(\/\/<|<!)---#if--->\\n?`,
          'g'
        ),
        (all, wrap, headerChars, content) => (renderData[key] ? content :  (wrap || ''))
      );
  });

  return target;
}
