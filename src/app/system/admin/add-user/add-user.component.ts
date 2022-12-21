import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../service/api.service";
import {IUser} from "../../../entities/IUser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  constructor(private api: ApiService, private router: Router) {
  }

  roles: string[] = []
  email: string = ""
  name: string = ""
  role: string = ""
  login: string = ""
  password: string = ""
  phone: string = ""
  isUse:boolean = false
  ngOnInit(): void {
    this.api.getRoles().subscribe((res) => {
      this.roles = res
    }, (err) => {
      console.log(err)
    })
  }

  AddUser() {
    let user: IUser = {}
    user.email = this.email
    user.name = this.name
    user.login = this.login
    user.role = this.role
    user.phone = this.phone
    user.password = this.password
    this.api.addUser(user).subscribe((res) => {
      console.log(res)
      alert("Пользователь успешно добавлен!")
      this.router.navigate(["/admin"])
    }, (err) => {
      console.log(err)
      alert("Ошибка!")
      this.router.navigate(["/admin"])
    })
  }
  CheckUser(login: string){
    this.api.CheckLogin(login).subscribe((res)=>{
      this.isUse = res !== false;
    })
  }
}
