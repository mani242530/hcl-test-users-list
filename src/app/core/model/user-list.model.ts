/***********************************
 * Copyright 2021 HCL
 ***********************************/

/**
 * IUset List response Interface
 */
export interface IUserListResponse {
  data: IUserList | null;
  invokeTime: number | null; // Declaring invokeTime as number
  invokeService: string | null; // Declaring invokeService as string
  serviceResponseCode: string | null; // Service Response Code
  responseDescription: string | null; // Declaring Response Description as string
  reqIP: string | null; // request IP
  userId: string | null; // Declaring userId as string
  errorDetails: string | null; // Declaring errorDetails as string
}

/**
 * IUser List Interface
 */
export interface IUserList {}
