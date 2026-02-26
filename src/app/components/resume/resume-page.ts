import { Component, inject, OnInit } from '@angular/core';
import { AppStateService } from '../../services/app-state.service';
import { ResumeComponent } from './resume';

@Component({
  selector: 'app-resume-page',
  imports: [ResumeComponent],
  template: '<app-resume />',
})
export class ResumePage implements OnInit {
  appStateService = inject(AppStateService);

  ngOnInit(): void {
    this.appStateService.setPageTitle('Marshall Shriner - Resume');
  }
}
