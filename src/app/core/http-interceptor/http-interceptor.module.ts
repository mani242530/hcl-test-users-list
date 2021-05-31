/***********************************
 * Copyright 2021 HCL
 ***********************************/
/**
 * Http Interceptor Module
 */
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AddTokenHeaderHttpRequestInterceptor } from './add-token-header.http-request-interceptor';

/**
 * Define Providers
 */
const PROVIDERS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AddTokenHeaderHttpRequestInterceptor,
    multi: true,
  },
];

/**
 * Ng module
 */
@NgModule({
  imports: [HttpClientModule],
  exports: [],
  declarations: [],
  providers: PROVIDERS,
})

/**
 * Class for Http Interceptor Module
 */
export class HttpInterceptorModule {}
