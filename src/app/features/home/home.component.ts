import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { PageComponent } from '../../shared/components/core/page/page.component';
import Player from '@vimeo/player';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('playerContainer') playerContainer: ElementRef;
  url = 'https://vimeo.com/311435084';

  constructor() {
    this.playerContainer = new ElementRef(null);
  }

  ngAfterViewInit() {
    new Player(this.playerContainer.nativeElement, { url: this.url, width: 300 });
  }
}
