import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-price-card',
  imports: [],
  templateUrl: './price-card.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './price-card.component.scss',
})
export class PriceCardComponent {
  title = input('');

  price = input();

  features = input<string[]>();
}
