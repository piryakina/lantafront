import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../service/api.service";
import {IPeriod} from "../../../entities/IPeriod";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-period',
  templateUrl: './add-period.component.html',
  styleUrls: ['./add-period.component.css']
})
export class AddPeriodComponent implements OnInit {
  name: string = ""
  dateFrom: string = ""
  dateTo: string = ""

  constructor(private api: ApiService, private router: Router) {
  }

  ngOnInit(): void {
  }

  AddPeriod() {
    let p: IPeriod = {}
    p.title = this.name
    p.date_from = this.dateFrom
    p.date_to = this.dateTo
    this.api.addPeriod(p).subscribe((res) => {
      console.log(res)
      alert("Период успешно добавлен!")
      this.router.navigate(["/admin"])
    }, (err) => {
      console.log(err)
      alert("Ошибка! Попробуйте ещё раз")
      this.router.navigate(["/admin"])
    })
  }
}
