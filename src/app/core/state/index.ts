/***********************************
 * Copyright 2021 HCL
 ***********************************/
import * as fromCoreReducers from '../store/reducers/index';
import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/state.appstate';

// Mapping Actions to Reducers
export const reducers: ActionReducerMap<IAppState> = {
  userList: fromCoreReducers.userListReducer, // Mapping to userListReducer
};
