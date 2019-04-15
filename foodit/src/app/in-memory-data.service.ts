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
      { id: 11, name: 'Chicken Fried Rice',quantityAvaliable:9, price:10,seller: 'David',description:'Delicious chicken friedrice made with vegetables and fresh chicken.', image: 'assets/chicken.jpg' },
      { id: 12, name: 'Steak',quantityAvaliable:12, price:12,seller: 'David',description:'Fresh Stake seasoned with black pepper', image:'assets/beef.jpg'},
      { id: 14, name: 'Fish' ,quantityAvaliable:null,price:12,seller: null,description:null, image:'assets/salmon.jpg'},
      { id: 15, name: 'Tofu',quantityAvaliable:null,price:12,seller: null,description:null, image:'assets/tofu.jpg' },
      { id: 16, name: 'Pork',quantityAvaliable:null,price:12,seller: null,description:null, image:'assets/pork.jpg' },
      { id: 17, name: 'Egg',quantityAvaliable:null,price:12,seller: null,description:null, image:'assets/egg.jpg' },
      { id: 18, name: 'Vegetable',quantityAvaliable:null,price:12,seller: null,description:null,image:'assets/vegetable.jpg' },
      { id: 19, name: 'Fruit',quantityAvaliable:null,price:12,seller: null,description:null, image:'assets/fruits.jpeg'  },
      { id: 20, name: 'Beverage',quantityAvaliable:null,price:12,seller: null, description:null,image:'assets/beverage.jpg' },
      { id: 13, name: 'BBQ Lamb' ,quantityAvaliable:2,price:22,seller: 'Daisy',description:'BBQ', image:'assets/lamb.jpg'},
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