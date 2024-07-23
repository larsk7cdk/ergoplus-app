import { Component } from '@angular/core';
import { PageComponent } from '../../shared/components/core/page/page.component';

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [
    PageComponent
  ],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.scss'
})
export class PricesComponent {

}
