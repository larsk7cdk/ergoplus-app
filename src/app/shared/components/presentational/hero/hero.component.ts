import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
}
