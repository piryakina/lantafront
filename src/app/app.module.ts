import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenuComponent} from "./system/menu/menu.component";
import {LoginComponent} from "./system/login/login.component";
import { NewsComponent } from './system/news/news.component';
import { LoginPageComponent } from './system/pages/login-page/login-page.component';
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "./service/api.service";
import {FormsModule} from "@angular/forms";
import { HomePageComponent } from './system/pages/home-page/home-page.component';
import { SpPageComponent } from './system/pages/sp-page/sp-page.component';
import { AnalyticPageComponent } from './system/pages/analytic-page/analytic-page.component';
import { UspPageComponent } from './system/pages/usp-page/usp-page.component';
import { SpComponent } from './system/sp/sp.component';
import { UploaderComponent } from './system/uploader/uploader.component';
import { AddNewsComponent } from './system/admin/add-news/add-news.component';
import {AddUserComponent} from "./system/admin/add-user/add-user.component";
import {NgxWebstorageModule} from "ngx-webstorage";
import { TableComponent } from './system/table/table.component';
import { AdminPageComponent } from './system/pages/admin-page/admin-page.component';
import { AddPeriodComponent } from './system/admin/add-period/add-period.component';
import { UspComponent } from './system/pages/usp/usp.component';
import { EditNewsComponent } from './system/admin/edit-news/edit-news.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    NewsComponent,

    LoginPageComponent,
    HomePageComponent,
    SpPageComponent,
    AnalyticPageComponent,
    UspPageComponent,
    SpComponent,
    UploaderComponent,
    AddNewsComponent,
    AddUserComponent,
    TableComponent,
    AdminPageComponent,
    AddPeriodComponent,
    UspComponent,
    EditNewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxWebstorageModule.forRoot(),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
