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
import {
  NgcCookieConsentConfig,
  provideNgcCookieConsent,
} from 'ngx-cookieconsent';
import { environment } from '../environments/environment';

registerLocaleData(localeDa);

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: environment.cookieDomain,
  },
  position: 'bottom',
  theme: 'classic',
  palette: {
    popup: {
      background: '#72a88d',
      text: '#ffffff',
      link: '#ffffff',
    },
    button: {
      background: '#f45b07',
      text: '#000000',
      border: 'transparent',
    },
  },
  type: 'info',
  content: {
    message:
      'Denne hjemmeside bruger cookies for at sikre, at du får den bedste oplevelse på hjemmesiden.',
    dismiss: 'Tillad cookies',
    deny: 'Afvis cookies',
    link: '',
    href: 'https://cookiesandyou.com',
    policy: 'Cookie Policy',
  },
};

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
