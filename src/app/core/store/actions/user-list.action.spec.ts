import { IUserList, IUserListResponse } from '../../model/user-list.model';
import {
  GetUserList,
  GetUserListFault,
  GetUserListSuccess,
  UserListActionTypes
} from './user-list.action';

const MOCK_USER_LIST: IUserList = {};

const MOCK_USER_LIST_RESPONSE: IUserListResponse = {
  data: MOCK_USER_LIST,
  userId: '1234567',
  invokeTime: 1575531541410,
  invokeService: 'GETUSERLIST',
  reqIP: '170.86.44.221',
  serviceResponseCode: '103',
  responseDescription: '103',
  errorDetails: null,
};

const MOCK_USER_LIST_NULL: IUserList = {};

const MOCK_USER_LIST_RESPONSE_NULL: IUserListResponse = {
  data: null,
  userId: '1234567',
  invokeTime: 1575531541410,
  invokeService: 'GETUSERLIST',
  reqIP: '170.86.44.221',
  serviceResponseCode: '103',
  responseDescription: '103',
  errorDetails: null,
};

/****************************************
 * GET USER LIST ACTIONS
 ****************************************/
describe('USER LIST ACTION', () => {
  it('should dispatch the action GET_USER_LIST', () => {
    const action = new GetUserList();
    expect({ ...action }).toEqual({
      type: UserListActionTypes.GetUserList,
    });
  });

  it('should dispatch the action GET_USER_LIST_SUCCESS', () => {
    const payload = MOCK_USER_LIST_RESPONSE;
    const action = new GetUserListSuccess(payload);
    expect({ ...action }).toEqual({
      type: UserListActionTypes.GetUserListSuccess,
      payload,
    });
  });

  it('should dispatch the action GET_USER_LIST_FAULT', () => {
    const payload = '';
    const action = new GetUserListFault(payload);
    expect({ ...action }).toEqual({
      type: UserListActionTypes.GetUserListFault,
      payload,
    });
  });
});
