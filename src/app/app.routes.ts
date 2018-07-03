import { Routes } from '@angular/router';
import { LandingComponent } from '../pages/landing/landing.component';

export const appRoutes: Routes = [
    { path: '',  redirectTo: 'landing', pathMatch: 'full'},
    { path: 'landing', component: LandingComponent}
  ];
