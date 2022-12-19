import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-usp-page',
  templateUrl: './usp-page.component.html',
  styleUrls: ['./usp-page.component.css']
})
export class UspPageComponent implements OnInit{
  name:string="УСП"
  month:string=""
  monthNext:string=""
  monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
    "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
  ];
  ngOnInit(): void {
    const d = new Date();
    this.month= this.monthNames[d.getMonth()]
     // console.log(d.getMonth())

    if (d.getMonth()===11){
      this.monthNext=this.monthNames[0]
    }
  }

}
