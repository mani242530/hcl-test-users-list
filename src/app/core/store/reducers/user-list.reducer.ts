/***********************************
 * Copyright 2021 HCL
 ***********************************/
import { ICommonErrorResponse } from '../../model/response.model';
import { IUserListResponse } from '../../model/user-list.model';
import {
  UserListActions,
  UserListActionTypes,
} from '../actions/user-list.action';

/**
 * Iuser preferences user list state interface
 */
export interface IUserListState {
  isLoading: boolean;
  isLoaded: boolean;
  data: IUserListResponse | null;
  action: string | null;
  error: ICommonErrorResponse | null;
}

/**
 * IUser List State
 */
const initialState: IUserListState = {
  isLoading: false, // Initializing isLoading as false
  isLoaded: false, // Initializing isLoaded as false
  data: null, // Initializing data as null
  action: null, // Initializing action as null
  error: null, // Initializing error as null
};

/****************************************
 * USER LIST REDUCERS
 ****************************************/
/**
 * User List Reducer
 * @param IUserListState
 * @param UserListActions
 * @returns state
 */
export function userListReducer(
  state: IUserListState = initialState,
  action: UserListActions
): IUserListState {
  switch (
    action.type // checking which user list state
  ) {
    case UserListActionTypes.GetUserList: // GetUserList action
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        data: null,
        error: null,
      };
    case UserListActionTypes.GetUserListSuccess: // GetUserListSuccess action
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: action.payload,
        error: null,
      };
    case UserListActionTypes.GetUserListFault: // GetUserListFault action
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        error: action.payload,
      };

    default:
      // default state
      return state;
  }
}

/****************************************
 * Get User List
 ****************************************/
/**
 * States get user list
 * @param IUserListState
 */
export const getUserList = (state: IUserListState) => state && state.data;

/****************************************
 * Get User Error
 ****************************************/
/**
 * States get user list error
 * @param IUserListState
 */
export const getUserListError = (state: IUserListState) => state && state.error;
