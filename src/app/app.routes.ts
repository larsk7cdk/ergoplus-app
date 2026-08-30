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
    path: 'privat',
    title: 'Privat',
    data: { title: 'Privat' },
    loadComponent: () => import('./features/private/private.component')
      .then(m => m.PrivatComponent)
  },
  {
    path: 'erhverv',
    title: 'Erhverv',
    data: { title: 'Erhverv' },
    loadComponent: () => import('./features/business/business.component')
      .then(m => m.BusinessComponent)
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
  { path: '**', redirectTo: 'forside', pathMatch: 'full' }
];
