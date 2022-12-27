import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {IRow} from "../../../entities/IFile";
import {ApiService} from "../../../service/api.service";
import {LocalStorageService} from "ngx-webstorage";

@Component({
  selector: 'app-usp',
  templateUrl: './usp.component.html',
  styleUrls: ['./usp.component.css']
})
export class UspComponent implements OnInit {
  constructor(private router: Router, private apiService: ApiService, private storage: LocalStorageService) {
  }
  rows:IRow[]=[]
  url: string = ""
  visible:boolean=false
  ngOnInit(): void {
    this.url = this.router.url
    this.apiService.getDataPeriodNow().subscribe((res) => {
       console.log(res)
      // console.log(res)
      // console.log(this.statuses)
      if (res !== null) {
        for (let i = 0; i < res.length; i++) {
            let temp: IRow = {}
            temp.id = res[i].id
            temp.sp = res[i].sp
            temp.period = res[i].period
            temp.sla =res[i].sla.filename
            if (res[i].sla.is_agreed){
              temp.is_agreed="согласовано"
            } else if (res[i].is_agreed===false){
              temp.is_agreed="не согласовано"
            } else {
              temp.is_agreed=" "
            }

          this.rows.push(temp)
        }
      }
    }, ()=>{
      alert("ошибка")
    })
  }
  SetSP(idSp:number){
    console.log(idSp)
    this.storage.store("spId",idSp)
  }
  change(){
    this.visible=!this.visible
  }
}

