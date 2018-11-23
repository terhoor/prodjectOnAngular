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
import { AdminPageComponent } from './admin-page/admin-page.component';
import { PopupComponent } from './shared/components/popup/popup.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';





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
    AdminPageComponent,
    PopupComponent
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
    PopupComponent
],
  providers: [
    UsersService,
    AuthService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
