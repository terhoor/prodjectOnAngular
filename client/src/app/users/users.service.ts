import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

import {User, Student, Teacher} from '../shared/user.model';
import { ReplaySubject  } from 'rxjs';


@Injectable()
export class UsersService {
  data: {};
  teachers: ReplaySubject<Teacher[]>;
  students: ReplaySubject<Student[]>;
  users: ReplaySubject<User[]>;

  constructor(private httpService: HttpService) {
    this.teachers = new ReplaySubject();
    this.students = new ReplaySubject();
    this.users = new ReplaySubject();

    this.httpService.getUsers().subscribe(data => {
      this.data = data;
      const users = [];
      
      const teachers = data['teachers'].map((teacher) => {
        return new Teacher(teacher);
      });

      const students = data['students'].map((student) => {
        return new Student(student);
      });

      users.push(...teachers);
      users.push(...students);
      this.teachers.next(teachers);
      this.students.next(students);
      this.users.next(users);

      // this.teachers.push(...data['teachers'].map((teacher) => {
      //   return new Teacher(teacher);
      // }));
      // this.students.push(...data['students'].map((students) => {
      //   return new Student(students);
      // }));
      // this.users.push(...this.teachers, ...this.students);

    });

  }




}
