import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, ElementRef,
  inject,
  OnInit, ViewChild
} from '@angular/core';
import { PageComponent } from '../../shared/components/core/page/page.component';
import { HeaderService } from '../../shared/components/core/header/header.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CardComponent } from '../../shared/components/presentational/card/card.component';
import Player from '@vimeo/player';

@Component({
  selector: 'app-ergotherapy',
  standalone: true,
  imports: [PageComponent, RouterLink, CardComponent],
  templateUrl: './ergotherapy.component.html',
  styleUrl: './ergotherapy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErgotherapyComponent implements OnInit, AfterViewInit {
  @ViewChild('playerContainer') playerContainer: ElementRef;
  url = 'https://vimeo.com/311435084';

  protected activatedRoute = inject(ActivatedRoute);
  protected headerService = inject(HeaderService);

  constructor() {
    this.playerContainer = new ElementRef(null);
  }

  ngOnInit(): void {
    this.headerService.setTitle(this.activatedRoute.snapshot.data['title']);
  }

  ngAfterViewInit() {
    new Player(this.playerContainer.nativeElement, { url: this.url, width: 280 });
  }
}
