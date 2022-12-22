import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-usp',
  templateUrl: './usp.component.html',
  styleUrls: ['./usp.component.css']
})
export class UspComponent  implements OnInit{
  constructor( private router: Router) {
  }
  url:string=""
  ngOnInit(): void {
    this.url=this.router.url
  }

}
