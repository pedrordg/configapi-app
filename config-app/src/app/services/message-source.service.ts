import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { MessageSource } from '../classes/messagesource';


@Injectable({
  providedIn: 'root'
})
export class MessageSourceService {
  private configurationKeyUrl = 'api/v1/table/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMessageSources(): Observable<MessageSource[]> {
    const url = this.apiUrl + this.configurationKeyUrl  + 'messagesource';
    return this.http.get<MessageSource[]>(url, this.httpOptions)
    .pipe(
      catchError(this.handleError<MessageSource[]>('getConfigurationKeys', []))
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
