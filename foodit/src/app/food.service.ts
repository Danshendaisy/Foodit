import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Food } from './food';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class FoodService {

  private foodlistUrl = 'api/foodlist';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET foodlist from the server */
  getFoodlist (): Observable<Food[]> {
    return this.http.get<Food[]>(this.foodlistUrl)
      .pipe(
        tap(_ => this.log('fetched foodlist')),
        catchError(this.handleError('getFoodlist', []))
      );
  }

  /** GET food by id. Return `undefined` when id not found */
  getFoodNo404<Data>(id: number): Observable<Food> {
    const url = `${this.foodlistUrl}/?id=${id}`;
    return this.http.get<Food[]>(url)
      .pipe(
        map(foodlist => foodlist[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} food id=${id}`);
        }),
        catchError(this.handleError<Food>(`getFood id=${id}`))
      );
  }

  /** GET food by id. Will 404 if id not found */
  getFood(id: number): Observable<Food> {
    const url = `${this.foodlistUrl}/${id}`;
    return this.http.get<Food>(url).pipe(
      tap(_ => this.log(`fetched Food id=${id}`)),
      catchError(this.handleError<Food>(`getFood id=${id}`))
    );
  }

  /* GET foodlist whose name contains search term */
  searchFoodlist(term: string): Observable<Food[]> {
    if (!term.trim()) {
      // if not search term, return empty food array.
      return of([]);
    }
    return this.http.get<Food[]>(`${this.foodlistUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found foodlist matching "${term}"`)),
      catchError(this.handleError<Food[]>('searchFoodlist', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new food to the server */
  addFood (hero: Food): Observable<Food> {
    return this.http.post<Food>(this.foodlistUrl, hero, httpOptions).pipe(
      tap((newFood: Food) => this.log(`added food w/ id=${newFood.id}`)),
      catchError(this.handleError<Food>('addFood'))
    );
  }

  /** DELETE: delete the food from the server */
  deleteFood (food: Food | number): Observable<Food> {
    const id = typeof food === 'number' ? food : food.id;
    const url = `${this.foodlistUrl}/${id}`;

    return this.http.delete<Food>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted food id=${id}`)),
      catchError(this.handleError<Food>('deleteHero'))
    );
  }

  /** PUT: update the food on the server */
  updateFood (food: Food): Observable<any> {
    return this.http.put(this.foodlistUrl, food, httpOptions).pipe(
      tap(_ => this.log(`updated food id=${food.id}`)),
      catchError(this.handleError<any>('updateFood'))
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

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
/** Log a FoodService message with the MessageService */
private log(message: string) {
  this.messageService.add(`FoodService: ${message}`);
}
  
}