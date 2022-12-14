import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../service/api.service";
import {LocalStorageService} from "ngx-webstorage";

@Component({
  selector: 'app-sp-page',
  templateUrl: './sp-page.component.html',
  styleUrls: ['./sp-page.component.css']
})
export class SpPageComponent implements OnInit{
  name:string="Сервисный партнёр"
  constructor(private apiService:ApiService, private storage:LocalStorageService) {
  }
  ngOnInit(): void {
    // console.log(this.storage.retrieve("login"))
    // this.apiService.getQualityAndProcess(this.storage.retrieve("login")).subscribe((res)=>{
    //   console.log(res)
    // }, (err)=>{
    //   console.error(err)
    // })
  }

}
