import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "ngx-webstorage";
import {ApiService} from "../../service/api.service";
import {IFile, IRow, IStatus} from "../../entities/IFile";
import {Router} from "@angular/router";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  constructor(private storage: LocalStorageService, private apiService: ApiService, private router:Router) {
  }

  file: IRow[] = []
  statuses: IStatus[] = []
  analytic: IStatus[] = []
  usp: IStatus[] = []
  url:string=""
  // data: Array<{}> = []
  ngOnInit() {
    this.url=this.router.url
    this.apiService.getStatuses().subscribe((status) => {
      for (let k = 0; k < status.length; k++) {
        let t: IStatus = {}
        if (status[k].id===1 ||status[k].id===2||status[k].id===3||status[k].id===4){
          t.id = status[k].id
          t.status_name = status[k].status_name
            this.analytic.push(t)
        }
        if (status[k].id===5 ||status[k].id===6||status[k].id===8||status[k].id===10){
          t.id = status[k].id
          t.status_name = status[k].status_name
          this.usp.push(t)
        }
        t.id = status[k].id
        t.status_name = status[k].status_name
        this.statuses.push(t)
      }
      this.apiService.getDataPeriodNow().subscribe((res) => {
        // console.log(res)
        console.log(this.statuses)

        for (let i = 0; i < res.length; i++) {

          // let temp: IRow = {}
          // temp.sp = res[i].sp
          // temp.period = res[i].period
          // console.log(res[i].billing)

          if (res[i].billing !== undefined) {
            for (let j = 0; j < res[i].billing.length; j++) {
              let temp: IRow = {}
              temp.sp = res[i].sp
              temp.period = res[i].period
              temp.filename = res[i].billing[j].filename
              temp.date = res[i].billing[j].date
              for (let k = 0; k < this.statuses.length; k++) {
                // console.log(typeof(res[i].billing[j].status))
                // console.log(typeof(this.statuses[k].id))
                if (Number(res[i].billing[j].status)  === this.statuses[k].id) {
                  temp.status = this.statuses[k].status_name
                  this.file.push(temp)
                }
              }
              // temp.status = res[i].billing[j].status

            }
          }
          // else {
          //   // this.file.push(temp)
          // }
        }
        for (let i = 0; i < this.file.length; i++) {

        }
        //this.file.reverse()
        // console.log(this.file)
      }, (err) => {
        console.error(err)
      })
    }, (error) => {
      console.log(error)
    })

  }
}
