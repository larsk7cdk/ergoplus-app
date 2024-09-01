import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

  @Input()
  title: string = '';

  @Input()
  ngClasses: string = '';
}
