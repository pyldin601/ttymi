import 'reflect-metadata';
import { Container } from 'inversify';
import providers from './providers';

const app = new Container();

providers.forEach(registerService => registerService(app));

export default app;
