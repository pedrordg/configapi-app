import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import i18next from 'i18next';
import { ITranslationService, I18NEXT_SERVICE } from 'angular-i18next';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  @ViewChild('snav', {static: false}) sidenav: MatSidenav;
  selectedLanguage: string;
  previousLanguage: string;
  navLinks = [
    {
      label: i18next.t('menu:home'),
      link: './home',
      index: 0
    },
    {
      label:  i18next.t('menu:about'),
      link: './about',
      index: 1
    }
  ];

  constructor(@Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService) {
     this.selectedLanguage = this.previousLanguage = i18next.language ? i18next.language : 'en';
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

  public switchLanguage() {
    i18next.changeLanguage(this.selectedLanguage);
  }

  close() {
    this.sidenav.close();
  }
}
