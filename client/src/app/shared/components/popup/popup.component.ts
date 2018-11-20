import {Component, Inject, Input, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';

export interface DialogData {
  user: User;
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

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogDataDialogComponent, {
      width: '450px',
      data: {
        user: 'panda'
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
      // this.usersService.changeForm.subscribe((val) => {
      //   this.changeForm = val;
      // });
      // this.usersService.currentUser.subscribe((user) => {
      //   this.user = user;
      //   this.regForm.setValue({
      //     lastName: user.lastName,
      //     firstName: user.firstName,
      //     surName: user.surName
      //   });
      // });
      // this.regForm.valueChanges.subscribe(() => {
      //   this.user = Object.assign(this.user, this.regForm.value);
      // });
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
    }
  }
}