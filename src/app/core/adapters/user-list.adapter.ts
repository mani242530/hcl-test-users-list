/***********************************
 * Copyright 2021 HCL
 ***********************************/
import { Injectable } from '@angular/core';
import { ApiEndpointService, UserListService } from '../services';

/**
 * Injectable
 */
@Injectable({
  providedIn: 'root',
})
/**
 * UserAdapter
 */
export class UserListAdapter {
  /**
   * Constructor.
   */
  constructor(private userListService: UserListService) {}

  /**
   * Method for - Get User
   */
  getUserList() {
    const url = ApiEndpointService.getEndpoint(
      ApiEndpointService.ENDPOINT.GET_USER_LIST
    );

    return this.userListService.getUser(url);
  }
}
