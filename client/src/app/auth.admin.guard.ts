import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './shared/services/auth.service';


Injectable({
  providedIn: 'root'
})

export class AuthGuardAdmin implements CanActivate, CanActivateChild {
  constructor(
    private auth: AuthService,
    private router: Router
    ) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (this.auth.authorized(true)) {
      return of(true);
    } else {
      this.router.navigate(['/home'], {
        queryParams: {
          accessDenied: true
        }
      });
      return of(false);
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(route, state);
  }
}
