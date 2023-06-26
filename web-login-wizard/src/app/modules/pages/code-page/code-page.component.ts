import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-code-page',
  templateUrl: './code-page.component.html',
  styleUrls: ['./code-page.component.css']
})
export class CodePageComponent {
  code: String = '';

  constructor (
    public validationService: ValidationService,
    private router: Router
  ) {}

  onSubmit(form: NgForm) {
    if(form.valid) {
      this.validationService.verifyCode(this.code);
    } else {
      console.log("Form is not valid");
    }
  }
}
