import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LocalStorageService} from "ngx-webstorage";
import {ApiService} from "../../service/api.service";
import {IFile} from "../../entities/IFile";

@Component({
  selector: 'app-sp',
  templateUrl: './sp.component.html',
  styleUrls: ['./sp.component.css']
})
export class SpComponent  implements  OnInit {
  constructor(private router: Router, private storage: LocalStorageService, private apiService:ApiService) {
  }
  files:IFile[] =[]
  status:string[]=[]
  url:string=""
  visible:boolean=false;
  month:string=""
  monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
    "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
  ];
  fileusp:string=""
  invoicesfile:IFile[]=[]
  ngOnInit(): void {

    let today = new Date()
    // console.log(today.getMonth()+1, today.getDate())
    // this.month=today.getMonth().toString()
    const d = new Date();
    this.month= this.monthNames[d.getMonth()]
    // console.log(this.month)
    this.visible = today.getDate() >= 15;
    this.url=this.router.url
    // console.log(this.url)
    this.apiService.getStatuses().subscribe((res)=>{
      // console.log(res)
      if (res!==null){
        for (let i=0;i<res.length;i++){
          this.status.push(res[i].status_name)
        }
      }
      // console.log(this.status)
    },(err)=>{
      console.log(err)
    })
    this.apiService.getQualityAndProcess(this.storage.retrieve("login")).subscribe((res)=>{
       // console.log(res)
      if (res!==null){
        if (res.billing!==undefined){
          for (let i=0;i<res.billing.length;i++){
            // console.log(res.billing[i])
            let temp:IFile={}
            temp.period=res.period
            temp.filename=res.billing[i].filename
            temp.status=res.billing[i].status
            temp.date=res.billing[i].date
            temp.comm =res.billing[i].comments
            this.files.push(temp)
            // console.log(res.billing[i].status)

          }
        }
        if (res.invoice!==undefined){
          for (let j=0;j<res.invoice.length;j++){
            let temp:IFile={}
            temp.filename=res.invoice[j].filename
            // emp.path=res.invoice[j].path
            this.invoicesfile.push(temp)
          }
        }
      }

      // this.files.sort(compare())
    }, (err)=>{
      console.error(err)
    })
    // for (let i=0;i<this.files.length;i++){
    //   console.log(this.files[i].status)
    //   if (this.files[i].status===this.status[1]){
    //     console.log(true)
    //   }
    // }
  }
  compare( object1: IFile, object2:IFile){
    if (object1!==undefined && object2!==undefined &&object1.status!==undefined && object2.status!==undefined){
      if (object1.status < object2.status)
        return -1;
      if (object1.status > object2.status)
        return 1;
    }
    return 0;
  }
}

