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
  selector: 'app-business',
  imports: [PageComponent],
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessComponent implements OnInit {
  protected activatedRoute = inject(ActivatedRoute);
  protected headerService = inject(HeaderService);

  ngOnInit(): void {
    this.headerService.setTitle(this.activatedRoute.snapshot.data['title']);
  }
}
