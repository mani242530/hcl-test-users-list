import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { ActionsSubject, Store, StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { BehaviorSubject } from 'rxjs';
import { FooterComponent } from './footer.component';

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
];

const COMPONENTS = [FooterComponent];

const PROVIDERS = [
  { provide: APP_BASE_HREF, useValue: '/' },
  { provide: Store, useValue: jasmine.createSpyObj('store', ['select']) },
  { provide: Store, useValue: mockedStore },
  { provide: ActionsSubject, useValue: ActionsSubject },
  provideMockStore(),
];

describe('FOOTER COMPONENT', () => {
  let comp: FooterComponent;
  let store: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MODULES, RouterModule.forRoot([])],
      declarations: [COMPONENTS],
      providers: [PROVIDERS],
    }).compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(FooterComponent);
    comp = fixture.debugElement.componentInstance;
    store = fixture.debugElement.injector.get(Store);
  });

  it('should display the FooterComponent', () => {
    comp.ngOnInit();
    expect(comp).toBeTruthy();
  });
});
