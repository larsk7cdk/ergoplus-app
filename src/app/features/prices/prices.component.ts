import { Component } from '@angular/core';
import { PageComponent } from '../../shared/components/core/page/page.component';
import { NgClass, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [PageComponent, NgTemplateOutlet, NgClass],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.scss'
})
export class PricesComponent {

}
