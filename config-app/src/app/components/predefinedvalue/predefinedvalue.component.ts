import { Component, OnInit } from '@angular/core';

import { PredefinedValue } from '../../classes/predefinedvalue';
import { PredefinedValueService } from '../../services/predefinedvalue.service';

@Component({
  selector: 'app-predefinedvalue',
  templateUrl: './predefinedvalue.component.html',
  styleUrls: ['./predefinedvalue.component.css']
})
export class PredefinedvalueComponent implements OnInit {
  displayedColumns: string[] = ['predefinedValueId', 'name', 'description' ];
  predefinedValues: PredefinedValue[];

  constructor(private predefinedValueService: PredefinedValueService) { }

  ngOnInit() {
    this.getPredefinedValues();
  }

  getPredefinedValues(): void {
    this.predefinedValueService.getPredefinedValues()
        .subscribe(predefinedValues => this.predefinedValues = predefinedValues);
  }
}
