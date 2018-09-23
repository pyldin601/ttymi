// @flow strict
import type WebSocket from 'ws';
import { type IConnectMessage } from '@ttymi/ttymi-contracts';
import { type ILoggerService } from '../services/loggerService';
import { type ISshService } from '../services/sshService';

export interface ITerminalClient {
  acceptConnectRequest(ws: WebSocket): Promise<void>;
}

export const TerminalState = {
  Initial: Symbol.for('Initial'),
  Connecting: Symbol.for('Connecting'),
  Connected: Symbol.for('Connected'),
  Error: Symbol.for('Error'),
};

export class TerminalClient implements ITerminalClient {
  _loggerService: ILoggerService;
  _sshService: ISshService;
  _webSocket: WebSocket;

  _state: $Values<typeof TerminalState> = TerminalState.Initial;

  constructor(loggerService: ILoggerService, sshService: ISshService) {
    this._loggerService = loggerService;
    this._sshService = sshService;
  }

  setWebSocket(ws: WebSocket): void {
    this._webSocket = ws;
  }

  async acceptConnectRequest(): Promise<void> {
    this._webSocket.on('message', msg => this._handleWebSocketMessage(msg));
    this._webSocket.on('close', () => this._handleWebSocketClose());
    this._webSocket.on('error', err => this._handleWebSocketError(err));
  }

  _handleWebSocketMessage(message: string) {
    try {
      const parsedMessage = JSON.parse(message);
      this._dispatchParsedMessage(parsedMessage);
    } catch (e) {
      this._state = TerminalState.Error;
    }
  }

  _dispatchParsedMessage(message: any) {
    switch (this._state) {
      case TerminalState.Initial:
        return this._handleConnectMessage(message);
    }
  }

  _handleConnectMessage(message: IConnectMessage) {}

  _handleWebSocketClose() {}

  _handleWebSocketError(err: Error) {}
}
