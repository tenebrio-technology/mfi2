import { ILogger } from '.';
import { IServiceResponse } from '../model';



export class BaseService {
  services: any;
  logger: ILogger;

  constructor(baseURL: string, logger: ILogger, services: any) {
    this.logger = logger;
    this.services = services;
  }

  errorResponse = (msg: string): IServiceResponse => ({
    success: false,
    errors: [msg],
  });

  successResponse = (payload: any) : IServiceResponse => ({
    success: true, 
    payload 
  })
}
