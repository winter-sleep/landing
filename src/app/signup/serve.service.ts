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
  observe: 'response',
  responseType: 'json',

};

@Injectable()
export class ServeService {

  CREATED = 200; // 201

  public createUrl = '/assets/webtest/cat.json';

  constructor(
    private http: HttpClient
  ) { }

  public aa() {
    alert(1);
  }

  public test(s: SignupData): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.createUrl, httpOptions);
  }

  // private handleError(message: string) {
  //   console.log(message);
  // }

}
