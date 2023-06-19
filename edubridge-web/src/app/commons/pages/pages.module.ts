import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourselistComponent } from './courselist/courselist.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { TeacherdetailsComponent } from './teacherdetails/teacherdetails.component';
import { WidgetsModule } from '../widgets/widgets.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CourselistComponent,
    CategorylistComponent,
    CoursedetailsComponent,
    TeacherdetailsComponent,
  ],
  imports: [CommonModule, WidgetsModule, ReactiveFormsModule],
})
export class PagesModule {}
