import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css']
})
export class ListGroupComponent implements OnInit, OnDestroy {
  groups: MatTableDataSource<string>;
  groups$: Subscription;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['groups'];
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.groups$ = this.usersService.groups.subscribe((value) => {
      this.groups = new MatTableDataSource(value);
      this.groups.sort = this.sort;
    });
  }

  ngOnDestroy() {
    // if (this.groups$) {
    //   this.groups$.unsubscribe();
    // }
  }

}
