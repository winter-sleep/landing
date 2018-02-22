import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import Cookies from 'js-cookie';

@Injectable()
export class BasicService {

  public SUCCESS = 200;
  public CREATED = 201;
  public ACCEPTED = 202;
  public NO_CONTENT = 204;
  public RESET_CONTENT = 205;
  public PARTIAL_CONTENT = 206;
  public MOVED_PERMANENTLY = 301;
  public MOVED_TEMPORARILY = 302;
  public SEE_OTHER = 303;
  public BAD_REQUEST = 400;
  public UNAUTHORIZED = 401;
  public FORBIDDEN = 403;
  public NOT_FOUND = 404;
  public METHOD_NOT_ALLOWED = 405;
  public NOT_ACCEPTABLE = 406;
  public GONE = 410;
  public LOCKED = 423;
  public INTERNAL_SERVER_ERROR = 500;
  public BAD_GATEWAY = 502;
  public SERVICE_UNAVAILABLE = 503;
  public VERSION_NOT_SUPPORTED = 505;
  public BANDWIDTH_LIMIT_EXCEEDED = 509;

  public MIME_JSON = 'application/json';
  public MIME_XML = 'application/xml';
  public MIME_HTML = 'text/html';
  public MIME_XHTML = 'application/xhtml+xml';
  public MIME_TEXT = 'text/plain';
  public MIME_PDF = 'application/pdf';
  public MIME_EXCEL = 'application/vnd.ms-excel';
  public MIME_CSV = 'text/csv';

  public cookies = Cookies;

  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': this.MIME_JSON,
      'Authorization': this.getToken(),
    }),
    reportProgress: true,
    withCredentials: true,
  };

  public constructor(
    public http: HttpClient
  ) { }

  public getToken(): string {
    const token = this.cookies.get('token');
    return token ? token : '';
  }

  public empty(value: any): Boolean {
    if (
      value === '' ||
      value === null ||
      value === 0 ||
      value === false ||
      value === {} ||
      value === []
    ) {
      return true;
    }
    return false;
  }

}
