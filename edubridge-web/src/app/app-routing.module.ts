import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './business/admin/admin.component';

const routes: Routes = [
  {path: 'anonymous', loadChildren: () => import('./business/anonymous/anonymous.module').then(m => m.AnonymousModule)},
  {path: 'admin',loadChildren: ()=> import('./business/admin/admin.module').then(a => a.AdminModule)},
  {path: 'student', loadChildren: () => import('./business/student/student.module').then(s => s.StudentModule)},
  {path: 'teacher',loadChildren: () => import('./business/teacher/teacher.module').then(t => t.TeacherModule)},
  {path: '', redirectTo: '/anonymous/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
