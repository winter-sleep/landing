import { SignupData } from '../struct/signup.struct';
import { SigninData } from '../struct/signin.struct';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BasicService } from './basic.service';

export class UserService extends BasicService {

  public createUrl = '/api/user';
  public emailUrl = '/api/user/emailExist';
  public signinUrl = '/api/user/signin';
  public signoutUrl = '/api/user/signout';

  public createUser(signupData: SignupData): Observable<HttpResponse<any>> {
    this.httpOptions['observe'] = 'response';
    return this.http.post<any>(this.createUrl, signupData, this.httpOptions);
  }

  public matchEmail(email: string): Observable<HttpResponse<any>> {
    this.httpOptions['observe'] = 'response';
    return this.http.get<any>(
      this.emailUrl + '?email=' + email,
      this.httpOptions
    );
  }

  public userSignin(signinData: SigninData): Observable<HttpResponse<any>> {
    this.httpOptions['observe'] = 'response';
    return this.http.post<any>(this.signinUrl, signinData, this.httpOptions);
  }

  public signout(): void {
    this.httpOptions['observe'] = 'response';
    this.http.get<any>(
      this.signoutUrl,
      this.httpOptions
    ).subscribe(data => {
      if (data.status === this.SUCCESS) {
        setTimeout(() => {
          window.location.reload(true);
        }, 500);
      }
    }, (error) => {
      if (error.status === 409) {
        alert(error.error.mess);
      }
      window.location.reload(true);
    });
  }

  public isLogin(): Boolean {
    const token = this.getToken();
    return !this.empty(token);
  }

  public getAvatarImage(width: number, height: number): string {
    return '/static/userimage/' + width + 'x' + height + '.png';
  }

}
