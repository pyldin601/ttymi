// @flow strict
import WebSocket from 'ws';
import { ILoggerService } from '../services/loggerService';
import { ISshService } from '../services/sshService';

export interface ITerminalClient {
  acceptConnectRequest(ws: WebSocket): Promise<void>;
}

export class TerminalClient implements ITerminalClient {
  private loggerService: ILoggerService;
  private sshService: ISshService;

  constructor(loggerService: ILoggerService, sshService: ISshService) {
    this.loggerService = loggerService;
    this.sshService = sshService;
  }

  async acceptConnectRequest(ws: WebSocket): Promise<void> {}
}