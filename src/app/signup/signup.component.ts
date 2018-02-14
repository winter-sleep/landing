import { Component, OnInit } from '@angular/core';
import { SignupData, FieldState } from './struct';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public currentStep: number = 1;

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

  private emailTouched = false;

  constructor() { }

  ngOnInit() {
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
    this.currentStep = 3;
  }

  public postHandle(): void {
    console.log(this.formData);
  }

/**
 * 验证 email 格式
 * 格式正确改变状态
 */
  private isEmailValide(): Boolean {
    let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,4}){1,2})$/;
    if (!reg.test(this.formData.email)) {
        this.fieldState.email = false;
    } else {
        this.fieldState.email = true;
    }
    return this.fieldState.email;
  }
/**
* 在 email 表单失去焦点时进行验证
* 行为与 SignupComponent::isEmailValide 一致
*/
  public emailTouchedHandle(): void {
    this.isEmailValide();
  }

/**
* 提供验证码格式验证功能
*/
  private isIdentifyValide(): Boolean {
    let reg = /^[a-zA-Z0-9]{6}$/;
    if (reg.test(this.formData.identify)) {
      this.fieldState.identify = true;
    } else {
      this.fieldState.identify = false;
    }
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

}
