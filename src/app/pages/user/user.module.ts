/***********************************
 * Copyright 2021 HCL
 ***********************************/
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FilterPipe } from '../../shared/pipe/filter';
import { UserContainerComponent } from './container/user.container';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

/**
 * MODULES
 */
const MODULES = [
  UserRoutingModule,
  HttpClientModule,
  CommonModule,
  FormsModule,
];

/**
 * COMPONENTS
 */
const COMPONENTS = [
  UserContainerComponent, // User CONTAINER COMPONENT
  UserComponent, // User COMPONENT
  FilterPipe, // Declaring Filter Pipe
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
