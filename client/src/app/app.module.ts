import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersService } from './shared/services/users.service';
import { HttpClientModule  } from '@angular/common/http';
import { MaterialModule } from './material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import { UsersComponent } from './users/users.component';
import { ListGroupComponent } from './groups/list-group/list-group.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { AuthService } from './shared/services/auth.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GroupDetailsComponent } from './groups/group-details/group-details.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { ButtonsComponent } from './shared/components/buttons-list/buttons.component';
import { AddPopupComponent } from './shared/components/popup/add/add.component';
import { DeletePopupComponent } from './shared/components/popup/delete/delete.component';
import { EditPopupComponent } from './shared/components/popup/edit/edit.component';
import { ChangeGradeComponent } from './shared/components/popup/change-grade/change-grade.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    UsersComponent,
    ListGroupComponent,
    UserDetailsComponent,
    HomePageComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    GroupDetailsComponent,
    LoaderComponent,
    ButtonsComponent,
    AddPopupComponent,
    DeletePopupComponent,
    EditPopupComponent,
    ChangeGradeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  entryComponents: [
    AddPopupComponent,
    DeletePopupComponent,
    EditPopupComponent,
    ChangeGradeComponent
],
  providers: [
    UsersService,
    AuthService,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
