import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CourseService } from 'src/app/services/apis/course.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
})
export class TeacherComponent {

  form:FormGroup

  constructor(builder: FormBuilder,private courseService : CourseService){
    this.form=builder.group({
      id: '',
      courseTitle: '',
      category: '',
      price: '',
      descricption: '',
      imageUrl: ''
    })
  }

  submit(value: any) {
    this.courseService.save(value);
  }
}
