/***********************************
 * Copyright 2021 HCL
 ***********************************/
import { NgModule } from '@angular/core';
import { ApiEndpointService } from './api-endpoint.service';

/**
 * Define Providers
 */
const PROVIDERS = [ApiEndpointService];

/**
 * Ng module
 */
@NgModule({
  providers: PROVIDERS,
})
/**
 * Service Module Class
 */
export class ServiceModule {}
