import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { FoodDetailComponent }  from './food-detail/food-detail.component';
import { FoodlistComponent }      from './foodlist/foodlist.component';
import { FoodSearchComponent }  from './food-search/food-search.component';
import { MessagesComponent } from './messages/messages.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    FoodlistComponent,
    FoodDetailComponent,
    FoodSearchComponent,
    MessagesComponent,
    AddFoodComponent,
    ContactUsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }