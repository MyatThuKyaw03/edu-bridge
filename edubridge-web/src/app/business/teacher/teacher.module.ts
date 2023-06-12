import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { TeacherhomeComponent } from './teacherhome/teacherhome.component';
import { TeachercourselistComponent } from './teachercourselist/teachercourselist.component';
import { TeacherprofileComponent } from './teacherprofile/teacherprofile.component';
import { CoursemoduleComponent } from './coursemodule/coursemodule.component';
import { PagesModule } from 'src/app/commons/pages/pages.module';
import { AnonymousComponent } from '../anonymous/anonymous.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TeacherComponent,
    TeacherhomeComponent,
    TeachercourselistComponent,
    TeacherprofileComponent,
    CoursemoduleComponent
    ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    PagesModule,
    ReactiveFormsModule
  ],

})
export class TeacherModule { }
