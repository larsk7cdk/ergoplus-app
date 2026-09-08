import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { CookiePolicyComponent } from './cookie-policy.component';
import { ConsentService } from '../../shared/services/consent/consent.service';

describe('CookiePolicyComponent', () => {
  let component: CookiePolicyComponent;
  let fixture: ComponentFixture<CookiePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookiePolicyComponent],
      providers: [
        provideRouter([]),
        { provide: ConsentService, useValue: jasmine.createSpyObj<ConsentService>('ConsentService', ['openPreferences']) },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookiePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
