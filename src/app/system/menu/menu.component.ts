import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";
import {routerLink} from "@angular/core/schematics/migrations/router-link-with-href/util";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private apiService: ApiService) {
  }

  role: string = ""

  ngOnInit(): void {
    this.apiService.getRole().subscribe((result) => {
      this.role = result.detail
      console.log(this.role)
      if (this.role === "admin") {
        let admin = document.getElementById("admin")
        let analytic = document.getElementById("analytic")
        let usp = document.getElementById("usp")
        if (admin !== null && analytic !== null && usp !== null) {
          admin.hidden = false
          analytic.hidden=false
          usp.hidden=false
        }
      } else if (this.role === "usp") {
        let usp = document.getElementById("counting")
        if (usp!==null){
        }
      } else if (this.role === "analytic") {
        let analytic = document.getElementById("counting")

      } else console.log(false)
    }, (error) => {
      console.log(error)
    })

  }
  OnClick(){
    this.apiService.logout().subscribe((res)=>{
      console.log(res)

    }, (err)=>{
      console.log(err)
    })
  }

}
