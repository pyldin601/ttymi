// @flow strict
import { Duplex } from 'stream';
import { Client } from 'ssh2';
import { ILoggerService } from './loggerService';

export interface ISSHService {
  connectByPassword(
    host: string,
    port: number,
    username: string,
    password: string,
  ): Promise<Duplex>;

  connectByPrivateKey(
    host: string,
    port: number,
    username: string,
    privateKey: string,
  ): Promise<Duplex>;
}

export class SSHService implements ISSHService {
  loggerService: ILoggerService;

  constructor(loggerService: ILoggerService) {
    this.loggerService = loggerService;
  }

  connectByPassword(
    host: string,
    port: number,
    username: string,
    password: string,
  ): Promise<Duplex> {
    return new Promise((resolve, reject) => {
      const client = new Client();

      client.on('error', (err: Error) => {
        reject(err);
      });

      client.on('ready', () => {
        client.shell({ term: 'xterm' }, (err: Error, stream: Duplex) => {
          if (err) {
            return reject(err);
          }

          return resolve(stream);
        });
      });

      client.connect({ host, port, username, password });
    });
  }

  connectByPrivateKey(
    host: string,
    port: number,
    username: string,
    privateKey: string,
  ): Promise<Duplex> {
    return new Promise((resolve, reject) => {
      const client = new Client();

      client.on('error', (err: Error) => {
        reject(err);
      });

      client.on('ready', () => {
        client.shell({ term: 'xterm' }, (err: Error, stream: Duplex) => {
          if (err) {
            return reject(err);
          }

          return resolve(stream);
        });
      });

      client.connect({ host, port, username, privateKey });
    });
  }
}
