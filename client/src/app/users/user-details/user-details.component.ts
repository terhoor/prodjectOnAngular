import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from '../../shared/services/users.service';
import {Student} from '../../shared/models/student.model';
import {Teacher} from '../../shared/models/teacher.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { ChangeGradeComponent } from 'src/app/shared/components/popup/change-grade/change-grade.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id: number;
  user: Teacher | Student;
  subjectsIndex: string[];
  subjects: string[];
  displayedColumns: string[];
  displayedColumnsUser: string[];
  userRole: string;
  days: string[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private usersService: UsersService,
    private authService: AuthService,
    public dialog: MatDialog,

    ) { }

  ngOnInit() {
    this.getUser();
    this.displayedColumnsUser = ['lastName', 'firstName', 'patronymic', 'role'];
    this.userRole = this.authService.isAdmin();
    this.usersService.subjects.subscribe((subjectsData) => {
      this.subjects = subjectsData;
    });
    this.usersService.days.subscribe((daysData) => {
      this.days = daysData;
    });
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.usersService.getById(id)
      .subscribe((user) => {
        this.user = user;
        if (user.roles.indexOf('Student') !== -1) {
          if(this.user.subjects) {
            this.subjectsIndex = Object.keys(this.user.subjects);
          }
        } else if (user.roles.indexOf('Teacher') !== -1) {
          this.displayedColumns = ['groups'];
        }
      });

  }

  changeGrade(subIdx, idx) {

      const dialogRef = this.dialog.open(ChangeGradeComponent, {
        width: '450px',
        data: this.user.subjects[subIdx][idx]
      });
  
      dialogRef.afterClosed().subscribe(grade => {
        if (!!grade) {
          this.user.subjects[subIdx][idx] = grade;
          this.usersService.changeUserDb(this.user);
        }

      });

  }

}
