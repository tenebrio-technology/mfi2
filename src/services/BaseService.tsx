import { ILogger } from '.';

export interface ServiceResponse {
  success: boolean;
  errors?: string[];
}

export class BaseService {
  services: any;
  logger: ILogger;

  constructor(baseURL: string, logger: ILogger, services: any) {
    this.logger = logger;
    this.services = services;
  }

  errorResponse = (msg: string): ServiceResponse => ({
    success: false,
    errors: [msg],
  });
}
