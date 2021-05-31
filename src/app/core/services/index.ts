/***********************************
 * Copyright 2021 HCL
 ***********************************/
import { ApiEndpointService } from './api-endpoint.service';
import { UserListService } from './user-list.service';

// SERVICES
export const services: object[] = [ApiEndpointService, UserListService];

export * from './api-endpoint.service'; // Exporting API END POINT SERVICE
export * from './user-list.service'; // Exporting USER LIST SERVICE
