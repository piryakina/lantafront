import { Injectable } from '@angular/core';
import {Observable, queue} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {IUser} from "../entities/IUser";
import {IPeriod} from "../entities/IPeriod";
import {INews} from "../entities/INews";
import {IComment} from "../entities/IFile";


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private httpClient: HttpClient) {
  }
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  })
  opt = {header: this.headers, withCredentials: true};

  //Логин в систему
  login(user: IUser): (Observable<any>) {
    return this.httpClient.post<any>(apiDomen + `/login`, user, {withCredentials: true});
  }
  logout(): Observable<any> {
    return this.httpClient.get<any>(apiDomen + `/logout`, {withCredentials: true});
  }
  getRole():Observable<any> {
    return this.httpClient.get<any>(apiDomen+`/role`,{withCredentials: true})
  }
  uploadFileBilling(data:any):Observable<any>{
    return this.httpClient.post(apiDomen+'/billings/upload',data,{withCredentials:true})
  }
  uploadFileInvoice(data:any):Observable<any>{
    return this.httpClient.post(apiDomen+'/invoice/upload',data,{withCredentials:true})
  }
  uploadFileAttachment(data:any):Observable<any>{
    return this.httpClient.post(apiDomen+'/attachment/upload',data,{withCredentials:true})
  }
  uploadFileSLA(data:any):Observable<any>{
    return this.httpClient.post(apiDomen+'/usp/sla',data,{withCredentials:true})
  }
  getRoles():Observable<any>{
    return this.httpClient.get(apiDomen+`/roles`,{withCredentials:true})
  }
  addUser(user:IUser):Observable<any>{
    return this.httpClient.post<any>(apiDomen+`/admin/add-user`,user,{withCredentials:true})
  }
  CheckLogin(login:string):Observable<any>{
    return this.httpClient.post<any>(apiDomen+`/admin/checklogin`,login,{withCredentials:true})
  }

  addPeriod(p:IPeriod):Observable<any>{
    return this.httpClient.post<any>(apiDomen+`/admin/add-period`,p,{withCredentials:true})
  }

  getQualityAndProcess(login:string):Observable<any>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("login",login);
    return this.httpClient.get(apiDomen+'/sp-period', {params: queryParams, withCredentials: true})
  }
  getDataPeriodNow():Observable<any>{
    return this.httpClient.get(apiDomen+`/data-period`,{withCredentials:true})
  }
  getStatuses():Observable<any>{
    return this.httpClient.get(apiDomen+`/status`,{withCredentials:true})
  }
  setStatus(idFile:number, idStatus:number):Observable<any>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("statusId",idStatus);
    queryParams = queryParams.append("fileId",idFile);
    return this.httpClient.get(apiDomen+`/set-status`,{params:queryParams, withCredentials:true})
  }
  addNews(data:INews):Observable<any>{
    return this.httpClient.post(apiDomen+`/admin/add-news`,data,{withCredentials:true})
  }
  setComment(body:IComment):Observable<any>{
    return this.httpClient.post(apiDomen+`/set-comment`,body,{withCredentials:true})
  }
  downloadFileById(id: number):Observable<Blob>{
    return this.httpClient.get(apiDomen+`/billings/download`, {
      withCredentials: true,
      responseType: "blob",
      params: new HttpParams()
        .set("id", id)
    })
  }
  downloadSLAById(id: number):Observable<Blob>{
    return this.httpClient.get(apiDomen+`/usp/sla/download`, {
      withCredentials: true,
      responseType: "blob",
      params: new HttpParams()
        .set("id", id)
    })
  }
  downloadInvoiceById(id: number):Observable<Blob>{
    return this.httpClient.get(apiDomen+`/invoice/download`, {
      withCredentials: true,
      responseType: "blob",
      params: new HttpParams()
        .set("id", id)
    })
  }
  getNews():Observable<any>{
    return this.httpClient.get(apiDomen+`/news`,{withCredentials:true})
  }
  getImgNews(id:number):Observable<Blob>{
    return this.httpClient.get(apiDomen+`/news-img`, {
      withCredentials: true,
      responseType: "blob",
      params: new HttpParams()
        .set("id", id)
    })
  }
  // //регистрация
  // signup(user: IUser): Observable<any> {
  //   return this.httpClient.post<IAnswer>(apiDomen + '/sign-up', user, {withCredentials: true});
  // }
  // //выход
  // logout(): Observable<IAnswer> {
  //   return this.httpClient.get<IAnswer>(apiDomen + '/log-out', {withCredentials: true});
  // }
  //
  // //список оборудования
  // getequipment(): Observable<IEquipment[]> {
  //   return this.httpClient.get<IEquipment[]>(apiDomen + '/equipments', {withCredentials: true});
  // }
  // uploadfilebilling(data:any):Observable<any>{
  //   return this.httpClient.post(apiDomen+'/billings/upload',data,{withCredentials:true})
  // }
  // uploadfiletestlist(data:any):Observable<any>{
  //   return this.httpClient.post(apiDomen+'/test-list/upload',data,{withCredentials:true})
  // }
}
export const apiDomen = 'http://sp.lantaservice.com:8080';
