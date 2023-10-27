import execa from 'execa';

export function checkPackageManages() {
  let pnpm = false;
  let yarn = false;
  let npm = false;

  /*try {
    pnpm = !!execa.commandSync('pnpm -v');
  } catch (e) {}*/

  try {
    yarn = !!execa.commandSync('yarn -v');
  } catch (e) {}

  try {
    npm = !!execa.commandSync('npm -v');
  } catch (e) {}

  return {
    pnpm,
    yarn,
    npm,
  };
}

export function getPackageManageName() {
  const packageManages = checkPackageManages();

  if (packageManages.pnpm) {
    return 'pnpm';
  }
  if (packageManages.yarn) {
    // 因为@logue/vue2-helpers 需要检测的版本 { node: '>=18', yarn: '>=1.22.10' }过高导致安装失败
    // 设置忽略检测
    execa.commandSync('yarn config set ignore-engines true');
    return 'yarn';
  }
  return 'npm';
}
