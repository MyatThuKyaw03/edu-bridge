import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnonymousRoutingModule } from './anonymous-routing.module';
import { AnonymousComponent } from './anonymous.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { TeachersignupComponent } from './signup/teachersignup/teachersignup.component';
import { StudentsignupComponent } from './signup/studentsignup/studentsignup.component';
import { PagesModule } from 'src/app/commons/pages/pages.module';
import { StudentModule } from '../student/student.module';
import { WidgetsModule } from '../../commons/widgets/widgets.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AnonymousComponent,
    HomeComponent,
    SigninComponent,
    TeachersignupComponent,
    StudentsignupComponent,
  ],
  imports: [
    CommonModule,
    AnonymousRoutingModule,
    PagesModule,
    StudentModule,
    WidgetsModule,
    ReactiveFormsModule,
  ],
})
export class AnonymousModule {}
