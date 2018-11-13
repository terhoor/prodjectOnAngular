import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpService } from './users/http.service';
import { UsersService } from './users/users.service';
import { UsersComponent } from './users/users.component';
import { HttpClientModule  } from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component';
import { PersonalAreaComponent } from './users/personal-area/personal-area.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { ListGroupComponent } from './users/list-group/list-group.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginPageComponent,
    PersonalAreaComponent,
    ListUsersComponent,
    ListGroupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
