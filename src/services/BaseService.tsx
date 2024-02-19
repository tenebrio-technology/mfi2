import { ILogger } from '.';
import { IServiceResponse } from '../model';

export class BaseService {
  services: any;
  logger: ILogger;

  constructor(baseURL: string, logger: ILogger, services: any) {
    this.logger = logger;
    this.services = services;
  }

  errorResponse = (message: string, errors: string[] = []): IServiceResponse => ({
    success: false,
    message,
    errors,
  });

  successResponse = (message: string, payload: any = null): IServiceResponse => ({
    success: true,
    message,
    payload,
  });
}
