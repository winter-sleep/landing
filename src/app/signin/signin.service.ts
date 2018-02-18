import { Injectable } from '@angular/core';
import { SigninData } from './struct';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'asdasdasd',
  }),
  reportProgress: true,
  withCredentials: true,
};


@Injectable()
export class SigninService {

  public signinUrl = '/api/user/signin';

  constructor(
    private http: HttpClient
  ) { }

  public userSignin(signinData: SigninData): Observable<HttpResponse<any>> {
    httpOptions['observe'] = 'response';
    return this.http.post<any>(this.signinUrl, signinData, httpOptions);
  }

}
