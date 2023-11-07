export default function (target, data, params) {
  const renderData = { ...params, ...(data || {}) };

  Object.keys(renderData).forEach((key) => {
    target = target
      .replace(
        RegExp(`(\\n?)( *)(//<|<!)(---\\+${key}--->)(\\n?)`, 'g'),
        (
          all,
          lineChars,
          spaceChars,
          contentHeader,
          content,
          tailLineSpaceChars
        ) => {
          const value = data[key] || '';
          const spaceValue = value.replace(
            /(\n)([^\s]+)/g,
            function (all, line, content) {
              // 格式化空白
              return `${line}${spaceChars}${content}`;
            }
          );

          return `${
            spaceValue.match(/^\n/) ? '' : (lineChars || '') + spaceChars
          }${spaceValue}${spaceValue.match(/\n$/) ? '' : tailLineSpaceChars}${
            spaceChars + contentHeader + content + (tailLineSpaceChars || '')
          }`;
        }
      )
      .replace(
        RegExp(`(//<|<!)---=(${key})(\\|\\|([^>]*))?--->`, 'g'),
        renderData[key] || ''
      )
      .replace(
        RegExp(
          `(\\n?)(//<|<!)---#if\\(${key}\\)--->([^#]*)(//<|<!)---#if--->\\n?`,
          'g'
        ),
        (all, wrap, headerChars, content) =>
          renderData[key] ? content : wrap || ''
      );
  });

  return target;
}
