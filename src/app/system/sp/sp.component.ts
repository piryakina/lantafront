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
  ngOnInit(): void {
    this.apiService.getQualityAndProcess(this.storage.retrieve("login")).subscribe((res)=>{
      console.log(res)
      for (let i=0;i<res.billing.length;i++){
        let temp:IFile={}
        temp.period=res.period
        temp.filename=res.billing[i].filename
        temp.status=res.billing[i].status
        temp.date=res.billing[i].date
        this.files.push(temp)
      }

    }, (err)=>{
      console.error(err)
    })
  }
}

