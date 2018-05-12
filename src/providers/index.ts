import { Container } from 'inversify';
import { RegisterService } from '../types/RegisterService';
import registerWebService from './WebServiceProvider';

const providers: RegisterService[] = [registerWebService];

export default providers;
