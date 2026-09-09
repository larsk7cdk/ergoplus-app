import { TestBed } from '@angular/core/testing';

import { GtmLoaderService } from './gtm-loader.service';

describe('GtmLoaderService', () => {
  let service: GtmLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GtmLoaderService);
    window.dataLayer = [];
  });

  afterEach(() => {
    document.querySelectorAll('script[src*="googletagmanager.com/gtm.js"]').forEach((el) => el.remove());
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should push a consent update without injecting the gtm script when denied', () => {
    service.updateConsent(false);

    expect(window.dataLayer).toContain(['consent', 'update', { analytics_storage: 'denied' }]);
    expect(document.querySelector('script[src*="googletagmanager.com/gtm.js"]')).toBeNull();
  });

  it('should push a consent update and inject the gtm script once when granted', () => {
    service.updateConsent(true);
    service.updateConsent(true);

    expect(window.dataLayer).toContain(['consent', 'update', { analytics_storage: 'granted' }]);
    expect(document.querySelectorAll('script[src*="googletagmanager.com/gtm.js"]').length).toBe(1);
  });
});
