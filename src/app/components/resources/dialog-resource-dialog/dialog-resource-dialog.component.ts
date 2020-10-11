import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'dialog-resource-dialog',
    templateUrl: './dialog-resource-dialog.component.html',
    styleUrls: ['./dialog-resource-dialog.component.scss']
  })
  export class DialogResourceDialog {
  
    constructor(
      public dialogRef: MatDialogRef<DialogResourceDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }