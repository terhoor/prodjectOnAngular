import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PersonalAreaComponent } from './users/personal-area/personal-area.component';

const appRoutes: Routes = [
  {path: 'list-users', component: ListUsersComponent},
  {path: 'personal-area', component: PersonalAreaComponent},
  {path: '', component: HomePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}