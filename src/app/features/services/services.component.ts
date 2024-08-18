import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from '../../shared/components/core/header/header.service';
import { PageComponent } from '../../shared/components/core/page/page.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [PageComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent implements OnInit {
  protected activatedRoute = inject(ActivatedRoute);
  protected headerService = inject(HeaderService);

  ngOnInit(): void {
    this.headerService.setTitle(this.activatedRoute.snapshot.data['title']);
  }
}
