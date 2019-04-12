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
      { id: 11, name: 'Chiken' },
      { id: 12, name: 'Beef' },
      { id: 13, name: 'Lamb' },
      { id: 14, name: 'Fish' },
      { id: 15, name: 'Tofu' },
      { id: 16, name: 'Pork' },
      { id: 17, name: 'Egg' },
      { id: 18, name: 'Vegetable' },
      { id: 19, name: 'Fruit' },
      { id: 20, name: 'Beverage' }
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