import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CookiesComponent } from '../cookies/cookies.component';

@Component({
  selector: 'app-footer',
  imports: [MatDialogModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly environment = environment;

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CookiesComponent, {
      width: '300px',
      data: { info: 'Ekstra data hvis nødvendigt' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Brugeren trykkede OK');
      } else {
        console.log('Dialog blev lukket uden OK');
      }
    });
  }
}
