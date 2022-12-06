import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "ngx-webstorage";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  constructor(private storage:LocalStorageService, private apiService: ApiService) {
  }

  data: Array<{}> = []
  ngOnInit() {
    this.apiService.getQualityAndProcess().subscribe((res)=>{
      console.log(res)
    }, (err)=>{
      console.error(err)
    })
  }
}
