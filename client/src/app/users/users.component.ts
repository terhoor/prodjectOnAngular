import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';

import {User} from '../shared/models/user.model';
import { UsersService } from '../shared/services/users.service';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AddPopupComponent } from '../shared/components/popup/add/add.component';
import { DeletePopupComponent } from '../shared/components/popup/delete/delete.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'lastName', 'firstName', 'patronymic', 'roles', 'actions'];
  listUsers: MatTableDataSource<any>;
  users$;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private usersService: UsersService,
    public dialog: MatDialog
    ) {

  }

  ngOnInit() {
    this.users$ = this.usersService.users.subscribe((dataUsers) => {
      this.listUsers = new MatTableDataSource(dataUsers);
      this.listUsers.paginator = this.paginator;
      this.listUsers.sort = this.sort;
      console.log(this.listUsers);
    });
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

  deleteUser(user) {
    const dialogRef = this.dialog.open(DeletePopupComponent, {
      width: '350px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.usersService.userDelete(user.id);
        this.refreshTable(user);
      }
    });
  }


  private refreshTable(user) {
    // this.paginator._changePageSize(this.paginator.pageSize);
    const idx = this.usersService.findIndexUser(this.listUsers.data, user.id);
    this.listUsers.data.splice(idx, 1);
    this.listUsers = new MatTableDataSource<Element>(this.listUsers.data);
    
  }


  }


  // openDialog() {
  //   this.dialog.open(PopupComponent, {
  //     width: '450px',
  //     data: this.user
  //   });
  // }


