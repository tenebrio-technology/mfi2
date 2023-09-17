import { Api, AuthService, LocationService } from ".";
import { Logger } from "./Logger";

export * from "./BaseService";
export * from "./LocationService";
export * from "./AuthService";
export * from "./Logger";
export * from "./Api";

const baseURL = "http://localhost:4000";
const logger = new Logger();

export class services {
  static api = new Api(baseURL, logger);
  static auth = new AuthService(baseURL, logger, this);
  static location = new LocationService(baseURL, logger, this);
}
