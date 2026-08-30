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
import { NgClass, NgOptimizedImage } from '@angular/common';
import { PageComponent } from '../../shared/components/core/page/page.component';
import { HeaderService } from '../../shared/components/core/header/header.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SITUATIONS } from './situation.model';

@Component({
  selector: 'app-private',
  imports: [PageComponent, NgClass, NgOptimizedImage, RouterLink],
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateComponent implements OnInit, AfterViewInit, OnDestroy {
  protected activatedRoute = inject(ActivatedRoute);
  protected headerService = inject(HeaderService);
  protected readonly situations = SITUATIONS;

  @ViewChild('featureImage') featureImage?: ElementRef<HTMLElement>;

  private featureImageObserver?: IntersectionObserver;

  ngOnInit(): void {
    this.headerService.setTitle(this.activatedRoute.snapshot.data['title']);
  }

  ngAfterViewInit(): void {
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

  ngOnDestroy(): void {
    this.featureImageObserver?.disconnect();
  }
}
