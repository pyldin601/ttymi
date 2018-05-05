import Koa from 'koa';
import websockify from 'koa-websocket';
import { router, wsRouter } from './router';

export default function createApp() {
  const app = websockify(new Koa());

  app.use(router.routes());
  app.ws.use(wsRouter.routes());

  return app;
}
