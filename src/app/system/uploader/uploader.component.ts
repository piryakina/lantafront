import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";
import {Router} from "@angular/router";
import {LocalStorageService} from "ngx-webstorage";

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router, private storage: LocalStorageService) {
  }

  files: Array<File> = []
  url: string = ""

  ngOnInit() {
    // let el= document.getElementById("billing")
    // if (el!==null){
    //   // console.log("yes")
    //   this.id="billing"
    // }
    // let el1= document.getElementById("invoice")
    // if (el1!==null){
    //   // console.log("yes")
    //   this.id="invoice"
    // }
    // let el2= document.getElementById("attachments")
    // if (el2!==null){
    //   // console.log("yes")
    //   this.id="attachments"
    // } else{
    //   // console.log("no")
    // }

  }

  showFiles(e: Event) {
    const inputFiles = (<HTMLInputElement>e.target).files as FileList
    this.files = []
    for (let i = 0; i < inputFiles.length; i++) {
      const file = inputFiles[i]
      this.files.push(file)
    }
    // console.log(this.files)
  }

  uploadFile(event: any): void {
    const target = document.getElementById("uploader")
    //let data = new FormData(document.getElementById("form") as HTMLFormElement);
    // @ts-ignore
    //let selectedFile = target.files[0]
    //data.append('file', selectedFile, selectedFile.name);

    //console.log(selectedFile)

    // let href = this.router.url
    // console.log(href)
    console.log(this.router.url)
    this.url=this.router.url
    for (let i = 0; i < this.files.length; i++) {
      let data = new FormData()

      data.append("id", String(this.storage.retrieve("id")))
      if (this.url === "/admin/add-news") {
        data.append("id_news", this.storage.retrieve("newsId"))
      }
      // data.append("status", "1")
      data.append("file", this.files[i], this.files[i].name)
      if (this.url === "/sp/billing") {

        this.apiService.uploadFileBilling(data).subscribe((res) => {
          console.log(res)
          alert("файлы успешно загружены")
          // window.location.href = "http://localhost:4200/sp"
          window.location.href = "http://sp.lantaservice.com:4200/sp" //todo
        }, (err) => {
          console.error(err)
        })
      } else if (this.url === "/sp/invoice") {
        this.apiService.uploadFileInvoice(data).subscribe((res) => {
          console.log(res)
          alert("файлы успешно загружены")
          // window.location.href = "http://localhost:4200/sp"
          window.location.href = "http://sp.lantaservice.com:4200/sp" //todo
        }, (err) => {
          console.error(err)
        })

      } else if (this.url === "/admin/add-news"){
        this.apiService.uploadFileAttachment(data).subscribe((res)=>{
          console.log(res)
          alert("файлы успешно загружены")
          // window.location.href = "http://localhost:4200/admin"
          window.location.href = "http://sp.lantaservice.com:4200/admin" //todo
        })
      }

        if (this.files.length === 0) {
          return
        }


      // console.log(data.getAll("file"))


    }


    // if (href.includes("billing")){
    //   console.log(href)
    //   // @ts-ignore
    //   target.setAttribute("action",this.apiService.apiDomen+href)
    //   this.apiService.uploadFileBilling(data).subscribe((res)=>{
    //     alert("файл успешно загружен!")
    //     this.router.navigate(['/home']);
    //   },(error)=>{
    //     console.log(error)
    //     alert("ошибка!")
    //     this.router.navigate(['/home']);
    //   })
    // }else if (href.includes("test")){
    //   console.log(href)
    //   // @ts-ignore
    //   target.setAttribute("action",this.apiService.apiDomen+href)
    //   this.apiService.uploadfiletestlist(data).subscribe((res)=>{
    //     alert("файл успешно загружен!")
    //     this.router.navigate(['/home']);
    //   },(error)=>{
    //     console.log(error)
    //     alert("ошибка!")
    //     this.router.navigate(['/home']);
    //   })
    // }


    // console.log("uploadddd")
    //  let data = new FormData();
    // if (event.target.files&& event.target.files[0]){
    //   for (let i = 0; i < event.target.files.length; i++) {
    //     let selectedFile=event.target.files[i]
    //     data.append('file', selectedFile, selectedFile.name);
    //
    // }
    // // const target = document.getElementById("uploader")
    //
    //
    //
    //
    // let href = this.router.url
    // console.log(href)
    // if (href.includes("billing")){
    //   console.log(href)

    //   target.setAttribute("action",this.apiService.apiDomen+href)
    //   this.apiService.uploadFileBilling(data,).subscribe((res)=>{
    //     alert("файл успешно загружен!")
    //     this.router.navigate(['/home']);
    //   },(error)=>{
    //     console.log(error)
    //     alert("ошибка!")
    //     this.router.navigate(['/home']);
    //   })
    // }else if (href.includes("invoice")){
    //   console.log(href)
    //   // @ts-ignore
    //   target.setAttribute("action",this.apiService.apiDomen+href)
    //   this.apiService.uploadfileinvoice(data).subscribe((res)=>{
    //     alert("файл успешно загружен!")
    //     this.router.navigate(['/home']);
    //   },(error)=>{
    //     console.log(error)
    //     alert("ошибка!")
    //     this.router.navigate(['/home']);
    //   })
    // }
  }
}
