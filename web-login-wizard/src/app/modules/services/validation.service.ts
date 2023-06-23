import { Injectable } from '@angular/core';
import { BackendService } from '../../shared/services/backend.service';
import { Observable, map } from 'rxjs';
import { Validation } from '../models/validation';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(private backendService: BackendService) {}

  validateCredentials(validationModel: Validation): Observable<void> {
    return this.backendService.POSTRequest('Validate', validationModel);
  }

  verifyCode(code: String): Observable<void> {
    return this.backendService.POSTRequest('Code', code);
  }
}
