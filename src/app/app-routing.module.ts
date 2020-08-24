import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../pages/home';
import { AuthGuard } from '../helpers';

const accountModule = () =>
  import('../pages/account/account.module').then((x) => x.AccountModule);
const usersModule = () =>
  import('../pages/users/users.module').then((x) => x.UsersModule);
const environmentModule = () =>
  import('../pages/environment/environment.module').then((x) => x.EnvironmentModule);
const designModule = () =>
  import('../pages/design/design.module').then((x) => x.DesignModule);

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'environment', loadChildren: environmentModule, canActivate: [AuthGuard] },
  { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: accountModule },
  { path: 'design', loadChildren: designModule, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
