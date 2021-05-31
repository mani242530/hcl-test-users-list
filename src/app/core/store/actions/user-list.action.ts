/***********************************
 * Copyright 2021 HCL
 ***********************************/
import { Action } from '@ngrx/store';
import { IUserListResponse } from '../../model/user-list.model';

export enum UserListActionTypes {
  GetUserList = '[GET] User List',
  GetUserListSuccess = '[GET] User List Success',
  GetUserListFault = '[GET] User List Fault',
}

/****************************************
 * GET USER LIST
 ****************************************/
export class GetUserList implements Action {
  readonly type = UserListActionTypes.GetUserList;

  constructor() {}
}

/****************************************
 * GET USER LIST SUCCESS
 ****************************************/
// tslint:disable-next-line:max-classes-per-file
export class GetUserListSuccess implements Action {
  readonly type = UserListActionTypes.GetUserListSuccess;

  constructor(public payload: IUserListResponse) {}
}

/****************************************
 * GET USER LIST FAULT
 ****************************************/
// tslint:disable-next-line:max-classes-per-file
export class GetUserListFault implements Action {
  readonly type = UserListActionTypes.GetUserListFault;

  constructor(public payload) {}
}
export type UserListActions =
  | GetUserList
  | GetUserListSuccess
  | GetUserListFault;
