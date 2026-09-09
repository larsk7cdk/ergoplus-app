export type ConsentLogEntry = {
  policyVersion: number;
  categories: {
    necessary: true;
    statistik: boolean;
  };
  decision: 'allow' | 'deny';
  timestamp: string;
  source: 'banner' | 'settings';
};

// Bump when the cookie categories or banner copy change materially.
export const CONSENT_POLICY_VERSION = 1;
