import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ConfigurationKey } from '../classes/configurationkey';
import { ConfigurationKeyMocks } from '../mock/mock-configurationkey';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationKeyService {

  constructor() { }

  getConfigurationKeys(): Observable<ConfigurationKey[]> {
    return of(ConfigurationKeyMocks);
  }

  getConfigurationKey(id: number): Observable<ConfigurationKey> {
    return of(ConfigurationKeyMocks.find(configurationKey => configurationKey.id === id));
  }
}
