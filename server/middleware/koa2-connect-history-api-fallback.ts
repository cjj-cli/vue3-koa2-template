// eslint-disable-next-line @typescript-eslint/no-var-requires
import * as history from 'connect-history-api-fallback';

export default (options: any) => {
  const middleware = history(options);
  const noop = () => {
    // todo
  };

  return async (ctx: any, next: any) => {
    middleware(ctx, null, noop);
    await next();
  };
};
