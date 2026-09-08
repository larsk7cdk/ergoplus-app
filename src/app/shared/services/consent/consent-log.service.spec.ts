import { TestBed } from '@angular/core/testing';

import { ConsentLogService } from './consent-log.service';
import { CONSENT_POLICY_VERSION } from './consent-log.model';

describe('ConsentLogService', () => {
  let service: ConsentLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsentLogService);
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should record and read back a consent log entry', () => {
    service.record({
      policyVersion: CONSENT_POLICY_VERSION,
      categories: { necessary: true, statistik: true },
      decision: 'allow',
      timestamp: '2026-01-01T00:00:00.000Z',
      source: 'banner',
    });

    expect(service.read()).toEqual({
      policyVersion: CONSENT_POLICY_VERSION,
      categories: { necessary: true, statistik: true },
      decision: 'allow',
      timestamp: '2026-01-01T00:00:00.000Z',
      source: 'banner',
    });
  });

  it('should return null when nothing has been recorded', () => {
    expect(service.read()).toBeNull();
  });
});
