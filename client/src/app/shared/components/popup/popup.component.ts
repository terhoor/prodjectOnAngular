import {Component, Inject, Input, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User, IUser } from '../../models/user.model';
import { UsersService } from '../../services/users.service';

export interface DialogData {
  user: IUser;
}

/**
 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'app-dialog-data-example',
  templateUrl: './app-dialog-overview-component.html'
})
export class DialogDataComponent {
  @Input() nameBtn: string;
  @Input() user: IUser;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogDataDialogComponent, {
      width: '450px',
      data: {
        user: this.user
      }
    });
  }
}

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class DialogDataDialogComponent implements OnInit {
  form: FormGroup;
  typeUsers: any = [
    {value: 'Teacher', viewValue: 'Teacher'},
    {value: 'Student', viewValue: 'Student'}

  ];

  constructor(
    public dialogRef: MatDialogRef<DialogDataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private usersService: UsersService
    
    ) {}

    ngOnInit() {
      this.form = new FormGroup({
        lastName: new FormControl(null, [Validators.required]),
        firstName: new FormControl(null, [Validators.required]),
        patronymic: new FormControl(null, [Validators.required]),
        roles: new FormControl(null, [Validators.required]),
      });

      if (this.data.user) {
        this.usersService.changeUser();
      }
      if (!this.usersService.popupStateCreate) {
        console.log(this.data);
        this.form.setValue({
          lastName: this.data.user.lastName,
          firstName: this.data.user.firstName,
          patronymic: this.data.user.patronymic,
          roles: this.data.user.roles[0]
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
      userNeed.id = this.data.user.id;
      this.usersService.changeUserDb(userNeed);
      // this.dialogRef.close();

    }
  }
}