import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CourseService } from 'src/app/services/apis/course.service';
import { TeacherCourseService } from 'src/app/services/apis/teacher-course.service';

@Component({
  selector: 'app-teachercourselist',
  templateUrl: './teachercourselist.component.html',
  styles: [
  ]
})
export class TeachercourselistComponent implements OnInit{

  moduleForm:FormGroup

  courses:any=[]

  constructor(private courseService: CourseService,builder: FormBuilder,
    private teacherService:TeacherCourseService){

    this.moduleForm = builder.group({
      chapter: '',
      title: '',
      lecture: ''
    })
    // console.log(this.moduleForm.value) //object

  }

  ngOnInit(): void {
    this.courses = this.courseService.findAll();
  }


  add() {
    this.teacherService.add(this.moduleForm.value);
  }


}
