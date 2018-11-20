import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

/**
 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'app-dialog-data-example',
  templateUrl: './app-dialog-overview-component.html'
})
export class DialogDataExample {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda'
      }
    });
  }
}

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
})
export class DialogDataExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogDataExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}