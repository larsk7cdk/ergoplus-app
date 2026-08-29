import {
  Component,
  inject,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { PageComponent } from '../../shared/components/core/page/page.component';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from '../../shared/components/core/header/header.service';
import { CardComponent } from '../../shared/components/presentational/card/card.component';
import { PriceCardComponent } from '../../shared/components/presentational/price-card/price-card.component';

@Component({
  selector: 'app-prices',
  imports: [PageComponent, CardComponent, PriceCardComponent],
  templateUrl: './prices.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './prices.component.scss',
})
export class PricesComponent implements OnInit {
  protected activatedRoute = inject(ActivatedRoute);
  protected headerService = inject(HeaderService);

  ngOnInit(): void {
    this.headerService.setTitle(this.activatedRoute.snapshot.data['title']);
  }
}
