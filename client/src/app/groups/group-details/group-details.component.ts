import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../shared/services/users.service';
import { Student } from '../../shared/models/student.model';
import { Observable } from 'rxjs';
import { MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  groupUsers$: Observable<Student[]>;
  groupName: string;
  groupUsers: MatTableDataSource<Student>;
  displayedColumns: string[] = ['id', 'lastName', 'firstName', 'patronymic'];

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getGroup();
  }

  getGroup() {
    const name = this.route.snapshot.paramMap.get('name');
    this.groupName = name;
    this.usersService.getByGroup(name).subscribe(dataStud => {
      this.groupUsers = new MatTableDataSource(dataStud);
      this.groupUsers.sort = this.sort;
    });
  }
}
