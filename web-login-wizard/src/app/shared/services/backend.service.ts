import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

    GETRequest(requestTarget: string, responseType: any = 'json'): Observable<any> {
        return this.http.get(
            environment.backendApiUrl + requestTarget,
            {
                observe: 'body',
                responseType: responseType
            }
        );
    }

    POSTRequest(requestTarget: string, requestData: any, responseType: any = 'json'): Observable<any> {
        return this.http.post(
            environment.backendApiUrl + requestTarget, requestData,
            {
                observe: 'response',
                responseType: responseType,
                headers: new HttpHeaders({
                  'Content-Type':  'application/json',
                  'Access-Control-Allow-Origin': '*'
                })
            },
        );
    }

    PUTRequest(requestTarget: string, requestData: any, responseType: any = 'json'): Observable<any> {
          return this.http.put(
            environment.backendApiUrl + requestTarget, requestData,
            {
                observe: 'response',
                responseType: responseType
            }
        );
    }

    DELETERequest(requestTarget: string, responseType: any = 'json'): Observable<any> {
        return this.http.delete(
            environment.backendApiUrl + requestTarget,
            {
                observe: 'response',
                responseType: responseType
            }
        );
    }
}
