import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/core/header/header.component';
import { FooterComponent } from './shared/components/core/footer/footer.component';
import { ConsentService } from './shared/services/consent/consent.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // Injecting this triggers NgcCookieConsentService's own init() at startup.
  protected consentService = inject(ConsentService);
}
