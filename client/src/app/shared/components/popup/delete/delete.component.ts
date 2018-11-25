import { Component, Inject, Optional } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeletePopupComponent {

  constructor(
    @Optional() public dialogRef: MatDialogRef<DeletePopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public user: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.dialogRef.close(true);

  }
}
