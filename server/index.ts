import * as koaBody from 'koa-body';
import * as KoaWebpack from 'koa-webpack';
import * as webpack from 'webpack';
import * as session from 'koa-session';
import * as koaStatic from 'koa-static';
import * as path from 'path';
import * as proxy from 'koa-better-http-proxy';
import history from './middleware/koa2-connect-history-api-fallback';
import { app } from './modules/App';
import store from './modules/Store';
import proxyOption from './modules/ProxyOptions';

app.keys = ['cjj'];

app.use(session({
  key: 'cjj-session.koa',
  store,
}, app));

app.use(history({
  verbose: true,
  htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
}));

if (app.env !== 'production') {
  const compiler = webpack(require('../node_modules/@vue/cli-service/webpack.config.js'));
  KoaWebpack({
    compiler,
  }).then((middleware: any) => app.use(middleware));
} else {
  app.use(koaStatic(path.join(__dirname, '../client')));
}

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(koaBody({
  multipart: true,
  formidable: {
    // 保留扩展名
    keepExtensions: true,
  },
}));

app.use(proxy(process.env.API, proxyOption));
