import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import {User} from '../../shared/user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit, OnDestroy {
  users: User[] = [];
  dataSource;
  displayedColumns: string[] = ['id', 'lastName', 'firstName', 'patronymic', 'roles'];
  data;
  constructor(private usersService: UsersService) {

  }

  ngOnInit() {
    console.log('создание');
    this.data = this.usersService.users.subscribe((value) => {
      this.users = value;
    });
    // this.users = this.usersService.users.value;
  }

  ngOnDestroy() {
    // this.data.unsubscribe();

  }




}
