// @flow
import { WS_ENDPOINT } from '../config';

export const connect = (host: string, username: string, password: string): Promise<WebSocket> => {
  const ws = new WebSocket(`${WS_ENDPOINT}/connect`);
  const header = { host, username, password, port: 22 };
  return new Promise((resolve, reject) => {
    ws.onopen = () => {
      ws.send(JSON.stringify(header));
      resolve(ws);
    };
    ws.onerror = (err) => reject(err);
  });
};
