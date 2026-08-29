import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
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
export class ErgotherapyComponent implements OnInit, AfterViewInit, OnDestroy {
  protected activatedRoute = inject(ActivatedRoute);
  protected headerService = inject(HeaderService);

  private readonly videoUrl: VimeoUrl = 'https://vimeo.com/311435084';

  @ViewChild('playerContainer') playerContainer?: ElementRef<HTMLElement>;
  @ViewChild('featureImage') featureImage?: ElementRef<HTMLElement>;

  private featureImageObserver?: IntersectionObserver;

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

    const element = this.featureImage?.nativeElement;

    if (!element) {
      return;
    }

    this.featureImageObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          element.classList.add('in-view');
          this.featureImageObserver?.disconnect();
        }
      }
    }, { threshold: 0.3 });

    this.featureImageObserver.observe(element);
  }

  ngOnDestroy() {
    this.featureImageObserver?.disconnect();
  }
}
