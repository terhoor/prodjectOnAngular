import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

import {User, Student, Teacher} from '../shared/user.model';

@Injectable()
export class UsersService {
  data: {};
  teachers: Teacher[] = [];
  students: Student[] = [];

  constructor(private httpService: HttpService) {
    this.httpService.getUsers().subscribe(data => {
      this.data = data;
      this.teachers.push(...data['teachers'].map((teacher) => {
        return new Teacher(teacher);
      }));
      this.students.push(...data['students'].map((students) => {
        return new Student(students);
      }));
    });

  }




}
