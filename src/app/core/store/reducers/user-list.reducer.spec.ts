import { ICommonErrorResponse } from '../../model/response.model';
import { IUserList, IUserListResponse } from '../../model/user-list.model';
import {
  GetUserList,
  GetUserListFault,
  GetUserListSuccess,
} from '../actions/user-list.action';
import { IUserListState, userListReducer } from './user-list.reducer';

const MOCK_USER_LIST: IUserList = {};

const MOCK_USER_LIST_ERROR_RESPONSE: ICommonErrorResponse = {
  data: null,
  userId: '1234567',
  invokeTime: 1575531541410,
  invokeService: 'GETUSERLIST',
  reqIP: '170.86.44.221',
  serviceResponseCode: '103',
  responseDescription: '103',
  errorDetails: null,
};

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

let state: IUserListState = {
  isLoading: false,
  isLoaded: false,
  data: null,
  action: null,
  error: null,
};

describe('USER LIST REDUCER', () => {
  it('should return init state', () => {
    const action = { type: 'NOOP' } as any;
    const newState = userListReducer(state, action);
    expect({ ...newState }).toEqual({ ...state });
    state = newState;
  });

  it('should reduce the action GET_USER_LIST', () => {
    const action = new GetUserList();
    const newState = userListReducer(state, action);
    expect({ ...newState }).toEqual({
      ...state,
      isLoading: true,
      isLoaded: false,
      data: null,
      error: null,
    });
    state = newState;
  });

  it('should reduce the action GET_USER__LIST_SUCCESS', () => {
    const payload = MOCK_USER_LIST_RESPONSE;
    const action = new GetUserListSuccess(payload);
    const newState = userListReducer(state, action);
    expect({ ...newState }).toEqual({
      ...state,
      isLoading: false,
      isLoaded: true,
      data: action.payload,
      error: null,
    });
    state = newState;
  });

  it('should reduce the action GET_USER_LIST_FAULT', () => {
    const payload = MOCK_USER_LIST_ERROR_RESPONSE;
    const action = new GetUserListFault(payload);
    const newState = userListReducer(state, action);
    expect(null).toEqual(null);
    state = newState;
  });
});
