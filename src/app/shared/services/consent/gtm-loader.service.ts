import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

// Loads Google Tag Manager only once analytics consent is granted, and keeps
// Google Consent Mode v2 in sync with the user's choice on every change.
// Note: a container already loaded can't be unloaded again - opting out later
// stops future analytics signals via consent mode, it doesn't remove gtm.js.
@Injectable({
  providedIn: 'root',
})
export class GtmLoaderService {
  private readonly document = inject(DOCUMENT);
  private loaded = false;

  updateConsent(granted: boolean) {
    const consentWindow = this.document.defaultView;
    if (!consentWindow) {
      return;
    }

    consentWindow.dataLayer = consentWindow.dataLayer || [];
    consentWindow.dataLayer.push([
      'consent',
      'update',
      { analytics_storage: granted ? 'granted' : 'denied' },
    ]);

    if (granted) {
      this.loadGtmScript(consentWindow);
    }
  }

  private loadGtmScript(consentWindow: Window) {
    if (this.loaded) {
      return;
    }
    this.loaded = true;

    consentWindow.dataLayer = consentWindow.dataLayer || [];
    consentWindow.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

    const script = this.document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${environment.gtmId}`;
    this.document.head.appendChild(script);
  }
}
