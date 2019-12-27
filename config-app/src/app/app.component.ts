import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { OAuthService } from 'angular-oauth2-oidc';
// import { JwksValidationHandler } from 'angular-oauth2-oidc';
// import { AuthService } from '../app/services/auth.service';
// import { authConfig } from '../app/auth/authConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private router: Router
    //private oauthService: OAuthService, private authService: AuthService, private router: Router
    ) {
    this.configure();
  }

  public login() {
      //this.oauthService.initLoginFlow();
      this.router.navigateByUrl('/dashboard');
  }

  private configure() {
    // this.oauthService.configure(authConfig);
    // this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    // this.oauthService.loadDiscoveryDocumentAndTryLogin({
    //   onLoginError: errorCtx => {
    //     window.alert(errorCtx);
    //   },
    //   onTokenReceived: context => {
    //     localStorage.removeItem('access_token');
    //     localStorage.setItem('access_token', context.accessToken);
    //   }
    // });
  }
}
