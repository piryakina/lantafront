import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./system/pages/login-page/login-page.component";
import {LoginComponent} from "./system/login/login.component";
import {MenuComponent} from "./system/menu/menu.component";
import {HomePageComponent} from "./system/pages/home-page/home-page.component";
import {SpPageComponent} from "./system/pages/sp-page/sp-page.component";
import {AnalyticPageComponent} from "./system/pages/analytic-page/analytic-page.component";
import {UspPageComponent} from "./system/pages/usp-page/usp-page.component";

const routes: Routes = [
  {path:"login", component: LoginPageComponent},
  {path:"home", component: HomePageComponent},
  {path:"usp", component: UspPageComponent},
  {path:"analytic", component: AnalyticPageComponent},
  {path:"sp", component: SpPageComponent},
  {path:"**", component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
