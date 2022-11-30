import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsPageComponent} from "./system/pages/news-page/news-page.component";
import {LoginPageComponent} from "./system/pages/login-page/login-page.component";
import {LoginComponent} from "./system/login/login.component";
import {MenuComponent} from "./system/menu/menu.component";
import {MenuPageComponent} from "./system/pages/menu-page/menu-page.component";

const routes: Routes = [
  {path:"login", component: LoginPageComponent},
  {path:"menu", component: MenuPageComponent},
  {path:"usp", component: MenuComponent},
  {path:"analytic", component: MenuComponent},
  {path:"news", component: NewsPageComponent},
  {path:"**", component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
