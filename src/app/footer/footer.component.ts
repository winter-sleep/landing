import { Component, OnInit } from '@angular/core';
import { Linker, Linkbox } from './struct';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public linkboxes: Array<Linkbox> = [
    {
      image: '/assets/system/footer/image/001.png',
      text: 'github',
      link: 'https://github.com/winter-sleep/landing',
      title: '在 Github 上找我'
    },
    {
      image: '/assets/system/footer/image/002.png',
      text: 'E-Mail',
      link: 'mailto:blldxt@aliyun.com',
      title: '发邮件给我们'
    },
    {
      image: '/assets/system/footer/image/003.png',
      text: 'Business',
      link: '/business',
      title: '商务合作'
    },
    {
      image: '/assets/system/footer/image/004.png',
      text: 'Jobs',
      link: '/jobs',
      title: '加入我们'
    },
  ];

  public linkers: Array<Linker> = [
    {text: '关于小站', link: '#'},
    {text: '服务条款', link: '#'},
    {text: '意见建议', link: '#'},
  ];

  public copyright = 'fragment.top 版权所有©layy, 2018, inc'

  constructor() { }

  ngOnInit() {
  }

}
