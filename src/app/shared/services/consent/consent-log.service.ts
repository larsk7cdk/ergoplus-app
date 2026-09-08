import { Injectable } from '@angular/core';
import { ConsentLogEntry } from './consent-log.model';

const STORAGE_KEY = 'ergoplus_consent_log';

@Injectable({
  providedIn: 'root',
})
export class ConsentLogService {
  record(entry: ConsentLogEntry) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entry));
    } catch {
      // localStorage can be unavailable (private browsing, disabled storage) - logging is best-effort.
    }
  }

  read(): ConsentLogEntry | null {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? (JSON.parse(stored) as ConsentLogEntry) : null;
    } catch {
      return null;
    }
  }
}
