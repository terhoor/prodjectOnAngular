import { Component } from '@angular/core';
import { HttpService } from './users/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  links = [
    {
      name: 'Главная',
      link: '/'
    }, {
      name: 'Личный кабинет',
      link: '/personal-area'
    }, {
      name: 'Список пользователей',
      link: '/list-users'
    },

];


  constructor() {
    
  }
}
