import { HabitatValues } from '../model';
import { ApiResult } from './Api';
import { BaseService } from './BaseService';

export class HabitatService extends BaseService {
  
  async add(habitat: HabitatValues): Promise<ApiResult> {
    let response = await this.services.api.post('/habitat/add', habitat);
    return response;
  }

  async fetch(): Promise<ApiResult> { 
    let response = await this.services.api.get('/habitats'); 
    console.log(response); 
    return await response.response.data.payload; 
  }
}
