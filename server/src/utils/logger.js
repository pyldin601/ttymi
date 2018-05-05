import winston from 'winston';

export default {
  info(...args) {
    winston.info(...args);
  },

  warn(...args) {
    winston.warn(...args);
  },

  error(...args) {
    winston.error(...args);
  },
};
