import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class AuthService {
  constructor(private oauthService: OAuthService) { }

  getToken(): string {
    const token = this.oauthService.getAccessToken();
    if (token) {
      localStorage.setItem('access_token', token);
    }
    return token;
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}
