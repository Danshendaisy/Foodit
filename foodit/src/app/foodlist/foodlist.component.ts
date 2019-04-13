import { Component, OnInit } from '@angular/core';

import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit {
  foodlist: Food[];

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.getFoodlist();
  }

  getFoodlist(): void {
    this.foodService.getFoodlist()
    .subscribe(foodlist => this.foodlist = foodlist);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.foodService.addFood({ name } as Food)
      .subscribe(food => {
        this.foodlist.push(food);
      });
  }

  delete(food: Food): void {
    this.foodlist = this.foodlist.filter(h => h !== food);
    this.foodService.deleteFood(food).subscribe();
  }

}