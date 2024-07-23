import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive, NgOptimizedImage],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  navbarOpen = false;

  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

  closeNavBar(): void {
    this.navbarOpen = false;
  }
}
