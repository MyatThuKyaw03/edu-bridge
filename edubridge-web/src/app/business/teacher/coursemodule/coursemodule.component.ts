import { Component, OnInit } from '@angular/core';
import { TeacherCourseService } from 'src/app/services/apis/teacher-course.service';

@Component({
  selector: 'app-coursemodule',
  templateUrl: './coursemodule.component.html',
  styles: [
  ]
})
export class CoursemoduleComponent implements OnInit{

  modules: any = []

  constructor (private teacherService: TeacherCourseService){

  }
  ngOnInit(): void {
    this.modules =  this.teacherService.findAll()
  }


}

