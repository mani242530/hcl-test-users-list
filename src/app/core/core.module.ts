/***********************************
 * Copyright 2021 HCL
 ***********************************/
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { AddTokenHeaderHttpRequestInterceptor } from './http-interceptor/add-token-header.http-request-interceptor';
import { ServiceModule } from './services/service.module';
import { StateModule } from './state/state.module';

// MODULES
const MODULES = [
  CommonModule, // Declaring Commmon Module
  HttpClientModule, // Declaring Http Client Module
  ServiceModule, // Declaring Service Module
  StateModule, // Declaring State Module
];

/**
 * Ng module
 */
@NgModule({
  imports: MODULES, // Importing Modules
  exports: MODULES, // Exporting Modules
  providers: [],
})

/**
 * Component
 */
export class CoreModule {
  /**
   * constructor
   */
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import only once in main AppModule.'
      );
    }
  }

  /**
   * For root
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AddTokenHeaderHttpRequestInterceptor,
          multi: true,
        },
      ],
    };
  }
}
