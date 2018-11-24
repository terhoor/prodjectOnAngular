import {Injectable} from '@angular/core';
import { Roles } from '../roles';

const stateIs = 'whoI';

const usersData = [
  {
    email: 'stud@ya.ru',
    password: '123123',
    role: 'Student'
  },
  {
    email: 'teach@ya.ru',
    password: '123123',
    role: 'Teacher'
  },
  {
    email: 'admin@ya.ru',
    password: '123456',
    role: 'Admin'
  }
];

@Injectable()
export class AuthService {
  userIs: any = {
    [Roles.Student] : false,
    [Roles.Teacher]: false,
    [Roles.Admin]: false
  };

  constructor() {
  }

  isAdmin() {
    return this.userIs[Roles.Admin];
  }

  authorized(admin = false) {
    /* if (admin) {
      return this.userIs[Roles.Admin];
    } */
    const arrFlag = Object.values(this.userIs);

    if (arrFlag.indexOf(true) !== -1) {
      return true;
    }
    return false;
  }

  logIn(valueObj): boolean {
    let login = false;
    let role: string;
    
    usersData.forEach((obj) => {
      if (obj.email === valueObj.email && obj.password === valueObj.password) {
        login = true;
        role = obj.role;
      }
    });

    if (login) {
      this.userIs[role] = true;
      localStorage.setItem(stateIs, JSON.stringify(this.userIs));
      return login;
    }
    return login;

  }

  logOut() {
    this.userIs = {
      [Roles.Student] : false,
      [Roles.Teacher]: false,
      [Roles.Admin]: false
    };
    localStorage.setItem(stateIs, JSON.stringify(this.userIs));

  }

}


