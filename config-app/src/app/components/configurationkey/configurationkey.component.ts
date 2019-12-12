import { Component, OnInit } from '@angular/core';

import { ConfigurationKey } from '../../classes/configurationkey';
import { ConfigurationKeyService } from '../../services/configurationkey.service';

@Component({
  selector: 'app-configurationkey',
  templateUrl: './configurationkey.component.html',
  styleUrls: ['./configurationkey.component.css']
})

export class ConfigurationKeyComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'dataTypeId', 'isDynamic', 'levelKeyGroupId', 'defaultIntValue', 'defaultDecimalValue', 'defaultDateValue', 'defaultTimeValue', 'defaultStringValue', 'defaultGUIDValue', 'CreatedBy', 'CreatedDate' ];
  configurationKeys: ConfigurationKey[];

  constructor(private configurationKeyService: ConfigurationKeyService) { }

  ngOnInit() {
    this.getConfigurationKeys();
  }

  getConfigurationKeys(): void {
    this.configurationKeyService.getConfigurationKeys()
        .subscribe(configurationKeys => this.configurationKeys = configurationKeys);
  }
}
