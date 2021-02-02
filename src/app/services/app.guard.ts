import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanLoad, CanActivate{
    
    user = {admin: false, logged: true}
    
    canLoad() {
        return this.user.admin;
    }
    
    canActivate() {
        return this.user.logged;
    }
}