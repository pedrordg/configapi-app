import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from '../app/auth/authConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Matrix Payment Gateway - Configuration API portal';

  activeLinkIndex = -1;
  navLinks = [
    {
      label: 'Dashboard',
      link: './dashboard',
      index: 0
    }, {
      label: 'Configuration Keys',
      link: './configurationKeys',
      index: 1
    }, {
      label: 'Predefined Values',
      link: './predefinedValue',
      index: 2
    }, {
      label: 'Message Types',
      link: './messageTypes',
      index: 3
    }, {
      label: 'Message Sources',
      link: './messageSources',
      index: 4
    }
  ];

  constructor(private router: Router, private oauthService: OAuthService) {
    this.configure();
   }

  ngOnInit() {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
  }

  private configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
