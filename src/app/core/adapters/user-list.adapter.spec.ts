import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, inject, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { IUserList } from '../model/user-list.model';
import { UserListAdapter } from './user-list.adapter';

const mockedValue = { id: 1 };
const storeSubjectMock = new BehaviorSubject(mockedValue);
const PROVIDERS = [{ provide: UserListAdapter }];

const MOCK_USER_LIST: IUserList = {};

const MOCK_USER_LIST_Response = {
  payload: MOCK_USER_LIST,
  userId: '1234567',
  invokeTime: 1575531541410,
  invokeService: 'GETUSERLIST',
  reqIP: '170.86.44.221',
  serviceResponseCode: '103',
  responseDescription: '103',
  errorDetails: null,
};

describe('USER LIST ADAPTER', () => {
  let adapter: UserListAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserListAdapter],
    });
    adapter = TestBed.get(UserListAdapter);
  });

  it('should be created', inject([UserListAdapter], () => {
    expect(adapter).toBeTruthy();
  }));

  it('should create getUserListAdapter request', async(() => {
    adapter.getUserList().subscribe(() => {});
  }));
});
