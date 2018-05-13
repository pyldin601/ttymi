import * as logger from '../utils/logger';

export function attachStreamToWebSocket(stream, ws) {
  const onStreamData = data => {
    ws.send(String(data));
  };

  const onStreamClose = code => {
    logger.info('Closing WebSocket on process exit code %d', code);
    ws.terminate();
  };

  const onMessage = raw => {
    const { type, ...message } = JSON.parse(raw);

    switch (type) {
      case 'input': {
        const { data } = message;
        stream.write(data);
        break;
      }

      case 'resize': {
        const { size: { rows, cols } } = message;
        stream.setWindow(rows, cols);
        break;
      }

      default:
        logger.warn(`Unknown message type - ${type}`);
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