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
    path: 'services',
    title: 'Ydelser',
    data: { title: 'Ydelser' },
    loadComponent: () => import('./features/services/services.component')
      .then(m => m.ServicesComponent)
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
