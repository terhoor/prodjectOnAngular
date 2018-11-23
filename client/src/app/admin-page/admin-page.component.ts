import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import { PopupComponent } from '../shared/components/popup/popup.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    public dialog: MatDialog

    ) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(PopupComponent, {
      width: '450px'
    });
  }
}
