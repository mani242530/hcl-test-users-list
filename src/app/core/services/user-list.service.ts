/***********************************
 * Copyright 2021 HCL
 ***********************************/
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserListResponse } from '../model/user-list.model';
import { HttpAppService } from './http-app.service';
/**
 * Injectable
 */
@Injectable({
  providedIn: 'root',
})
/**
 * UserListService
 */
export class UserListService {
  /**
   * Constructor.
   */
  constructor(private httpAppService: HttpAppService) {}

  /**
   * Get a user from the API.
   */
  getUser(url: string): Observable<IUserListResponse> {
    return this.httpAppService.getHttpData(url);
  }
}
