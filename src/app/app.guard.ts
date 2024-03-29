import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {LocalStorageService} from "ngx-webstorage";
import {Injectable, Inject} from '@angular/core';

 
 @Injectable()
export class AppGuard implements CanActivate{
    constructor(private storage: LocalStorageService) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean{
        console.log(this.storage.retrieve("id"))
        if (this.storage.retrieve("id")!==null){

            return true
        } else {
            window.location.href="/"
        return false
        }
    }
}