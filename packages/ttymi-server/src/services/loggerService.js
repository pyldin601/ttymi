// @flow strict
import { createLogger, format, transports } from 'winston';

export interface ILoggerService {
  info(message: string, ...args: any[]): void;
  error(message: string, ...args: any[]): void;
}

export class WinstonLoggerService implements ILoggerService {
  _logger = createLogger({
    level: 'info',
    format: format.sinple(),
    transports: [new transports.Console({ filename: 'error.log', level: 'info' })],
  });

  info(message: string, ...args: any[]) {
    this._logger(message, ...args);
  }

  error(message: string, ...args: any[]) {
    this._logger(message, ...args);
  }
}
