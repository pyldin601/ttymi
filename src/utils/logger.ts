import winston from 'winston';

export function info(message: string, ...args: any[]) {
  winston.info(message, ...args);
}

export function warn(message: string, ...args: any[]) {
  winston.warn(message, ...args);
}

export function error(message: string, ...args: any[]) {
  winston.error(message, ...args);
}
