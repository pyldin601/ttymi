import { Container } from 'inversify';
import * as Koa from 'koa';
import * as cors from '@koa/cors';
import * as websockify from 'koa-websocket';
import { wsRouter, router } from "../routers";

export default (app: Container) => {
  const koa = websockify(new Koa());

  koa.use(cors());

  koa.use(router.routes(), router.allowedMethods());
  koa.ws.use(wsRouter.routes(), wsRouter.allowedMethods());

  app.bind('web').toConstantValue(koa);
};
