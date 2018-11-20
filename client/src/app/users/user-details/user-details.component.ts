import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from '../../shared/services/users.service';
import {IUser} from '../../shared/models/user.model';
import {Student} from '../../shared/models/student.model';
import {Teacher} from '../../shared/models/teacher.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id: number;
  user: IUser;
  subj: string[];
  displayedColumns: string[];
  displayedColumnsUser: string[];
  userRole: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private usersService: UsersService,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.getUser();
    this.displayedColumnsUser = ['lastName', 'firstName', 'patronymic', 'role'];
    this.userRole = this.authService.isAdmin();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usersService.getById(id)
      .subscribe((user) => {
        this.user = user;
        if (user.roles.indexOf('Student') !== -1) {
          this.subj = Object.keys(this.user.subjects);
        } else if (user.roles.indexOf('Teacher') !== -1) {
          this.displayedColumns = ['groups'];
        }
      });

  }


  deleteUser() {
    this.usersService.userDelete(this.user.id);
  }

}
