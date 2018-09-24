import { WsServer } from 'ws-mock';

test('Should send message from websocket to subscriber', async () => {
  const wsServer = new WsServer();
  const ws = await new Promise(resolve => wsServer.on('connection', resolve));

  console.log(ws);
});
