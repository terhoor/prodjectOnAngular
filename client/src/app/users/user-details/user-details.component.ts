import { Component, OnInit, Input } from '@angular/core';
import {User} from '../../shared/user.model';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id: number;
  user;
  userIs;
  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.params['id']);
    this.user = this.usersService.getUser(this.id);
  }

}
