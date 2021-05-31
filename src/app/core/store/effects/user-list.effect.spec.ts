import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { cold } from 'jasmine-marbles';
import { of, throwError } from 'rxjs';
import { IUserList, IUserListResponse } from '../../model/user-list.model';
import {
  GetUserListFault,
  GetUserListSuccess,
  UserListActionTypes
} from '../actions/user-list.action';
import { UserListEffect } from './user-list.effect';

const MOCK_USER_LIST: IUserList = {};

const MOCK_USER_LIST_NULL: IUserList = {};

const MOCK_USER_LIST_RESPONSE: IUserListResponse = {
  data: MOCK_USER_LIST,
  userId: '1234567',
  invokeTime: 1575531541410,
  invokeService: 'GETUSETLIST',
  reqIP: '170.86.44.221',
  serviceResponseCode: '103',
  responseDescription: '103',
  errorDetails: '',
};

const MOCK_USER_LIST_RESPONSE_ERROR: IUserListResponse = {
  data: null,
  userId: '1234567',
  invokeTime: 1575531541410,
  invokeService: 'GETUSETLIST',
  reqIP: '170.86.44.221',
  serviceResponseCode: '103',
  responseDescription: '103',
  errorDetails: '',
};

describe('USER LIST EFFECT', () => {
  let adapter: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserListEffect],
    });
    adapter = jasmine.createSpyObj('userListAdapter', ['getUserList']);
  });

  describe('GET USER LIST EFFECTS', () => {
    it('should return a GET_USER_LIST_SUCCESS action, with the user list, on success', () => {
      adapter.getUserList.and.returnValue(of(MOCK_USER_LIST_RESPONSE));
      const source = cold('a', {
        a: { type: UserListActionTypes.GetUserList },
      });
      const effects = new UserListEffect(new Actions(source), adapter);
      const expected = cold('a', {
        a: new GetUserListSuccess(MOCK_USER_LIST_RESPONSE),
      });
      expect(effects.getUserList$).toBeObservable(expected);
    });

    it('should return a GET_USER_LIST_FAULT action, with the error', () => {
      const error = MOCK_USER_LIST_RESPONSE_ERROR;
      adapter.getUserList.and.returnValue(throwError(error));

      const source = cold('a', {
        a: { type: UserListActionTypes.GetUserList },
      });
      const effects = new UserListEffect(new Actions(source), adapter);
      effects.getUserList$.subscribe((result) => {
        expect(result).toEqual(
          new GetUserListFault(MOCK_USER_LIST_RESPONSE_ERROR)
        );
      });
    });
  });
});
