import { Injectable } from '@angular/core';
import { BackendService } from '../../shared/services/backend.service';
import { Observable, map } from 'rxjs';
import { ValidationModel } from '../models/validation';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(private backendService: BackendService) {}

  validateCredentials(validationModel: Object): Observable<Object> {
    console.log(validationModel);

    return this.backendService.POSTRequest('server', validationModel);
  }

  validateCredentialsCopy(): Observable<void> {

    return this.backendService.GETRequest('ValidateCopy');
  }

  verifyCode(code: String): Observable<void> {
    return this.backendService.POSTRequest('Code', code);
  }
}
