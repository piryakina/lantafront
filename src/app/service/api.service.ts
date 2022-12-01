import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IUser} from "../entities/IUser";


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
  login(user: IUser): Observable<any> {
    return this.httpClient.post<any>(this.apiDomen + `/login`, user, {withCredentials: true});
  }
  logout(): Observable<any> {
    return this.httpClient.get<any>(this.apiDomen + `/logout`, {withCredentials: true});
  }
  getRole():Observable<any> {
    return this.httpClient.get<any>(this.apiDomen+`/role`,{withCredentials: true})
  }
  uploadFileBilling(data:any, user:IUser):Observable<any>{
    return this.httpClient.post(this.apiDomen+'/billings/upload',[data,user],{withCredentials:true})
  }
  uploadFileInvoice(data:any, user:IUser):Observable<any>{
    return this.httpClient.post(this.apiDomen+'/billings/upload',[data,user],{withCredentials:true})
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
