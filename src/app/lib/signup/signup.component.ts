import { Component, OnInit, AfterContentInit } from '@angular/core';
import { SignupData, FieldState, MessageBox } from '../../struct/signup.struct';
import { UserService } from '../../service/user.service';

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

  public messageBox: MessageBox = {
    email: '',
    identify: '',
    nickname: '',
    password: '',
    repassword: '',
    gender: ''
  };

  public userService: UserService;
  public captchaImage: string;

  constructor(
    userService: UserService
  ) {
    this.userService = userService;
    this.changeCaptcha();
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
  }

  public changeCaptcha(): void {
    const date = new Date();
    this.captchaImage = '/api/user/captcha?date=' + Date.parse(date.toString());
    this.formData.identify = '';
  }

  public stepOneHandle(): void {
    this.currentStep = 1;
  }

  public stepTwoHandle(): void {
    this.emailSimpleValidate();
    this.isNicknameValide();
    console.log(this.fieldState);
    if (
      this.fieldState.email &&
      this.fieldState.nickname
    ) {
      this.currentStep = 2;
    }
  }

  public stepThreeHandle(): void {
    this.emailSimpleValidate();
    this.isNicknameValide();
    this.isPasswordValide();
    this.isrePasswordValide();
    if (
      this.fieldState.email &&
      this.fieldState.nickname &&
      this.fieldState.password &&
      this.fieldState.repassword
    ) {
      this.currentStep = 3;
    }
  }

  public submitHandle(): void {
    if (
      this.fieldState.email &&
      this.fieldState.nickname &&
      this.fieldState.password &&
      this.fieldState.repassword &&
      this.isIdentifyValide()
    ) {
      this.httpCreateUserHandle();
    }
  }

  public httpCreateUserHandle() {
    this.userService.createUser(this.formData)
    .subscribe(data => {
      if (data.status === this.userService.CREATED) {
        window.location.href = '/signin';
      }
    }, (error) => {
      if (error.status === 409) {
        alert(error.error.mess);
      } else {
        alert(error.error.mess);
      }
      this.changeCaptcha();
      const step: Number = parseInt(error.error.step, 10);
      this.currentStep = step;
    });
  }

/**
 * 验证 email 格式
 * 格式正确改变状态
 */
  public isEmailValide(): void {
    const _email = this.emailSimpleValidate();
    if (_email) {
      this.fieldState.email = false;
      this.matchEmail();
    }
  }

  private emailSimpleValidate(): Boolean {
    this.fieldState.email = false;
    this.messageBox.email = '';
    const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,4}){1,2})$/;
    const _email = reg.test(this.formData.email);
    if (! _email) {
      this.messageBox.email = 'email 格式不正确~';
    } else {
      this.fieldState.email = true;
      this.messageBox.email = '';
    }
    return _email;
  }

/**
 * 调用接口检测验证码是否匹配, 通过 callback 传递验证信息
 * @param callback string 异步验证的回调函数
 */
  public matchEmail(): void {
    this.userService.matchEmail(this.formData.email)
    .subscribe(data => {
      this.messageBox.email = '';
      if (data.status === this.userService.SUCCESS) {
        this.fieldState.email = false;
        this.messageBox.email = '这个电子邮件已经注册了，请直接登录吧~';
      }
    }, (error) => {
      if (error.status === this.userService.NOT_FOUND) {
        this.fieldState.email = true;
        this.messageBox.email = '';
      } else {
        this.fieldState.email = false;
        this.messageBox.email = '系统繁忙，检测电子邮件地址失败，请稍后再试~';
      }
      const step: Number = 1;
      this.currentStep = step;
    });
  }

/**
* 提供验证码格式验证功能
*/
public isIdentifyValide(): Boolean {
  this.messageBox.identify = '';
  const message = '验证码错误, 您可能需要重新获取验证码~';
  const reg = /^[a-zA-Z0-9]{6}$/;
  this.fieldState.identify = reg.test(this.formData.identify);
  this.messageBox.identify = this.fieldState.identify ? '' : message;
  return this.fieldState.identify;
}

  public validePasswordText(text: string): Boolean {
    const reg = /^[\d\w]{6,32}$/;
    return reg.test(text);
  }

  public isPasswordValide(): Boolean {
    this.messageBox.password = '';
    const message = '密码格式必须大于6位的英文、下划线或数字, 且不超过32位~';
    this.fieldState.password = this.validePasswordText(this.formData.password);
    this.messageBox.password = this.fieldState.password ? '' : message;
    return this.fieldState.password;
  }

  public isrePasswordValide(): Boolean {
    this.messageBox.repassword = '';
    const message = '密码格式有误, 或两次输入的密码不一致~';
    const valid_1: Boolean = this.validePasswordText(this.formData.repassword);
    const valid_2: Boolean = (this.formData.password === this.formData.repassword);
    this.fieldState.repassword = (valid_1 && valid_2);
    this.messageBox.repassword = this.fieldState.repassword ? '' : message;
    return this.fieldState.repassword;
  }

  public isNicknameValide(): Boolean {
    this.messageBox.nickname = '';
    const message = '您的名字不能为空，且不能超过16个字符';
    const length = this.formData.nickname.length;
    this.fieldState.nickname = !((length === 0) || (length > 16));
    this.messageBox.nickname = this.fieldState.nickname ? '' : message;
    return this.fieldState.nickname;
  }

}
