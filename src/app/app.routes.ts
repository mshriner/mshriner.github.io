import { Routes } from '@angular/router';
import { Home } from './home/home';
import { APP_ROUTES } from './models/constants';

export const routes: Routes = [
  { path: APP_ROUTES.HOME, component: Home },
  { path: '', redirectTo: `/${APP_ROUTES.HOME}`, pathMatch: 'full' },
  { path: '**', redirectTo: `/${APP_ROUTES.HOME}` },
];
