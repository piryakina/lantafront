import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
// import {MatDatepickerModule} from '@angular/material';
import {MatCalendar} from '@angular/material/datepicker';
import {DateAdapter, MAT_DATE_FORMATS, MatDateFormats} from '@angular/material/core';
import {ApiService} from "../../../service/api.service";
import {INews} from "../../../entities/INews";
import {LocalStorageService} from "ngx-webstorage";

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit{
  title:string=""
  text:string=""
  constructor(private apiService:ApiService, private storage:LocalStorageService) {
  }
  ngOnInit(): void {
  }
  AddNews(){
    let data:INews={}
    data.text=this.text
    data.title=this.title
    this.apiService.addNews(data).subscribe((res)=>{
      console.log(res)
      this.storage.store("newsId",res.id)
    },(err)=>{console.log(err)})
  }
}
