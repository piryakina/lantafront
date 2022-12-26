import {Component, OnInit} from '@angular/core';
import {INews} from "../../../entities/INews";
import {ApiService} from "../../../service/api.service";
import {LocalStorageService} from "ngx-webstorage";

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit{
  title:string=""
  text:string=""
  constructor(private apiService:ApiService, private storage:LocalStorageService) {
  }
  AddNews(){
    let data:INews={}
    data.text=this.text
    data.title=this.title
    this.apiService.addNews(data).subscribe((res)=>{
      console.log(res)
      this.storage.store("newsId",res.id)
      alert("Новости успешно добавлены!")
    },(err)=>{
      alert("Ошибка! Попробуйте еще раз")
      console.log(err)})
  }

  ngOnInit(): void {
  }
}
