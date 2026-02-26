import { computed, Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  public readonly pageTitle: WritableSignal<string> = signal('');
  public readonly sidenavOpen: WritableSignal<boolean> = signal(false);
  public readonly isDesktop: WritableSignal<boolean> = signal(window.innerWidth > 768);
  public readonly sidenavMode = computed<'side' | 'over'>(() =>
    this.isDesktop() ? 'side' : 'over',
  );

  constructor() {
    document.body.classList.add('system-preference-theme');
  }

  public setPageTitle(newTitle: string): void {
    this.pageTitle.set(newTitle);
  }

  public setSidenavOpen(open: boolean): void {
    this.sidenavOpen.set(open);
  }

  public setIsDesktop(desktop: boolean): void {
    this.isDesktop.set(desktop);
    // Close sidenav when switching to mobile
    if (!desktop) {
      this.sidenavOpen.set(false);
    }
  }
}
