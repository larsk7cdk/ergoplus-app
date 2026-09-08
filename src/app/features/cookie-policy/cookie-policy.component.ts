import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageComponent } from '../../shared/components/core/page/page.component';
import { HeaderService } from '../../shared/components/core/header/header.service';
import { ConsentService } from '../../shared/services/consent/consent.service';

@Component({
  selector: 'app-cookie-policy',
  imports: [PageComponent],
  templateUrl: './cookie-policy.component.html',
  styleUrl: './cookie-policy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CookiePolicyComponent implements OnInit {
  protected activatedRoute = inject(ActivatedRoute);
  protected headerService = inject(HeaderService);
  protected consentService = inject(ConsentService);

  ngOnInit() {
    this.headerService.setTitle(this.activatedRoute.snapshot.data['title']);
  }

  openCookieSettings() {
    this.consentService.openPreferences();
  }
}
