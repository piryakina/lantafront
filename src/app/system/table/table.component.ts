import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "ngx-webstorage";
import {ApiService} from "../../service/api.service";
import {IFile, IRow} from "../../entities/IFile";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  constructor(private storage:LocalStorageService, private apiService: ApiService) {
  }
  file:IRow[]=[]
  // data: Array<{}> = []
  ngOnInit() {
    this.apiService.getDataPeriodNow().subscribe((res)=>{
      // console.log(res)
      for (let i=0;i<res.length;i++){

        let temp:IRow={}
        temp.sp=res[i].sp
        temp.period=res[i].period
        // console.log(res[i].billing)
        if (res[i].billing!==undefined){
          for (let j=0;j<res[i].billing.length;j++){
            let temp:IRow={}
            temp.sp=res[i].sp
            temp.period=res[i].period
            temp.filename=res[i].billing[j].filename
            temp.date=res[i].billing[j].date
            temp.status=res[i].billing[j].status
            this.file.push(temp)
          }
        } else{
          this.file.push(temp)
        }

        // this.file.push(temp)
      }
      // console.log(this.file)
    }, (err)=>{
      console.error(err)
    })
  }
}
