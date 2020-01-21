import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { ConfigurationKey } from '../../classes/configurationkey';
import { ConfigurationKeyService } from '../../services/configurationkey.service';
import { UpdatePopupComponent } from '../update-popup/update-popup.component';

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

  openDialog(configurationName: string): void {
    const dialogRef = this.dialog.open(UpdatePopupComponent, {
      width: '250px',
      data: {name: 'alfredo', animal: 'girafa'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
