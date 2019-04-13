import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: [ './food-search.component.css' ]
})
export class FoodSearchComponent implements OnInit {
  foodlist$: Observable<Food[]>;
  private searchTerms = new Subject<string>();

  constructor(private foodService: FoodService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.foodlist$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.foodService.searchFoodlist(term)),
    );
  }
}