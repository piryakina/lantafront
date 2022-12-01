import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";
import {routerLink} from "@angular/core/schematics/migrations/router-link-with-href/util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {
  }

  role: string = ""
  auth: boolean = false
  name: string = ""

  ngOnInit(): void {
    if (this.router.url.includes("login")) {
      let btn1 = document.getElementById("login")
      let btn2 = document.getElementById("logout")
      if (btn1 !== null) {
        btn1.hidden = true
      }
      if (btn2 !== null) {
        btn2.hidden = true
      }
    }
    if (this.router.url.includes("news")){
      let btn1 = document.getElementById("login")
      let btn2 = document.getElementById("logout")
      if (btn1 !== null) {
        btn1.hidden = false
      }
      if (btn2 !== null) {
        btn2.hidden = true
      }
      return
    }
    this.apiService.getRole().subscribe((result) => {
      this.role = result.role
      if (result.status) {
        // console.log(this.role, this.name)
        this.name = result.name
        if (this.role === "admin") {
          let admin = document.getElementById("admin")
          let analytic = document.getElementById("analytic")
          let usp = document.getElementById("usp")
          if (admin !== null && analytic !== null && usp !== null) {
            admin.hidden = false
            analytic.hidden = false
            usp.hidden = false

          }
          let btn2 = document.getElementById("logout")
          if (btn2 !== null) {
            btn2.hidden = false
          }let btn1 = document.getElementById("login")
          if (btn1 !== null) {
            btn1.hidden = true
          }
          let archive = document.getElementById("archive")
          let knowledge = document.getElementById("knowledge")
          if (archive !== null) {
            archive.hidden = false
          }
          if (knowledge !== null) {
            knowledge.hidden = false
          }
          this.auth = true
        } else if (this.role === "usp") {
          this.auth = true
          let archive = document.getElementById("archive")
          let knowledge = document.getElementById("knowledge")
          if (archive !== null) {
            archive.hidden = false
          }
          if (knowledge !== null) {
            knowledge.hidden = false
          }
          let btn2 = document.getElementById("logout")
          if (btn2 !== null) {
            btn2.hidden = false
          }let btn1 = document.getElementById("login")
          if (btn1 !== null) {
            btn1.hidden = true
          }
        } else if (this.role === "analytic") {
          // let analytic = document.getElementById("counting")
          this.auth = true
          let archive = document.getElementById("archive")
          let knowledge = document.getElementById("knowledge")
          if (archive !== null) {
            archive.hidden = false
          }
          if (knowledge !== null) {
            knowledge.hidden = false
          }
          let btn2 = document.getElementById("logout")
          if (btn2 !== null) {
            btn2.hidden = false
          }let btn1 = document.getElementById("login")
          if (btn1 !== null) {
            btn1.hidden = true
          }
        } else if (this.role === "sp") {
          this.auth = true
          let archive = document.getElementById("archive")
          let knowledge = document.getElementById("knowledge")
          if (archive !== null) {
            archive.hidden = false
          }
          if (knowledge !== null) {
            knowledge.hidden = false
          }
          let btn2 = document.getElementById("logout")
          if (btn2 !== null) {
            btn2.hidden = false
          }let btn1 = document.getElementById("login")
          if (btn1 !== null) {
            btn1.hidden = true
          }
        } else {
          let btn1 = document.getElementById("login")
          if (btn1 !== null) {
            if (!this.router.url.includes("login")) {
              btn1.hidden = true
            }
          }
        }
      }
    }, (error) => {
      // console.log(error)
    })


  }

  Logout() {
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
    this.router.navigate(["/login"])
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
