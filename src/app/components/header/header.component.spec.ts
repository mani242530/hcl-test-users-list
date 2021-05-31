import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { ActionsSubject, Store, StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderComponent } from './header.component';

const mockedValue = { id: 1 };
const storeSubjectMock = new BehaviorSubject(mockedValue);
const mockedStore = {
  pipe: () => storeSubjectMock.asObservable(),
};

const MODULES = [
  BrowserModule,
  CommonModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  StoreModule.forRoot({}),
  EffectsModule,
  TranslateModule.forRoot(),
];

const COMPONENTS = [HeaderComponent];

const spy = jasmine.createSpyObj('TranslateService', ['use']);

const formBuilder: FormBuilder = new FormBuilder();
const PROVIDERS = [
  { provide: APP_BASE_HREF, useValue: '/' },
  { provide: Store, useValue: jasmine.createSpyObj('store', ['select']) },
  { provide: Store, useValue: mockedStore },
  { provide: TranslateService, useValue: spy },
  { provide: ActionsSubject, useValue: ActionsSubject },
  { provide: FormBuilder, useValue: formBuilder },
  // { provide: LanguageService, useValue: LanguageService },
  // provideMockStore({ initialState }),
];

let comp: HeaderComponent;
let store: any;
let translateServiceSpy: jasmine.SpyObj<TranslateService>;

describe('HEADER COMPONENT', () => {
  const initialState = {
    commonAppConfigData: null,
    error: null,
    openedModalName: null,
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MODULES, RouterModule.forRoot([])],
      declarations: [COMPONENTS],
      providers: [PROVIDERS, provideMockStore({ initialState })],
    }).compileComponents();

    translateServiceSpy = TestBed.get(TranslateService);
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(HeaderComponent);
    comp = fixture.debugElement.componentInstance;
    store = fixture.debugElement.injector.get(Store);
  });

  it('should display the HeaderComponent', () => {
    expect(comp).toBeTruthy();
  });
});
