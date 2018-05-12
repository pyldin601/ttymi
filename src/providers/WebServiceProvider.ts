import { Container } from 'inversify';
import * as Koa from 'koa';
import * as websockify from 'koa-websocket';

export default (app: Container) => {
  const koa = websockify(new Koa());

  app.bind('web').toConstantValue(koa);
};
