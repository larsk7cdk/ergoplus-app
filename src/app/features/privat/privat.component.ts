import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { PageComponent } from '../../shared/components/core/page/page.component';
import { HeaderService } from '../../shared/components/core/header/header.service';
import { ActivatedRoute } from '@angular/router';
import { CardComponent } from '../../shared/components/presentational/card/card.component';
import { SITUATIONS } from './situation.model';

@Component({
  selector: 'app-privat',
  imports: [PageComponent, CardComponent],
  templateUrl: './privat.component.html',
  styleUrl: './privat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivatComponent implements OnInit {
  protected activatedRoute = inject(ActivatedRoute);
  protected headerService = inject(HeaderService);
  protected readonly situations = SITUATIONS;

  ngOnInit(): void {
    this.headerService.setTitle(this.activatedRoute.snapshot.data['title']);
  }
}
