import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";
import {Router} from "@angular/router";
import {IUser} from "../../entities/IUser";
import {LocalStorageService} from "ngx-webstorage";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string = ""
  password: string = ""

  constructor(private apiService: ApiService, private router: Router, private storage: LocalStorageService) {
  }

  ngOnInit(): void {
    console.log(this.storage)
    if (this.storage.retrieve("id") !== null) {
      this.router.navigate(["/"])
    }


  }

  OnClick(): void {
    let user: IUser = {
      login: this.login,
      password: this.password,
    };
    this.apiService.login(user).subscribe((result) => {
      if (result.status === true) {
        console.log("success")
        console.log(result)
        this.storage.store("id", result.id)
        this.storage.store("role", result.role)
        this.storage.store("name", result.name)
        this.router.navigate(['/']);
      } else {
        alert('вы не авторизованы! введите правильные имя пользователя и пароль');
      }
    });
  }
}
