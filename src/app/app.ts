import { Component, HostListener, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppStateService } from './services/app-state.service';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatRippleModule,
    MatSidenavModule,
    MatDividerModule,
    MatInputModule,
    RouterOutlet,
    RouterLink,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatChipsModule,
    MatSlideToggleModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  appStateService = inject(AppStateService);

  private readonly MOBILE_BREAKPOINT_THRESHOLD = 768;

  ngOnInit(): void {
    this.checkViewport();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkViewport();
  }

  private checkViewport(): void {
    const isDesktop = window.innerWidth > this.MOBILE_BREAKPOINT_THRESHOLD;
    this.appStateService.setIsDesktop(isDesktop);
  }
}
