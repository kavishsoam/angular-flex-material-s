import { ReviewsComponent } from './reviews.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';


const routes = [

  {
    path: '',
    component: ReviewsComponent, // base template component
  }

];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatButtonModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCheckboxModule,
    MatOptionModule,
    MatTabsModule
  ],
  declarations: [
    ReviewsComponent
  ],
  exports: [
    ReviewsComponent
  ],
  entryComponents: [
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

})

export class ReviewsModule { }
