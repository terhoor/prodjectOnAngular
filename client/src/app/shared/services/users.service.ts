import { Injectable } from '@angular/core';

import {IUser} from '../models/user.model';
import {Student} from '../models/student.model';
import {Teacher} from '../models/teacher.model';
import { BehaviorSubject, Observable  } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UsersService {
  data: {};
  teachers: BehaviorSubject<Teacher[]> = new BehaviorSubject([]);
  students: BehaviorSubject<Student[]> = new BehaviorSubject([]);
  users: BehaviorSubject<IUser[]> = new BehaviorSubject([]);
  groups: BehaviorSubject<string[]> = new BehaviorSubject([]);
  _popupStateCreate: boolean = true;

  constructor(
    private http: HttpClient

    ) {
    this.getUsers().subscribe( this.takeData.bind(this) );

  }

  takeData(data) {
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

  }

  getUsers(): Observable<{}>  {
    return this.http.get('http://localhost:5000/api/data/users').pipe(map(data => {
      return data;
    }));
  }

  getById(id): Observable<IUser>  {
    return this.http.get(`http://localhost:5000/api/data/detail-user/${id}`).pipe(map(data => {
      return <IUser>data;
    }));
  }

  getByGroup(name): Observable<Student[]> {
    return this.http.post('http://localhost:5000/api/data/details-group', {name}).pipe(map(data => {
      return <Student[]>data;
  }));
}

  createNewUser(user) {
    this.http.post('http://localhost:5000/api/data/users', user).subscribe(() => {
      this.getUsers().subscribe(this.takeData.bind(this));
    });

  }

  changeUserDb(user) {
    this.http.post('http://localhost:5000/api/data/users-change', user).subscribe(() => {
      this.getUsers().subscribe(this.takeData.bind(this));
    });
  }

  userDelete(id) {
    this.http.get(`http://localhost:5000/api/data/users-delete/${id}`).subscribe(() => {
      this.getUsers().subscribe(this.takeData.bind(this));
    });
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
