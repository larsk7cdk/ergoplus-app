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
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, AfterViewInit {
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
