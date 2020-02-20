import { Component, OnInit, Inject } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from '../app/auth/authConfig';
import i18next from 'i18next';
import { ITranslationService, I18NEXT_SERVICE } from 'angular-i18next';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  selectedLanguage: string;
  previousLanguage: string;
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

  constructor(private oauthService: OAuthService, @Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService) {
    this.configure();
    this.selectedLanguage = this.previousLanguage = i18next.language;
  }

  ngOnInit() {
    this.i18NextService.events.languageChanged.subscribe(lang => {
      if (lang !== this.previousLanguage) {
        window.location.reload();
      } else {
        this.previousLanguage = lang;
      }
    });
  }

  private configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndLogin();
  }

  public switchLanguage() {
    i18next.changeLanguage(this.selectedLanguage);
  }
}
