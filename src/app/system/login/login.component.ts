import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../service/api.service";
import {Router} from "@angular/router";
import {IUser} from "../../entities/IUser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  login: string = ""
  password: string = ""
  constructor(private apiService:ApiService, private router:Router) {
  }
  ngOnInit(): void {

  }
  OnClick(): void {
    let user: IUser = {
      login: this.login,
      password: this.password,
    };
    // this.apiService.logout().subscribe((result)=>{
    //     console.log("вы вышли")
    //   },(error)=>{
    //     console.log("errrrr")
    //   }
    // )
    this.apiService.login(user).subscribe((result) => {
      if (result.status === true) {
        console.log("success")
        this.router.navigate(['/menu']);
      } else {
        alert('вы не авторизованы! введите правильные имя пользователя и пароль');
      }});
  }
}
