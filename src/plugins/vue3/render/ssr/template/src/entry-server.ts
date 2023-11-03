import { renderToString } from 'vue/server-renderer';
import { createApp } from './main.ts';
import { SSRContext } from '@vue/server-renderer';

function renderPreloadLinks(modules: Array<any>, manifest: any) {
  let links = '';
  const seen = new Set();
  modules.forEach((id: string) => {
    const files = manifest[id];
    if (files) {
      files.forEach((file: any) => {
        if (!seen.has(file)) {
          seen.add(file);
          links += renderPreloadLink(file);
        }
      });
    }
  });
  return links;
}

function renderPreloadLink(file: string) {
  if (file.endsWith('.js')) {
    return `<link rel="modulepreload" crossorigin href="${file}">`;
  } else if (file.endsWith('.css')) {
    return `<link rel="stylesheet" href="${file}">`;
  } else {
    return '';
  }
}

function renderTeleports(teleports?: Record<string, string>) {
  if (!teleports) return '';
  return Object.entries(teleports).reduce((all, [key, value]) => {
    if (key.startsWith('#el-popper-container-')) {
      return `${all}<div id="${key.slice(1)}">${value}</div>`;
    }
    return all;
  }, teleports.body || '');
}

export async function pageRender(url: string, manifest: any) {
  const { app, router, store } = createApp();
  try {
    await router.push(url);
    await router.isReady();
    const ctx: SSRContext = {};
    const html = await renderToString(app, ctx);
    const preloadLinks = renderPreloadLinks(ctx.modules, manifest);
    const teleports = renderTeleports(ctx.teleports);
    const state = JSON.stringify(store.state.value);

    return [html, state, preloadLinks, teleports];
  } catch (error) {
    console.log(error);
    return [];
  }
}
