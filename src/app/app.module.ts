import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HeaderComponent } from './components/header/header.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ResourceModule } from './components/resources/resources.module';
import { ReviewsModule } from './components/reviews/reviews.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
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
    ResourceModule,
    ReviewsModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
