import * as KoaRouter from 'koa-router';
import { startClient } from '../ssh/ws';
import * as logger from '../utils/logger';

const wsRouter = new KoaRouter();

wsRouter.get('/connect', async ctx => {
  await startClient(ctx.websocket);
  logger.info('Connected!');
});

export default wsRouter;
