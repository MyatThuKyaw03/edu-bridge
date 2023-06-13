import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursedetailsComponent } from 'src/app/commons/pages/coursedetails/coursedetails.component';
import { CourselistComponent } from 'src/app/commons/pages/courselist/courselist.component';
import { TeacherdetailsComponent } from 'src/app/commons/pages/teacherdetails/teacherdetails.component';
import { AnonymousComponent } from '../anonymous/anonymous.component';
import { CoursemoduleComponent } from './coursemodule/coursemodule.component';
import { TeacherComponent } from './teacher.component';
import { TeachercourselistComponent } from './teachercourselist/teachercourselist.component';
import { TeacherhomeComponent } from './teacherhome/teacherhome.component';
import { TeacherprofileComponent } from './teacherprofile/teacherprofile.component';

const routes: Routes = [
  {path: '',component: TeacherComponent ,children: [
    {path: 'teachercourselist',component: TeachercourselistComponent},
  {path: 'teacherprofile',component: TeacherprofileComponent},
  {path: 'coursemodule',component: CoursemoduleComponent},
  {path: 'courselist',component: CourselistComponent},
  {path: 'coursedetails',component: CoursedetailsComponent},
  {path: 'teacherdetails',component: TeacherdetailsComponent},
  {path: '',component: TeacherhomeComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
