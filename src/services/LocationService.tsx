import { BaseService, ServiceResponse } from "./BaseService";
import { ILocation } from "../model";

interface ILoginCredentials {
  username: string;
  password: string;
}

export class LocationService extends BaseService {
  async fetch(organisationId?: number): Promise<ILocation[]> {
    let response = await this.services.api("/location/fetch", {
      organisationId,
    });

    if (response) response.success = !response.errors?.length;
    return response;
  }
}
