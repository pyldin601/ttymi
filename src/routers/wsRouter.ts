import * as KoaRouter from 'koa-router';
import { event } from '../utils/async';

const wsRouter = new KoaRouter();

wsRouter.get('/connect', async ctx => {
  const data = await event<string>('message', ctx.websocket);
  const { host, port, user, password } = JSON.parse(data);
  ctx.websocket.send('Will connect next week...');
});

export default wsRouter;
