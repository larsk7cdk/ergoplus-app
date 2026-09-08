import { inject, Injectable } from '@angular/core';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { ConsentLogService } from './consent-log.service';
import { CONSENT_POLICY_VERSION } from './consent-log.model';
import { GtmLoaderService } from './gtm-loader.service';

// Orchestrates ngx-cookieconsent, Google Consent Mode / GTM loading and the
// client-side consent log. Injecting this from AppComponent is what triggers
// NgcCookieConsentService's own initialisation at startup.
@Injectable({
  providedIn: 'root',
})
export class ConsentService {
  private readonly ccService = inject(NgcCookieConsentService);
  private readonly consentLogService = inject(ConsentLogService);
  private readonly gtmLoaderService = inject(GtmLoaderService);

  constructor() {
    this.ccService.initialized$.subscribe(() => {
      if (this.ccService.hasAnswered()) {
        this.gtmLoaderService.updateConsent(this.ccService.hasConsented());
      }
    });

    this.ccService.statusChange$.subscribe((event) => {
      const granted = event.status === 'allow';

      this.consentLogService.record({
        policyVersion: CONSENT_POLICY_VERSION,
        categories: { necessary: true, statistik: granted },
        decision: granted ? 'allow' : 'deny',
        timestamp: new Date().toISOString(),
        source: event.chosenBefore ? 'settings' : 'banner',
      });

      this.gtmLoaderService.updateConsent(granted);
    });
  }

  openPreferences() {
    return this.ccService.open();
  }
}
