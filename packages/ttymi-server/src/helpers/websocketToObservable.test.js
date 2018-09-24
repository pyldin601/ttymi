import { WsServer } from 'ws-mock';
import { empty, Observable } from 'rxjs';
import { websocketToObservable } from './webSocketToObservable';

test('Should receive message from websocket', done => {
  const wsServer = new WsServer();

  wsServer.on('connection', ws => {
    const input$ = empty();
    const ws$ = websocketToObservable(ws, input$);

    expect(ws$).toBeInstanceOf(Observable);

    ws$.subscribe(message => {
      expect(message).toBe('foo');
      done();
    });
  });

  const connection = wsServer.addConnection();

  connection.sendMsgToServer('foo');

  expect.assertions(2);
});
