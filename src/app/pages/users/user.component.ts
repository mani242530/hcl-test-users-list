/***********************************
 * Copyright 2021 HCL
 ***********************************/
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Compiler } from '@angular/core';

@Component({
  selector: 'hcl-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  /**
   * Reference to the user form.
   */
  userForm: FormGroup;

  /**
   * Constructor
   */
  constructor(private formBuilder: FormBuilder, private _compiler: Compiler) {}

  /**
   * Initializes the component by building the form.
   *
   */
  ngOnInit(): void {
    this.userForm = new FormGroup(
      this.formBuilder.group({
        fedexId: ['', [Validators.required]],
        password: ['', [Validators.required]],
      }).controls,
      {}
    );
  }
}
