import {Component, Inject, Input, OnInit, Optional} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User, IUser } from '../../models/user.model';
import { UsersService } from '../../services/users.service';

export interface DialogData {
  user: IUser;
}


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  form: FormGroup;
  typeUsers: any = [
    {value: 'Teacher', viewValue: 'Teacher'},
    {value: 'Student', viewValue: 'Student'}

  ];

  constructor(
    @Optional() public dialogRef: MatDialogRef<PopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public user: any,
    private usersService: UsersService
    
    ) {}

    ngOnInit() {
      this.form = new FormGroup({
        lastName: new FormControl(null, [Validators.required]),
        firstName: new FormControl(null, [Validators.required]),
        patronymic: new FormControl(null, [Validators.required]),
        roles: new FormControl(null, [Validators.required]),
      });

      if (this.user) {
        this.usersService.changeUserState();
      } else {
        this.usersService.createUserState();
      }

      if (!this.usersService.popupStateCreate) {
        console.log(this.user);
        this.form.setValue({
          lastName: this.user.lastName,
          firstName: this.user.firstName,
          patronymic: this.user.patronymic,
          roles: this.user.roles[0]
        });
      }
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit() {
    if (this.usersService.popupStateCreate) {

      const newUser = this.form.value;
      console.log('req');
      this.usersService.createNewUser(newUser);
      this.dialogRef.close();
    } else {
      const userNeed = this.form.value;
      userNeed.id = this.user.id;
      this.usersService.changeUserDb(userNeed);
      this.dialogRef.close();

    }
  }
}