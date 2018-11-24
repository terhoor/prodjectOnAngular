import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import {User} from '../shared/models/user.model';
import { UsersService } from '../shared/services/users.service';
import { MatDialog } from '@angular/material';
import { AddPopupComponent } from '../shared/components/popup/add/add.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[];
  displayedColumns: string[] = ['id', 'lastName', 'firstName', 'patronymic', 'roles', 'actions'];
  users$;
  constructor(
    private usersService: UsersService,
    public dialog: MatDialog
    ) {

  }

  ngOnInit() {
    console.log('создание');
    this.users$ = this.usersService.users;
    
  }

  ngOnDestroy() {

  }

  startEdit(i, user) {
    console.log(i, user);
  }

  addNew() {
    this.dialog.open(AddPopupComponent, {
      width: '450px'
    });

  }


  // openDialog() {
  //   this.dialog.open(PopupComponent, {
  //     width: '450px',
  //     data: this.user
  //   });
  // }

}
