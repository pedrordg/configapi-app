import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ConfigurationKey } from '../../classes/configurationkey';
import { ConfigurationKeyService } from '../../services/configurationkey.service';

@Component({
  selector: 'app-configurationkey',
  templateUrl: './configurationkey.component.html',
  styleUrls: ['./configurationkey.component.css']
})

export class ConfigurationKeyComponent implements OnInit {
  displayedColumns: string[] = ['configurationKeyId', 'name', 'description', 'dataTypeId', 'isDynamic', 'levelKeyGroupId', 'defaultIntValue', 'defaultDecimalValue', 'defaultDateValue', 'defaultTimeValue', 'defaultStringValue', 'defaultGUIDValue' ];
  configurationKeys: ConfigurationKey[];

  constructor(private configurationKeyService: ConfigurationKeyService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getConfigurationKeys();
  }

  getConfigurationKeys(): void {
    this.configurationKeyService.getConfigurationKeys()
        .subscribe(configurationKeys => this.configurationKeys = configurationKeys);
  }

  openDialog(configurationName: ConfigurationKey): void {
    
  }
}
