import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import {Food} from './food';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private shoppingCartUrl ='api/shoppingcart';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) { }

  getFoodlist (): Observable<Food[]> {
    return this.http.get<Food[]>(this.shoppingCartUrl)
      .pipe(
        tap(_ => this.log('fetched shoppingCart')),
        catchError(this.handleError('getFoodlist', []))
      );
  }

  // getFoods(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.foodService.getFood(id)
  //     .subscribe(food => this.food = food);
  // }
  
  getFood(id: number): Observable<Food> {
    const url = `${this.shoppingCartUrl}/${id}`;
    return this.http.get<Food>(url).pipe(
      tap(_ => this.log(`fetched Food id=${id}`)),
      catchError(this.handleError<Food>(`getFood id=${id}`))
    );
  }

  addFood (food: Food): Observable<Food> {
    console.log("this")
    return this.http.post<Food>(this.shoppingCartUrl, food, httpOptions).pipe(
      tap((food: Food) => this.log(`added food w/ id=${food.id}`)),
      catchError(this.handleError<Food>('addFood'))
    );
  }

  deleteFood (food: Food | number): Observable<Food> {
    const id = typeof food === 'number' ? food : food.id;
    const url = `${this.shoppingCartUrl}/${id}`;

    return this.http.delete<Food>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted food id=${id}`)),
      catchError(this.handleError<Food>('deleteHero'))
      
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

  private log(message: string) {
    this.messageService.add(`FoodService: ${message}`);
  }



}
