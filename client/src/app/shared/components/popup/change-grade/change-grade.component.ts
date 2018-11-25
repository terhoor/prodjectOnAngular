import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users.service';
import { Roles } from 'src/app/shared/roles';


@Component({
  selector: 'app-change-grade',
  templateUrl: './change-grade.component.html',
  styleUrls: ['./change-grade.component.css']
})
export class ChangeGradeComponent implements OnInit {
  formEditGrade = this.fb.group({
    grade: ['']
  });
  gradeList = [' ', 'н', '2', '3', '4', '5'];

  constructor(
    @Optional() public dialogRef: MatDialogRef<ChangeGradeComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public myGrade: any,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.formEditGrade.setValue({
      grade: this.myGrade
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.dialogRef.close(this.formEditGrade.value.grade);

  }
}
