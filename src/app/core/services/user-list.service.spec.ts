import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { async, getTestBed, inject, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { IUserList, IUserListResponse } from '../model/user-list.model';
import { UserListService } from './user-list.service';

const mockedValue = { id: 1 };
const storeSubjectMock = new BehaviorSubject(mockedValue);
const mockedStore = {
  pipe: () => storeSubjectMock.asObservable(),
};
const PROVIDERS = [{ provide: UserListService }];

const MOCK_USER: IUserList = {};

const MOCK_USER_Response: IUserListResponse = {
  data: MOCK_USER,
  userId: '1234567',
  invokeTime: 1575531541410,
  invokeService: 'GETUSERS',
  reqIP: '170.86.44.221',
  serviceResponseCode: '103',
  responseDescription: '103',
  errorDetails: null,
};

describe('USER SERVICE', () => {
  let injector: TestBed;
  let service: UserListService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserListService],
    });

    injector = getTestBed();
    service = injector.get(UserListService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject(
    [UserListService],
    (_UserListService: UserListService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('should get getUser request', async(() => {
    spyOn(service, 'getUser').and.callThrough();
    service
      .getUser('https://jsonplaceholder.typicode.com/users')
      .subscribe((res) => {});
    httpMock.expectOne({
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'GET',
    });
  }));
});
