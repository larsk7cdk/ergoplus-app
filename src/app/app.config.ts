import {
  ApplicationConfig,
  LOCALE_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  withInMemoryScrolling,
  withViewTransitions,
} from '@angular/router';
import { routes } from './app.routes';

import localeDa from '@angular/common/locales/da';
import {
  LocationStrategy,
  PathLocationStrategy,
  registerLocaleData,
} from '@angular/common';
import { provideNgcCookieConsent } from 'ngx-cookieconsent';
import { cookieConfig } from './shared/services/consent/cookie-consent.config';

registerLocaleData(localeDa);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withViewTransitions(),
      withInMemoryScrolling({ scrollPositionRestoration: 'top' }),
    ),
    provideNgcCookieConsent(cookieConfig),
    { provide: LOCALE_ID, useValue: 'da-DK' },
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
};
