import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './lib/header/header.component';
import { SignupComponent } from './lib/signup/signup.component';
import { SlicebarComponent } from './lib/tools/slicebar/slicebar.component';
import { FooterComponent } from './lib/footer/footer.component';
import { SigninComponent } from './lib/signin/signin.component';
import { DialogComponent } from './lib/tools/dialog/dialog.component';
import { ActiveComponent } from './lib/active/active.component';

import { UserService } from './service/user.service';
import { CookieService } from 'ng2-cookies';
import { DialogService } from './service/dialog.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,  // 页面头部
    SignupComponent,
    SlicebarComponent,
    FooterComponent,
    SigninComponent,
    DialogComponent,
    ActiveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    UserService,
    CookieService,
    DialogService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
