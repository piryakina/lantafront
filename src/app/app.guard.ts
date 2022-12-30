import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {LocalStorageService} from "ngx-webstorage";
 
export class AppGuard implements CanActivate{
   
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot, storage:LocalStorageService) : Observable<boolean> | boolean{
        if (this.storage.retrieve("id")!==undefined){
            return true
        } else {
            window.location.href="/"
        return false
        }
    }
}