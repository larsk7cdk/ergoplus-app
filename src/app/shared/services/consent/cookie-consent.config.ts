import { NgcCookieConsentConfig } from 'ngx-cookieconsent';
import { environment } from '../../../../environments/environment';

// Brand palette mirrors src/assets/themes/_app-variables.scss ($app-green, $app-orange).
// SCSS variables can't be imported here, so the hex values must be kept in sync manually.
export const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: environment.cookieDomain,
    expiryDays: 365,
  },
  position: 'bottom',
  theme: 'classic',
  type: 'opt-in',
  // The underlying `cookieconsent` library forces this to true for any
  // non-'info' type regardless of what's set here - kept explicit and true
  // so the floating "manage consent" tab (labelled via content.policy below)
  // is a deliberate, understood part of the design, not an accident.
  revokable: true,
  palette: {
    popup: {
      background: '#72a88d',
      text: '#ffffff',
      link: '#ffffff',
    },
    button: {
      background: '#f45b07',
      text: '#ffffff',
      border: 'transparent',
    },
    // Applies to the deny button (rendered first in the opt-in template).
    // Without this, the library's default theme renders it as a transparent
    // ghost button, making "allow" look like the only real button.
    // See styles.scss for the matching hover/focus override.
    highlight: {
      background: '#ffffff',
      text: '#17221c', // matches $app-green-900 in _app-variables.scss
      border: 'transparent',
    },
  },
  content: {
    header: 'Vi bruger cookies',
    message:
      'ErgoPlus bruger nødvendige cookies, som altid er aktive, for at hjemmesiden kan fungere. Med dit samtykke bruger vi derudover statistik-cookies til at forbedre hjemmesiden.',
    allow: 'Tillad statistik',
    deny: 'Afvis statistik',
    link: 'Læs mere i vores cookiepolitik',
    href: '/cookiepolitik',
    // Also labels the floating revoke tab - "Administrér cookies" makes it
    // clear that clicking it lets you change your choice, not just read a policy.
    policy: 'Administrér cookies',
  },
};
