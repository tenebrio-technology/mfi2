import { Api, AuthService, LocationService, HabitatService, MonitorService } from '.';
import { Logger } from './Logger';

export * from './MonitorService'; 
export * from './BaseService';
export * from './LocationService';
export * from './HabitatService';
export * from './AuthService';
export * from './Logger';
export * from './Api';

const baseURL = 'http://localhost:4000';
const logger = new Logger();

export class services {
  static api = new Api(baseURL, logger);
  static auth = new AuthService(baseURL, logger, this);
  static location = new LocationService(baseURL, logger, this);
  static habitat = new HabitatService(baseURL, logger, this);
  static monitor = new MonitorService(baseURL, logger, this); 
}
