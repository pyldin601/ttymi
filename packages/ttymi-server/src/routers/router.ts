import * as KoaRouter from 'koa-router';

const router = new KoaRouter();

router.get('/', async ctx => {
  ctx.body = process.env.APP_VERSION;
});

export default router;
