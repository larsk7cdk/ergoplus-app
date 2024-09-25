import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
    path: 'forside',
    title: 'Forside',
    data: { title: 'Ergoterapi \nGør din hverdag mulig' },
    component: HomeComponent
  },
  {
    path: 'ergoterapi',
    title: 'Ergoterapi',
    data: { title: 'Ergoterapi' },
    loadComponent: () => import('./features/ergotherapy/ergotherapy.component')
      .then(m => m.ErgotherapyComponent)
  },
  {
    path: 'priser',
    title: 'Priser',
    data: { title: 'Priser' },
    loadComponent: () => import('./features/prices/prices.component')
      .then(m => m.PricesComponent)
  },
  {
    path: 'omergoplus',
    title: 'Om ErgoPlus',
    data: { title: 'Om ErgoPlus' },
    loadComponent: () => import('./features/ergoplus/ergoplus.component')
      .then(m => m.ErgoplusComponent)
  },
  { path: '**', redirectTo: 'forside', pathMatch: 'full' }
];
