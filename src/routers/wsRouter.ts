import * as KoaRouter from 'koa-router';
import * as logger from '../utils/logger';
import { event } from '../utils/async';
import { connectByPassword } from '../ssh/connect';
import { attachStreamToWebSocket } from '../ssh/ws';

const wsRouter = new KoaRouter();

wsRouter.get('/connect', async ctx => {
  logger.info('Connecting...');
  const data = await event<string>('message', ctx.websocket);
  const { host, port, username, password } = JSON.parse(data);

  const stream = await connectByPassword(host, port, username, password);

  attachStreamToWebSocket(stream, ctx.websocket);
});

export default wsRouter;
