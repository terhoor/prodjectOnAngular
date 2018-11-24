import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeletePopupComponent implements OnInit {
  formCreate = this.fb.group({
    lastName: [null, [Validators.required]],
    firstName: [null, [Validators.required]],
    patronymic: [null, [Validators.required]],
    roles: [null, [Validators.required]],
  });
  constructor(
    @Optional() public dialogRef: MatDialogRef<DeletePopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public user: any,
    private fb: FormBuilder,
    private usersService: UsersService
  ) { }

  ngOnInit() {

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
