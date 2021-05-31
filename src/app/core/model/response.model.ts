/***********************************
 * Copyright 2021 HCL
 ***********************************/

/**
 * Interface for common response 
 */
export interface ICommonSuccessResponse {
  data: null; // Declaring data
  invokeTime: number | null; // Declaring invokeTime as number
  invokeService: string | null; // Declaring invokeService as string
  serviceResponseCode: string | null; // Service Response Code
  responseDescription: string | null; // Declaring Response Description as string
  reqIP: string | null; // request IP
  userId: string | null; // Declaring userId as string
  errorDetails: string | null; // Declaring errorDetails as string
}


/**
 * ICommonerror response Interface
 */
 export interface ICommonErrorResponse {
  data: null;
  invokeTime: number | null;
  invokeService: string | null;
  serviceResponseCode: string | null;
  responseDescription: string | null;
  reqIP: string | null;
  userId: string | null;
  errorDetails: string | null; // Declaring errorDetails as string
}