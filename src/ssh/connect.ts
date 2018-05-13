import { Client } from 'ssh2';
import * as logger from '../utils/logger';

export function connectByPassword(host: string, port: number, username: string, password: string) {
  return new Promise((resolve, reject) => {
    const client = new Client();
    logger.info('Establishing connection to %s@%s:%d using password', username, host, port);
    client.on('error', (err) => {
      logger.error(err);
    });
    client.on('ready', () => {
      logger.info('Starting interactive shell');
      client.shell({ term: 'xterm' }, (err, stream) => {
        if (err) {
          logger.error(err);
          return reject(err);
        }
        logger.info('Shell started');
        return resolve(stream);
      });
    });
    client.connect({ host, port, username, password });
    logger.info('...');
  });
}

export function connectByPrivateKey(host: string, port: number, username: string, privateKey: string) {
  const client = new Client();
  return new Promise((resolve, reject) => {
    logger.info('Establishing connection using private key');
    client.connect({ host, port, username, privateKey });
    client.on('ready', () => {
      logger.info('Starting interactive shell');
      client.shell({ term: 'xterm' }, (err, stream) => {
        if (err) {
          logger.error(err);
          return reject(err);
        }
        logger.info('Shell started');
        return resolve(stream);
      });
    });
  });
}
