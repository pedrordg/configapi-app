import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatSidenav} from '@angular/material/sidenav';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from '../app/auth/authConfig';
import i18next from 'i18next';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedLanguage: string;
  navLinks = [
    {
      label: i18next.t('menu:home'),
      link: './home',
      index: 0
    },
    {
      label:  i18next.t('menu:configuration-keys'),
      link: './configurationKeys',
      index: 1
    },
    {
      label: i18next.t('menu:predefined-values'),
      link: './predefinedValue',
      index: 2
    },
    {
      label: i18next.t('menu:message-types'),
      link: './messageTypes',
      index: 3
    },
    {
      label: i18next.t('menu:message-sources'),
      link: './messageSources',
      index: 4
    }
  ];

  constructor(private oauthService: OAuthService,
              private router: Router) {
    this.configure();
    this.selectedLanguage = i18next.language;
  }

  ngOnInit() {
  }

  private configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndLogin();
  }

  public switchLanguage() {
    i18next.changeLanguage(this.selectedLanguage).then((t) => {
      window.location.reload();
      }
    );
  }
}
