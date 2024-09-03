import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit
} from '@angular/core';
import { PageComponent } from '../../shared/components/core/page/page.component';
import { HeaderService } from '../../shared/components/core/header/header.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CardComponent } from '../../shared/components/presentational/card/card.component';

@Component({
  selector: 'app-ergotherapy',
  standalone: true,
  imports: [PageComponent, RouterLink, CardComponent],
  templateUrl: './ergotherapy.component.html',
  styleUrl: './ergotherapy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErgotherapyComponent implements OnInit {
  protected activatedRoute = inject(ActivatedRoute);
  protected headerService = inject(HeaderService);


  ngOnInit(): void {
    this.headerService.setTitle(this.activatedRoute.snapshot.data['title']);
  }
}
