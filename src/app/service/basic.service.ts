import {
  HttpClient,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


export class BasicService {

  CREATED = 201;
  SUCCESS = 200;

  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'asdasdasd',
    }),
    reportProgress: true,
    withCredentials: true,
  };

  constructor(
    public http: HttpClient
  ) { }


}
