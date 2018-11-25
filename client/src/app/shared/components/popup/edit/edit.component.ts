import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users.service';
import { Roles } from 'src/app/shared/roles';
import { Teacher } from 'src/app/shared/models/teacher.model';
import { Student } from 'src/app/shared/models/student.model';
import { isArray } from 'util';


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
    group: [null, [Validators.required]],
    subjects: [null]
  });

  exampleUser: Student | Teacher;

  typeUsers: any = [
    {value: Roles.Teacher, viewValue: 'Преподаватель'},
    {value: Roles.Student, viewValue: 'Студент'}
  ];

  groups = new FormControl();
  groupsList: string[] = [];
  subjects: string[] = [];

  constructor(
    @Optional() public dialogRef: MatDialogRef<EditPopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public user: any,
    private fb: FormBuilder,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.exampleUser = Object.assign({}, this.user);
    this.usersService.groups.subscribe((groups) => {
      this.groupsList = groups;
    });
    this.usersService.subjects.subscribe((subjects) => {
      this.subjects = subjects;
    });
    this.formEdit.setValue({
      lastName: this.user.lastName,
      firstName: this.user.firstName,
      patronymic: this.user.patronymic,
      roles: this.user.roles[0],
      group: this.user.group ? this.user.group : null,
      subjects: !!this.exampleUser.subjects ? Object.keys(this.exampleUser.subjects) : null
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {

    const newUser = Object.assign( this.user, this.formEdit.value);

    if (newUser.roles === Roles.Student) {

      newUser.subjects.forEach(idxSubj => {
        if (isArray(this.exampleUser.subjects[idxSubj])) {
          newUser.subjects[idxSubj] = this.exampleUser.subjects[idxSubj];
        } else {
          newUser.subjects[idxSubj] = [' ', ' ', ' ', ' ', ' '];
        }
      });
    }

    newUser.roles = [newUser.roles];
    this.dialogRef.close(newUser);

  }
}
