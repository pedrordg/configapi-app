import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ConfigurationKey } from '../../classes/configurationkey';
import { ConfigurationKeyService } from '../../services/configurationkey.service';

@Component({
  selector: 'app-configurationkey-detail',
  templateUrl: './configurationkey-detail.component.html',
  styleUrls: ['./configurationkey-detail.component.css']
})
export class ConfigurationKeyDetailComponent implements OnInit { configurationKey: ConfigurationKey;

  constructor(
  private route: ActivatedRoute,
  private configurationKeyService: ConfigurationKeyService,
  private location: Location
) {}

  ngOnInit() {
    this.getConfigurationKey();
  }

  getConfigurationKey(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.configurationKeyService.getConfigurationKey(id)
      .subscribe(configurationKey => this.configurationKey = configurationKey);
  }

  goBack(): void {
    this.location.back();
  }
}
