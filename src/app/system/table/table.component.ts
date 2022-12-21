import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "ngx-webstorage";
import {ApiService} from "../../service/api.service";
import {IComment, IFile, IRow, IStatus} from "../../entities/IFile";
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";


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
  body:IComment={}
  st:string=""
  // data: Array<{}> = []
  ngOnInit() {
    this.url=this.router.url
    // console.log(this.url)
    this.apiService.getStatuses().subscribe((status) => {
      if (status!==null){
        for (let k = 0; k < status.length; k++) {
          let t: IStatus = {}
          if (status[k].id===1 ||status[k].id===2||status[k].id===3||status[k].id===4){
            t.id = status[k].id
            t.status_name = status[k].status_name
            this.analytic.push(t)
          }
          if (status[k].id===3 ||status[k].id===5 ||status[k].id===6||status[k].id===8||status[k].id===10){
            t.id = status[k].id
            t.status_name = status[k].status_name
            this.usp.push(t)
          }
          t.id = status[k].id
          t.status_name = status[k].status_name
          this.statuses.push(t)
        }
      }

      this.apiService.getDataPeriodNow().subscribe((res) => {
        // console.log(res)
        // console.log(this.statuses)
        for (let i = 0; i < res.length; i++) {

          // let temp: IRow = {}
          // temp.sp = res[i].sp
          // temp.period = res[i].period
          // console.log(res[i].billing)

          if (res[i].billing !== undefined) {
            for (let j = 0; j < res[i].billing.length; j++) {
              let temp: IRow = {}
              temp.id=res[i].id
              temp.sp = res[i].sp
              temp.period = res[i].period
              temp.idFile=res[i].billing[j].id
              // console.log(temp.idFile)
              temp.filename = res[i].billing[j].filename
              temp.date = res[i].billing[j].date
              temp.comment=res[i].billing[j].comments
              // console.log(res[i].billing[j].comments )
              if (this.url==="/analytic"){
                for (let k = 0; k < this.analytic.length; k++) {
                  // console.log(typeof(res[i].billing[j].status))
                  // console.log(typeof(this.statuses[k].id))

                  if (Number(res[i].billing[j].status)  === this.analytic[k].id) {
                    temp.status = this.analytic[k].status_name
                    this.file.push(temp)
                  }
                }
              }
              if (this.url==="/usp"){
                // console.log(true)
                for (let k = 0; k < this.usp.length; k++) {
                   // console.log(res[i].billing[j].status)
                   // console.log(this.usp[k].id)

                  if (Number(res[i].billing[j].status)  === this.usp[k].id) {
                    temp.status = this.usp[k].status_name
                    this.file.push(temp)
                  }
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

        function compare( a:IRow, b:IRow ) {
          if (a.status!==undefined&& b.status!==undefined){
            if ( a.status < b.status ){
              return -1;
            }
            if ( a.status > b.status ){
              return 1;
            }
          }
          return 0;
        }

        this.file.sort( compare );
      }, (err) => {
        console.error(err)
      })
    }, (error) => {
      console.log(error)
    })

  }
  SetComment(i:number){
    this.body.id=this.file[i].idFile
    this.body.comments=this.file[i].comment
    // console.log(this.body)
    this.apiService.setComment(this.body).subscribe()
  }
  SetStatusNow(a:string|undefined, i:number){
    // console.log(a)
     let idSt:any
    for (let i=0;i<this.statuses.length;i++){
      if (this.statuses[i].status_name === a) {
        if (this.statuses[i].id!==undefined){
          idSt = this.statuses[i].id
        }
      }
    }
    let fileId = this.file[i].idFile
    if (fileId!==undefined && idSt!==undefined){
      this.apiService.setStatus(fileId,idSt).subscribe((res)=>{console.log(res)})
    }

  }

  downloadFile(i: number){
    //console.log(i)
    const id = this.file[i].idFile
    const filename = this.file[i].filename
    console.log(id)
    if (id && filename){
      this.apiService.downloadFileById(id)
        .subscribe(result=>{
          let a = document.createElement('a');
          let objectURL = URL.createObjectURL(result);
          a.href = objectURL;
          a.download = filename;
          a.click();
          URL.revokeObjectURL(objectURL);
          alert('Успешно сохранено');
        }, error=>{
          console.log(error);
          alert('Произошла ошибка при сохранении');
        })
    }
    else {
      alert("Файл указан неверно")
    }
  }
}
