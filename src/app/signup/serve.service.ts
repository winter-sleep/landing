import { Injectable } from '@angular/core';
import { SignupData } from './struct';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from '@angular/common/http';

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

  CREATED = 200; // 201

  public createUrl = '/assets/webtest/signup.json';

  constructor(
    private http: HttpClient
  ) { }

  public test(s: SignupData): Observable<HttpResponse<any>> {
    httpOptions['observe'] = 'response';
    return this.http.get<any>(this.createUrl, httpOptions);
  }

}
