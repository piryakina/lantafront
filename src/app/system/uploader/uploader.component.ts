import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";
import {Router} from "@angular/router";
import * as events from "events";

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit{
  constructor(private apiService:ApiService, private router:Router) {
  }
  filesNames: Array<File> = []
  ngOnInit(){

  }

  showFiles(e: Event){
    const inputFiles = (<HTMLInputElement>e.target).files as FileList
    this.filesNames = []
    for (let i = 0; i < inputFiles.length; i++){
      const file = inputFiles[i]
      this.filesNames.push(file)
    }
    console.log(this.filesNames)
  }

  uploadFile(event:any): void {
    const target = document.getElementById("uploader")
    let data = new FormData();
    // @ts-ignore
    let selectedFile = target.files[0]
    data.append('file', selectedFile, selectedFile.name);

    let href = this.router.url
    console.log(href)
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
