import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminteacherdetailsComponent } from './adminteacherdetails/adminteacherdetails.component';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import { TransitionsfromstudentComponent } from './transitionsfromstudent/transitionsfromstudent.component';
import { TransitionstoteacherComponent } from './transitionstoteacher/transitionstoteacher.component';


const routes: Routes = [
  {path: '',component: AdminComponent,children:[
  {path: 'adminteacherdetails', component: AdminteacherdetailsComponent},
  {path: 'teacherlist', component: TeacherlistComponent},
  {path: 'transitionsfromstudent', component: TransitionsfromstudentComponent},
  {path: 'transitionstoteacher', component: TransitionstoteacherComponent},
  {path: '',component: AdminhomeComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
