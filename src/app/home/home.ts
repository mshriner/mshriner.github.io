import { Component, inject, OnInit } from '@angular/core';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  appStateService = inject(AppStateService);

  ngOnInit(): void {
    this.appStateService.setPageTitle('Marshall Shriner - Home');
  }
}
