import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Morador } from './morador';
import { HOST } from './app.component';

import { MessageService } from './message.service';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class MoradorService {

  base_url = HOST + '/v1/morador/';
  constructor(private http: HttpClient, private messageService: MessageService) { }

  getResidents() : Observable<Morador[]> {

    let params = new HttpParams();
              
    return this.http.get<Morador[]>(this.base_url, {params: params})
      .pipe(
        tap(residents => {
          console.log('Fetched residents');
          console.log(residents);
          this.messageService.add("Success","Fetched /v1/morador/");
        }, err => {
          if (err.error instanceof Error) {
            this.messageService.add('An error occurred', err.error.message);
          } else {
            this.messageService.add(`List residents: ${err.status} error`,
                                  `The server returned a ${err.status} error while listing residents.`);
          }
          console.log(err);
        } ),
      );
  }

  updateResident(resident : Morador) {
    return this.http.put<any>(this.base_url, resident)
      .pipe(
        tap(person => {
          this.messageService.add("Success!", "Updated Resident " + person.id);
        }, err => {
          if (err.error instanceof Error) {
            this.messageService.add('An error occurred', err.error.message);
          } else {
            this.messageService.add(`Update resident: ${err.status} error`,
                                  `The server returned a ${err.status} error while updating resident.`);
          }
          console.log(err);
        } ),
      );
  }

  saveResident (resident : Morador) {
    if (resident.id == '') {
        resident.id = null
    }
    return this.http.post<Morador>(this.base_url, resident)
      .pipe(
        tap(person => {
          this.messageService.add("Success!", "Save resident " + person.id);
        }, err => {
          if (err.error instanceof Error) {
            this.messageService.add('An error occurred', err.error.message);
          } else {
            this.messageService.add(`Save resident: ${err.status} error`,
                                  `The server returned a ${err.status} error while creating the resident.`);
          }
          console.log(err);
        } ),
      );
  }

  deleteResident(resident : Morador) {
    return this.http.delete<any>(this.base_url + `/${resident.id}`)
      .pipe(
        tap( status => {
          this.messageService.add("Success!", "Deleted resident " + resident.id);
        }, err => {
          if (err.error instanceof Error) {
            this.messageService.add('An error occurred', err.error.message);
          } else {
            this.messageService.add(`Delete resident: ${err.status} error`,
                                  `The server returned a ${err.status} error while deleting the resident.`);
          }
          console.log(err);
        }),
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      console.error(operation);

      console.error(error);

      this.messageService.add("Error during " + operation, error);

      return of(result as T);
    };
  }

}
