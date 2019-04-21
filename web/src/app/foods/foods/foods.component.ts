import { Component, OnInit } from '@angular/core';
import {Food} from '../food';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  food:Food={
    id:1,
    name: "chicken",
    description: "des",
    price:2,
    quantity:2,
    image:null
  }
  constructor() { }

  ngOnInit() {
  }

}
