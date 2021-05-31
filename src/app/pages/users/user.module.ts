/***********************************
 * Copyright 2021 HCL
 ***********************************/
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UserContainerComponent } from './container/user.container';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

/**
 * MODULES
 */
const MODULES = [UserRoutingModule, HttpClientModule];

/**
 * COMPONENTS
 */
const COMPONENTS = [
  UserContainerComponent, // User CONTAINER COMPONENT
  UserComponent, // User COMPONENT
];

/**
 * PROVIDERS
 */
const PROVIDERS = []; // User SERVICE

/**
 * Ng module
 */
@NgModule({
  imports: MODULES,
  exports: COMPONENTS,
  declarations: COMPONENTS,
  providers: PROVIDERS,
})

/**
 * UserModule
 */
export class UserModule {}
