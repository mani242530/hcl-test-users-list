/***********************************
 * Copyright 2021 HCL
 ***********************************/
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, Observable, of } from 'rxjs';
import { first, flatMap, mergeMap, tap } from 'rxjs/operators';
import { ApiEndpointService } from '../services/api-endpoint.service';
import { IAppState } from '../state/state.appstate';

/**
 * Define Constants
 */
const FOUR_ZERO_ONE = 401;
const FOUR_ZERO_THREE = 403;

/**
 * Injectable
 */
@Injectable({
  providedIn: 'root',
})
export class AddTokenHeaderHttpRequestInterceptor implements HttpInterceptor {
  /**
   * Constructor.
   */
  constructor(private store$: Store<IAppState>) {}

  /**
   * Intercepts all HTTP requests and adds the token to the request's header if the URL
   * is a REST endpoint and not login or logout.
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const isApiEndpoint: boolean = ApiEndpointService.isApiEndpoint(
      request.url
    );
    const isAuthEndpoint: boolean = ApiEndpointService.isAuthEndpoint(
      request.url
    );

    // NOTE: Only add the auth token to non-Auth REST endpoints.
    if (isApiEndpoint && !isAuthEndpoint) {
      return this.addToken(request).pipe(
        mergeMap((requestWithToken: HttpRequest<any>) =>
          next.handle(requestWithToken).pipe(
            tap(
              (event) => {
                if (event instanceof HttpResponse) {
                  // dispatch empty action
                  return EMPTY;
                }
              },
              (error: any) => {
                if (error instanceof HttpErrorResponse) {
                  console.log(error);
                }
              }
            )
          )
        )
      );
    } else {
      return next.handle(request);
    }
  }

  /**
   * Adds the token to the request's header.
   */
  private addToken(request: HttpRequest<any>): Observable<HttpRequest<any>> {
    // NOTE: DO NOT try to immediately setup this selector in the constructor
    // or as an assignment in a class member variable as there's no stores available
    // when this interceptor first fires up and as a result it'll throw a runtime error.
    const headerObject = {};

    /**
     * Get Login Status from login state
     */
    return this.store$.pipe(
      first(),
      flatMap(() => {
        const authReq = request.clone({
          setHeaders: headerObject,
          withCredentials: true,
        });
        return of(authReq);
      })
    );
  }
}
