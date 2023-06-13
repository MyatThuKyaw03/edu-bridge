import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseItemComponent } from './widgets/course-item/course-item.component';

const routes: Routes = [
  {path:'course-item',component:CourseItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonsRoutingModule { }
