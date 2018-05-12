import { Container } from 'inversify';
import * as Koa from 'koa';
import * as websockify from 'koa-websocket';
import { wsRouter } from "../routers";

export default (app: Container) => {
  const koa = websockify(new Koa());

  koa.ws.use(wsRouter.routes(), wsRouter.allowedMethods());

  app.bind('web').toConstantValue(koa);
};
