import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {LocalStorageService} from "ngx-webstorage";
import {Injectable, Inject} from '@angular/core';

 
 @Injectable()
export class AppGuard implements CanActivate{
    constructor(
    @Inject(LocalStorageService) private auth: storage
  ) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean{
        if (storage.retrieve("id")!==undefined){
            return true
        } else {
            window.location.href="/"
        return false
        }
    }
}