import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  form: FormGroup;
  next: boolean = false;
  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

  }

  ngOnDestroy() {

  }

  onSubmit() {
    this.form.disable();
    this.next = this.auth.logIn(this.form.value);

    if (this.next) {
      this.router.navigate(['/home']);
    }

    this.form.enable();

  }
}
