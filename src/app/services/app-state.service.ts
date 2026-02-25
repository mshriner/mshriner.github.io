import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  public readonly pageTitle: WritableSignal<string> = signal('');

  constructor() {
    document.body.classList.add('system-preference-theme');
  }

  public setPageTitle(newTitle: string): void {
    this.pageTitle.set(newTitle);
  }
}
