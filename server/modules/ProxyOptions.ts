import * as Koa from 'koa';

const prefix = '/api';

export default {
  filter: (ctx: Koa.Context): boolean => ctx.url.startsWith(prefix),
  proxyReqPathResolver: (ctx: Koa.Context): string => process.env.API + ctx.url.replace(prefix, ''),
};
