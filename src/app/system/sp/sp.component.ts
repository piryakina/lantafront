import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LocalStorageService} from "ngx-webstorage";
import {ApiService} from "../../service/api.service";
import {IFile} from "../../entities/IFile";

@Component({
  selector: 'app-sp',
  templateUrl: './sp.component.html',
  styleUrls: ['./sp.component.css']
})
export class SpComponent implements OnInit {
  constructor(private router: Router, private storage: LocalStorageService, private apiService: ApiService) {
  }

  files: IFile[] = []
  status: string[] = []
  url: string = ""
  fileusp: string = ""
  fileuspid: number = 0
  agreed: boolean | null = null
  none: boolean = false
  invoicesfile: IFile[] = []
  choosed: boolean = false
  visible:boolean=false
  ngOnInit(): void {


    // console.log(this.url)
    this.apiService.getStatuses().subscribe((res) => {
      // console.log(res)
      if (res !== null) {
        for (let i = 0; i < res.length; i++) {
          this.status.push(res[i].status_name)
        }
      }
      // console.log(this.status)
    }, (err) => {
      console.log(err)
    })
    this.apiService.getQualityAndProcess(this.storage.retrieve("login")).subscribe((res) => {
      this.none = true
      if (res !== null) {
        if (res.billing !== undefined) {
          for (let i = 0; i < res.billing.length; i++) {
            // console.log(res.billing[i])
            let temp: IFile = {}
            temp.id = res.billing[i].id
            temp.period = res.period
            temp.filename = res.billing[i].filename
            temp.status = res.billing[i].status
            temp.date = res.billing[i].date
            temp.comm = res.billing[i].comments
            this.files.push(temp)
            // console.log(res.billing[i].status)

          }
        }
        if (res.invoice !== undefined) {
          for (let j = 0; j < res.invoice.length; j++) {
            let temp: IFile = {}
            temp.id = res.invoice[j].id
            temp.filename = res.invoice[j].filename
            // emp.path=res.invoice[j].path
            this.invoicesfile.push(temp)
          }
        }
        if (res.sla !== undefined) {
          this.fileusp = res.sla.filename
          this.fileuspid = res.sla.id
          this.agreed = res.sla.is_agreed
        }
      }

      // this.files.sort(compare())
    }, (err) => {
      // console.log(err)
      this.none = false
    })
    // for (let i=0;i<this.files.length;i++){
    //   console.log(this.files[i].status)
    //   if (this.files[i].status===this.status[1]){
    //     console.log(true)
    //   }
    // }
    // console.log(this.fileusp)
  }

  compare(object1: IFile, object2: IFile) {
    if (object1 !== undefined && object2 !== undefined && object1.status !== undefined && object2.status !== undefined) {
      if (object1.status < object2.status)
        return -1;
      if (object1.status > object2.status)
        return 1;
    }
    return 0;
  }

  downloadBilling(id: number, filename: string) {
    // console.log(i)
    // const id = this.files[i].id
    //  const filename = this.files[i].filename
    // console.log(id)
    if (id !== null) {
      this.apiService.downloadFileById(id)
        .subscribe(result => {
          // console.log(result)
          let a = document.createElement('a');
          let objectURL = URL.createObjectURL(result);
          a.href = objectURL;
          a.download = filename;
          a.click();
          URL.revokeObjectURL(objectURL);
          alert('Успешно сохранено');
        }, error => {
          console.log(error);
          alert('Произошла ошибка при сохранении');
        })
    } else {
      alert("Файл указан неверно")
    }
  }

  downloadSLA(id: number, filename: string) {
    if (id !== null) {
      this.apiService.downloadSLAById(id)
        .subscribe(result => {
          // console.log(result)
          let a = document.createElement('a');
          let objectURL = URL.createObjectURL(result);
          a.href = objectURL;
          a.download = filename;
          a.click();
          URL.revokeObjectURL(objectURL);
          alert('Успешно сохранено');
        }, error => {
          console.log(error);
          alert('Произошла ошибка при сохранении');
        })
    } else {
      alert("Файл указан неверно")
    }
  }

  downloadInvoice(id: number, filename: string) {
    if (id !== null) {
      this.apiService.downloadInvoiceById(id)
        .subscribe(result => {
          // console.log(result)
          let a = document.createElement('a');
          let objectURL = URL.createObjectURL(result);
          a.href = objectURL;
          a.download = filename;
          a.click();
          URL.revokeObjectURL(objectURL);
          alert('Успешно сохранено');
        }, error => {
          console.log(error);
          alert('Произошла ошибка при сохранении');
        })
    } else {
      alert("Файл указан неверно")
    }
  }

  approveSla(idFile: number) {

    this.apiService.setApprove(idFile, this.choosed).subscribe(res => {
      if (res.status) {
        alert("статус успешно изменен")
        window.location.reload()
      }

    }, err => {
      alert("ошибка")
      console.log(err)
    })
  }

  changeChoosed(value:boolean) {
    this.choosed = value
  }
  changeApprove(){
    this.visible=!this.visible
    console.log(this.visible)
  }
}

