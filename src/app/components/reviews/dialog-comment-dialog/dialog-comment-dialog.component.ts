import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as Moment from 'moment';
@Component({
  selector: 'app-dialog-comment-dialog',
  templateUrl: './dialog-comment-dialog.component.html',
  styleUrls: ['./dialog-comment-dialog.component.scss']
})
export class DialogCommentDialogComponent implements OnInit {
  moment: any = Moment;
  commnet = '';
  constructor(
    public dialogRef: MatDialogRef<DialogCommentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit() {
  }

  addComment() {
    this.data.item.replies.push({
      businessDetail: this.commnet,
      businessLike: 0,
      businessDislike: 0,
      date: this.moment().format('MM/DD/YYYY'),
      name: 'Jay',
      bgColor: 'grey',
      replies: []
    });
    this.commnet = "";
  }

}
