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

  public createUrl = 'http://localhost/api/user';

  constructor(
    private http: HttpClient
  ) { }

  public createUser(signupData: SignupData): Observable<HttpResponse<any>> {
    httpOptions['observe'] = 'response';
    return this.http.post<any>(this.createUrl, signupData, httpOptions);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };

}
