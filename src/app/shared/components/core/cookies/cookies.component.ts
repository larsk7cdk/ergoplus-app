import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-cookies',
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatButton,
    MatDialogContent,
    MatDialogTitle,
    MatSlideToggle,
  ],
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CookiesComponent {}
