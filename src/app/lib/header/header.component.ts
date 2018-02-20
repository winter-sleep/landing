import { Component, OnInit } from '@angular/core';
import { NavButton, Logo } from '../../struct/header.struct';
import { UserService } from '../../service/user.service';
import Cookies from 'js-cookie';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public userService: UserService;

  /**
   * 导航栏标准按钮
   */
  public navbtn: Array<NavButton> = [
    {id: 1, text: '作品', href: '/article', image: 'assets/system/header/image/101.png'},
    {id: 3, text: 'wiki', href: '/wiki', image: 'assets/system/header/image/106.png'},
    {id: 2, text: '日程', href: '/schedule', image: 'assets/system/header/image/108.png'},
    {id: 4, text: '话题', href: '/talk', image: 'assets/system/header/image/107.png'}
  ];

  /**
   * 网站标识图像
   */
  public logo: Logo = {
    id: 0,
    text: 'Fragment',
    href: '/'
  };

  public isSignin: Boolean = false;
  public loaderState: Boolean;
  public userImage: string;

  constructor(
    userService: UserService
  ) {
    this.userService = userService;
  }

  public ngOnInit() {
    const token = Cookies.get('token');
    this.isSignin = token ? true : false;
    this.userImage = Cookies.get('userImage');
  }

  /**
   * 注销接口
   */
  public signoutHandle() {
    this.userService.signout()
    .subscribe(data => {
      if (data.status === this.userService.SUCCESS) {
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

}
