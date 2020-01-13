import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private oauthService: OAuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     const hasIdToken = this.oauthService.hasValidIdToken();
     const hasAccessToken = this.oauthService.hasValidAccessToken();

     return true;
     return hasIdToken && hasAccessToken;
  }
}
