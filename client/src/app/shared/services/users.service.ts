import { Injectable } from '@angular/core';

import {User, Student, Teacher} from '../user.model';
import { BehaviorSubject, Observable  } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UsersService {
  data: {};
  teachers: BehaviorSubject<Teacher[]>;
  students: BehaviorSubject<Student[]>;
  users: BehaviorSubject<User[]>;
  groups: BehaviorSubject<string[]>;
  userIs = {
    'Студент': false,
    'Преподаватель': false,
    'Админ': false
  };

  constructor(private http: HttpClient) {
    this.teachers = new BehaviorSubject([]);
    this.students = new BehaviorSubject([]);
    this.users = new BehaviorSubject([]);
    this.groups = new BehaviorSubject([]);


    this.getUsers().subscribe(data => {
      this.data = data;
      const users = [];

      const teachers = data['teachers'].map((teacher) => {
        return new Teacher(teacher);
      });

      const students = data['students'].map((student) => {
        return new Student(student);
      });

      const groups = data['groups'];

      users.push(...teachers);
      users.push(...students);
      this.teachers.next(teachers);
      this.students.next(students);
      this.users.next(users);
      this.groups.next(groups);

    });

  }

  getUsers(): Observable<{}>  {
    return this.http.get('http://localhost:5000/api/data/users').pipe(map(data => {
      return data;
    }));
  }

  getById(id): Observable<User>  {
    return this.http.get(`http://localhost:5000/api/data/detail-user/${id}`).pipe(map(data => {
      return <User>data;
    }));
  }

  getByGroup(name): Observable<Student[]> {
    return this.http.post('http://localhost:5000/api/data/details-group', {name}).pipe(map(data => {
      return <Student[]>data;
  }));
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


}
