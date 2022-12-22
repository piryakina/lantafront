import {Component, OnInit} from '@angular/core';
import {apiDomen, ApiService} from "../../service/api.service";
import {IAttach, INews} from "../../entities/INews";
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
  flag:boolean=false
  domen:string = apiDomen
  list:number[] = []
  ngOnInit(): void {
    let url: string = this.router.url
    this.activatedRouter.queryParams.subscribe(params => {
      this.item.id = params["id"]})
    this.api.getNews().subscribe((res) => {
      // console.log(res)

      for (let i = 0; i < res.length; i++) {
        let item: INews = {}
        item.id = res[i].id
        item.text = res[i].text
        item.title = res[i].title
        item.date = res[i].date
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
        // item.attach=
        if (item.id!==undefined){
          this.api.getImgNews(item.id).subscribe((res)=>{
            item.attach=res
            // console.log(URL.createObjectURL(res))
            if (res!==null){
              item.link=URL.createObjectURL(res)
              let im=document.getElementById("img"+item.id)
              // let all=document.getElementById("img_full"+item.id)
              if (im!==null){
                let pic = document.createElement("img")
                pic.className="pic_news"
                pic.src=item.link
                im.append(pic)
            }

              // all.append(pic)
            }
          },(error)=>{
            console.log(error)
          })
        }
        this.news.push(item)
      }
      // console.log(this.news)
      // console.log(this.news.length)
      if (url.includes("id")) {
        for (let i=0;i<this.news.length;i++){
          // console.log(typeof(this.item.id))
          // console.log(typeof this.news[i].id)
          if (this.news[i].id!==undefined){
            if (this.news[i].id == this.item.id) {
              console.log(this.item.id)
              this.item.text = this.news[i].text
              this.item.title = this.news[i].title
              this.item.date = this.news[i].date
              console.log(this.item.text)
            }
          }
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
    }, (err)=>{console.log(err)})


  }

  getImgNews(id:number):any{
    // console.log(i)

    if (!this.list.includes(id)){
      for (let i=0;i<this.news.length;i++){
        if (id===this.news[i].id){
          let all=document.getElementById("img_full"+id)
          let pic = document.createElement("img")
          let collapse = document.getElementById("collapseExample"+id)
          if (collapse!==null){
            pic.className="img-fluid"
            if (this.news[i].link!==undefined){
              // @ts-ignore
              pic.src= this.news[i].link.toString()
              if (all!==null){
                all.append(pic)
              }
            }
          }


        }
      }
      this.list.push(id)
    }


  }

}
