/***********************************
 * Copyright 2021 HCL
 ***********************************/
import { Component, OnDestroy, OnInit } from '@angular/core';

/**
 * Component
 */
@Component({
  selector: 'hcl-user-container',
  template: ` <hcl-user></hcl-user> `,
})

/**
 * UserContainerComponent
 */
export class UserContainerComponent implements OnInit, OnDestroy {
  /**
   * Constructor.
   */
  constructor() {}

  /**
   * Initialize the component.
   */
  ngOnInit() {}
  /**
   * Destroy component
   */
  ngOnDestroy() {}
}
