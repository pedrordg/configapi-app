import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
        label: 'ConfigurationKeys',
        link: './configurationKeys',
        index: 1
    }
  ];

  constructor(private router: Router){ }

  ngOnInit() {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
  }
}
