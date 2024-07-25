import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'prices',
    loadComponent: () => import('./features/prices/prices.component')
      .then(m => m.PricesComponent)
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
