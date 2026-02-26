import { Routes } from '@angular/router';

import { APP_ROUTES } from './models/constants';

export const routes: Routes = [
  {
    path: APP_ROUTES.HOME,
    loadComponent: () => import('./components/home/home').then((m) => m.Home),
  },
  {
    path: APP_ROUTES.RESUME,
    loadComponent: () => import('./components/resume/resume-page').then((m) => m.ResumePage),
  },
  { path: '', redirectTo: `/${APP_ROUTES.HOME}`, pathMatch: 'full' },
  { path: '**', redirectTo: `/${APP_ROUTES.HOME}` },
];
