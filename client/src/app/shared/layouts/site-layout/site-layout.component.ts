import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  activeLink: string;



  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.activeLink = '/' + this.route.snapshot.children[0].url[0].path;
  }

}
