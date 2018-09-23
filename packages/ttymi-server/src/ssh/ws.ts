import WebSocket from 'ws';
import * as logger from '../utils/logger';
import { connectByPassword } from './connect';

export async function acceptConnectionRequest(ws: WebSocket) {
  const onClose = () => {
    logger.info('Connection closed before initialized');
  };

  const onMessage = async (msg: string) => {
    try {
      const { host, port, username, password } = JSON.parse(msg);

      const stream = await connectByPassword(host, port, username, password);
      attachStreamToWebSocket(stream, ws);

      ws.removeListener('close', onClose);
    } catch (error) {
      //ws.send('Bad connection object');
      ws.close(4500, error.message);
    }
  };

  ws.once('message', onMessage);
  ws.once('close', onClose);
}

export function attachStreamToWebSocket(stream, ws) {
  const onStreamData = data => {
    ws.send(String(data));
  };

  const onStreamClose = code => {
    logger.info('Closing WebSocket on process exit code %d', code);
    ws.terminate();
  };

  const onMessage = raw => {
    try {
      const { type, ...message } = JSON.parse(raw);

      switch (type) {
        case 'input': {
          const { data } = message;
          stream.write(data);
          break;
        }

        case 'resize': {
          const {
            size: { rows, cols },
          } = message;
          stream.setWindow(rows, cols);
          break;
        }

        default:
          ws.send(`Unknown message type - ${type}`);
      }
    } catch (e) {
      ws.send(`Can't parse input message`);
    }
  };

  const onClose = () => {
    logger.info('Client disconnected');
    stream.removeListener('data', onStreamData);
  };

  stream.on('data', onStreamData);
  stream.once('close', onStreamClose);

  ws.on('message', onMessage);
  ws.once('close', onClose);
}
