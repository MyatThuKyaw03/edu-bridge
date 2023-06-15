import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminteacherdetailsComponent } from './adminteacherdetails/adminteacherdetails.component';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import { TransitionsfromstudentComponent } from './transitionsfromstudent/transitionsfromstudent.component';
import { TransitionstoteacherComponent } from './transitionstoteacher/transitionstoteacher.component';
import { CategorylistComponent } from 'src/app/commons/pages/categorylist/categorylist.component';
import { StudentComponent } from '../student/student.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { CreateCategoryComponent } from './create-category/create-category.component';

import { CourselistComponent } from 'src/app/commons/pages/courselist/courselist.component';
import { TotalAmountComponent } from './total-amount/total-amount.component';

const routes: Routes = [
  // {path:'admin-login',component:AdminLoginComponent},
  {
    path: '',
    component: AdminComponent,

    children: [
      { path: 'adminteacherdetails', component: AdminteacherdetailsComponent },
      { path: 'teacherlist', component: TeacherlistComponent },
      {
        path: 'transitionsfromstudent',
        component: TransitionsfromstudentComponent,
      },
      {
        path: 'transitionstoteacher',
        component: TransitionstoteacherComponent,
      },
      { path: 'categorylist', component: CategorylistComponent },
      { path: 'studentlist', component: StudentlistComponent },
      { path: 'create-category', component: CreateCategoryComponent },
      { path: 'total-amount', component: TotalAmountComponent },

      { path: 'courselist', component: CourselistComponent },

      { path: 'home', component: AdminhomeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
