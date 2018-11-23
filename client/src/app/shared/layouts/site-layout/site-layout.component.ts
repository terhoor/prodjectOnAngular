import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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
      url: '/users'
    },
    {
      name: 'Список групп',
      url: '/users-group'
    }
  ];
  activeLink: string;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.activeLink = '/' + this.route.snapshot.children[0].url[0].path;
    if (this.authService.userIs['Admin']) {
      this.links.push({
        name: 'Админка',
        url: '/admin'
      });
    }
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

}
