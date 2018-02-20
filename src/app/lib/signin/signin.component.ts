import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { SigninData, FieldState, MessageBox } from '../../struct/signin.struct';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  private userService: UserService;

  public submitText: String = '登 录';

  public formData: SigninData = {
    email: '',
    password: ''
  };

  public fieldState: FieldState = {
    email: true,
    password: true
  };

  public messageBox: MessageBox = {
    email: '',
    password: ''
  };

  constructor(userService: UserService) {
    this.userService = userService;
  }

  ngOnInit() {
  }

  public submitHandle() {
    if (
      this.isEmailValid() &&
      this.isPasswordValid()
    ) {
      this.httpUserSigninHandle();
    }
  }

  private httpUserSigninHandle() {
    this.submitText = '处理中...';
    this.userService.userSignin(this.formData)
    .subscribe(data => {
      if (data.status === 200) {
        this.submitText = '登录成功';
        setTimeout(() => {
          window.location.href = '/';
        }, 600);
      }
    }, (error) => {
      if (error.status === 409) {
        alert(error.error.mess);
      } else {
        alert('系统繁忙，请稍后再试~');
      }
      this.submitText = '登 录';
    });
  }

/**
 * 验证 email 格式
 * 格式正确改变状态
 */
  public isEmailValid(): Boolean {
    this.messageBox.email = '';
    const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,4}){1,2})$/;
    this.fieldState.email = reg.test(this.formData.email);
    this.messageBox.email = this.fieldState.email ? '' : 'email 格式不正确~';
    return this.fieldState.email;
  }

/**
 * 验证 passsword 格式
 */
  public isPasswordValid(): Boolean {
    this.messageBox.password = '';
    const reg = /^[\d\w]{6,32}$/;
    this.fieldState.password = reg.test(this.formData.password);
    this.messageBox.password = this.fieldState.password ? '' : '密码格式不正确~';
    return reg.test(this.formData.password);
  }

}
