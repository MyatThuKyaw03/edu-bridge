import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorylistComponent } from 'src/app/commons/pages/categorylist/categorylist.component';
import { CoursedetailsComponent } from 'src/app/commons/pages/coursedetails/coursedetails.component';
import { CourselistComponent } from 'src/app/commons/pages/courselist/courselist.component';
import { TeacherdetailsComponent } from 'src/app/commons/pages/teacherdetails/teacherdetails.component';
import { AnonymousComponent } from './anonymous.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { StudentsignupComponent } from './signup/studentsignup/studentsignup.component';
import { TeachersignupComponent } from './signup/teachersignup/teachersignup.component';
import { CourseItemComponent } from 'src/app/commons/widgets/course-item/course-item.component';

const routes: Routes = [
  {
    path: '',
    component: AnonymousComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'signin', component: SigninComponent },
      {
        path: 'signup',
        children: [
          { path: 'studentsignup', component: StudentsignupComponent },
          { path: 'teachersignup', component: TeachersignupComponent },
        ],
      },
      { path: 'categorylist', component: CategorylistComponent },
      { path: 'coursedetails', component: CoursedetailsComponent },
      { path: 'courselist', component: CourselistComponent },
      { path: 'teacherdetails', component: TeacherdetailsComponent },
      { path: 'course-item', component: CourseItemComponent },
      { path: '', pathMatch: 'full', redirectTo: '/home' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnonymousRoutingModule {}
