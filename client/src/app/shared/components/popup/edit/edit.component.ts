import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users.service';
import { Roles } from 'src/app/shared/roles';


@Component({
  selector: 'app-edit-popup',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditPopupComponent implements OnInit {
  formEdit = this.fb.group({
    lastName: [null, [Validators.required]],
    firstName: [null, [Validators.required]],
    patronymic: [null, [Validators.required]],
    roles: [null, [Validators.required]],
    group: [null, [Validators.required]]
  });

  typeUsers: any = [
    {value: Roles.Teacher, viewValue: 'Преподаватель'},
    {value: Roles.Student, viewValue: 'Студент'}
  ];

  groups = new FormControl();
  groupsList: string[] = [];


  constructor(
    @Optional() public dialogRef: MatDialogRef<EditPopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public user: any,
    private fb: FormBuilder,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.groups.subscribe((groups) => {
      this.groupsList = groups;
    });
    this.formEdit.setValue({
      lastName: this.user.lastName,
      firstName: this.user.firstName,
      patronymic: this.user.patronymic,
      roles: this.user.roles[0],
      group: this.user.group ? this.user.group : null
    });
    console.log(this.formEdit)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {

    const newUser = Object.assign(this.user, this.formEdit.value);

    newUser.roles = [newUser.roles];
    
    this.dialogRef.close(newUser);

  }
}
