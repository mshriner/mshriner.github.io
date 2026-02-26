import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatCardModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  appStateService = inject(AppStateService);

  name = 'Marshall G. Shriner';
  title = 'Software Engineer';
  location = 'Omaha, Nebraska';
  phone = '(217)-372-5444';
  email = 'marshriner@gmail.com';

  ngOnInit(): void {
    this.appStateService.setPageTitle('Marshall Shriner - Home');
  }
}
