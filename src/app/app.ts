import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnInit, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterOutlet } from '@angular/router';
import { Debounce } from './decorators/debounce';
import { APP_ROUTES } from './models/constants';
import { AppStateService } from './services/app-state.service';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatRippleModule,
    MatCardModule,
    MatSidenavModule,
    MatDividerModule,
    MatInputModule,
    MatTooltipModule,
    RouterOutlet,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatChipsModule,
    MatSlideToggleModule,
    CommonModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  readonly appStateService = inject(AppStateService);
  private readonly router = inject(Router);

  private readonly MOBILE_BREAKPOINT_THRESHOLD = 768;

  readonly sidenav = viewChild.required(MatSidenav);

  ngOnInit(): void {
    this.checkViewport();
  }

  @HostListener('window:resize')
  @Debounce(250)
  onResize(): void {
    this.checkViewport();
  }

  private checkViewport(): void {
    const isDesktop = window.innerWidth > this.MOBILE_BREAKPOINT_THRESHOLD;
    this.appStateService.setIsDesktop(isDesktop);
  }

  public goToHome(): void {
    this.router.navigateByUrl(APP_ROUTES.HOME).then(() => {
      !this.appStateService.isDesktop() && this.sidenav().close();
    });
  }

  public goToResume(): void {
    this.router.navigateByUrl(APP_ROUTES.RESUME).then(() => {
      !this.appStateService.isDesktop() && this.sidenav().close();
    });
  }
}
