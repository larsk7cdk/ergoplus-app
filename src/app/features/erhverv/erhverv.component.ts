import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { PageComponent } from '../../shared/components/core/page/page.component';
import { HeaderService } from '../../shared/components/core/header/header.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-erhverv',
  imports: [PageComponent],
  templateUrl: './erhverv.component.html',
  styleUrl: './erhverv.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErhvervComponent implements OnInit {
  protected activatedRoute = inject(ActivatedRoute);
  protected headerService = inject(HeaderService);

  ngOnInit(): void {
    this.headerService.setTitle(this.activatedRoute.snapshot.data['title']);
  }
}
