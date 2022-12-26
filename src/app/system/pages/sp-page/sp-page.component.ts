import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../service/api.service";
import {LocalStorageService} from "ngx-webstorage";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sp-page',
  templateUrl: './sp-page.component.html',
  styleUrls: ['./sp-page.component.css']
})
export class SpPageComponent implements OnInit{
  name:string="Сервисный партнёр"
  visible: boolean = false;
  url: string = ""
  month: string = ""
  monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
    "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
  ];
  constructor(private router: Router,private apiService:ApiService, private storage:LocalStorageService) {
  }
  ngOnInit(): void {
    let today = new Date()
    // console.log(today.getMonth()+1, today.getDate())
    // this.month=today.getMonth().toString()
    const d = new Date();
    this.month = this.monthNames[d.getMonth()]
    // console.log(this.month)
    this.visible = today.getDate() >= 15;
    this.url = this.router.url
    // console.log(this.storage.retrieve("login"))
    // this.apiService.getQualityAndProcess(this.storage.retrieve("login")).subscribe((res)=>{
    //   console.log(res)
    // }, (err)=>{
    //   console.error(err)
    // })
  }

}
