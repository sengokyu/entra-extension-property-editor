import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AutoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';
import { CallbackComponent } from './callback/callback.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AutoLoginPartialRoutesGuard],
  },
  {
    path: 'callback',
    component: CallbackComponent,
  },
  { path: 'unauthorized', component: UnauthorizedComponent },
];
