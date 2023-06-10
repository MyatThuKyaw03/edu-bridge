import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursedetailsComponent } from 'src/app/commons/pages/coursedetails/coursedetails.component';
import { CourselistComponent } from 'src/app/commons/pages/courselist/courselist.component';
import { TeacherdetailsComponent } from 'src/app/commons/pages/teacherdetails/teacherdetails.component';
import { LearningpageComponent } from './learningpage/learningpage.component';
import { PurchasedcoursesComponent } from './purchasedcourses/purchasedcourses.component';
import { StudentComponent } from './student.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';

const routes: Routes = [
    {path: '',component: StudentComponent,children: [
      {path: 'purchasedcourses',component: PurchasedcoursesComponent},
      {path: 'learningpage',component: LearningpageComponent},
      {path: 'profile', component: StudentprofileComponent},
      {path: 'courselist', component: CourselistComponent},
      {path: 'teacherdetails',component: TeacherdetailsComponent},
      {path: 'coursedetails',component: CoursedetailsComponent},
      {path: '',component: StudenthomeComponent}
    ]}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
