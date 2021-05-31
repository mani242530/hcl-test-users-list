/***********************************
 * Copyright 2021 HCL
 ***********************************/
import { Injectable } from '@angular/core';
import * as constants from '../constants/service-endpoint-constants';

/**
 * Injectable
 */
@Injectable({
  providedIn: 'root',
})
/**
 * Component
 */
export class ApiEndpointService {
  /**
   * Map of protocols for API endpoints.
   */
  static PROTOCOL = {
    HTTP: 'http://',
    HTTPS: 'https://',
  };
  /**
   * Map of contexts for API endpoints.
   */
  static APP_CONTEXT = ''; // For APP CONTEXT API endpoint
  /**
   * Concat of contexts and service API endpoints.
   */
  static GET_USER_LIST = `${constants.default.apiEndPoint.getUserList}`;
  /**
   * Map of API endpoints.
   */
  static ENDPOINT = {
    GET_USER_LIST: `${ApiEndpointService.GET_USER_LIST}`,
  };

  /**
   * Constructor.
   */
  constructor() {}

  /**
   * Constructs an API endpoint.
   *
   * NOTE: In the future this could construct API endpoints using environmental configs provided
   * at build time or at runtime via (for example) query string params...but for now we'll
   * keep this dumb simple.
   */
  static getEndpoint(endpoint: string): string {
    const protocol: string = ApiEndpointService.PROTOCOL.HTTPS;
    const domain: string = 'jsonplaceholder.typicode.com/'; // https://jsonplaceholder.typicode.com/users
    return `${protocol}${domain}${endpoint}`;
  }
  /**
   * Determines if the requested URL is an authentication API endpoint.
   * @param string url
   * @returns boolean
   */
  static isAuthEndpoint(url: string): boolean {
    return url.toLowerCase().indexOf(ApiEndpointService.APP_CONTEXT) > -1;
  }

  /**
   * Determines if the requested URL is an API endpoint.
   * @param string url
   * @returns boolean
   */
  static isApiEndpoint(url: string): boolean {
    return url.toLowerCase().indexOf(ApiEndpointService.APP_CONTEXT) > -1;
  }
}
