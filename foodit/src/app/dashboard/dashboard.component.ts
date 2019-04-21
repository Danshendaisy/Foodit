import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  foodlist: Food[] = [];

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.getFoodlist();
  }

  getFoodlist(): void {
    this.foodService.getFoodlist()
      .subscribe(foodlist => this.foodlist = foodlist.slice(0,10));
      // use foodlist.size or something like that
  }
}