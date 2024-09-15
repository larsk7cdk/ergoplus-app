import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Forside',
    data: { title: 'Ergoterapi \nGør din hverdag mulig' },
    component: HomeComponent
  },
  {
    path: 'ergotherapy',
    title: 'Ergoterapi',
    data: { title: 'Ergoterapi' },
    loadComponent: () => import('./features/ergotherapy/ergotherapy.component')
      .then(m => m.ErgotherapyComponent)
  },
  {
    path: 'prices',
    title: 'Priser',
    data: { title: 'Priser' },
    loadComponent: () => import('./features/prices/prices.component')
      .then(m => m.PricesComponent)
  },
  {
    path: 'ergoplus',
    title: 'Om ErgoPlus',
    data: { title: 'Om ErgoPlus' },
    loadComponent: () => import('./features/ergoplus/ergoplus.component')
      .then(m => m.ErgoplusComponent)
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
