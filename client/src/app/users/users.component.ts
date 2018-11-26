import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';

import {User} from '../shared/models/user.model';
import { UsersService } from '../shared/services/users.service';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AddPopupComponent } from '../shared/components/popup/add/add.component';
import { DeletePopupComponent } from '../shared/components/popup/delete/delete.component';
import { EditPopupComponent } from '../shared/components/popup/edit/edit.component';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'lastName', 'firstName', 'patronymic', 'roles'];
  listUsers: MatTableDataSource<any>;
  users$;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    public dialog: MatDialog,
    private router: Router
    ) {

  }

  ngOnInit() {
    this.users$ = this.usersService.users.subscribe((dataUsers) => {
      this.listUsers = new MatTableDataSource(dataUsers);
      this.refresh(/* this.listUsers */);
    });

    if (this.accessEdit()) {
      this.displayedColumns.push('actions');
    }
  }

  ngOnDestroy() {

  }

  accessEdit() {
    return this.authService.isAdmin() || this.authService.isTeacher();
  }

  addNew() {
    this.dialog.open(AddPopupComponent, {
      width: '450px'
    });
  }

  deleteUser(user) {
    const dialogRef = this.dialog.open(DeletePopupComponent, {
      width: '450px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.usersService.userDelete(user.id);
        this.refreshTable(user);
      }
    });
  }

  startEdit(i, user) {
    const dialogRef = this.dialog.open(EditPopupComponent, {
      width: '450px',
      data: user
    });
    dialogRef.afterClosed().subscribe(editUser => {
      if (!!editUser) {
        this.usersService.changeUserDb(editUser);
        const idx = this.usersService.findIndexUser(this.listUsers.data, editUser.id);
        this.listUsers.data[idx] = editUser;
      }
    });

  }


  private refreshTable(user) {
    const idx = this.usersService.findIndexUser(this.listUsers.data, user.id);
    this.listUsers.data.splice(idx, 1);
    this.refresh(/* this.listUsers.data */);
  }

  private refresh(/* newData */) {
    // this.listUsers = new MatTableDataSource(newData);
    this.listUsers.paginator = this.paginator;
    this.listUsers.sort = this.sort;
  }

  showUser(id) {
    this.router.navigate(['/users', id]);
  }


}



