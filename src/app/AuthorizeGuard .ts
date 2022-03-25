import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./AuthService";

@Injectable({providedIn:'root'})
export class AuthorizeGuard implements CanActivate{
    constructor(private authService: AuthService,
        private route: ActivatedRoute,
        private router: Router)
    {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(!this.authService.isTokenExpired())
         return true;
         else
         return  this.router.navigate(['/login']);
    }
}