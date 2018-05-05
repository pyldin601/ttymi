// @flow
import KoaRouter from 'koa-router';

export const router = new KoaRouter();
export const wsRouter = new KoaRouter();

router.post('/connect', async (ctx) => {});

wsRouter.get('/attach/:id', async (ctx) => {
  const { id } = ctx.params;
  ctx.websocket.send(`Hello, ${id}!`);
});
