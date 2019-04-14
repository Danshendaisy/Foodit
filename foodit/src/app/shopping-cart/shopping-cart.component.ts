import { FoodService } from './../food.service';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { Food } from '../food';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart : Food[];
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.getShoppingCart();
    console.log(this.shoppingCart)
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
