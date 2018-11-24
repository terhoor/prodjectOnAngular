import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';

const stateIs = 'whoI';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(
    private authService: AuthService,
    private router: Router
    ) {

  }

  ngOnInit() {
    const dataAuth = JSON.parse(localStorage.getItem(stateIs));
    if (dataAuth) {
      this.authService.userIs = dataAuth;
    }

    if (this.authService.authorized()) {
      // this.router.navigate(['/home']);
    }
  }
}
