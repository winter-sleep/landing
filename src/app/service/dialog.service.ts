import { Injectable } from '@angular/core';

@Injectable()
export class DialogService {

  public title: String;
  public content: String;
  public funcText: String;
  public hidden: Boolean = false;
  public confirmLink: String;
  public confirmFunction: Function;

  constructor() {
    this.init();
  }

  public show(content: String): void {
    this.init();
    this.content = content;
    this.hidden = false;
  }

  public hide(): void {
    this.hidden = true;
  }

  public confirmHandle(callback: Function): void {
    this.confirmFunction = callback;
  }

  private init(): void {
    this.title = 'Fragment 提醒您';
    this.content = '';
    this.funcText = '确 定';
    this.confirmLink = 'javascript:void(0)';
    this.confirmFunction = () => void(0);
  }

}