import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import localeDa from '@angular/common/locales/da';
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';

registerLocaleData(localeDa);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withViewTransitions()),
    provideClientHydration(),
    { provide: LOCALE_ID, useValue: 'da-DK' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }]
};
