import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs'
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Nivel } from './Nivel'

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class NivelesService {

  private nivelesUrl = 'https://api.jsonbin.io/b/5eefd107e2ce6e3b2c7701e6/3';

  constructor(
    private http:HttpClient,
    private messageService:MessageService) { }

  getNiveles():Observable<Nivel[]>{
    return this.http.get<Nivel[]>(this.nivelesUrl)
      .pipe(
        tap (_ => this.log('Niveles obtenidos')),
        catchError(this.handleError<Nivel[]>('getNiveles', []))
      );
  }

      /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`NivelesService: ${message}`);
  }
}