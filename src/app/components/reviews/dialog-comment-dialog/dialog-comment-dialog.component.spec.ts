import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCommentDialogComponent } from './dialog-comment-dialog.component';

describe('DialogCommentDialogComponent', () => {
  let component: DialogCommentDialogComponent;
  let fixture: ComponentFixture<DialogCommentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCommentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCommentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
