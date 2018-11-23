import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from '../../shared/services/users.service';
import {IUser} from '../../shared/models/user.model';
import {Student} from '../../shared/models/student.model';
import {Teacher} from '../../shared/models/teacher.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material';
import { DialogComponent } from 'src/app/shared/components/popup/popup.component';

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
    private router: Router,
    private location: Location,
    private usersService: UsersService,
    private authService: AuthService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.getUser();
    this.displayedColumnsUser = ['lastName', 'firstName', 'patronymic', 'role'];
    this.userRole = this.authService.isAdmin();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.usersService.getById(id)
      .subscribe((user) => {
        this.user = user;
        if (user.roles.indexOf('Student') !== -1) {
          if(this.user.subjects) {
            this.subj = Object.keys(this.user.subjects);
          }
        } else if (user.roles.indexOf('Teacher') !== -1) {
          this.displayedColumns = ['groups'];
        }
        console.log(this.user);
      });

  }


  deleteUser() {
    this.usersService.userDelete(this.user.id);
    this.router.navigate(['/users-list']);
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '450px',
      data: this.user
    });
  }

}
