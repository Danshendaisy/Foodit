import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Food } from '../food';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  url = '';
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]){
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.url = event.target.result;
      }
    }
  }
  foodlist: Food[];
  constructor(private foodService: FoodService) { }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.foodService.addFood({ name } as Food)
      .subscribe(food => {
        this.foodlist.push(food);
      });
  }

}
