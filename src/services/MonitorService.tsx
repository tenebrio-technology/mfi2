import { MonitorValues, IServiceResponse } from '../model';
import { BaseService } from './BaseService';

export class MonitorService extends BaseService {
  async add(monitor: MonitorValues): Promise<IServiceResponse> {
    let response = await this.services.api.post('/monitor/add', monitor);
    if(!response.sucess)
      return this.errorResponse(response.message, response.errors); 
    return this.successResponse(`Habitat ${monitor.name} added.`, response.payload);
  }

  async fetch(): Promise<IServiceResponse> {
    let response = await this.services.api.get('/monitor')
    if (response.success) return this.successResponse(response.message, response.payload);
    else return this.errorResponse(response.message);
  }

  async del(id: number): Promise<IServiceResponse> {
    let response = await this.services.api.del(`/monitor/${id}`);
    if (response.success) return this.successResponse(response.message, response.payload);

    else return this.errorResponse(response.message);
  }
}
