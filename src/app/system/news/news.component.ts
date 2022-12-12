import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";
import {IAttach, INews} from "../../entities/INews";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  constructor(private api: ApiService, private router: Router, private activatedRouter: ActivatedRoute) {
  }

  news: INews[] = []
  img: IAttach[] = []
  id: number = 0
  item: INews = {}

  ngOnInit(): void {
    let url: string = this.router.url
    this.activatedRouter.queryParams.subscribe(params => {
      this.item.id = params["id"]})
    this.api.getNews().subscribe((res) => {
      console.log(res)

      for (let i = 0; i < res.length; i++) {
        let item: INews = {}
        item.id = res[i].id
        item.text = res[i].text
        item.title = res[i].title
        item.date = res[i].date
        if (this.item.id!==undefined && item.id!==undefined){
          if (item.id === this.item.id) {
            this.item.text = this.news[i].text
            this.item.title = this.news[i].title
            this.item.date = this.news[i].date
          }
        }

        if (res[i].attachments !== undefined) {
          for (let j = 0; j < res[i].attachments.length; j++) {
            let a: IAttach = {}
            a.id = res[i].attachments[j].id
            a.path = res[i].attachments[j].path
            a.filename = res[i].attachments[j].filename
            a.news_id = res[i]
            this.img.push(a)
          }
        }
        this.news.push(item)
      }
      // console.log(this.news)
      // console.log(this.img)
    }, (err)=>{console.log(err)})
    if (url.includes("news")) {
      let c1 = document.getElementById("news")
      if (c1 !== null) {
        c1.hidden = true
      }
      let c2 = document.getElementById("news-item")
      if (c2 !== null) {
        c2.hidden = false
      }
        // console.log(params["id"])
        // console.log(this.item.id)
        // for (let i = 0; i < this.news.length; i++) {
        //   console.log(this.news[i].id)
        //   console.log(this.item.id)
        //   if (this.news[i].id === this.item.id) {
        //     this.item.text = this.news[i].text
        //     this.item.title = this.news[i].title
        //     this.item.date = this.news[i].date
        //   }
        // }


    }

  }

  // getImgNews(i:number){
  //
  //   this.api.getImgNews(i).subscribe((res)=>{
  //     return res
  //   }, (err)=>{return err})
  // }

}
