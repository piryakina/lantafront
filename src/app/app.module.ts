import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenuComponent} from "./system/menu/menu.component";
import {LoginComponent} from "./system/login/login.component";
import { NewsComponent } from './system/news/news.component';
import { NewsPageComponent } from './system/pages/news-page/news-page.component';
import { LoginPageComponent } from './system/pages/login-page/login-page.component';
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "./service/api.service";
import {FormsModule} from "@angular/forms";
import { MenuPageComponent } from './system/pages/menu-page/menu-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    NewsComponent,
    NewsPageComponent,
    LoginPageComponent,
    MenuPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
