import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { PageComponent } from '../../shared/components/core/page/page.component';
import { HeaderService } from '../../shared/components/core/header/header.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import Player, { VimeoUrl } from '@vimeo/player';

@Component({
  selector: 'app-ergotherapy',
  imports: [PageComponent, RouterLink],
  templateUrl: './ergotherapy.component.html',
  styleUrl: './ergotherapy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErgotherapyComponent implements OnInit, AfterViewInit {
  protected activatedRoute = inject(ActivatedRoute);
  protected headerService = inject(HeaderService);

  private readonly videoUrl: VimeoUrl = 'https://vimeo.com/311435084';

  @ViewChild('playerContainer') playerContainer?: ElementRef<HTMLElement>;

  ngOnInit() {
    this.headerService.setTitle(this.activatedRoute.snapshot.data['title']);
  }

  ngAfterViewInit() {
    if (this.playerContainer) {
      new Player(this.playerContainer.nativeElement, {
        url: this.videoUrl,
        width: 280,
      });
    }
  }
}
