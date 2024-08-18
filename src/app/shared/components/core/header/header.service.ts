import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  public title: string = '';

  setTitle(title: string) {
    this.title = title;
  }
}
