import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { MessageType } from '../classes/messagetype';

@Injectable({
  providedIn: 'root'
})
export class MessageTypeService {
  private baseUrl = 'api/v1/table/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMessageTypes(): Observable<MessageType[]> {
    const url = this.apiUrl + this.baseUrl  + 'messagetype';
    return this.http.get<MessageType[]>(url, this.httpOptions)
    .pipe(
      catchError(this.handleError<MessageType[]>('getMessageTypes', []))
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
