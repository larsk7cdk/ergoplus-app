import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-cookies',
  imports: [],
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CookiesComponent {
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) { }

  ngOnInit() { }
}
