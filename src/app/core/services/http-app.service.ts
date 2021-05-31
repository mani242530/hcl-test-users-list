/***********************************
 * Copyright 2021 HCL
 ***********************************/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICommonSuccessResponse } from '../model/response.model';

@Injectable({
  providedIn: 'root',
})
export class HttpAppService {
  /**
   * Constructor.
   */
  constructor(private http: HttpClient) {}

  /**
   * Get http request.
   */
  getHttpData(url: string): Observable<ICommonSuccessResponse> {
    return this.http.get<ICommonSuccessResponse>(url);
  }
  /**
   * Post http request.
   */
  postHttpData(url: string, data): Observable<ICommonSuccessResponse> {
    return this.http.post<ICommonSuccessResponse>(url, data);
  }
  /**
   * Put http request.
   */
  putHttpData(url: string, data): Observable<ICommonSuccessResponse> {
    return this.http.put<ICommonSuccessResponse>(url, data);
  }
}
