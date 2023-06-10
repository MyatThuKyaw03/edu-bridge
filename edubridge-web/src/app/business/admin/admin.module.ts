import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import { TransitionsfromstudentComponent } from './transitionsfromstudent/transitionsfromstudent.component';
import { TransitionstoteacherComponent } from './transitionstoteacher/transitionstoteacher.component';
import { AdminteacherdetailsComponent } from './adminteacherdetails/adminteacherdetails.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminhomeComponent,
    TeacherlistComponent,
    TransitionsfromstudentComponent,
    TransitionstoteacherComponent,
    AdminteacherdetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
