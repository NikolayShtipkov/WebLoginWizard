import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ValidationModel } from '../../models/validation';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-verify-page',
  templateUrl: './verify-page.component.html',
  styleUrls: ['./verify-page.component.css']
})
export class VerifyPageComponent {

  email: String = 'Email@example.com';
  phone: String = '0883941187';

  validationModel: ValidationModel = {
    email: this.email,
    phone: this.phone
  }

  constructor (
    public validationService: ValidationService,
    private router: Router
  ) {}

  onSubmit(form: NgForm) {
    if(form.valid) {
      this.validationService.validateCredentials(this.validationModel).subscribe(res => {
        this.router.navigateByUrl('/code');
      })
    } else {
      console.log("Form is not valid");
    }
  }
}
