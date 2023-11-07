import fs from 'node:fs';
import path from 'node:path';
import express from 'express';
import axios from 'axios';
import { fileURLToPath } from 'node:url';
import { ViteDevServer } from 'vite';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import adapter from 'axios/lib/adapters/http.js';
import serveStatic from 'serve-static';
import compression from 'compression';

axios.defaults.adapter = adapter;
const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD;
const isProduction = process.env.NODE_ENV === 'production';
export async function createServer(
  root = process.cwd(),
  isProd = isProduction
) {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const resolve = (p: string) => path.resolve(__dirname, p);
  const indexProd = isProd
    ? fs.readFileSync(resolve('dist/client/index.html'), 'utf-8')
    : '';
  const manifest = isProd
    ? JSON.parse(
        fs.readFileSync(resolve('dist/client/ssr-manifest.json'), 'utf-8')
      )
    : {};
  const app = express();

  let vite: ViteDevServer;

  if (!isProd) {
    vite = await (
      await import('vite')
    ).createServer({
      root,
      logLevel: isTest ? 'error' : 'info',
      server: {
        middlewareMode: true,
        watch: {
          usePolling: true,
          interval: 100,
        },
      },
      appType: 'custom',
    });
    // use vite's connect instance as middleware
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    app.use(vite.middlewares);
  } else {
    app.use(compression());
    app.use(
      serveStatic(resolve('dist/client'), {
        index: false,
      })
    );
  }

  app.use('/justTest/getFruitList', async (req, res) => {
    const names = [
      'Orange',
      'Apricot',
      'Apple',
      'Plum',
      'Pear',
      'Pome',
      'Banana',
      'Cherry',
      'Grapes',
      'Peach',
    ];
    const list = names.map((name, id) => {
      return {
        id: ++id,
        name,
        price: Math.ceil(Math.random() * 100),
      };
    });
    const data = {
      data: list,
      code: 0,
      msg: '',
    };
    res.end(JSON.stringify(data));
  });

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;

      let template, pageRender;
      if (!isProd) {
        // always read fresh template in dev
        template = fs.readFileSync(resolve('index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        pageRender = (await vite.ssrLoadModule('/src/entry-server.ts'))
          .pageRender;
      } else {
        template = indexProd;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        pageRender = (await import('./dist/server/entry-server.js')).pageRender;
      }

      const [appHtml, state, links, teleports] = await pageRender(
        url,
        manifest
      );

      const html = template
        .replace(`<!--preload-links-->`, links)
        .replace(`'<pinia-store>'`, state)
        .replace(`<!--app-html-->`, appHtml)
        .replace(/(\n|\r\n)\s*<!--app-teleports-->/, teleports);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e: any) {
      vite && vite.ssrFixStacktrace(e);
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });

  return { app };
}

if (!isTest) {
  createServer().then(({ app }) =>
    app.listen(5173, () => {
      console.log('http://localhost:5173');
    })
  );
}
