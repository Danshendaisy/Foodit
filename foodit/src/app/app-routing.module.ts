import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { FoodlistComponent }      from './foodlist/foodlist.component';
import { FoodDetailComponent }  from './food-detail/food-detail.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: FoodDetailComponent },
  { path: 'foodlist', component: FoodlistComponent },
  { path: 'addfood', component: AddFoodComponent},
  { path: 'contactus', component: ContactUsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}