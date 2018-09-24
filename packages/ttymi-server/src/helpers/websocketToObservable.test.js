import { WsServer } from 'ws-mock';
import { empty, Observable, Subject } from 'rxjs';
import { websocketToObservable } from './webSocketToObservable';

test('Should receive message', done => {
  const wsServer = new WsServer();

  wsServer.on('connection', ws => {
    const input$ = empty();
    const ws$ = websocketToObservable(ws, input$);

    ws$.subscribe(message => {
      expect(message).toBe('foo');
      done();
    });
  });

  const connection = wsServer.addConnection();

  connection.sendMsgToServer('foo');
});

test('Should correctly close stream', done => {
  const wsServer = new WsServer();

  wsServer.on('connection', ws => {
    const input$ = empty();
    const ws$ = websocketToObservable(ws, input$);

    ws$.subscribe({
      complete: () => {
        done();
      },
    });
  });

  const connection = wsServer.addConnection();

  connection.closeConnection();
});

test('Should send message', done => {
  const wsServer = new WsServer();

  wsServer.on('connection', ws => {
    const input$ = new Subject();
    const ws$ = websocketToObservable(ws, input$);

    input$.next('foo');

    expect(ws.messages).toEqual(['foo']);
    done();
  });

  wsServer.addConnection();
});
