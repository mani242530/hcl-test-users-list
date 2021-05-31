/***********************************
 * Copyright 2021 HCL
 ***********************************/
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';
import { UserListEffect } from '../store/effects/user-list.effect';
import { reducers } from './index';

const EFFECTS = [UserListEffect];

const MODULES = [
  /**
   * StoreModule.forRoot is imported once in the root module, accepting a reducer
   * function or object map of reducer functions. If passed an object of
   * reducers, combineReducers will be run creating your application
   * meta-reducer. This returns all providers for an @ngrx/store
   * based application.
   */
  StoreModule.forRoot(reducers),

  /**
   * EffectsModule.forRoot() is imported once in the root module and
   * sets up the effects class to be initialized immediately when the
   * application starts.
   *
   */
  EffectsModule.forRoot(EFFECTS),

  /**
   * @ngrx/router-store keeps router state up-to-date in the store.
   */
  StoreRouterConnectingModule.forRoot({
    // They stateKey defines the name of the state used by the router-store reducer.
    // This matches the key defined in the map of reducers
    stateKey: 'router',
  }),

  /**
   * Store devtools instrument the store retaining past versions of state
   * and recalculating new states. This enables powerful time-travel
   * debugging.
   *
   * To use the debugger, install the Redux Devtools extension for either
   * Chrome or Firefox
   *
   */
  StoreDevtoolsModule.instrument({
    name: 'HCL Store DevTools',
    logOnly: environment.production,
  }),
];
/**
 * NgModule
 */
@NgModule({
  imports: MODULES,
  declarations: [],
})
/**
 * StateModule
 */
export class StateModule {}
