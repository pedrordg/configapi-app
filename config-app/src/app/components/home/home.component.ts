import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private oauthService: OAuthService) {
  }

  public login() {
      this.oauthService.initLoginFlow();
  }

  public logoff() {
      this.oauthService.logOut();
  }
}
