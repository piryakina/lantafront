import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {IRow} from "../../../entities/IFile";
import {ApiService} from "../../../service/api.service";

@Component({
  selector: 'app-usp',
  templateUrl: './usp.component.html',
  styleUrls: ['./usp.component.css']
})
export class UspComponent implements OnInit {
  constructor(private router: Router, private apiService: ApiService) {
  }
  rows:IRow[]=[]
  url: string = ""

  ngOnInit(): void {
    this.url = this.router.url
    this.apiService.getDataPeriodNow().subscribe((res) => {
      // console.log(res)
      // console.log(res)
      // console.log(this.statuses)
      if (res !== null) {
        for (let i = 0; i < res.length; i++) {
            let temp: IRow = {}
            temp.id = res[i].id
            temp.sp = res[i].sp
            temp.period = res[i].period
          if (res[i].sla!==undefined){
            temp.sla =res[i].sla
          }
          this.rows.push(temp)
        }
      }
    }, ()=>{
      alert("ошибка")
    })
  }

}

