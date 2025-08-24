import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/core/header/header.component';
import { FooterComponent } from './shared/components/core/footer/footer.component';
import { NgcCookieConsentService } from 'ngx-cookieconsent';


@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private ccService: NgcCookieConsentService) {
  }
}
