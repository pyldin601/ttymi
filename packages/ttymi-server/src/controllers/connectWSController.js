// @flow strict
import { type Context } from 'koa';

const connectWSController = async (ctx: Context) => {
  const { websocket } = ctx;
  await acceptConnectRequest(websocket);
};

export default connectWSController;
