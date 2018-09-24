// @flow strict
import { WsServer } from 'ws-mock';
import { empty, Observable, Subject } from 'rxjs';
import { websocketToObservable } from './webSocketToObservable';

test('Should read message from websocket', async () => {
  const wsServer = new WsServer();
  const connection = wsServer.addConnection();

  const writable$ = new Subject();
  const readable$ = websocketToObservable(connection, writable$);

  setImmediate(() => {
    connection.sendMsgToServer('foo');
    connection.closeConnection();
  });

  const message = await readable$.toPromise();

  expect(message).toBe('foo');
});

test('Should complete subscriptions when websocket disconnected', async () => {
  const wsServer = new WsServer();
  const connection = wsServer.addConnection();

  const writable$ = new Subject();
  const readable$ = websocketToObservable(connection, writable$);

  setImmediate(() => connection.closeConnection());

  expect(writable$.observers.length).toBe(1);
  await readable$.toPromise();
  expect(writable$.observers.length).toBe(0);
});

test('Should send message to websocket', () => {
  const wsServer = new WsServer();
  const connection = wsServer.addConnection();

  const writable$ = new Subject();
  const readable$ = websocketToObservable(connection, writable$);

  writable$.next('foo');

  expect(connection.messages).toEqual(['foo']);
});

test('Should close input subscription on socket close', async () => {
  const wsServer = new WsServer();
  const connection = wsServer.addConnection();

  const writable$ = new Subject();
  const readable$ = websocketToObservable(connection, writable$);

  setImmediate(() => connection.closeConnection());

  expect(writable$.observers.length).toBe(1);

  await readable$.toPromise();

  expect(writable$.observers.length).toBe(0);
});
