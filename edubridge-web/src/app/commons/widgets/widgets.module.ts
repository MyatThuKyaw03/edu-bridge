import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseItemComponent } from './course-item/course-item.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CourseItemComponent,
    FormGroupComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [
    CourseItemComponent,
    FormGroupComponent

  ]
})
export class WidgetsModule { }
