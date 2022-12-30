import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {LocalStorageService} from "ngx-webstorage";
 
export class AppGuard implements CanActivate{
   
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
        let storage:LocalStorageService
        if (storage.retrieve("id")!==undefined){
            return true
        } else {
            window.location.href="/"
        return false
        }
    }
}