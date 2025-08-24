import { Component, input } from '@angular/core';

@Component({
    selector: 'app-price-card',
    imports: [],
    templateUrl: './price-card.component.html',
    styleUrl: './price-card.component.scss'
})
export class PriceCardComponent {
  title = input('');

  price = input();

  features = input<string[]>();
}
