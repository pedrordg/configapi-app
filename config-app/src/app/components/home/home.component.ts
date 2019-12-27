import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Matrix Payment Gateway - Configuration API portal';

  activeLinkIndex = -1;
  navLinks = [
    {
      label: 'Dashboard',
      link: './dashboard',
      index: 0
    },
    {
      label: 'Configuration Keys',
      link: './configurationKeys',
      index: 1
    },
    {
      label: 'Predefined Values',
      link: './predefinedValue',
      index: 2
    },
    {
      label: 'Message Types',
      link: './messageTypes',
      index: 3
    },
    {
      label: 'Message Sources',
      link: './messageSources',
      index: 4
    }
  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe(res => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find(tab => tab.link === '.' + this.router.url)
      );
    });
  }
}
