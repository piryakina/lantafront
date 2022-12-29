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
  rows: IRow[] = []
  url: string = ""
  visible: boolean = false
  invoices:string[] = []
  constructor(private router: Router, private apiService: ApiService, private storage: LocalStorageService) {
  }

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
          temp.sla = res[i].sla.filename
          temp.visible = false
          if (res[i].sla.is_agreed) {
            temp.is_agreed = "согласовано"
          } else if (res[i].is_agreed === false) {
            temp.is_agreed = "не согласовано"
          } else {
            temp.is_agreed = "нет данных"
          }
          if (res[i].invoice !== undefined) {
            for (let j = 0; j < res[i].invoice.length; j++) {
              temp.filename=res[i].invoice[j].filename
              this.invoices.push(res[i].invoice[j].filename)
              console.log(temp.filename)
            }
          }
          console.log(temp.is_agreed)
          this.rows.push(temp)
        }
      }
    }, () => {
      alert("ошибка")
    })
  }

  SetSP(idSp: number) {
    // console.log(idSp)
    this.storage.store("spId", idSp)
  }

  change(i: number) {
    this.rows[i].visible = !this.rows[i].visible
    //this.visible=!this.visible
  }
  SaveInvoice(){

  }
}

