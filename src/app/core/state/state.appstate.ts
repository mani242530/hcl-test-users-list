/***********************************
 * Copyright 2021 HCL
 ***********************************/
import * as fromCoreReducerState from '../store/reducers';

// APP STATE
export interface IAppState {
  userList: fromCoreReducerState.IUserListState; // Mappiing to user list reducer
}
