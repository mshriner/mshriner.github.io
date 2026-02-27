import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { ResumePage } from './components/resume/resume-page';
import { APP_ROUTES } from './models/constants';

export const routes: Routes = [
  {
    path: APP_ROUTES.HOME,
    component: Home,
  },
  {
    path: APP_ROUTES.RESUME,
    component: ResumePage,
  },
  { path: '', redirectTo: `/${APP_ROUTES.HOME}`, pathMatch: 'full' },
  { path: '**', redirectTo: `/${APP_ROUTES.HOME}` },
];
