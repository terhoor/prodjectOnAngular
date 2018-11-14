import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpService } from './users/http.service';
import { UsersService } from './users/users.service';
import { HttpClientModule  } from '@angular/common/http';
import { MaterialModule } from './material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import { PersonalAreaComponent } from './users/personal-area/personal-area.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { ListGroupComponent } from './users/list-group/list-group.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PersonalAreaComponent,
    ListUsersComponent,
    ListGroupComponent,
    UserDetailsComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [HttpService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
