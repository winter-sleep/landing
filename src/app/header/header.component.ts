import { Component, OnInit } from '@angular/core';
import { NavButton, Logo } from './struct';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /**
   * 导航栏标准按钮
   */
  public navbtn: Array<NavButton> = [
    {id: 1, text: "作品", href: "/article", image: "http://localhost/image/index/pen.png"},
    {id: 2, text: "日程", href: "/date", image: "http://localhost/image/index/pen.png"},
    {id: 3, text: "wiki", href: "/wiki", image: "http://localhost/image/index/pen.png"},
    {id: 4, text: "话题", href: "/talk", image: "http://localhost/image/index/pen.png"}
  ];

  /**
   * 网站标识图像
   */
  public logo: Logo = {
    id: 0,
    text: "Fragment",
    href: "/"
  }

  public constructor() { }

  public ngOnInit() {
  }

}
