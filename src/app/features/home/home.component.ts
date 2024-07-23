import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageComponent } from '../../shared/components/core/page/page.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageComponent, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
