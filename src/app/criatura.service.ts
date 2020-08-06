import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs'
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Criatura } from './Criatura';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CriaturaService {

  private criaturasUrl = 'https://api.jsonbin.io/b/5eed4998e2ce6e3b2c75e2dc/3';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getCriaturas(): Observable<Criatura[]>{
    return this.http.get<Criatura[]>(this.criaturasUrl)
      .pipe(
        tap (_ => this.log('Criaturas obtenidas')),
        catchError(this.handleError<Criatura[]>('getCriaturas', []))
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
    this.messageService.add(`CriaturaService: ${message}`);
  }
}