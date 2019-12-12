import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ConfigurationKey } from '../classes/configurationkey';
import { ConfigurationKeyMocks } from '../mock/mock-configurationkey';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationKeyService {
  private configurationKeyUrl = 'api/v1/table/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getConfigurationKeys(): Observable<ConfigurationKey[]> {
    const url = this.apiUrl + this.configurationKeyUrl  + 'configurationkey';
    return this.http.get<ConfigurationKey[]>(url, this.httpOptions)
    .pipe(
      catchError(this.handleError<ConfigurationKey[]>('getConfigurationKeys', []))
    );
  }

  getConfigurationKey(id: number): Observable<ConfigurationKey> {
    const url = this.apiUrl + `${this.configurationKeyUrl}/${id}`;
    return this.http.get<ConfigurationKey>(url).pipe(
      catchError(this.handleError<ConfigurationKey>(`getConfigurationKey id=${id}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
