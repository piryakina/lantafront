import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./system/pages/login-page/login-page.component";
import {LoginComponent} from "./system/login/login.component";
import {MenuComponent} from "./system/menu/menu.component";
import {HomePageComponent} from "./system/pages/home-page/home-page.component";
import {SpPageComponent} from "./system/pages/sp-page/sp-page.component";
import {AnalyticPageComponent} from "./system/pages/analytic-page/analytic-page.component";
import {UspPageComponent} from "./system/pages/usp-page/usp-page.component";
import {AdminPageComponent} from "./system/pages/admin-page/admin-page.component";
import {AddUserComponent} from "./system/admin/add-user/add-user.component";
import {AddPeriodComponent} from "./system/admin/add-period/add-period.component";
import {AddNewsComponent} from "./system/admin/add-news/add-news.component";

const routes: Routes = [
  {path:"login", component: LoginPageComponent},
  {path:"news", component: HomePageComponent, canActivate :[AppGuard]},
  {path:"news/:id",component:HomePageComponent, canActivate :[AppGuard]},
  {path:"usp", component: UspPageComponent, canActivate :[AppGuard]},
  // {path:"usp/sla", component: UspPageComponent},
  {path:"analytic", component: AnalyticPageComponent, canActivate :[AppGuard]},
  {path:"sp", component: SpPageComponent, canActivate :[AppGuard]},
  {path:"sp/billing", component: SpPageComponent, canActivate :[AppGuard]},
  {path:"sp/invoice", component: SpPageComponent, canActivate :[AppGuard]},
  {path:"admin", component: AdminPageComponent, canActivate :[AppGuard]},
  {path:"admin/add-user", component: AddUserComponent, canActivate :[AppGuard]},
  {path:"admin/add-period", component: AddPeriodComponent, canActivate :[AppGuard]},
  {path:"admin/add-news", component: AddNewsComponent, canActivate :[AppGuard]},
  {path:"**", component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
