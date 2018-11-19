import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from '../../shared/services/users.service';
import { Student } from '../../shared/user.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {

  groupUsers$: Observable<Student[]>;
  groupName: string;
  displayedColumns: string[] = ['id', 'lastName', 'firstName', 'patronymic'];

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
    this.getGroup();
  }

  getGroup() {
    const name = this.route.snapshot.paramMap.get('name');
    this.groupName = name;
    this.groupUsers$ = this.usersService.getByGroup(name);
  }
}
