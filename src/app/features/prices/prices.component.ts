import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { PageComponent } from '../../shared/components/core/page/page.component';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from '../../shared/components/core/header/header.service';
import { PriceCardComponent } from '../../shared/components/presentational/price-card/price-card.component';

@Component({
  selector: 'app-prices',
  imports: [PageComponent, PriceCardComponent],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricesComponent implements OnInit {
  protected activatedRoute = inject(ActivatedRoute);
  protected headerService = inject(HeaderService);

  ngOnInit(): void {
    this.headerService.setTitle(this.activatedRoute.snapshot.data['title']);
  }
}
