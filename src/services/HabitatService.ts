import { HabitatValues, IServiceResponse } from '../model';
import { BaseService } from './BaseService';

export class HabitatService extends BaseService {
  async add(habitat: HabitatValues): Promise<IServiceResponse> {
    let response = await this.services.api.post('/habitat/add', habitat);
    return this.successResponse(`Habitat ${habitat.name} added.`, response.payload);
  }

  async fetch(): Promise<IServiceResponse> {
    let response = await this.services.api.get('/habitats')
    if (response.success) return this.successResponse(response.message, response.payload);
    else return this.errorResponse(response.message);
  }

  async del(id: number): Promise<IServiceResponse> {
    let response = await this.services.api.del(`/habitat/${id}`);
    console.log("Delete response:", response); 
    if (response.success) return this.successResponse(response.message, response.payload);

    else return this.errorResponse(response.message);
  }
}
