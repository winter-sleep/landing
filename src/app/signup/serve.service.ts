import { Injectable } from '@angular/core';
import { SignupData } from './struct';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, map, tap } from 'rxjs/operators';
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
export class ServeService {

  CREATED = 201;
  MATCHED = 200;

  public createUrl = 'http://localhost/api/user';
  public emailUrl = 'http://localhost/api/user/emailExist';

  constructor(
    private http: HttpClient
  ) { }

  public createUser(signupData: SignupData): Observable<HttpResponse<any>> {
    httpOptions['observe'] = 'response';
    return this.http.post<any>(this.createUrl, signupData, httpOptions);
  }

  public matchEmail(email: string): Observable<HttpResponse<any>> {
    httpOptions['observe'] = 'response';
    return this.http.get<any>(
      this.emailUrl + '?email=' + email,
      httpOptions
    );
  }

}
