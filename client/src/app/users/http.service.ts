import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { User } from '../shared/user.model';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
    console.log('HttpService');

  }

  getUsers()/* : Observable: User[] */ {
    return this.http.get('http://localhost:5000/api/data/users').pipe(map(data => {
      return data;
    }));
  }
}
