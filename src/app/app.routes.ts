import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { PricesComponent } from './features/prices/prices.component';

export const routes: Routes = [
  {
    component: HomeComponent,
    path: 'home'
  },
  {
    component: PricesComponent,
    path: 'prices'
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
