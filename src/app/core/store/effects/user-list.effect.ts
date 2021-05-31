/***********************************
 * Copyright 2021 HCL
 ***********************************/
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserListAdapter } from '../../adapters/user-list.adapter';
import { IUserListResponse } from '../../model/user-list.model';
import {
  GetUserList,
  GetUserListFault,
  GetUserListSuccess,
  UserListActionTypes
} from '../actions/user-list.action';

/**
 * Injectable
 */
@Injectable()

/**
 * UserListEffect
 */
export class UserListEffect {
  /**
   * Get User List
   */
  @Effect() // Decorator
  getUserList$: Observable<Action> = this.actions$.pipe(
    ofType<GetUserList>(UserListActionTypes.GetUserList),
    mergeMap(() =>
      this.userListAdapter.getUserList().pipe(
        map(
          // tslint:disable-next-line: max-line-length
          (data: IUserListResponse) => new GetUserListSuccess(data) // Mapping data to GetUserListSuccess
        ),
        catchError(
          (err) => of(new GetUserListFault(err)) // Mapping error to GetUserListFault
        )
      )
    )
  );

  /**
   * Constructor
   */
  constructor(
    private actions$: Actions, // Actions
    private userListAdapter: UserListAdapter // UserListAdapter
  ) {}
}
