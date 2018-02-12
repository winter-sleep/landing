import { Component, OnInit } from '@angular/core';
import { SignupData } from './struct';

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
      gender: 0
  };

  constructor() { }

  ngOnInit() {
  }

  public stepOneHandle() {
    this.currentStep = 1;
  }

  public stepTwoHandle() {
    this.currentStep = 2;
  }

  public stepThreeHandle() {
    this.currentStep = 3;
  }

}
