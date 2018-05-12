import * as Koa from 'koa';
import app from './app';

const web = app.get<Koa>('web');
const port = process.env.PORT || 8080;

web.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
