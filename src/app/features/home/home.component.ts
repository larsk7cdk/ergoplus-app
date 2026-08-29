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
import { NgOptimizedImage } from '@angular/common';
import { PageComponent } from '../../shared/components/core/page/page.component';
import { HeaderService } from '../../shared/components/core/header/header.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AUDIENCE_CARDS } from './audience.model';

@Component({
  selector: 'app-home',
  imports: [PageComponent, RouterLink, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  protected activatedRoute = inject(ActivatedRoute);
  protected headerService = inject(HeaderService);
  protected readonly audienceCards = AUDIENCE_CARDS;

  @ViewChild('bioImage') bioImage?: ElementRef<HTMLElement>;

  private bioImageObserver?: IntersectionObserver;

  ngOnInit(): void {
    this.headerService.setTitle(this.activatedRoute.snapshot.data['title']);
  }

  ngAfterViewInit(): void {
    const element = this.bioImage?.nativeElement;

    if (!element) {
      return;
    }

    this.bioImageObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          element.classList.add('in-view');
          this.bioImageObserver?.disconnect();
        }
      }
    }, { threshold: 0.3 });

    this.bioImageObserver.observe(element);
  }

  ngOnDestroy(): void {
    this.bioImageObserver?.disconnect();
  }
}
