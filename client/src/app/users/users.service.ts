import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

import {User, Student, Teacher} from '../shared/user.model';

@Injectable()
export class UsersService {
  data;
  teachers: Teacher[];
  students: Student[];

  constructor(private httpService: HttpService) {
    console.log('UsersService');
    this.httpService.getUsers().subscribe(data => this.data = data);
  }


}
