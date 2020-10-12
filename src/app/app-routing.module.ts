
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resources', loadChildren: "./components/resources/resources.module#ResourceModule" },
  { path: 'reviews', loadChildren: "./components/reviews/reviews.module#ReviewsModule" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
