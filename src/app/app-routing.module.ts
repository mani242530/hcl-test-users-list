/***********************************
 * Copyright 2021 HCL
 ***********************************/
import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutePaths } from './app.routes';

const PROVIDERS = [
  {
    provide: APP_BASE_HREF,
    useValue: '/hcl-test',
  },
];

const routes: Routes = [
  //////////////////////////////////////////////////
  // Unprotected Routes
  //////////////////////////////////////////////////

  /**
   * Redirects to user
   */
  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full',
  },

  {
    path: appRoutePaths.user,
    loadChildren: () =>
      import('./pages/user/user.module').then((u) => u.UserModule),
  },

  //////////////////////////////////////////////////
  // Redirects
  //////////////////////////////////////////////////
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: appRoutePaths.user,
  },
];

/**
 * Ng module
 */
@NgModule({
  /**
   * Configure the router for the application.
   *
   * NOTE: Use `enableTracing: true` to see Angular built-in router logging.
   */
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false, useHash: true }),
  ],
  exports: [RouterModule],
  providers: PROVIDERS,
})

/**
 * AppRoutingModule Class
 */
export class AppRoutingModule {}
