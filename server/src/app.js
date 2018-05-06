import Koa from 'koa';
import serve from 'koa-static';
import websockify from 'koa-websocket';
import { router, wsRouter } from './router';
import config from './config/app';

const { environment } = config;

export default function createApp() {
  const app = websockify(new Koa());

  if (environment === 'production') {
    app.use(serve('build/assets'));
  }

  app.use(router.routes());
  app.ws.use(wsRouter.routes());

  return app;
}
