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
  fileName = '';

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
            this.fileName = event.target.files[0].name;
        }
  }

  addF(foodYN: string,foodFN: string, foodP: number, foodQ: number,foodD: string, PTM: string){
    var newFood = new Food();
    newFood.seller = foodYN;
    newFood.name = foodFN;
    newFood.price = foodP;
    newFood.quantity = foodQ;
    newFood.description = foodD;
    newFood.PlaceToMeet = PTM;
    newFood.image = "assets/"+ this.fileName;
    this.foodService.addFood(newFood).subscribe();  
  }

}
