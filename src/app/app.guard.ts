import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {LocalStorageService} from "ngx-webstorage";
 
export class AppGuard implements CanActivate{
    constructor(private storage:LocalStorageService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
        if (this.storage.retrieve("id")!==undefined){
            return true
        } else {
            window.location.href=["/"]
        return false
        }
    }
}