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
      { id: 11, name: 'Chiken', price:10, pic: '/assets/pork.jpg' },
      { id: 12, name: 'Beef', price:12, pic:'assets/beef.jpg'},
      { id: 13, name: 'Lamb' ,price:12, pic:'assets/lamb.jpg'},
      { id: 14, name: 'Fish' ,price:12, pic:'assets/salmon.jpg'},
      { id: 15, name: 'Tofu',price:12, pic:'assets/tofu.jpg' },
      { id: 16, name: 'Pork',price:12, pic:'assets/pork.jpg' },
      { id: 17, name: 'Egg',price:12, pic:'assets/egg.jpg' },
      { id: 18, name: 'Vegetable',price:12, pic:'assets/vegetable.jpg' },
      { id: 19, name: 'Fruit',price:12, pic:'assets/fruits.jpeg'  },
      { id: 20, name: 'Beverage',price:12, pic:'assets/beverage.jpg' }
    ];
    const shoppingCart=[
      { id: 12, name: 'Beef', price:12, pic:null},
    ];
    return {foodlist, shoppingCart};

   

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