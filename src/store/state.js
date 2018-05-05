// @flow

export interface ConnectionState {
  name: string;
  host: string;
  port: number;
  user: string;
  password: string;
}

export type ConnectionStatus = 'connected' | 'disconnected';

export interface ApplicationState {
  openConnections: Array<{
    connection: ConnectionState,
    status: ConnectionStatus,
  }>;
  newConnection: {
    visible: boolean,
    connection: ConnectionState,
  };
}

export function getInitialConnectionState(): ConnectionState {
  return {
    name: '',
    host: '',
    port: '22',
    user: '',
    password: '',
  };
}

export function getInitialApplicationState(): ApplicationState {
  return {
    openConnections: [],
    newConnection: {
      visible: true,
      connection: getInitialConnectionState(),
    },
  };
}
