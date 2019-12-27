import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from '../app/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private oauthService: OAuthService, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // const hasIdToken = this.oauthService.hasValidIdToken();
    // const hasAccessToken = this.oauthService.hasValidAccessToken();

    //return hasIdToken && hasAccessToken;
    return this.authService.loggedIn;
  }
}
