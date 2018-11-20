import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import {User} from '../../shared/models/user.model';
import { UsersService } from '../../shared/services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit, OnDestroy {
  users: User[];
  displayedColumns: string[] = ['id', 'lastName', 'firstName', 'patronymic', 'roles'];
  users$;
  constructor(private usersService: UsersService) {

  }

  ngOnInit() {
    console.log('создание');
    this.users$ = this.usersService.users;
  }

  ngOnDestroy() {

  }




}
