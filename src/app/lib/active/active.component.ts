import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {

  public email: String;
  public identify: String;
  public captchaImage: String;

  constructor() { }

  ngOnInit() {
    this.changeCaptcha();
  }

  public submitHandle() {
    alert(1);
  }

  public changeCaptcha(): void {
    const date = new Date();
    this.captchaImage = '/api/user/captcha?date=' + Date.parse(date.toString());
    this.identify = '';
  }

}
