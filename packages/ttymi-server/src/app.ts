import * as Koa from 'koa';
import * as websockify from 'koa-websocket';
import { router, wsRouter } from './routers';

export default function createApp(): Koa {
  const koa = websockify(new Koa());

  koa.use(router.routes(), router.allowedMethods());
  koa.ws.use(wsRouter.routes(), wsRouter.allowedMethods());

  return koa;
}
