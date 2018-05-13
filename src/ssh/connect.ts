import { Client } from 'ssh2';
import * as logger from '../utils/logger';

export function connectByPassword(host: string, port: number, username: string, password: string) {
  const client = new Client();
  return new Promise((resolve, reject) => {
    logger.info('Establishing connection using password');
    client.connect({ host, port, username, password });
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
