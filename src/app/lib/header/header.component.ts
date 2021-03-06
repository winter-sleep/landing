import { Component, OnInit } from '@angular/core';
import { NavButton, Logo } from '../../struct/header.struct';
import { UserService } from '../../service/user.service';
import { DialogService } from '../../service/dialog.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public userService: UserService;
  public dialogService: DialogService;

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
    userService: UserService,
    dialogService: DialogService
  ) {
    this.userService = userService;
    this.dialogService = dialogService;
  }

  public ngOnInit() {
    this.isSignin = this.userService.isLogin();
    this.userImage = this.userService.getAvatarImage(24, 24);
  }

  /**
   * 注销接口
   */
  public signoutHandle() {
    this.userService.signout();
  }

}
