import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from '../../shared/services/users.service';
import {User} from '../../shared/models/user.model';
import {Student} from '../../shared/models/student.model';
import {Teacher} from '../../shared/models/teacher.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id: number;
  user: User;
  subj: string[];
  displayedColumns: string[];


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private usersService: UsersService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usersService.getById(id)
      .subscribe((user) => {
        this.user = user;

        if (user.roles.indexOf('Student') !== -1) {
          this.subj = Object.keys(<Student>this.user.subjects);
        } else if (user.roles.indexOf('Teacher') !== -1) {
          this.displayedColumns = ['groups'];
        }
      });

  }

}
