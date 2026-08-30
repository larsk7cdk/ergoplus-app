import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.title]': 'null',
  },
})
export class HeroComponent {
  @Input({ required: true })
  title: string = '';

  @Input({ required: true })
  lead: string = '';

  @Input()
  ctaText?: string;

  @Input()
  ctaLink?: string;

  @Input()
  icon: string = 'bi-person-circle';

  @Input()
  placeholderText: string = 'Foto kommer snart';

  @Input()
  imageSrc?: string;

  @Input()
  imageAlt: string = '';

  @Input()
  imageWidth: number = 560;

  @Input()
  imageHeight: number = 725;
}
