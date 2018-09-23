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
}

export function getInitialApplicationState(): ApplicationState {
  return {
    openConnections: [],
  };
}
