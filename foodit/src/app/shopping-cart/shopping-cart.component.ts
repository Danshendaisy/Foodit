import { HttpClient } from '@angular/common/http';
import { FoodService } from './../food.service';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  private foodsUri = 'https://localhost:5001/api/food';
  private handleError<T>(operation = 'operation',result?: T){
    return (error:any): Observable<T>=>{
      console.error(`${operation} failed:${error.message}`);
      return of(result as T)
    }
  }
  
  
  shoppingCart : Food[];
  constructor(
    private http: HttpClient,
    private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.getShoppingCart();
    this.getFood();
    console.log(this.getFood())
  }

  getFood(){
    return this.http.get<Food[]>(this.foodsUri).pipe(
      tap(_=>console.log('fetched food')),
      catchError(this.handleError<Food[]>('getFood'))
    )
  }
  getShoppingCart(): void {
    this.shoppingCartService.getFoodlist()
    .subscribe(shoppingCart=>this.shoppingCart=shoppingCart);
    console.log(this.shoppingCart)
  }

  add(food:Food):void{
    this.shoppingCartService.addFood(food).subscribe(
      food=>{
        this.shoppingCart.push(food);
        console.log(food)
      }
    );
  }

  delete(food: Food):void{
    this.shoppingCart=this.shoppingCart.filter(h=>h!==food)
    this.shoppingCartService.deleteFood(food).subscribe();
  }

}
