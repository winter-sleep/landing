import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './/app-routing.module';
import { SlicebarComponent } from './tools/slicebar/slicebar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,  // 页面头部
    SignupComponent,
    SlicebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
