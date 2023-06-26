import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Validation } from '../../models/validation';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-verify-page',
  templateUrl: './verify-page.component.html',
  styleUrls: ['./verify-page.component.css']
})
export class VerifyPageComponent {

  validationModel: Validation = {
    phone: 'Phone Number',
    email: 'Email'
  }

  constructor (
    public validationService: ValidationService,
    private router: Router
  ) {}

  onSubmit(form: NgForm) {
    if(form.valid) {
      this.validationService.validateCredentials(this.validationModel);
    } else {
      console.log("Form is not valid");
    }
  }
}
