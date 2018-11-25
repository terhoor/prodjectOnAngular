import { Injectable } from '@angular/core';

import {Student} from '../models/student.model';
import {Teacher} from '../models/teacher.model';
import { BehaviorSubject, Observable  } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';


@Injectable()
export class UsersService {
  // teachers: BehaviorSubject<Teacher[]> = new BehaviorSubject([]);
  // students: BehaviorSubject<Student[]> = new BehaviorSubject([]);
  users: BehaviorSubject<User[]> = new BehaviorSubject([]);
  groups: BehaviorSubject<string[]> = new BehaviorSubject([]);
  _popupStateCreate: boolean = true;

  constructor(
    private http: HttpClient

    ) {
    this.getUsers().subscribe( this.updateUsers.bind(this) );

  }

  updateUsers(usersData) {
    const users = [];

    const teachers = usersData['teachers'].map((teacher) => {
      return new Teacher(teacher);
    });

    const students = usersData['students'].map((student) => {
      return new Student(student);
    });

    const groups = usersData['groups'];

    users.push(...teachers);
    users.push(...students);
    // this.teachers.next(teachers);
    // this.students.next(students);
    this.users.next(users);
    this.groups.next(groups);

  }

  getUsers(): Observable<{}>  {
    return this.http.get('http://localhost:5000/api/data/users').pipe(map(data => {
      return data;
    }));
  }

  getById(id): Observable<Student | Teacher>  {
    return this.http.get(`http://localhost:5000/api/data/detail-user/${id}`).pipe(map(data => {
      return <Student | Teacher>data;
    }));
  }

  getByGroup(name): Observable<Student[]> {
    return this.http.post('http://localhost:5000/api/data/details-group', {name}).pipe(map(data => {
      return <Student[]>data;
  }));
}

  createNewUser(user) {
    this.http.post('http://localhost:5000/api/data/users', user).subscribe(() => {
      this.getUsers().subscribe(this.updateUsers.bind(this));
    });

  }

  changeUserDb(user) {
    this.http.post('http://localhost:5000/api/data/users-change', user).subscribe(() => {

      // this.getUsers().subscribe(this.updateUsers.bind(this));
    const newArrayUsers = this.users.getValue();
    const idx = this.findIndexUser(newArrayUsers, user.id);
    newArrayUsers.splice(idx, 1, user);
    });
  }

  userDelete(id) {
    this.http.get(`http://localhost:5000/api/data/users-delete/${id}`);
  }

  findIndexUser(array, id) {
      const idx = array.findIndex((user) => {
        if (user.id === id) {
          return true;
        }
      });
      return idx;
  }

  createUserState(): void {
    this._popupStateCreate = true;
  }

  changeUserState(): void {
    this._popupStateCreate = false;
  }

  get popupStateCreate(): boolean {
    return this._popupStateCreate;
  }


}
