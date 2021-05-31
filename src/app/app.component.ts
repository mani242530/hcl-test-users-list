/***********************************
 * Copyright 2021 HCL
 ***********************************/
import { Component, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
/**
 * Component
 */
@Component({
  selector: 'app-hcl',
  templateUrl: './app.component.html',
})
/**
 * AppComponent
 */
export class AppComponent implements OnDestroy {
  /**
   * Constructor
   */
  constructor(public translateService: TranslateService) {
    /**
     * Default Language should be EN to catch fallBacks
     */
    window.onpopstate = (e) => {
      window.history.forward();
    };
    translateService.setDefaultLang('en');
  }

  /**
   * Destroy component
   */
  ngOnDestroy() {}
}
