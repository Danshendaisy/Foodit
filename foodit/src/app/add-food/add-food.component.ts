import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {

  url = '';
  newFood: Food;

  constructor(private foodService: FoodService ) { }

  ngOnInit() {
  }

  public onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (event: any) => {
                this.url = event.target.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        }
  }

  add(foodId: number,foodN: string, foodP: number, foodQ: number,foodD: string, PTM: string, url: string){
    this.newFood.id = foodId;
    this.newFood.name = foodN;
    this.newFood.price = foodP;
    this.newFood.quantity = foodQ;
    this.newFood.description = foodD;
    this.newFood.ptm = PTM;
    this.newFood.image = url;
    this.foodService.addFood(this.newFood)  
  }
}
