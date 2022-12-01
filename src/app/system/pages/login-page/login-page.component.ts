import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../service/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  constructor(private apiService:ApiService, private router:Router) {
  }
  role: string=""
  ngOnInit(): void {

  }
}
