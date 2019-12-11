import { Component, OnInit } from '@angular/core';
import { ConfigurationKey } from '../../classes/configurationkey';
import { ConfigurationKeyService } from '../../services/configurationkey.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  configurationKeys: ConfigurationKey[] = [];

  constructor(private configurationKeyService: ConfigurationKeyService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.configurationKeyService.getConfigurationKeys()
      .subscribe(configurationKeys => this.configurationKeys = configurationKeys.slice(1, 5));
  }
}
