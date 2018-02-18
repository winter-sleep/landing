import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { CookieService } from 'angular2-cookie/services/cookies.service';

import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './/app-routing.module';
import { SlicebarComponent } from './tools/slicebar/slicebar.component';
import { FooterComponent } from './footer/footer.component';
import { ServeService } from './signup/serve.service';
import { SigninService } from './signin/signin.service';
import { HeaderService } from './header/header.service';
import { SigninComponent } from './signin/signin.component';


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
    ServeService,
    HeaderService,
    SigninService,
    // CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
