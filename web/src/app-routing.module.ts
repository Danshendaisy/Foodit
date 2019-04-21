import { Food } from './../../foodit/src/app/food';
import { HomeComponent } from './app/home/home.component';
import{FoodsComponent} from './app/foods/foods/foods.component';

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',component: HomeComponent},
  {path:'foods',component:FoodsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}