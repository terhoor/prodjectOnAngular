import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PersonalAreaComponent } from './users/personal-area/personal-area.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';

const appRoutes: Routes = [
  {path: 'list-users', component: ListUsersComponent},
  {path: 'list-users/:id', component: UserDetailsComponent},
  {path: 'personal-area', component: PersonalAreaComponent},
  {path: '', component: HomePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}