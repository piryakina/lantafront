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

  ngOnInit() {

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
    if (this.files.length === 0) {
      return
    }
    const target = document.getElementById("uploader")
    //let data = new FormData(document.getElementById("form") as HTMLFormElement);
    // @ts-ignore
    //let selectedFile = target.files[0]
    //data.append('file', selectedFile, selectedFile.name);

    //console.log(selectedFile)

    // let href = this.router.url
    // console.log(href)
    for (let i = 0; i < this.files.length; i++) {
      let data = new FormData()

      data.append("id", String(this.storage.retrieve("id")))
      // data.append("status", "1")
      data.append("file", this.files[i], this.files[i].name)

      // console.log(data.getAll("file"))

      this.apiService.uploadFileBilling(data).subscribe((res) => {
        console.log(res)
        alert("файлы успешно загружены")
        window.location.href="http://localhost:4200/sp"
      }, (err) => {
        console.error(err)
      })
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
