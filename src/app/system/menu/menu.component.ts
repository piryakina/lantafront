import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";
import {routerLink} from "@angular/core/schematics/migrations/router-link-with-href/util";
import {Router} from "@angular/router";
import {LocalStorageService} from "ngx-webstorage";
import {delay} from "rxjs";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router, private storage: LocalStorageService) {
  }

  role: string = ""
  name: string = ""

  ngOnInit(): void {
    if (this.router.url.includes("login")) {
      let btn = document.getElementById("login")
      if (btn !== null) {
        btn.hidden = true
      }
    }
    this.role = this.storage.retrieve("role")
    // console.log(this.role)
    this.name = this.storage.retrieve("name")
    // console.log(this.name)
    // console.log(this.router.url)
    // if (this.router.url==="/"){
    //   let mas = document.getElementsByTagName("a")
    //   if (mas!==null){
    //     for(let i=0;i<mas.length;i++){
    //       console.log(mas[i].textContent)
    //       if (mas[i].innerText==="Новости"){
    //         mas[i].style.fontWeight='bold';
    //       }
    //
    //     }
    //   }
    //
    // }
  }

  Logout() {
    this.storage.clear("id")
    this.storage.clear("role")
    this.storage.clear("name")
    this.apiService.logout().subscribe((res) => {
      console.log(res)

    }, (err) => {
      console.log(err)
    })
    let btn1 = document.getElementById("login")
    let btn2 = document.getElementById("logout")
    if (btn1 !== null) {
      btn1.hidden = true
    }
    if (btn2 !== null) {
      btn2.hidden = true
    }
    this.router.navigate(["/"])
    delay(300)
    window.location.reload()
  }

  Login() {
    // let btn1 = document.getElementById("login")
    // let btn2 = document.getElementById("logout")
    // if (btn1 !== null) {
    //   btn1.hidden = true
    // }
    // if (btn2 !== null) {
    //   btn2.hidden = true
    // }
    this.router.navigate(["/login"])

  }

}
