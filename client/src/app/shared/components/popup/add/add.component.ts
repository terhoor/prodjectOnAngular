import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users.service';
import { Roles } from 'src/app/shared/roles';

@Component({
  selector: 'app-add-popup',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddPopupComponent implements OnInit {
  formCreate = this.fb.group({
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
    @Optional() public dialogRef: MatDialogRef<AddPopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public user: any,
    private fb: FormBuilder,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.groups.subscribe((groups) => {
      this.groupsList = groups;
      console.log(this.groupsList);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    const newUser = this.formCreate.value;
    newUser.roles = [newUser.roles];
    this.usersService.createNewUser(newUser);
    this.dialogRef.close();

  }
}
