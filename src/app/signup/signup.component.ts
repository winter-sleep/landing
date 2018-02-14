import { Component, OnInit, AfterContentInit } from '@angular/core';
import { SignupData, FieldState, MessageBox } from './struct';
import { ServeService } from './serve.service';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, AfterContentInit {

  public currentStep: Number = 1;

/**
 * 表单数据结构
 */
  public formData: SignupData = {
    email: '',
    identify: '',
    nickname: '',
    password: '',
    repassword: '',
    gender: 0
  };

  public fieldState: FieldState = {
    email: true,
    identify: true,
    nickname: true,
    password: true,
    repassword: true,
    gender: true
  };

  private messageBox: MessageBox = {
    email: '',
    identify: '',
    nickname: '',
    password: '',
    repassword: '',
    gender: ''
  };

  private emailTouched = false;

  private serveService: ServeService;
  private headerService: HeaderService;

  constructor(
    serveService: ServeService,
    headerService: HeaderService
  ) {
    this.serveService = serveService;
    this.headerService = headerService;
  }

  ngOnInit() {
    this.headerService.loaderState = false;
  }

  ngAfterContentInit() {
    this.headerService.loaderState = true;
  }

  public stepOneHandle(): void {
    this.currentStep = 1;
  }

  public stepTwoHandle(): void {
    if (
      this.isEmailValide() &&
      this.isIdentifyValide()
    ) {
      this.matchIdentify((data:any) => {
        if (this.fieldState.identify) {
          this.currentStep = 2;
        }
      })
    }
  }

  public stepThreeHandle(): void {
    if (
      this.isEmailValide() &&
      this.isIdentifyValide() &&
      this.isPasswordValide() &&
      this.isrePasswordValide()
    ) {
      this.currentStep = 3;
    }
  }

  public submitHandle(): void {
    if (
      this.isEmailValide() &&
      this.isIdentifyValide() &&
      this.isPasswordValide() &&
      this.isrePasswordValide() &&
      this.isNicknameValide()
    ) {
      this.httpCreateUserHandle();
    }
  }

  private httpCreateUserHandle() {
    let responseBase = this.serveService.test(this.formData);
    responseBase.subscribe(data => {
      console.log(data)
      if (data.status === 200) {
        alert("保存成功");
      }
    });
  }

/**
 * 验证 email 格式
 * 格式正确改变状态
 */
  private isEmailValide(): Boolean {
    this.messageBox.email = '';
    let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,4}){1,2})$/;
    this.fieldState.email = reg.test(this.formData.email);
    this.messageBox.email = this.fieldState.email ? '' : 'email 格式不正确~';
    return this.fieldState.email;
  }

/**
* 提供验证码格式验证功能
*/
  private isIdentifyValide(): Boolean {
    this.messageBox.identify = '';
    let message = '验证码错误, 您可能需要重新获取验证码~';
    let reg = /^[a-zA-Z0-9]{6}$/;
    this.fieldState.identify = reg.test(this.formData.identify)
    this.messageBox.identify = this.fieldState.identify ? '' : message;
    return this.fieldState.identify;
  }

/**
 * 调用接口检测验证码是否匹配, 通过 callback 传递验证信息
 * @param callback string 异步验证的回调函数
 */
  private matchIdentify(callback: Function): void {
    setTimeout(() => {
      this.fieldState.identify = true;
      callback();
    }, 1);
  }

  private validePasswordText(text: string): Boolean {
    let reg = /^[\d\w]{6,32}$/;
    return reg.test(text);
  }

  private isPasswordValide(): Boolean {
    this.messageBox.password = '';
    let message = '密码格式必须大于6位的英文、下划线或数字, 且不超过32位~';
    this.fieldState.password = this.validePasswordText(this.formData.password);
    this.messageBox.password = this.fieldState.password ? '' : message;
    return this.fieldState.password;
  }

  private isrePasswordValide(): Boolean {
    this.messageBox.repassword = '';
    let message = '密码格式有误, 或两次输入的密码不一致~';
    let valid_1 = this.validePasswordText(this.formData.repassword);
    let valid_2 = (this.formData.password === this.formData.repassword);
    this.fieldState.repassword = (valid_1 && valid_2);
    this.messageBox.repassword = this.fieldState.repassword ? '' : message;
    return this.fieldState.repassword;
  }

  private isNicknameValide(): Boolean {
    this.messageBox.nickname = '';
    let message = '您的名字不能为空，且不能超过16个字符';
    let length = this.formData.nickname.length;
    this.fieldState.nickname = !((length === 0) || (length > 16));
    this.messageBox.nickname = this.fieldState.nickname ? '' : message;
    return this.fieldState.nickname;
  }

}
