/***********************************
 * Copyright 2021 HCL
 ***********************************/
import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';
import { IAppState } from '../../../core/state/state.appstate';
import { UserListActions } from '../../../core/store/actions';
import * as fromUserList from '../../../core/store/selectors/user-list.selector';

/**
 * Component
 */
@Component({
  selector: 'hcl-user-container',
  template: ` <hcl-user [users]="users"></hcl-user> `,
})

/**
 * UserContainerComponent
 */
export class UserContainerComponent implements OnInit, OnDestroy {
  users;
  searchText: string;

  private userList$: Observable<any>; // Declaring userList as Observable
  private subs = new SubSink();

  /**
   * Constructor.
   */
  constructor(private store$: Store<IAppState>) {}

  /**
   * Initialize the component.
   */
  ngOnInit() {
    this.getUserList();
  }
  /**
   * Method for - to get user list
   */
  getUserList() {
    this.store$.dispatch(new UserListActions.GetUserList()); // Dispatching GetUserList from UserListActions with data
    this.userList$ = this.store$.pipe(select(fromUserList.getUseListData)); // selecting getUseListData fromUserList
    this.subs.sink = this.userList$.subscribe((responseData) => {
      if (responseData) {
        this.users = responseData;
        console.log(this.users);
      }
    });
  }
  /**
   * Destroy component
   */
  ngOnDestroy() {}
}
