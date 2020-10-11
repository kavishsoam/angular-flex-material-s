import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'dialog-room-dialog',
    templateUrl: './dialog-room-dialog.component.html',
    styleUrls: ['./dialog-room-dialog.component.scss']
  })
  export class DialogRoomDialog {
  
    constructor(
      public dialogRef: MatDialogRef<DialogRoomDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }