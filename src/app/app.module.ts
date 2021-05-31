import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CoreModule } from './core/core.module';

/**
 * MODULES
 */
const MODULES = [
  AppRoutingModule,
  BrowserModule, // Adding BrowserModule
  CoreModule.forRoot(), // Adding core Module

  ReactiveFormsModule, // Adding Reactive Forms Module\
  RouterModule,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient],
    },
    useDefaultLang: true,
    isolate: true,
  }),
];

/**
 * COMPONENTS
 */
const COMPONENTS = [
  AppComponent, // Declaring App Component
  FooterComponent, // Declaring Footer Component
  HeaderComponent, // Declaring Header Component
];

/**
 * Ng module
 */
@NgModule({
  declarations: COMPONENTS, // Declaring Components
  imports: MODULES, // Importing Modules
  providers: [],
  bootstrap: [AppComponent],
})
/**
 * DECLARATION OF APPMODULE CLASS
 */
export class AppModule {}

/**
 * Https loader factory -- required for AOT compilation
 */
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './i18n/', '.json');
}
