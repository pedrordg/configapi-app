import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ConfigurationKey } from '../classes/configurationkey';
import { Injectable } from '@angular/core';
import { ConfigurationKeyMocks } from '../mock/mock-configurationKey';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let configurationkey = ConfigurationKeyMocks;
    return {configurationkey};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(configurationKeys: ConfigurationKey[]): string {
    return this.makeid(11);
  }

  private makeid(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
}
