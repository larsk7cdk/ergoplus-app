import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  protected headerService = inject(HeaderService);
}
