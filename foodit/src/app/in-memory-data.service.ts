import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Food } from './food';
import { Injectable } from '@angular/core';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    
    const foodlist = [
      { id: 11, name: 'Chicken', price: 9, image: 'assets/chicken.jpg'},
      { id: 12, name: 'Beef', price: 12, image: 'assets/beef.jpg'},
      { id: 13, name: 'Lamb', price: 12, image: 'assets/lamb.jpg' },
      { id: 14, name: 'Fish', price: 13, image: 'assets/salmon.jpg' },
      { id: 15, name: 'Tofu', price: 8, image: 'assets/tofu.jpg'},
      { id: 16, name: 'Pork', price: 8, image: 'assets/pork.jpg' },
      { id: 17, name: 'Egg', price: 4, image: 'assets/egg.jpg' },
      { id: 18, name: 'Vegetable', price: 6, image: 'assets/vegetable.jpg' },
      { id: 19, name: 'Fruit', price: 5, image: 'assets/fruits.jpeg' },
      { id: 20, name: 'Beverage', price: 2, image: 'assets/beverage.jpg' }
    ];
    return {foodlist};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(foodlist: Food[]): number {
    return foodlist.length > 0 ? Math.max(...foodlist.map(food => food.id)) + 1 : 11;
  }
}