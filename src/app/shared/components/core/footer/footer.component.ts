import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConsentService } from '../../../services/consent/consent.service';

@Component({
    selector: 'app-footer',
    imports: [NgOptimizedImage, RouterLink],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
    protected consentService = inject(ConsentService);

    openCookieSettings() {
        this.consentService.openPreferences();
    }
}
