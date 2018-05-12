import { Container } from 'inversify';
import * as Koa from 'koa';

export default (app: Container) => {
  app.bind(Koa).toConstantValue(new Koa());
};
