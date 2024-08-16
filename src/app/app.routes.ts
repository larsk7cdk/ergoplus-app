import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Forside',
    data: { title: 'Ergoterapi, Gør din hverdag mulig' },
    component: HomeComponent
  },
  {
    path: 'prices',
    title: 'Priser',
    data: { title: 'Priser' },
    loadComponent: () => import('./features/prices/prices.component')
      .then(m => m.PricesComponent)
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
