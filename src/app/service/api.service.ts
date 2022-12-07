import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {IUser} from "../entities/IUser";
import {IPeriod} from "../entities/IPeriod";
import {INews} from "../entities/INews";


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) {
  }
  apiDomen = 'http://localhost:8080';
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  })
  opt = {header: this.headers, withCredentials: true};

  //Логин в систему
  login(user: IUser): (Observable<any>) {
    return this.httpClient.post<any>(this.apiDomen + `/login`, user, {withCredentials: true});
  }
  logout(): Observable<any> {
    return this.httpClient.get<any>(this.apiDomen + `/logout`, {withCredentials: true});
  }
  getRole():Observable<any> {
    return this.httpClient.get<any>(this.apiDomen+`/role`,{withCredentials: true})
  }
  uploadFileBilling(data:any):Observable<any>{
    return this.httpClient.post(this.apiDomen+'/billings/upload',data,{withCredentials:true})
  }
  uploadFileInvoice(data:any):Observable<any>{
    return this.httpClient.post(this.apiDomen+'/invoice/upload',data,{withCredentials:true})
  }
  uploadFileAttachment(data:any):Observable<any>{
    return this.httpClient.post(this.apiDomen+'/attachment/upload',data,{withCredentials:true})
  }
  getRoles():Observable<any>{
    return this.httpClient.get(this.apiDomen+`/roles`,{withCredentials:true})
  }
  addUser(user:IUser):Observable<any>{
    return this.httpClient.post<any>(this.apiDomen+`/admin/add-user`,user,{withCredentials:true})
  }
  addPeriod(p:IPeriod):Observable<any>{
    return this.httpClient.post<any>(this.apiDomen+`/admin/add-period`,p,{withCredentials:true})
  }

  getQualityAndProcess(login:string):Observable<any>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("login",login);
    return this.httpClient.get(this.apiDomen+'/sp-period', {params: queryParams, withCredentials: true})
  }
  getDataPeriodNow():Observable<any>{
    return this.httpClient.get(this.apiDomen+`/data-period`,{withCredentials:true})
  }
  getStatuses():Observable<any>{
    return this.httpClient.get(this.apiDomen+`/status`,{withCredentials:true})
  }
  addNews(data:INews):Observable<any>{
    return this.httpClient.post(this.apiDomen+`/admin/add-news`,data,{withCredentials:true})
  }
  // //регистрация
  // signup(user: IUser): Observable<any> {
  //   return this.httpClient.post<IAnswer>(this.apiDomen + '/sign-up', user, {withCredentials: true});
  // }
  // //выход
  // logout(): Observable<IAnswer> {
  //   return this.httpClient.get<IAnswer>(this.apiDomen + '/log-out', {withCredentials: true});
  // }
  //
  // //список оборудования
  // getequipment(): Observable<IEquipment[]> {
  //   return this.httpClient.get<IEquipment[]>(this.apiDomen + '/equipments', {withCredentials: true});
  // }
  // uploadfilebilling(data:any):Observable<any>{
  //   return this.httpClient.post(this.apiDomen+'/billings/upload',data,{withCredentials:true})
  // }
  // uploadfiletestlist(data:any):Observable<any>{
  //   return this.httpClient.post(this.apiDomen+'/test-list/upload',data,{withCredentials:true})
  // }
}
