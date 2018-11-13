import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

import {User, Student, Teacher} from '../shared/user.model';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  teachers: Teacher[];
  students: Student[];

  constructor(private usersService: UsersService) {
    this.teachers = this.usersService.teachers;
    this.students = this.usersService.students;

  }

  ngOnInit() {
  }

  showStudents() {
    console.log(this.students);
  }

  showTeachers() {
    console.log(this.teachers);
  }
}
