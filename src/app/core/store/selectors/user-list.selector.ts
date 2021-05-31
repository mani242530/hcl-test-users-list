/***********************************
 * Copyright 2021 HCL
 ***********************************/
import * as fromUserList from '../reducers/user-list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// -------------------------------------------------------------------
// USER PREFERENCES USER LIST SELECTORS
// -------------------------------------------------------------------
export const selectUserListState =
  createFeatureSelector<fromUserList.IUserListState>('userList');

// -------------------------------------------------------------------
// USER LIST DATA SELECTOR
// -------------------------------------------------------------------
export const getUseListData = createSelector(
  selectUserListState,
  fromUserList.getUserList
);

// -------------------------------------------------------------------
// USER LIST SELECTOR ERROR
// -------------------------------------------------------------------
export const getUserListError = createSelector(
  selectUserListState,
  fromUserList.getUserListError
);
