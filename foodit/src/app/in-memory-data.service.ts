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
      { id: 11, name: 'Chiken', price:10, pic:null },
      { id: 12, name: 'Beef', price:12, pic:null},
      { id: 13, name: 'Lamb' ,price:12, pic:null},
      { id: 14, name: 'Fish' ,price:12, pic:null},
      { id: 15, name: 'Tofu',price:12, pic:null },
      { id: 16, name: 'Pork',price:12, pic:null },
      { id: 17, name: 'Egg',price:12, pic:null },
      { id: 18, name: 'Vegetable',price:12, pic:null },
      { id: 19, name: 'Fruit',price:12, pic:null },
      { id: 20, name: 'Beverage',price:12, pic:null }
    ];
    const shoppingCart=[
      { id: 12, name: 'Beef', price:12, pic:null},
    ];
    return {foodlist, shoppingCart};

   

  }

  // Overrides the genId method to ensure that a food always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(foodlist: Food[]): number {
    return foodlist.length > 0 ? Math.max(...foodlist.map(food => food.id)) + 1 : 11;
  }
}