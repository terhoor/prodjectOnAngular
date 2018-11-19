import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent implements OnInit {

  links = [
    {
      name: 'Главная',
      url: '/home'
    },
    {
      name: 'Список пользователей',
      url: '/users-list'
    },
    {
      name: 'Список групп',
      url: '/users-group'
    }
  ];
  activeLink = this.links[0].url;



  constructor() { }

  ngOnInit() {
  }

}
