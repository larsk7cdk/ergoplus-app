import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild
} from '@angular/core';
import { PageComponent } from '../../shared/components/core/page/page.component';
import Player from '@vimeo/player';
import { HeaderService } from '../../shared/components/core/header/header.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CardComponent } from '../../shared/components/presentational/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageComponent, RouterLink, CardComponent],
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home2Component implements OnInit, AfterViewInit {
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
    new Player(this.playerContainer.nativeElement, { url: this.url, width: 300 });
  }
}