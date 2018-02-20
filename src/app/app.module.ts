import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './lib/header/header.component';
import { SignupComponent } from './lib/signup/signup.component';
import { SlicebarComponent } from './lib/tools/slicebar/slicebar.component';
import { FooterComponent } from './lib/footer/footer.component';
import { SigninComponent } from './lib/signin/signin.component';

import { UserService } from './service/user.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,  // 页面头部
    SignupComponent,
    SlicebarComponent,
    FooterComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
