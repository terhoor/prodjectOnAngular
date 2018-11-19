import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css']
})
export class ListGroupComponent implements OnInit, OnDestroy {
  groups: string[] = [];
  groups$;
  displayedColumns: string[] = ['groups'];
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.groups$ = this.usersService.groups.subscribe((value) => {
      this.groups = value;
    });
  }

  ngOnDestroy() {
    if (this.groups$) {
      this.groups$.unsubscribe();
    }
  }

}
