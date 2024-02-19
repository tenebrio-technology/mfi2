import { BaseService } from './BaseService';
import { ILocation } from '../model';

export class LocationService extends BaseService {
  async fetch(organisationId?: number): Promise<ILocation[]> {
    let response = await this.services.api('/location/fetch', {
      organisationId,
    });

    if (response) response.success = !response.errors?.length;
    return response;
  }
}
