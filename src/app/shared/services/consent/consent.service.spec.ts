import { TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { NgcCookieConsentService, NgcStatusChangeEvent } from 'ngx-cookieconsent';

import { ConsentService } from './consent.service';
import { ConsentLogService } from './consent-log.service';
import { GtmLoaderService } from './gtm-loader.service';

describe('ConsentService', () => {
  let service: ConsentService;
  let initialized$: Subject<void>;
  let statusChange$: Subject<NgcStatusChangeEvent>;
  let ccServiceSpy: jasmine.SpyObj<NgcCookieConsentService>;
  let consentLogServiceSpy: jasmine.SpyObj<ConsentLogService>;
  let gtmLoaderServiceSpy: jasmine.SpyObj<GtmLoaderService>;

  beforeEach(() => {
    initialized$ = new Subject<void>();
    statusChange$ = new Subject<NgcStatusChangeEvent>();

    ccServiceSpy = jasmine.createSpyObj<NgcCookieConsentService>(
      'NgcCookieConsentService',
      ['open', 'hasAnswered', 'hasConsented'],
      { initialized$, statusChange$ },
    );
    consentLogServiceSpy = jasmine.createSpyObj<ConsentLogService>('ConsentLogService', ['record', 'read']);
    gtmLoaderServiceSpy = jasmine.createSpyObj<GtmLoaderService>('GtmLoaderService', ['updateConsent']);

    TestBed.configureTestingModule({
      providers: [
        { provide: NgcCookieConsentService, useValue: ccServiceSpy },
        { provide: ConsentLogService, useValue: consentLogServiceSpy },
        { provide: GtmLoaderService, useValue: gtmLoaderServiceSpy },
      ],
    });
    service = TestBed.inject(ConsentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should sync gtm consent from a prior answer once initialized', () => {
    ccServiceSpy.hasAnswered.and.returnValue(true);
    ccServiceSpy.hasConsented.and.returnValue(true);

    initialized$.next();

    expect(gtmLoaderServiceSpy.updateConsent).toHaveBeenCalledWith(true);
  });

  it('should not touch gtm consent on init when the user has not answered yet', () => {
    ccServiceSpy.hasAnswered.and.returnValue(false);

    initialized$.next();

    expect(gtmLoaderServiceSpy.updateConsent).not.toHaveBeenCalled();
  });

  it('should log the decision and update gtm consent on status change from the banner', () => {
    statusChange$.next({ status: 'allow', chosenBefore: false });

    expect(consentLogServiceSpy.record).toHaveBeenCalledWith(
      jasmine.objectContaining({
        decision: 'allow',
        categories: { necessary: true, statistik: true },
        source: 'banner',
      }),
    );
    expect(gtmLoaderServiceSpy.updateConsent).toHaveBeenCalledWith(true);
  });

  it('should log the decision as coming from settings when changed after the initial choice', () => {
    statusChange$.next({ status: 'deny', chosenBefore: true });

    expect(consentLogServiceSpy.record).toHaveBeenCalledWith(
      jasmine.objectContaining({
        decision: 'deny',
        categories: { necessary: true, statistik: false },
        source: 'settings',
      }),
    );
    expect(gtmLoaderServiceSpy.updateConsent).toHaveBeenCalledWith(false);
  });

  it('should delegate openPreferences to the underlying service', () => {
    service.openPreferences();

    expect(ccServiceSpy.open).toHaveBeenCalled();
  });
});
