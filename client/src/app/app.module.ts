import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpService } from './users/http.service';
import { UsersService } from './users/users.service';
import { UsersComponent } from './users/users.component';
import { HttpClientModule  } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
