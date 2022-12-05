import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../service/api.service";
import {Router} from "@angular/router";
import {LocalStorageService} from "ngx-webstorage";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  constructor(private apiService:ApiService, private router:Router, private storage: LocalStorageService) {
  }
  role: string=""
  ngOnInit(): void {
  // console.log(this.storage.retrieve("role"))
  }
}
