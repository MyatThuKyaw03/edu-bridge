import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { PurchasedcoursesComponent } from './purchasedcourses/purchasedcourses.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { LearningpageComponent } from './learningpage/learningpage.component';
import { PagesModule } from 'src/app/commons/pages/pages.module';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WidgetsModule } from '../../commons/widgets/widgets.module';

@NgModule({
  declarations: [
    StudentComponent,
    PurchasedcoursesComponent,
    StudentprofileComponent,
    LearningpageComponent,
    StudenthomeComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    PagesModule,
    ReactiveFormsModule,
    WidgetsModule,
  ],
})
export class StudentModule {}
