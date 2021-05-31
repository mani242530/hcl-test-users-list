/***********************************
 * Copyright 2021 HCL
 ***********************************/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserContainerComponent } from './container/user.container';

/**
 * Routes
 */
const routes: Routes = [
  {
    path: '',
    component: UserContainerComponent, // User Container Component
  },
];

/**
 * Ng module
 */
@NgModule({
  imports: [RouterModule.forChild(routes)], // Importing RouterModule
  exports: [RouterModule], // exporting RouterModule
})

/**
 * UserRoutingModule
 */
export class UserRoutingModule {}
