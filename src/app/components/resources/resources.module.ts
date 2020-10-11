import { ResourcesComponent } from './resources.component';
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
import { DialogResourceDialog } from './dialog-resource-dialog/dialog-resource-dialog.component';
import { DialogRoomDialog } from './dialog-room-dialog/dialog-room-dialog.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


const routes = [
  
    {
      path: '',
      component: ResourcesComponent, // base template component
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
    ],
    declarations: [
        ResourcesComponent,
        DialogResourceDialog,
        DialogRoomDialog
    ],
    exports: [
        ResourcesComponent,
        DialogResourceDialog,
        DialogRoomDialog
    ],
    entryComponents: [
        DialogResourceDialog,
        DialogRoomDialog
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],

})

export class ResourceModule {}