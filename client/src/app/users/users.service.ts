import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

import {User, Student, Teacher} from '../shared/user.model';
import { BehaviorSubject  } from 'rxjs';


@Injectable()
export class UsersService {
  data: {};
  teachers: BehaviorSubject<Teacher[]>;
  students: BehaviorSubject<Student[]>;
  users: BehaviorSubject<User[]>;
  userIs = {
    'Студент': false,
    'Преподаватель': false,
    'Админ': false
  };

  constructor(private httpService: HttpService) {
    this.teachers = new BehaviorSubject([]);
    this.students = new BehaviorSubject([]);
    this.users = new BehaviorSubject([]);


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

  logIn() {
    
  }

  logOut() {
    this.userIs = {
      'Студент': false,
      'Преподаватель': false,
      'Админ': false
    };
  }

  getUser(id) {
    function findId(elem) {
      if (elem.id === id) {
        return elem;
      }
      return false;
    }
    return this.users.getValue().find(findId);
  }

}
