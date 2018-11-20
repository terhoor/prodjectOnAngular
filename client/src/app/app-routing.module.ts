import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { ListGroupComponent } from './groups/list-group/list-group.component';
import { GroupDetailsComponent } from './groups/group-details/group-details.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
  {path: '', component: AuthLayoutComponent, children: [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginPageComponent},
  ]},
  {path: '', component: SiteLayoutComponent, canActivate: [AuthGuard], children: [
    {path: 'home', component: HomePageComponent},
    {path: 'users-list', component: ListUsersComponent},
    {path: 'detail-user/:id', component: UserDetailsComponent},
    {path: 'users-group', component: ListGroupComponent},
    {path: 'details-group/:name', component: GroupDetailsComponent},
    {path: 'admin', component: AdminPageComponent},
  ]},
  {path: '**', redirectTo: '/login'}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
