// @flow strict
import { object, string } from 'typed-contracts';

export interface IConnectMessage {
  host: string;
  port: string;
  username: string;
  password?: string;
  privateKey?: string;
}

export const connectMessage = object({
  host: string,
  port: string,
  username: string,
  password: string.optional,
  privateKey: string.optional,
});
