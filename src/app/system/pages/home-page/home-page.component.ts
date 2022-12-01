import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
  constructor(private router:Router) {
  }
  ngOnInit(): void {
    let user = document.cookie
    console.log(document.cookie.length)
    let doc= document.getElementById("menu")
    if (doc!==null){
      let mas = doc.getElementsByTagName("a")
      console.log(mas.length)
      if (this.router.url.includes("news")){
        mas[0].focus()
      }
    }
  }

}
